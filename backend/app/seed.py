from datetime import date
from sqlalchemy import select
from app.core.config import get_settings
from app.core.database import SessionLocal
from app.modules.turnos.model import Turno
from app.modules.inscripciones.model import Inscripcion  # registra el modelo relacionado en SQLAlchemy

def seed():
    settings=get_settings()
    with SessionLocal() as db:
        if db.scalar(select(Turno.id).limit(1)) is not None: return
        db.add_all([
            Turno(nombre="Turno mañana - Enero",sede="Polideportivo Municipal",fecha_desde=date(settings.temporada,1,6),fecha_hasta=date(settings.temporada,1,24),cupo_total=200,temporada=settings.temporada),
            Turno(nombre="Turno tarde - Enero",sede="Polideportivo Municipal",fecha_desde=date(settings.temporada,1,6),fecha_hasta=date(settings.temporada,1,24),cupo_total=200,temporada=settings.temporada),
            Turno(nombre="Turno mañana - Febrero",sede="Club Municipal",fecha_desde=date(settings.temporada,2,2),fecha_hasta=date(settings.temporada,2,20),cupo_total=200,temporada=settings.temporada),
        ]); db.commit()
if __name__=="__main__": seed()
