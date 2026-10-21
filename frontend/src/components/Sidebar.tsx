
import { NavLink } from 'react-router-dom'
import {
  House,
  ClipboardList,
  Users,
  CalendarDays,
  Clock,
  FileText,
  Settings,
  Waves,
  Sun,
} from 'lucide-react'

function Sidebar() {
  const opciones = [
    { nombre: 'Inicio', ruta: '/', icono: House },
    { nombre: 'Inscripciones', ruta: '/inscripciones', icono: ClipboardList },
    { nombre: 'Participantes', ruta: '/participantes', icono: Users },
    { nombre: 'Actividades', ruta: '/actividades', icono: CalendarDays },
    { nombre: 'Turnos', ruta: '/tutor/turnos', icono: Clock },
    { nombre: 'Reportes', ruta: '/reportes', icono: FileText },
    { nombre: 'Configuración', ruta: '/configuracion', icono: Settings },
  ]

  return (
    <aside className="flex min-h-screen w-60 shrink-0 flex-col bg-[#172E4D] text-white">

      {/* Logo de la colonia */}
      <div className="px-6 pb-8 pt-8 text-center">
        <div className="mb-3 flex flex-col items-center">
          <Sun size={52} className="text-yellow-400" />
          <Waves size={52} className="-mt-5 text-cyan-400" />
        </div>

        <h1 className="text-xl font-extrabold uppercase leading-tight tracking-wide">
          Colonia
          <br />
          Municipal
        </h1>

        <p className="mt-1 text-sm text-slate-200">
          Verano en comunidad
        </p>
      </div>

      {/* Opciones de navegación */}
      <nav
        className="flex-1 space-y-2 px-3"
        aria-label="Menú principal"
      >
        {opciones.map((opcion) => {
          const Icono = opcion.icono

          return (
            <NavLink
              key={opcion.ruta}
              to={opcion.ruta}
              end={opcion.ruta === '/'}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-4 py-3 text-sm transition-colors ${
                  isActive
                    ? 'border-l-4 border-cyan-400 bg-[#2B4A70] font-semibold text-white'
                    : 'text-slate-300 hover:bg-[#243F60] hover:text-white'
                }`
              }
            >
              <Icono size={22} aria-hidden="true" />
              <span>{opcion.nombre}</span>
            </NavLink>
          )
        })}
      </nav>

      {/* Pie del menú */}
      <div className="px-6 py-8 text-center text-slate-300">
        <p className="text-sm font-medium">
          Municipalidad
        </p>
        <p className="text-xs">
          Deportes y Recreación
        </p>
      </div>

    </aside>
  )
}

export default Sidebar
