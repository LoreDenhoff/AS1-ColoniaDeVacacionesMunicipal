from datetime import date, datetime
from pydantic import BaseModel, EmailStr, Field

class InscripcionCreate(BaseModel):
    turno_id:int
    dni_chico:str=Field(min_length=6,max_length=20)
    nombre_chico:str=Field(min_length=2,max_length=100)
    apellido_chico:str=Field(min_length=2,max_length=100)
    fecha_nacimiento:date
    dni_tutor:str=Field(min_length=6,max_length=20)
    nombre_tutor:str=Field(min_length=2,max_length=120)
    email_tutor:EmailStr
    telefono_tutor:str=Field(min_length=6,max_length=50)

class InscripcionOut(BaseModel):
    id:int; turno_id:int; temporada:int; dni_chico:str; nombre_chico:str; apellido_chico:str; estado:str; posicion_espera:int|None; creado_en:datetime

class AdminInscripcionOut(InscripcionOut):
    dni_tutor:str; nombre_tutor:str; email_tutor:str; telefono_tutor:str; creado_por:str
