
export type EstadoInscripcion = 'Confirmada' | 'En revisión' | 'Lista de espera'

export interface Inscripcion {
  id: number
  nombre_chico: string
  apellido_chico: string
  dni_chico: string
  fecha_nacimiento: string
  nombre_tutor: string
  apellido_tutor: string
  dni_tutor: string
  email_tutor: string
  telefono_tutor: string
  turno: string
  sede: string
  temporada: number
  fecha_inscripcion: string
  estado: EstadoInscripcion
  posicion_espera?: number
}

export const inscripcionesEjemplo: Inscripcion[] = [
  {
    id: 1,
    nombre_chico: 'Juan',
    apellido_chico: 'Pérez',
    dni_chico: '00000001',
    fecha_nacimiento: '2018-05-12',
    nombre_tutor: 'María',
    apellido_tutor: 'Pérez',
    dni_tutor: '00000011',
    email_tutor: 'maria@example.com',
    telefono_tutor: '1100000001',
    turno: 'Turno mañana',
    sede: 'Polideportivo Municipal',
    temporada: 2027,
    fecha_inscripcion: '2026-10-20',
    estado: 'Confirmada',
  },
  {
    id: 2,
    nombre_chico: 'Sofía',
    apellido_chico: 'Pérez',
    dni_chico: '00000002',
    fecha_nacimiento: '2017-08-22',
    nombre_tutor: 'María',
    apellido_tutor: 'Pérez',
    dni_tutor: '00000011',
    email_tutor: 'maria@example.com',
    telefono_tutor: '1100000001',
    turno: 'Turno tarde',
    sede: 'Club Municipal',
    temporada: 2027,
    fecha_inscripcion: '2026-10-21',
    estado: 'En revisión',
  },
  
{
  id: 3,
  nombre_chico: 'Martina',
  apellido_chico: 'López',
  dni_chico: '00000003',
  fecha_nacimiento: '2018-03-15',
  nombre_tutor: 'Laura',
  apellido_tutor: 'López',
  dni_tutor: '00000013',
  email_tutor: 'laura@example.com',
  telefono_tutor: '1100000003',
  turno: 'Turno mañana',
  sede: 'Polideportivo Municipal',
  temporada: 2027,
  fecha_inscripcion: '2026-10-22',
  estado: 'Lista de espera',
  posicion_espera: 3,
},

]
