
import { Link } from 'react-router-dom'
import { Plus, ClipboardList, Info } from 'lucide-react'
import InscripcionCard from '../../components/InscripcionesCard'
import { inscripcionesEjemplo } from '../../data/inscripcionesEjemplo'

function MisInscripcionesPage() {
  return (
    <main className="min-h-screen bg-[#F5F9FC] px-5 py-8 lg:px-10">

      <div className="mx-auto max-w-6xl">

        <header className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h1 className="text-3xl font-extrabold text-[#142D50]">
              Mis inscripciones
            </h1>

            <p className="mt-2 text-slate-600">
              Consultá las inscripciones realizadas en la colonia municipal.
            </p>
          </div>

          <Link
            to="/inscripciones/nueva"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1769B3] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            <Plus size={19} />
            Nueva inscripción
          </Link>
        </header>

        <section>

          <div className="mb-4 flex items-center gap-2">
            <ClipboardList size={22} className="text-[#1769B3]" />

            <h2 className="text-lg font-bold text-[#142D50]">
              Solicitudes realizadas
            </h2>
          </div>

          {inscripcionesEjemplo.length > 0 ? (

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {inscripcionesEjemplo.map((inscripcion) => (
                <InscripcionCard
                  key={inscripcion.id}
                  inscripcion={inscripcion}
                />
              ))}
            </div>

          ) : (

            <div className="rounded-2xl bg-white px-6 py-14 text-center shadow-sm">

              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                <ClipboardList size={40} />
              </div>

              <h3 className="text-xl font-bold text-[#142D50]">
                Todavía no hay inscripciones
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm text-slate-600">
                Cuando realices una inscripción, podrás consultar
                su información desde esta sección.
              </p>

              <Link
                to="/inscripciones/nueva"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1769B3] px-5 py-3 text-sm font-semibold text-white"
              >
                <Plus size={18} />
                Nueva inscripción
              </Link>

            </div>

          )}

        </section>

        <div className="mt-6 flex items-start gap-3 rounded-xl bg-blue-50 p-4 text-sm text-blue-800">
          <Info size={20} className="shrink-0" />

          <p>
            Esta pantalla utiliza datos de ejemplo para probar el diseño.
            Las inscripciones reales se mostrarán cuando conectemos FastAPI.
          </p>
        </div>

      </div>

    </main>
  )
}

export default MisInscripcionesPage
