# Scripts de deploy

## `deploy.sh`

Automatiza el flujo actual de producción:

```text
Mac
 ↓
npm run build
 ↓
.next/standalone
 ↓
deploy/
 ↓
rsync
 ↓
Lightsail
 ↓
prisma migrate deploy
 ↓
systemctl restart
 ↓
health checks
```

## Primera configuración

Dar permiso de ejecución:

```bash
chmod +x scripts/deploy.sh
```

Verificar que exista la llave:

```text
~/.ssh/lightsail-dr-ortega.pem
```

El script espera:

```text
.env.production
prisma.config.ts
prisma/
public/
```

También valida que `.env.production` contenga:

```env
NEXT_SERVER_ACTIONS_ENCRYPTION_KEY="..."
```

La misma clave debe existir en `/etc/dr-ortega.env` en el VPS.

## Ejecutar

Desde la raíz del proyecto:

```bash
./scripts/deploy.sh
```

Si todo funciona, al final mostrará:

```text
Deploy completado correctamente.
```

## Qué hace

1. Valida archivos requeridos.
2. Borra `.next` y `deploy`.
3. Ejecuta `npm run build`.
4. Comprueba que exista el build standalone y `BUILD_ID`.
5. Crea el artefacto `deploy/`.
6. Usa `rsync --delete` para sincronizarlo con `/var/www/dr-ortega`.
7. Carga `/etc/dr-ortega.env` en el VPS.
8. Ejecuta `prisma migrate deploy`.
9. Reinicia `dr-ortega.service`.
10. Comprueba `systemd`.
11. Comprueba `http://127.0.0.1:3000`.
12. Comprueba `https://drortegaesteticadental.com`.

## Importante sobre Prisma

El build standalone no incluye necesariamente el CLI de Prisma.

Por eso el script usa:

```bash
npx --yes prisma@7.9.1 migrate deploy
```

en el VPS.

Mantén `PRISMA_VERSION` sincronizado con la versión utilizada por el proyecto.

Más adelante conviene mejorar esto con un directorio permanente de herramientas de deploy en el VPS o con CI/CD para no depender de una descarga mediante `npx` durante cada deploy.

## Si falla

El script usa:

```bash
set -Eeuo pipefail
```

y se detiene al primer error.

Revisar aplicación:

```bash
ssh -i ~/.ssh/lightsail-dr-ortega.pem ubuntu@54.236.153.112 \
  "sudo journalctl -u dr-ortega -n 100 --no-pager"
```

Revisar Caddy:

```bash
ssh -i ~/.ssh/lightsail-dr-ortega.pem ubuntu@54.236.153.112 \
  "sudo journalctl -u caddy -n 100 --no-pager"
```

## Recomendación para `.gitignore`

Agregar:

```gitignore
deploy/
.next/
.env.production
```

El script sí puede versionarse:

```text
scripts/deploy.sh
```

Los secretos no.
