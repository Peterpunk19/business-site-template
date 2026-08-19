# Variables de entorno

## Desarrollo local

Normalmente:

```text
.env.local
```

## Build de producción

Next.js reconoce automáticamente:

```text
.env.production
```

Durante el build se confirmó:

```text
Environments: .env.local, .env.production, .env
```

## Runtime en Lightsail

Variables reales:

```text
/etc/dr-ortega.env
```

Ejemplo:

```env
NODE_ENV=production
PORT=3000
HOSTNAME=127.0.0.1
DATABASE_URL="postgresql://dr_ortega_app:...@localhost:5432/dr_ortega_prod"
AUTH_SECRET="..."
RESEND_API_KEY="..."
EMAIL_FROM="..."
NEXT_SERVER_ACTIONS_ENCRYPTION_KEY="..."
```

## Server Actions

Durante el primer deploy apareció:

```text
The Server Reference ID did not match the expected format
```

La solución fue definir:

```env
NEXT_SERVER_ACTIONS_ENCRYPTION_KEY="..."
```

con la misma clave en:

```text
.env.production
/etc/dr-ortega.env
```

Luego se creó un build limpio y se volvió a desplegar.

## Cargar variables manualmente

```bash
sudo bash
cd /var/www/dr-ortega

set -a
source /etc/dr-ortega.env
set +a
```

## Git

No versionar secretos.

Ejemplo:

```gitignore
.env
.env.local
.env.production
.env.*.local
```

Documentar nombres de variables en `.env.example`, sin valores reales.
