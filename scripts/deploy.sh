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

SSH=(
  ssh
  -i "$SSH_KEY"
  "${REMOTE_USER}@${REMOTE_HOST}"
)

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

# ------------------------------------------------------------
# Validaciones locales
# ------------------------------------------------------------

info "Validando archivos necesarios"

[[ -f package.json ]] || \
  fail "Ejecuta este script desde la raíz del proyecto."

[[ -f next.config.ts || -f next.config.js || -f next.config.mjs ]] || \
  fail "No se encontró next.config.*"

[[ -f prisma.config.ts ]] || \
  fail "No se encontró prisma.config.ts"

[[ -f prisma.config.production.ts ]] || \
  fail "No se encontró prisma.config.production.ts"

[[ -d prisma ]] || \
  fail "No se encontró prisma/"

[[ -d public ]] || \
  fail "No se encontró public/"

[[ -d src/generated/prisma ]] || \
  fail "No se encontró src/generated/prisma"

[[ -f .env.production ]] || \
  fail "No se encontró .env.production"

[[ -f "$SSH_KEY" ]] || \
  fail "No se encontró la llave SSH: $SSH_KEY"

if ! grep -q '^NEXT_SERVER_ACTIONS_ENCRYPTION_KEY=' .env.production; then
  fail "Falta NEXT_SERVER_ACTIONS_ENCRYPTION_KEY en .env.production"
fi

success "Validaciones locales correctas"

# ------------------------------------------------------------
# Limpiar build anterior
# ------------------------------------------------------------

info "Limpiando build anterior"

rm -rf .next "$DEPLOY_DIR"

# ------------------------------------------------------------
# Build
# ------------------------------------------------------------

info "Generando build de producción"

npm run build

[[ -d .next/standalone ]] || \
  fail 'No existe .next/standalone. Revisa output: "standalone".'

[[ -f .next/standalone/.next/BUILD_ID ]] || \
  fail "No se encontró BUILD_ID en standalone."

success "Build generado"

# ------------------------------------------------------------
# Preparar artefacto standalone
# ------------------------------------------------------------

info "Preparando artefacto standalone"

mkdir -p "$DEPLOY_DIR"

# IMPORTANTE:
# El punto final copia también carpetas ocultas como .next.
cp -R .next/standalone/. "$DEPLOY_DIR/"

# Static
mkdir -p "$DEPLOY_DIR/.next/static"

cp -R .next/static/. \
  "$DEPLOY_DIR/.next/static/"

# Public
cp -R public \
  "$DEPLOY_DIR/public"

# Prisma migrations/schema
cp -R prisma \
  "$DEPLOY_DIR/prisma"

# Config Prisma específico de producción.
cp prisma.config.production.ts \
  "$DEPLOY_DIR/prisma.config.production.ts"

# Cliente Prisma generado.
# Lo conservamos por si necesitamos scripts administrativos.
mkdir -p "$DEPLOY_DIR/src/generated"

cp -R src/generated/prisma \
  "$DEPLOY_DIR/src/generated/prisma"

# ------------------------------------------------------------
# Validar artefacto
# ------------------------------------------------------------

[[ -f "$DEPLOY_DIR/server.js" ]] || \
  fail "No se generó deploy/server.js"

[[ -f "$DEPLOY_DIR/.next/BUILD_ID" ]] || \
  fail "No se copió deploy/.next/BUILD_ID"

[[ -f "$DEPLOY_DIR/src/generated/prisma/client.ts" ]] || \
  fail "No se copió el Prisma Client generado"

[[ -f "$DEPLOY_DIR/prisma.config.production.ts" ]] || \
  fail "No se copió prisma.config.production.ts"

success "Artefacto preparado"

# ------------------------------------------------------------
# SSH
# ------------------------------------------------------------

info "Comprobando conexión SSH"

"${SSH[@]}" "echo SSH_OK" | grep -q "SSH_OK"

success "SSH disponible"

# ------------------------------------------------------------
# Permisos remotos
# ------------------------------------------------------------

