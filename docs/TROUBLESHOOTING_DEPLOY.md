# Troubleshooting de producción

## Prisma: datasource.url required

Error:

```text
The datasource.url property is required in your Prisma config file
when using prisma migrate deploy.
```

Solución: usar `env("DATABASE_URL")` en `prisma.config.ts` y cargar `/etc/dr-ortega.env` antes de ejecutar Prisma manualmente.

---

## Invalid URL en DATABASE_URL

La contraseña contenía caracteres reservados como `#` y `%`.

Solución aplicada:

```bash
openssl rand -hex 24
```

y actualizar la contraseña de PostgreSQL y `/etc/dr-ortega.env`.

---

## Prisma P1000 Authentication failed

Diagnóstico seguro:

```bash
node -e 'const u=new URL(process.env.DATABASE_URL); console.log({user:u.username,host:u.hostname,port:u.port,database:u.pathname})'
```

La base correcta debe aparecer como:

```text
/dr_ortega_prod
```

---

## Missing production build

Error:

```text
Could not find a production build in the './.next' directory
```

Causa:

```bash
cp -R .next/standalone/* deploy/
```

no copió `.next`.

Solución:

```bash
cp -R .next/standalone/. deploy/
```

y:

```bash
mkdir -p deploy/.next/static
cp -R .next/static/. deploy/.next/static/
```

---

## EADDRINUSE :3000

Causa: una instancia manual de `node server.js` ocupaba el puerto.

```bash
sudo ss -ltnp | grep :3000
```

Detener el proceso manual y dejar que `systemd` administre la aplicación.

---

## Server Reference ID did not match

Solución aplicada:

```bash
openssl rand -base64 32
```

Guardar la misma clave como:

```env
NEXT_SERVER_ACTIONS_ENCRYPTION_KEY="..."
```

en `.env.production` y `/etc/dr-ortega.env`.

Luego:

```bash
rm -rf .next deploy
npm run build
```

volver a crear `deploy/`, subirlo y reiniciar:

```bash
sudo systemctl restart dr-ortega
```

---

## TypeScript revisando deploy/prisma/seed.ts

Error:

```text
deploy/prisma/seed.ts(...):
Cannot find module '../src/generated/prisma/client'
```

Causa: `deploy/` del build anterior seguía dentro del proyecto.

Solución:

```bash
rm -rf .next deploy
npm run build
```

Crear `deploy/` solamente después del build.

---

## Diagnóstico general

```bash
sudo systemctl status dr-ortega --no-pager
sudo journalctl -u dr-ortega -n 100 --no-pager

sudo systemctl status caddy --no-pager
sudo journalctl -u caddy -n 100 --no-pager

sudo systemctl status postgresql --no-pager

sudo ss -ltnp
free -h
ps aux --sort=-%mem | head
df -h

curl -I http://127.0.0.1:3000
curl -I https://drortegaesteticadental.com
```
