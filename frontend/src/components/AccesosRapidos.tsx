
import { Link } from 'react-router-dom'
import {
  FilePlus2,
  ClipboardList,
  CalendarDays,
  ChevronRight,
} from 'lucide-react'

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
      {accesos.map((acceso) => {
        const Icono = acceso.icono

        return (
          <Link
            key={acceso.titulo}
            to={acceso.ruta}
            className={`
              flex min-h-[145px] items-center gap-4
              rounded-2xl p-5 shadow-sm
              transition-all duration-200
              hover:-translate-y-1 hover:shadow-md
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-blue-600
              ${acceso.fondo}
            `}
          >
            <div
              className={`
                flex h-14 w-14 shrink-0 items-center
                justify-center rounded-full text-white
                ${acceso.colorIcono}
              `}
            >
              <Icono size={28} strokeWidth={2} />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold text-[#142D50]">
                {acceso.titulo}
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                {acceso.descripcion}
              </p>
            </div>

            <ChevronRight
              size={24}
              className="shrink-0 text-[#142D50]"
              aria-hidden="true"
            />
          </Link>
        )
      })}
    </section>
  )
}

export default AccesosRapidos