info "Verificando permisos del directorio remoto"

"${SSH[@]}" \
  "sudo chown -R ${REMOTE_USER}:${REMOTE_USER} ${REMOTE_DIR}"

success "Permisos remotos correctos"

# ------------------------------------------------------------
# Sincronizar artefacto
# ------------------------------------------------------------

info "Sincronizando archivos con Lightsail"

rsync -az --delete \
  -e "$RSYNC_RSH" \
  "$DEPLOY_DIR/" \
  "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}/"

success "Archivos sincronizados"
# ------------------------------------------------------------
# Prisma migrate deploy
# ------------------------------------------------------------

info "Aplicando migraciones Prisma en producción"

"${SSH[@]}" bash <<EOF
set -Eeuo pipefail

cd "${REMOTE_DIR}"

if [[ ! -r "${ENV_FILE}" ]]; then
  echo "No se puede leer ${ENV_FILE}"
  exit 1
fi

set -a
source "${ENV_FILE}"
set +a

if [[ -z "\${DATABASE_URL:-}" ]]; then
  echo "DATABASE_URL no está definida"
  exit 1
fi

MIGRATION_DIR="/tmp/${APP_NAME}-prisma-migrate"

rm -rf "\${MIGRATION_DIR}"
mkdir -p "\${MIGRATION_DIR}"

cp -R "${REMOTE_DIR}/prisma" "\${MIGRATION_DIR}/prisma"
cp "${REMOTE_DIR}/prisma.config.production.ts" \
  "\${MIGRATION_DIR}/prisma.config.ts"

cd "\${MIGRATION_DIR}"

npm init -y >/dev/null 2>&1

npm install \
  --silent \
  --no-audit \
  --no-fund \
  prisma@${PRISMA_VERSION}

npx prisma migrate deploy

cd /
rm -rf "\${MIGRATION_DIR}"
EOF

success "Migraciones aplicadas"
# ------------------------------------------------------------
# Reiniciar aplicación
# ------------------------------------------------------------

info "Reiniciando servicio systemd"

"${SSH[@]}" \
  "sudo systemctl restart ${SYSTEMD_SERVICE}"

# ------------------------------------------------------------
# Esperar startup
# ------------------------------------------------------------

info "Esperando que Next.js levante"

sleep 3

# ------------------------------------------------------------
# Verificar systemd
# ------------------------------------------------------------

info "Verificando servicio"

"${SSH[@]}" \
  "sudo systemctl is-active --quiet ${SYSTEMD_SERVICE}"

success "systemd activo"

# ------------------------------------------------------------
# Health check interno
# ------------------------------------------------------------

info "Health check interno"

"${SSH[@]}" \
  "curl --fail --silent --show-error --head http://127.0.0.1:3000 >/dev/null"

success "Next.js responde en localhost:3000"

# ------------------------------------------------------------
# Health check público
# ------------------------------------------------------------

info "Health check público"

curl \
  --fail \
  --silent \
  --show-error \
  --head \
  "$DOMAIN" \
  >/dev/null

success "$DOMAIN responde"

# ------------------------------------------------------------
# Estado de memoria
# ------------------------------------------------------------

info "Estado de memoria del servidor"

"${SSH[@]}" "free -h"

# ------------------------------------------------------------
# Final
# ------------------------------------------------------------

printf '\n\033[1;32mDeploy completado correctamente.\033[0m\n'

printf 'Producción: %s\n' "$DOMAIN"

printf '\nComandos útiles:\n'

printf \
  '  ssh -i %s %s@%s "sudo systemctl status %s --no-pager"\n' \
  "$SSH_KEY" \
  "$REMOTE_USER" \
  "$REMOTE_HOST" \
  "$SYSTEMD_SERVICE"

printf \
  '  ssh -i %s %s@%s "sudo journalctl -u %s -n 100 --no-pager"\n' \
  "$SSH_KEY" \
  "$REMOTE_USER" \
  "$REMOTE_HOST" \
  "$SYSTEMD_SERVICE"