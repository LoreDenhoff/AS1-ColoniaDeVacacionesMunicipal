import { Link } from 'react-router-dom'
import { Plus, ClipboardList, Info } from 'lucide-react'

import InscripcionCard from '../../components/InscripcionesCard'
import { inscripcionesEjemplo } from '../../data/inscripcionesEjemplo'

function MisInscripcionesPage() {
  const inscripciones = inscripcionesEjemplo

  return (
    <main className="min-h-screen bg-[#F5F9FC] px-5 py-8 lg:px-10">

      <div className="mx-auto max-w-7xl">

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

        <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">

          <div className="mb-5 flex items-center gap-2">
            <ClipboardList size={22} className="text-[#1769B3]" />

            <h2 className="text-xl font-bold text-[#142D50]">
              Solicitudes realizadas
            </h2>
          </div>

          {inscripciones.length > 0 ? (

            <div className="flex flex-col gap-4">
              {inscripciones.map((inscripcion) => (
                <InscripcionCard
                  key={inscripcion.id}
                  inscripcion={inscripcion}
                />
              ))}
            </div>

          ) : (

            <div className="rounded-xl bg-slate-50 px-6 py-12 text-center">

              <ClipboardList
                size={42}
                className="mx-auto mb-4 text-slate-400"
              />

              <h3 className="text-lg font-bold text-[#142D50]">
                Todavía no hay inscripciones
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Cuando realices una inscripción,
                vas a poder consultarla desde acá.
              </p>

            </div>

          )}

        </section>

        <div className="mt-6 flex items-start gap-3 rounded-xl bg-blue-50 p-4 text-sm text-blue-800">
          <Info size={20} className="shrink-0" />

          <p>
            Esta pantalla utiliza datos de ejemplo.
            Las inscripciones reales se mostrarán cuando
            conectemos el backend.
          </p>
        </div>

      </div>

    </main>
  )
}

export default MisInscripcionesPage
