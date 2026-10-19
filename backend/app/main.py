from fastapi import FastAPI

from app.api.system import router as system_router
from app.core.config import get_settings
from app.modules.turnos.routes import router as turnos_router
from app.modules.inscripciones.routes import router as inscripciones_router
from app.modules.administracion.routes import router as admin_router
settings = get_settings()

app = FastAPI(
    title=settings.app_name,
    version="1.0.0",
    docs_url="/docs",
    openapi_url="/api/v1/openapi.json"
)

app.include_router(system_router)
app.include_router(turnos_router)
app.include_router(inscripciones_router)
app.include_router(admin_router)