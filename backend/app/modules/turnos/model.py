from datetime import date
from sqlalchemy import Date, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.database import Base

class Turno(Base):
    __tablename__ = "turnos"
    id: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str] = mapped_column(String(120), nullable=False)
    sede: Mapped[str] = mapped_column(String(120), nullable=False)
    fecha_desde: Mapped[date] = mapped_column(Date, nullable=False)
    fecha_hasta: Mapped[date] = mapped_column(Date, nullable=False)
    cupo_total: Mapped[int] = mapped_column(Integer, nullable=False)
    temporada: Mapped[int] = mapped_column(Integer, nullable=False, index=True)
    inscripciones = relationship("Inscripcion", back_populates="turno")
