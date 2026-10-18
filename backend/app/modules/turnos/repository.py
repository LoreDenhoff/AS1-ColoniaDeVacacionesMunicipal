from sqlalchemy import select
from sqlalchemy.orm import Session

from app.modules.turnos.model import Turno


class TurnoRepository:
    def list(self, db: Session, temporada: int) -> list[Turno]:
        return list(
            db.scalars(
                select(Turno)
                .where(Turno.temporada == temporada)
                .order_by(Turno.id)
            )
        )

    def get(self, db: Session, turno_id: int) -> Turno | None:
        return db.scalar(
            select(Turno).where(Turno.id == turno_id)
        )