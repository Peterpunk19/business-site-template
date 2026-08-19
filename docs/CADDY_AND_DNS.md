# Caddy, Cloudflare DNS y HTTPS

Dominios:

```text
drortegaesteticadental.com
www.drortegaesteticadental.com
```

IP pública:

```text
54.236.153.112
```

## Cloudflare DNS

Configuración inicial:

```text
A
drortegaesteticadental.com
54.236.153.112
DNS only

CNAME
www
drortegaesteticadental.com
DNS only
```

Comprobar:

```bash
dig +short drortegaesteticadental.com
dig +short www.drortegaesteticadental.com
```

## Caddyfile

Archivo:

```text
/etc/caddy/Caddyfile
```

Configuración:

```caddy
drortegaesteticadental.com, www.drortegaesteticadental.com {
    reverse_proxy localhost:3000
}
```

## Validar y recargar

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo caddy fmt --overwrite /etc/caddy/Caddyfile
sudo systemctl reload caddy
sudo systemctl status caddy --no-pager
```

Logs:

```bash
sudo journalctl -u caddy -n 100 --no-pager
```

## Validar HTTPS

```bash
curl -I https://drortegaesteticadental.com
curl -I https://www.drortegaesteticadental.com
```

Se obtuvo `HTTP/2 200`, confirmando que Caddy sirve HTTPS y hace proxy hacia Next.js.

## Mejora futura: canonical www

```caddy
www.drortegaesteticadental.com {
    redir https://drortegaesteticadental.com{uri} permanent
}

drortegaesteticadental.com {
    reverse_proxy 127.0.0.1:3000
}
```

Después:

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

## Cloudflare Proxy

Puede activarse después el proxy naranja. Si se activa, usar SSL/TLS `Full (strict)`.
