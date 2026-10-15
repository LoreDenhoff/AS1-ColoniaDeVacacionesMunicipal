# Colonia de Vacaciones Municipal · TP 6A

Trabajo Práctico Integrador de **Arquitectura de Software 1** (UNAHUR, 2do cuatrimestre 2026).
Grupo **Los Betos** · Casillero **6A · Colonia de vacaciones · Municipio chico**.

Sistema de inscripción a la colonia de vacaciones de un municipio chico: un tutor (o un administrativo
en la oficina) inscribe a un chico de 6 a 12 años en un turno con cupo, en orden de llegada, sin que un
chico quede inscripto dos veces y solo si vive en la jurisdicción (se valida contra el padrón de residentes).

## Arquitectura

- Monolito modular con Clean Architecture liviana ([ADR-001](docs/adr/001-monolito-modular.md)).
- Backend: Python + FastAPI. Frontend: React + Vite, compilado y servido por el mismo backend.
- Base de datos: PostgreSQL.
- Identidad: Keycloak (OIDC, Authorization Code + PKCE).
- Padrón de residentes simulado con WireMock.
- Todo se levanta con Docker Compose.

Documentación completa en [docs/ARQUITECTURA.md](docs/ARQUITECTURA.md) y decisiones en [docs/adr](docs/adr).

## Estructura del repositorio

| Carpeta | Contenido | Issue |
|---|---|---|
| `/` | `docker-compose.yml`, `.env.example`, este README | #1 Esqueleto e infraestructura |
| `keycloak/` | Realm `colonia` con roles y usuarios demo; tema visual del login | #1 y #3 |
| `wiremock/` | Respuestas simuladas del padrón de residentes | #1 |
| `backend/` | API FastAPI, dominio, migraciones (Alembic) y datos iniciales | #2 Backend |
| `frontend/` | SPA en React con las vistas por rol | #3 Frontend y login |
| `backend/tests/` | Tests del dominio y de integración | #4 Tests y verificación de NFRs |
| `docs/` | Documento de arquitectura, ADRs, NFRs, mockups y planilla de decisiones | Todos |

## Levantar el sistema

Requisito: Docker Desktop (o Podman Desktop) funcionando.

```bash
docker compose up --build
```

No hace falta crear un `.env`: cada variable tiene un valor por defecto. Para cambiar alguno, copiar
`.env.example` como `.env`.

Para empezar de cero (borra los datos de PostgreSQL):

```bash
docker compose down -v
docker compose up --build
```

## URLs

| Servicio | URL |
|---|---|
| Aplicación (desde el issue #2) | http://localhost:8000 |
| Swagger / OpenAPI (desde el issue #2) | http://localhost:8000/docs |
| Keycloak | http://localhost:8080 (consola: `/admin`, usuario `admin`, clave `admin_demo_cambiar`) |
| Mock del padrón (WireMock) | http://localhost:8081/__admin/ |

## Usuarios de prueba

| Rol | Usuario | Contraseña |
|---|---|---|
| Tutor | `tutor1` | `Tutor123!` |
| Administrativo | `admin1` | `Admin123!` |
| Administrador del sistema | `sysadmin1` | `SysAdmin123!` |

## DNIs de prueba del padrón

| DNI | Respuesta del mock |
|---|---|
| `30111222`, `30222333`, `30333444` | Residente |
| `50000000` | Padrón caído (503) |
| Cualquier otro | No residente |

## Forma de trabajo

Cada cambio va en una rama propia con un pull request que revisa otro integrante y que cierra su issue
(`Closes #N` en la descripción). Las partes se integran en orden: #1 → #2 → #3 → #4.

## Equipo

Lorena Denhoff · Cristian Luna · Hernán Viltez · Martín
