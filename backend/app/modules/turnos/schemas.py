from datetime import date
from pydantic import BaseModel

class TurnoOut(BaseModel):
    id: int
    nombre: str
    sede: str
    fecha_desde: date
    fecha_hasta: date
    cupo_total: int
    temporada: int
    cupos_disponibles: int
