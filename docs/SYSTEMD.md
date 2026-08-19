# Servicio systemd para Next.js

Archivo:

```text
/etc/systemd/system/dr-ortega.service
```

Contenido:

```ini
[Unit]
Description=Dr Ortega Next.js
After=network.target postgresql.service

[Service]
Type=simple
User=ubuntu
Group=ubuntu
WorkingDirectory=/var/www/dr-ortega
EnvironmentFile=/etc/dr-ortega.env
ExecStart=/usr/local/bin/node /var/www/dr-ortega/server.js
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

## Activar

```bash
sudo systemctl daemon-reload
sudo systemctl enable dr-ortega
sudo systemctl start dr-ortega
```

## Estado

```bash
sudo systemctl status dr-ortega --no-pager
```

Resultado esperado:

```text
Active: active (running)
```

## Reiniciar después de un deploy

```bash
sudo systemctl restart dr-ortega
```

## Logs

```bash
sudo journalctl -u dr-ortega -n 100 --no-pager
sudo journalctl -u dr-ortega -f
```

## Verificar puerto

```bash
curl -I http://127.0.0.1:3000
```

## Error EADDRINUSE

Si aparece:

```text
listen EADDRINUSE: address already in use 0.0.0.0:3000
```

normalmente existe otra instancia manual de `node server.js`.

Diagnóstico:

```bash
sudo ss -ltnp | grep :3000
```

o:

```bash
sudo lsof -i :3000
```

Detener el proceso manual antes de iniciar `systemd`.

Una vez configurado `systemd`, no arrancar la aplicación manualmente para uso normal.
