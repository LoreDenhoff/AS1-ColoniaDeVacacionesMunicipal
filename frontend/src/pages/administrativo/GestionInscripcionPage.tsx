import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ClipboardList,
  CheckCircle2,
  Clock3,
  Search,
  Plus,
  Info,
} from 'lucide-react'

import InscripcionCard from '../../components/InscripcionesCard'
import {
  inscripcionesEjemplo,
  type Inscripcion,
} from '../../data/inscripcionesEjemplo'

type FiltroEstado = 'Todas' | Inscripcion['estado']

function GestionInscripcionesPage() {
  const [busqueda, setBusqueda] = useState('')
  const [filtroEstado, setFiltroEstado] = useState<FiltroEstado>('Todas')
  const inscripciones = inscripcionesEjemplo
  const total = inscripciones.length
  const confirmadas = inscripciones.filter(
    (inscripcion) => inscripcion.estado === 'Confirmada'
  ).length

  const enRevision = inscripciones.filter(
    (inscripcion) => inscripcion.estado === 'En revisión'
  ).length

  const inscripcionesFiltradas = inscripciones.filter((inscripcion) => {
    const texto = busqueda.trim().toLowerCase()

    const nombreCompleto =
      `${inscripcion.nombre_chico} ${inscripcion.apellido_chico}`.toLowerCase()

    const coincideBusqueda =
      nombreCompleto.includes(texto) ||
      inscripcion.dni_chico.includes(texto)

    const coincideEstado =
      filtroEstado === 'Todas' ||
      inscripcion.estado === filtroEstado

    return coincideBusqueda && coincideEstado
  })

  return (
    <main className="min-h-screen bg-[#F5F9FC] px-5 py-8 lg:px-10">

      <div className="mx-auto max-w-7xl">

        <header className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h1 className="text-3xl font-extrabold text-[#142D50]">
              Gestión de inscripciones
            </h1>

            <p className="mt-2 text-slate-600">
              Consultá las solicitudes de la colonia municipal.
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

        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
              <ClipboardList size={26} />
            </div>

            <div>
              <p className="text-sm text-slate-500">Total</p>
              <p className="text-2xl font-extrabold text-[#142D50]">
                {total}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
            <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
              <CheckCircle2 size={26} />
            </div>

            <div>
              <p className="text-sm text-slate-500">Confirmadas</p>
              <p className="text-2xl font-extrabold text-[#142D50]">
                {confirmadas}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
            <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
              <Clock3 size={26} />
            </div>

            <div>
              <p className="text-sm text-slate-500">En revisión</p>
              <p className="text-2xl font-extrabold text-[#142D50]">
                {enRevision}
              </p>
            </div>
          </div>

        </section>

        <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">

          <div className="mb-5">
            <h2 className="text-xl font-bold text-[#142D50]">
              Inscripciones registradas
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Buscá una solicitud y consultá sus detalles.
            </p>
          </div>

          <div className="mb-6 flex flex-col gap-3 md:flex-row">

            <div className="relative flex-1">
              <Search
                size={19}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="search"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar por nombre, apellido o DNI..."
                aria-label="Buscar inscripciones"
                className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <select
              value={filtroEstado}
              onChange={(e) =>
                setFiltroEstado(e.target.value as FiltroEstado)
              }
              aria-label="Filtrar por estado"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="Todas">Todos los estados</option>
              <option value="Confirmada">Confirmadas</option>
              <option value="En revisión">En revisión</option>
            </select>

          </div>

          <p className="mb-4 text-sm text-slate-500">
            {inscripcionesFiltradas.length} resultado(s)
          </p>

          {inscripcionesFiltradas.length > 0 ? (

            <div className="flex flex-col gap-4">
              {inscripcionesFiltradas.map((inscripcion) => (
                <InscripcionCard
                  key={inscripcion.id}
                  inscripcion={inscripcion}
                />
              ))}
            </div>

          ) : (

            <div className="rounded-xl bg-slate-50 px-6 py-12 text-center">
              <Search
                size={38}
                className="mx-auto mb-4 text-slate-400"
              />

              <h3 className="font-bold text-[#142D50]">
                No encontramos inscripciones
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Probá con otro nombre, DNI o estado.
              </p>
            </div>

          )}

        </section>

        <div className="mt-6 flex items-start gap-3 rounded-xl bg-blue-50 p-4 text-sm text-blue-800">
          <Info size={20} className="shrink-0" />

          <p>
            Esta pantalla utiliza datos de ejemplo.
            Las inscripciones reales se mostrarán
            cuando conectemos el backend.
          </p>
        </div>

      </div>
    </main>
  )
}

export default GestionInscripcionesPage
