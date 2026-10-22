import {
  FilePlus2,
  ClipboardList,
  CalendarDays,
} from 'lucide-react'

import Tarjeta from './Tarjeta'

function AccesosRapidos() {
  const accesos = [
    {
      titulo: 'Nueva inscripción',
      descripcion: 'Inscribí a un chico en la colonia',
      ruta: '/inscripciones/nueva',
      icono: FilePlus2,
      fondo: 'bg-[#E3F7F1]',
      colorIcono: 'bg-[#12B69A]',
    },
    {
      titulo: 'Ver inscripciones',
      descripcion: 'Consultá las inscripciones realizadas',
      ruta: '/tutor/mis-inscripciones',
      icono: ClipboardList,
      fondo: 'bg-[#E3F3FF]',
      colorIcono: 'bg-[#168CE2]',
    },
    {
      titulo: 'Turnos disponibles',
      descripcion: 'Consultá los turnos de la colonia',
      ruta: '/tutor/turnos',
      icono: CalendarDays,
      fondo: 'bg-[#EEEAFF]',
      colorIcono: 'bg-[#8164E8]',
    },
  ]

  return (
    <section
      aria-label="Accesos rápidos"
      className="grid grid-cols-1 gap-5 lg:grid-cols-3"
    >
      {accesos.map((acceso) => (
        <Tarjeta
          key={acceso.titulo}
          titulo={acceso.titulo}
          descripcion={acceso.descripcion}
          ruta={acceso.ruta}
          icono={acceso.icono}
          fondo={acceso.fondo}
          colorIcono={acceso.colorIcono}
        />
      ))}
    </section>
  )
}

export default AccesosRapidos

