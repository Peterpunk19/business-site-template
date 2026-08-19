# Checklist de producción

## Infraestructura

```text
[ ] IP estática asignada
[ ] DNS apunta a la IP correcta
[ ] Puertos 80/443 abiertos
[ ] Puerto 3000 cerrado públicamente
[ ] Puerto 5432 cerrado públicamente
[ ] Swap configurado
[ ] Node instalado
[ ] PostgreSQL instalado
[ ] Caddy instalado
```

## Base de datos

```text
[ ] Usuario PostgreSQL creado
[ ] Base de datos creada
[ ] DATABASE_URL válida
[ ] Prisma migrations aplicadas
[ ] Datos iniciales necesarios creados
[ ] Login de administrador probado
```

## Aplicación

```text
[ ] npm run build exitoso
[ ] output standalone generado
[ ] BUILD_ID presente
[ ] static copiado
[ ] public copiado
[ ] artefacto sincronizado al VPS
[ ] systemd activo
[ ] localhost:3000 responde
```

## HTTPS

```text
[ ] Caddyfile válido
[ ] Caddy activo
[ ] dominio raíz responde HTTPS
[ ] www responde HTTPS
[ ] certificado válido
```

## Funcionalidad

```text
[ ] Landing
[ ] Navegación móvil
[ ] Formulario de citas
[ ] Formulario de contacto
[ ] Envío de emails
[ ] Login admin
[ ] Listado de citas
[ ] Detalle de cita
[ ] Cambio de estado de cita
[ ] Listado de mensajes
[ ] Detalle de mensaje
[ ] Cambio de estado de mensaje
[ ] WhatsApp
[ ] Redes sociales
```

## Seguridad y operación

```text
[ ] Secrets fuera del repositorio
[ ] /etc/dr-ortega.env con chmod 600
[ ] Aplicación ejecutándose como ubuntu
[ ] PostgreSQL no expuesto
[ ] Puerto 3000 no expuesto
[ ] Revisar free -h
[ ] Revisar df -h
[ ] Revisar logs
[ ] Configurar backups PostgreSQL
[ ] Definir rollback
```
