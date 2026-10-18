from fastapi import APIRouter

from app.core.config import get_settings


router = APIRouter(
    prefix="/api/v1",
    tags=["Sistema"]
)

settings = get_settings()


@router.get("/health")
def health():
    return {
        "status": "ok",
        "api": "ok"
    }


@router.get("/system-info")
def system_info():
    return {
        "app": settings.app_name,
        "environment": settings.environment,
        "temporada": settings.temporada,
        "version": "1.0.0"
    }