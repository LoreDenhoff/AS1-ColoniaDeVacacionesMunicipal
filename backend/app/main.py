from pathlib import Path
from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from app.core.config import get_settings
from app.api.system import router as system_router
from app.modules.turnos.routes import router as turnos_router
from app.modules.inscripciones.routes import router as inscripciones_router
from app.modules.administracion.routes import router as admin_router

settings=get_settings()
app=FastAPI(title=settings.app_name,version="1.0.0",docs_url="/docs",openapi_url="/api/v1/openapi.json")
for router in (system_router,turnos_router,inscripciones_router,admin_router): app.include_router(router)

static_dir=Path(__file__).parent/"static"
if static_dir.exists():
    assets=static_dir/"assets"
    if assets.exists(): app.mount("/assets",StaticFiles(directory=assets),name="assets")
    @app.get("/{full_path:path}",include_in_schema=False)
    def spa(full_path:str):
        candidate=static_dir/full_path
        if full_path and candidate.is_file(): return FileResponse(candidate)
        return FileResponse(static_dir/"index.html")
