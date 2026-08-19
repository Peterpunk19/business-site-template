# Deploy de producción

Este proyecto se despliega en AWS Lightsail usando un build `standalone` de Next.js generado localmente.

## Arquitectura

```text
Internet
  ↓
Cloudflare DNS
  ↓
Caddy :80/:443
  ↓
Next.js :3000
  ↓
PostgreSQL :5432
```

El servidor no compila la aplicación. El build se realiza localmente y solamente se copia el artefacto generado al VPS.

## Requisitos locales

- Node.js compatible con el proyecto.
- Dependencias instaladas.
- `.env.production` configurado.
- SSH funcionando hacia Lightsail.
- `output: "standalone"` habilitado en `next.config.ts`.

## Variables necesarias durante el build

Next.js carga automáticamente `.env.local`, `.env.production` y `.env`.

Para producción se utiliza `.env.production`.

Una variable importante para Server Actions es:

```env
NEXT_SERVER_ACTIONS_ENCRYPTION_KEY="..."
```

La misma clave debe existir en `.env.production` y en `/etc/dr-ortega.env`.

Para generar una clave:

```bash
openssl rand -base64 32
```

No guardar secretos en Git.

## Generar build

Antes de construir, eliminar el build y el artefacto anterior:

```bash
rm -rf .next deploy
npm run build
```

Es importante eliminar `deploy/` antes del build porque TypeScript puede intentar validar archivos duplicados dentro de esa carpeta.

## Crear artefacto standalone

Después de que `npm run build` termine correctamente:

```bash
mkdir deploy

cp -R .next/standalone/. deploy/

mkdir -p deploy/.next/static
cp -R .next/static/. deploy/.next/static/

cp -R public deploy/public
cp -R prisma deploy/prisma
cp prisma.config.ts deploy/prisma.config.ts
```

### Importante

Usar:

```bash
cp -R .next/standalone/. deploy/
```

y no:

```bash
cp -R .next/standalone/* deploy/
```

El `*` no incluye archivos y carpetas ocultos, por lo que puede dejar incompleto `.next`.

Verificar:

```bash
ls -la deploy
ls -la deploy/.next
ls -la deploy/.next/BUILD_ID
```

## Subir al VPS

```bash
rsync -avz --delete \
  -e "ssh -i ~/.ssh/lightsail-dr-ortega.pem" \
  deploy/ \
  ubuntu@54.236.153.112:/var/www/dr-ortega/
```

El `--delete` elimina archivos antiguos del artefacto remoto. Los secretos no están dentro de `/var/www/dr-ortega`, sino en `/etc/dr-ortega.env`.

## Reiniciar aplicación

En el VPS:

```bash
sudo systemctl restart dr-ortega
sudo systemctl status dr-ortega --no-pager
```

Comprobar localmente:

```bash
curl -I http://127.0.0.1:3000
```

Comprobar producción:

```bash
curl -I https://drortegaesteticadental.com
curl -I https://www.drortegaesteticadental.com
```

## Revisar logs

```bash
sudo journalctl -u dr-ortega -n 100 --no-pager
```

Logs en vivo:

```bash
sudo journalctl -u dr-ortega -f
```

## Checklist de deploy

```text
[ ] Actualizar código
[ ] Verificar .env.production
[ ] rm -rf .next deploy
[ ] npm run build
[ ] Crear deploy/
[ ] rsync al VPS
[ ] sudo systemctl restart dr-ortega
[ ] curl localhost:3000
[ ] curl dominio HTTPS
[ ] Probar cita/contacto/admin
[ ] Revisar logs
[ ] Revisar memoria
```
