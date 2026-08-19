#!/usr/bin/env bash
set -Eeuo pipefail

# ------------------------------------------------------------
# Dr. Ortega - Deploy de producción
# Build local -> standalone -> rsync -> migrate -> systemd
# ------------------------------------------------------------

APP_NAME="dr-ortega"
REMOTE_USER="ubuntu"
REMOTE_HOST="54.236.153.112"
REMOTE_DIR="/var/www/dr-ortega"
ENV_FILE="/etc/dr-ortega.env"
SYSTEMD_SERVICE="dr-ortega"

SSH_KEY="${HOME}/.ssh/lightsail-dr-ortega.pem"
DOMAIN="https://drortegaesteticadental.com"

DEPLOY_DIR="deploy"

# Mantener sincronizada con package.json.
PRISMA_VERSION="7.9.1"

SSH=(ssh -i "$SSH_KEY" "${REMOTE_USER}@${REMOTE_HOST}")
RSYNC_RSH="ssh -i ${SSH_KEY}"

info() {
  printf '\n\033[1;34m==>\033[0m %s\n' "$1"
}

success() {
  printf '\033[1;32m✓\033[0m %s\n' "$1"
}

fail() {
  printf '\033[1;31m✗\033[0m %s\n' "$1" >&2
  exit 1
}

trap 'fail "El deploy falló en la línea $LINENO."' ERR

info "Validando archivos necesarios"

[[ -f package.json ]] || fail "Ejecuta este script desde la raíz del proyecto."
[[ -f next.config.ts || -f next.config.js || -f next.config.mjs ]] || fail "No se encontró next.config.*"
[[ -f prisma.config.ts ]] || fail "No se encontró prisma.config.ts"
[[ -d prisma ]] || fail "No se encontró prisma/"
[[ -d public ]] || fail "No se encontró public/"
[[ -f .env.production ]] || fail "No se encontró .env.production"
[[ -f "$SSH_KEY" ]] || fail "No se encontró la llave SSH: $SSH_KEY"

if ! grep -q '^NEXT_SERVER_ACTIONS_ENCRYPTION_KEY=' .env.production; then
  fail "Falta NEXT_SERVER_ACTIONS_ENCRYPTION_KEY en .env.production"
fi

success "Validaciones locales correctas"

info "Limpiando build anterior"
rm -rf .next "$DEPLOY_DIR"

info "Generando build de producción"
npm run build

[[ -d .next/standalone ]] || fail "No existe .next/standalone. Revisa output: \"standalone\"."
[[ -f .next/standalone/.next/BUILD_ID ]] || fail "No se encontró BUILD_ID en standalone."

success "Build generado"

info "Preparando artefacto standalone"
mkdir -p "$DEPLOY_DIR"

# El punto final importa: incluye .next y otros archivos ocultos.
cp -R .next/standalone/. "$DEPLOY_DIR/"

mkdir -p "$DEPLOY_DIR/.next/static"
cp -R .next/static/. "$DEPLOY_DIR/.next/static/"

cp -R public "$DEPLOY_DIR/public"
cp -R prisma "$DEPLOY_DIR/prisma"
cp prisma.config.ts "$DEPLOY_DIR/prisma.config.ts"

[[ -f "$DEPLOY_DIR/server.js" ]] || fail "No se generó deploy/server.js"
[[ -f "$DEPLOY_DIR/.next/BUILD_ID" ]] || fail "No se copió deploy/.next/BUILD_ID"

success "Artefacto preparado"

info "Comprobando conexión SSH"
"${SSH[@]}" "echo SSH_OK" | grep -q "SSH_OK"
success "SSH disponible"

info "Sincronizando archivos con Lightsail"
rsync -az --delete \
  -e "$RSYNC_RSH" \
  "$DEPLOY_DIR/" \
  "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}/"

success "Archivos sincronizados"

info "Aplicando migraciones Prisma en producción"

# El CLI de Prisma no forma parte necesariamente del standalone.
# npx descarga/usa temporalmente la versión indicada para ejecutar migrate deploy.
"${SSH[@]}" bash <<EOF
set -Eeuo pipefail

cd "${REMOTE_DIR}"

set -a
source "${ENV_FILE}"
set +a

npx --yes prisma@${PRISMA_VERSION} migrate deploy
EOF

success "Migraciones aplicadas"

info "Reiniciando servicio systemd"
"${SSH[@]}" "sudo systemctl restart ${SYSTEMD_SERVICE}"

info "Esperando que Next.js levante"
sleep 3

info "Verificando servicio"
"${SSH[@]}" "sudo systemctl is-active --quiet ${SYSTEMD_SERVICE}"
success "systemd activo"

info "Health check interno"
"${SSH[@]}" "curl --fail --silent --show-error --head http://127.0.0.1:3000 >/dev/null"
success "Next.js responde en localhost:3000"

info "Health check público"
curl --fail --silent --show-error --head "$DOMAIN" >/dev/null
success "$DOMAIN responde"

printf '\n\033[1;32mDeploy completado correctamente.\033[0m\n'
printf 'Producción: %s\n' "$DOMAIN"
printf '\nLogs:\n'
printf '  ssh -i %s %s@%s "sudo journalctl -u %s -n 100 --no-pager"\n' \
  "$SSH_KEY" "$REMOTE_USER" "$REMOTE_HOST" "$SYSTEMD_SERVICE"
