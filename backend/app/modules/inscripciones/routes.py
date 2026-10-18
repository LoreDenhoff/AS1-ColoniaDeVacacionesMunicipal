from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.config import get_settings
from app.core.database import get_db
from app.core.security import CurrentUser, get_current_user, require_roles
from app.modules.inscripciones.repository import InscripcionRepository
from app.modules.inscripciones.schemas import InscripcionCreate, InscripcionOut
from app.modules.inscripciones.service import InscripcionService

router=APIRouter(prefix="/api/v1",tags=["Inscripciones"])
settings=get_settings(); repo=InscripcionRepository(); service=InscripcionService()

@router.post("/inscripciones",response_model=InscripcionOut,status_code=201)
def crear(payload:InscripcionCreate,db:Session=Depends(get_db),user:CurrentUser=Depends(require_roles("tutor","administrativo","administrador_sistema"))):
    return service.crear(db,payload,user.sub)

@router.get("/mis-inscripciones",response_model=list[InscripcionOut])
def mias(db:Session=Depends(get_db),user:CurrentUser=Depends(get_current_user)):
    return repo.list_by_user(db,user.sub,settings.temporada)
