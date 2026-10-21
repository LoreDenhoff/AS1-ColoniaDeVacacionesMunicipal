
import { NavLink } from 'react-router-dom'

function Sidebar() {
  const opciones = [
    { nombre: 'Inicio', ruta: '/' },
    { nombre: 'Inscripciones', ruta: '/inscripciones' },
    { nombre: 'Participantes', ruta: '/participantes' },
    { nombre: 'Actividades', ruta: '/actividades' },
    { nombre: 'Turnos', ruta: '/tutor/turnos' },
    { nombre: 'Reportes', ruta: '/reportes' },
    { nombre: 'Configuración', ruta: '/configuracion' },
  ]

  return (
    <aside className="flex min-h-screen w-60 shrink-0 flex-col bg-[#172E4D] text-white">

      {/* Logo y nombre */}
      <div className="px-6 pb-8 pt-8 text-center">
        <div className="mb-3 flex items-center justify-center">
          <div className="text-5xl">
            ☀️
          </div>
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

      {/* Navegación */}
      <nav
        className="flex-1 space-y-2 px-3"
        aria-label="Menú principal"
      >
        {opciones.map((opcion) => (
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
            <span aria-hidden="true">•</span>
            <span>{opcion.nombre}</span>
          </NavLink>
        ))}
      </nav>

      {/* Información inferior */}
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
