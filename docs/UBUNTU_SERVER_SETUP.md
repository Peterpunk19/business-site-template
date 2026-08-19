# Configuración inicial del servidor Ubuntu

Servidor utilizado:

- AWS Lightsail
- Ubuntu 24.04 LTS
- Instancia inicial: 512 MB RAM
- IP estática: `54.236.153.112`

## Firewall de Lightsail

Puertos públicos:

```text
22   SSH
80   HTTP
443  HTTPS
```

No abrir públicamente:

```text
3000  Next.js
5432  PostgreSQL
```

Caddy es el único servicio que debe recibir tráfico web público.

## Conexión SSH

```bash
chmod 600 ~/.ssh/lightsail-dr-ortega.pem

ssh -i ~/.ssh/lightsail-dr-ortega.pem \
  ubuntu@54.236.153.112
```

## Swap

Se creó 1 GB de swap:

```bash
sudo fallocate -l 1G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

Verificar:

```bash
free -h
```

## Node.js

Quedó instalado:

```text
Node.js v22.22.3
npm 10.9.8
```

Verificar:

```bash
node -v
npm -v
which node
```

Ruta usada por systemd:

```text
/usr/local/bin/node
```

## PostgreSQL

Se instaló PostgreSQL 16.

Verificar:

```bash
psql --version
sudo systemctl status postgresql --no-pager
```

Que `postgresql.service` aparezca como `active (exited)` puede ser normal.

## Caddy

Configuración principal:

```text
/etc/caddy/Caddyfile
```

Verificar:

```bash
caddy version
sudo systemctl status caddy --no-pager
```

## Directorio de la aplicación

```bash
sudo mkdir -p /var/www/dr-ortega
sudo chown -R ubuntu:ubuntu /var/www/dr-ortega
```

La aplicación se ejecuta como usuario `ubuntu`, no como `root`.

## Variables de producción

Archivo:

```text
/etc/dr-ortega.env
```

Permisos recomendados:

```bash
sudo chown root:root /etc/dr-ortega.env
sudo chmod 600 /etc/dr-ortega.env
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

## Monitoreo básico

```bash
free -h
ps aux --sort=-%mem | head
df -h
```

Servicios:

```bash
sudo systemctl status dr-ortega --no-pager
sudo systemctl status postgresql --no-pager
sudo systemctl status caddy --no-pager
```
