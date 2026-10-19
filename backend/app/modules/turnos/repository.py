from sqlalchemy import func, select
from sqlalchemy.orm import Session
from app.modules.turnos.model import Turno
from app.modules.inscripciones.model import EstadoInscripcion, Inscripcion

class TurnoRepository:
    def list(self, db: Session, temporada: int) -> list[Turno]:
        return list(db.scalars(select(Turno).where(Turno.temporada == temporada).order_by(Turno.id)))
    def get_for_update(self, db: Session, turno_id: int) -> Turno | None:
        return db.scalar(select(Turno).where(Turno.id == turno_id).with_for_update())
    def confirmed_count(self, db: Session, turno_id: int) -> int:
        return int(db.scalar(select(func.count(Inscripcion.id)).where(Inscripcion.turno_id==turno_id, Inscripcion.estado==EstadoInscripcion.CONFIRMADA.value)) or 0)
    def waitlist_count(self, db: Session, turno_id: int) -> int:
        return int(db.scalar(select(func.count(Inscripcion.id)).where(Inscripcion.turno_id==turno_id, Inscripcion.estado==EstadoInscripcion.LISTA_ESPERA.value)) or 0)
