from sqlalchemy import select
from sqlalchemy.orm import Session
from app.modules.inscripciones.model import Inscripcion

class InscripcionRepository:
    def exists_for_dni_and_season(self, db:Session,dni:str,temporada:int)->bool:
        return db.scalar(select(Inscripcion.id).where(Inscripcion.dni_chico==dni,Inscripcion.temporada==temporada).limit(1)) is not None
    def add(self,db:Session,inscription:Inscripcion)->Inscripcion:
        db.add(inscription); db.flush(); db.refresh(inscription); return inscription
    def list_all(self,db:Session,temporada:int)->list[Inscripcion]:
        return list(db.scalars(select(Inscripcion).where(Inscripcion.temporada==temporada).order_by(Inscripcion.creado_en,Inscripcion.id)))
    def list_by_user(self,db:Session,subject:str,temporada:int)->list[Inscripcion]:
        return list(db.scalars(select(Inscripcion).where(Inscripcion.creado_por==subject,Inscripcion.temporada==temporada).order_by(Inscripcion.creado_en.desc())))