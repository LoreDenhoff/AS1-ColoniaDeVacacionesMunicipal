from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.config import get_settings
from app.core.database import get_db
from app.core.security import CurrentUser, get_current_user
from app.modules.turnos.repository import TurnoRepository
from app.modules.turnos.schemas import TurnoOut

router = APIRouter(prefix="/api/v1/turnos", tags=["Turnos"])
repo = TurnoRepository(); settings = get_settings()

@router.get("", response_model=list[TurnoOut])
def list_turnos(db: Session=Depends(get_db), _: CurrentUser=Depends(get_current_user)):
    result=[]
    for turno in repo.list(db, settings.temporada):
        confirmadas=repo.confirmed_count(db, turno.id)
        result.append(TurnoOut(id=turno.id,nombre=turno.nombre,sede=turno.sede,fecha_desde=turno.fecha_desde,fecha_hasta=turno.fecha_hasta,cupo_total=turno.cupo_total,temporada=turno.temporada,cupos_disponibles=max(turno.cupo_total-confirmadas,0)))
    return result