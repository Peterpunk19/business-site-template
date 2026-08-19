# PostgreSQL y Prisma en producción

## Base de datos

```text
Usuario: dr_ortega_app
Database: dr_ortega_prod
Host: localhost
Port: 5432
```

La base de datos no está expuesta públicamente.

## Probar autenticación

```bash
psql -h localhost -U dr_ortega_app -d dr_ortega_prod
```

Salir:

```sql
\q
```

## Contraseña y DATABASE_URL

Una contraseña con caracteres reservados puede romper una URL de conexión.

Para simplificar la configuración se generó una contraseña hexadecimal:

```bash
openssl rand -hex 24
```

Cambiar contraseña:

```bash
sudo -u postgres psql
```

```sql
ALTER USER dr_ortega_app WITH PASSWORD 'NUEVA_PASSWORD';
```

La URL queda:

```env
DATABASE_URL="postgresql://dr_ortega_app:PASSWORD@localhost:5432/dr_ortega_prod"
```

## prisma.config.ts

```ts
import "dotenv/config";

import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },

  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

## Cargar variables manualmente

```bash
sudo bash
cd /var/www/dr-ortega

set -a
source /etc/dr-ortega.env
set +a
```

Verificar la URL sin imprimir la contraseña:

```bash
node -e 'const u=new URL(process.env.DATABASE_URL); console.log({user:u.username,host:u.hostname,port:u.port,database:u.pathname})'
```

Resultado esperado:

```text
user: dr_ortega_app
host: localhost
port: 5432
database: /dr_ortega_prod
```

## Prisma CLI

El standalone no necesariamente contiene el CLI de Prisma.

Se instaló temporalmente:

```bash
npm install --no-save prisma@7.9.1 dotenv
```

## Aplicar migraciones

```bash
npx prisma migrate deploy
```

Migraciones iniciales aplicadas:

```text
20260814042031_init
20260814045209_add_contact_messages
20260815055201_add_admin_users
```

Verificar:

```bash
npx prisma migrate status
```

## Flujo recomendado

```text
desarrollo
  ↓
prisma migrate dev
  ↓
migrations/*
  ↓
deploy
  ↓
prisma migrate deploy
```

Evitar `prisma db push` como flujo normal de producción.

## Seguridad

- No abrir el puerto `5432`.
- No guardar `DATABASE_URL` en Git.
- No compartir la contraseña de producción.
