
import { Link } from 'react-router-dom'
import {
  ClipboardList,
  Plus,
  Info,
  ArrowRight,
} from 'lucide-react'

function MisInscripcionesPage() {
  return (
    <main className="min-h-screen bg-[#F5F9FC] px-5 py-8 lg:px-10">
      <div className="mx-auto max-w-6xl">

        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-[#142D50]">
              Mis inscripciones
            </h1>

            <p className="mt-2 text-slate-600">
              Consultá las solicitudes de inscripción
              realizadas para la colonia municipal.
            </p>
          </div>

          <Link
            to="/inscripciones/nueva"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#1769B3] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#125894]"
          >
            <Plus size={19} />
            Nueva inscripción
          </Link>
        </header>

        <section className="overflow-hidden rounded-2xl bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b border-slate-100 p-6">
            <ClipboardList
              size={25}
              className="text-[#1769B3]"
            />

            <h2 className="text-xl font-bold text-[#142D50]">
              Solicitudes realizadas
            </h2>
          </div>

          <div className="flex flex-col items-center px-6 py-14 text-center">

            <div className="mb-5 rounded-full bg-[#EAF4FC] p-6 text-[#1769B3]">
              <ClipboardList size={45} strokeWidth={1.6} />
            </div>

            <h3 className="text-xl font-bold text-[#142D50]">
              Tus inscripciones aparecerán acá
            </h3>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
              Desde esta sección podrás consultar los chicos
              inscriptos, los turnos seleccionados y el estado
              de cada solicitud.
            </p>

            <Link
              to="/inscripciones/nueva"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1769B3] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#125894]"
            >
              Realizar una inscripción
              <ArrowRight size={18} />
            </Link>

          </div>
        </section>

        <div className="mt-6 flex items-start gap-3 rounded-xl bg-blue-50 p-4 text-sm text-blue-800">
          <Info size={20} className="shrink-0" />

          <p>
            La consulta de inscripciones estará disponible
            cuando integremos el inicio de sesión y el
            servicio de inscripciones de FastAPI.
          </p>
        </div>

      </div>
    </main>
  )
}

export default MisInscripcionesPage
