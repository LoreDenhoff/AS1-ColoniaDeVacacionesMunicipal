from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.config import get_settings
from app.core.database import get_db
from app.core.security import CurrentUser, require_roles
from app.modules.inscripciones.repository import InscripcionRepository
from app.modules.inscripciones.schemas import AdminInscripcionOut

router=APIRouter(prefix="/api/v1/admin",tags=["Administración"])
settings=get_settings(); repo=InscripcionRepository()

@router.get("/inscripciones",response_model=list[AdminInscripcionOut])
def listar(db:Session=Depends(get_db),_:CurrentUser=Depends(require_roles("administrativo","administrador_sistema"))):
    return repo.list_all(db,settings.temporada)
