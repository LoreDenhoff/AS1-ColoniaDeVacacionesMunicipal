
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ClipboardList,
  CheckCircle2,
  Clock3,
  ListOrdered,
  Search,
  Plus,
  Info,
  UsersRound,
  AlertCircle,
  CalendarDays,
  ShieldCheck,
  XCircle,
} from 'lucide-react'

import InscripcionesCard from '../../components/InscripcionesCard'

import {
  inscripcionesEjemplo,
  type Inscripcion,
} from '../../data/inscripcionesEjemplo'

type FiltroEstado = 'Todas' | Inscripcion['estado']

const turnosEjemplo = [
  {
    id: 1,
    nombre: 'Turno mañana',
    cupo_total: 100,
    cupos_disponibles: 45,
  },
  {
    id: 2,
    nombre: 'Turno tarde',
    cupo_total: 100,
    cupos_disponibles: 0,
  },
]

interface ResumenCardProps {
  titulo: string
  cantidad: number
  icono: React.ReactNode
  fondoIcono: string
}

function ResumenCard({
  titulo,
  cantidad,
  icono,
  fondoIcono,
}: ResumenCardProps) {
  return (
    <article className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
      <div className={`rounded-xl p-3 ${fondoIcono}`}>
        {icono}
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {titulo}
        </p>

        <p className="text-2xl font-extrabold text-[#142D50]">
          {cantidad}
        </p>
      </div>
    </article>
  )
}

function DisponibilidadCupos() {
  return (
    <section className="mb-6 rounded-2xl bg-white p-5 shadow-sm sm:p-6">

      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-xl bg-cyan-100 p-3 text-cyan-700">
          <CalendarDays size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#142D50]">
            Disponibilidad de cupos
          </h2>

          <p className="text-sm text-slate-500">
            Resumen por turno de la colonia.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {turnosEjemplo.map((turno) => {
          const ocupados =
            turno.cupo_total - turno.cupos_disponibles

          const porcentaje =
            turno.cupo_total > 0
              ? (ocupados / turno.cupo_total) * 100
              : 0

          const completo = turno.cupos_disponibles === 0

          return (
            <article
              key={turno.id}
              className="rounded-xl border border-slate-200 p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-[#142D50]">
                  {turno.nombre}
                </h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    completo
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-emerald-100 text-emerald-700'
                  }`}
                >
                  {completo ? 'Completo' : 'Disponible'}
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="text-slate-600">
                  Ocupación
                </span>

                <span className="font-semibold text-[#142D50]">
                  {ocupados} / {turno.cupo_total}
                </span>
              </div>

              <div
                role="progressbar"
                aria-label={`Ocupación de ${turno.nombre}`}
                aria-valuemin={0}
                aria-valuemax={turno.cupo_total}
                aria-valuenow={ocupados}
                className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100"
              >
                <div
                  className={`h-full rounded-full ${
                    completo ? 'bg-amber-400' : 'bg-emerald-500'
                  }`}
                  style={{ width: `${porcentaje}%` }}
                />
              </div>

              <p
                className={`mt-3 text-sm font-semibold ${
                  completo ? 'text-amber-700' : 'text-emerald-700'
                }`}
              >
                {completo
                  ? 'Sin cupos disponibles'
                  : `${turno.cupos_disponibles} cupos disponibles`}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function SolicitudesEnRevision({
  inscripciones,
}: {
  inscripciones: Inscripcion[]
}) {
  if (inscripciones.length === 0) {
    return (
      <section className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <ShieldCheck
            size={26}
            className="text-emerald-600"
          />

          <div>
            <h2 className="text-lg font-bold text-[#142D50]">
              Revisión administrativa
            </h2>

            <p className="text-sm text-slate-500">
              No hay solicitudes pendientes de revisión.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="mb-6 rounded-2xl bg-white p-5 shadow-sm sm:p-6">

      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
          <AlertCircle size={25} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#142D50]">
            Revisión administrativa
          </h2>

          <p className="text-sm text-slate-500">
            Solicitudes que requieren intervención del personal municipal.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {inscripciones.map((inscripcion) => (
          <article
            key={inscripcion.id}
            className="rounded-xl border border-amber-200 bg-amber-50/50 p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-bold text-[#142D50]">
                  {inscripcion.nombre_chico}{' '}
                  {inscripcion.apellido_chico}
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  DNI: {inscripcion.dni_chico}
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  {inscripcion.turno}
                </p>
              </div>

              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                En revisión
              </span>
            </div>

            <div className="mt-4 flex items-start gap-2 rounded-lg bg-white p-3 text-sm text-slate-600">
              <Info
                size={18}
                className="shrink-0 text-amber-600"
              />

              <p>
                Pendiente de revisión administrativa.
                El motivo específico se mostrará cuando
                el backend proporcione esa información.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                disabled
                title="Pendiente de integración con FastAPI"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-600"
              >
                <CheckCircle2 size={18} />
                Confirmar
              </button>

              <button
                type="button"
                disabled
                title="Pendiente de integración con FastAPI"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-500"
              >
                <XCircle size={18} />
                Rechazar
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Las acciones se habilitarán cuando estén
              definidos los permisos y las validaciones del backend.
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function GestionInscripcionPage() {
  const [busqueda, setBusqueda] = useState('')
  const [filtroEstado, setFiltroEstado] =
    useState<FiltroEstado>('Todas')

  const inscripciones = inscripcionesEjemplo

  const total = inscripciones.length

  const confirmadas = inscripciones.filter(
    (i) => i.estado === 'Confirmada'
  ).length

  const enRevision = inscripciones.filter(
    (i) => i.estado === 'En revisión'
  )

  const enEspera = inscripciones.filter(
    (i) => i.estado === 'Lista de espera'
  ).length

  const inscripcionesFiltradas = inscripciones.filter(
    (inscripcion) => {
      const texto = busqueda.trim().toLocaleLowerCase('es')

      const nombreCompleto =
        `${inscripcion.nombre_chico} ${inscripcion.apellido_chico}`
          .toLocaleLowerCase('es')

      const coincideBusqueda =
        nombreCompleto.includes(texto) ||
        inscripcion.dni_chico.includes(texto)

      const coincideEstado =
        filtroEstado === 'Todas' ||
        inscripcion.estado === filtroEstado

      return coincideBusqueda && coincideEstado
    }
  )

  const resultadosOrdenados =
    filtroEstado === 'Lista de espera'
      ? [...inscripcionesFiltradas].sort(
          (a, b) =>
            (a.posicion_espera ?? Infinity) -
            (b.posicion_espera ?? Infinity)
        )
      : inscripcionesFiltradas

  return (
    <main className="min-h-screen bg-[#F5F9FC] px-5 py-8 lg:px-10">

      <div className="mx-auto max-w-7xl">

        <header className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h1 className="text-3xl font-extrabold text-[#142D50]">
              Gestión de inscripciones
            </h1>

            <p className="mt-2 text-slate-600">
              Consultá las solicitudes, los cupos y las revisiones.
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

        <section
          aria-label="Resumen de inscripciones"
          className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          <ResumenCard
            titulo="Total"
            cantidad={total}
            icono={<ClipboardList size={26} />}
            fondoIcono="bg-blue-100 text-blue-700"
          />

          <ResumenCard
            titulo="Confirmadas"
            cantidad={confirmadas}
            icono={<CheckCircle2 size={26} />}
            fondoIcono="bg-emerald-100 text-emerald-700"
          />

          <ResumenCard
            titulo="En revisión"
            cantidad={enRevision.length}
            icono={<Clock3 size={26} />}
            fondoIcono="bg-amber-100 text-amber-700"
          />

          <ResumenCard
            titulo="Lista de espera"
            cantidad={enEspera}
            icono={<ListOrdered size={26} />}
            fondoIcono="bg-violet-100 text-violet-700"
          />
        </section>

        <DisponibilidadCupos />

        <SolicitudesEnRevision inscripciones={enRevision} />

        <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">

          <div className="mb-5 flex items-center gap-3">
            <UsersRound
              size={24}
              className="text-[#1769B3]"
            />

            <div>
              <h2 className="text-xl font-bold text-[#142D50]">
                Inscripciones registradas
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Buscá, filtrá y desplegá los detalles.
              </p>
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-3 md:flex-row">

            <div className="relative min-w-0 flex-1">
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
              <option value="Lista de espera">Lista de espera</option>
            </select>
          </div>

          <p className="mb-4 text-sm text-slate-500">
            {resultadosOrdenados.length}{' '}
            {resultadosOrdenados.length === 1
              ? 'resultado'
              : 'resultados'}
          </p>

          {resultadosOrdenados.length > 0 ? (
            <div className="flex flex-col gap-4">
              {resultadosOrdenados.map((inscripcion) => (
                <InscripcionesCard
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
                Probá con otros datos o cambiá el filtro.
              </p>

              <button
                type="button"
                onClick={() => {
                  setBusqueda('')
                  setFiltroEstado('Todas')
                }}
                className="mt-4 rounded-lg px-4 py-2 text-sm font-semibold text-[#1769B3] hover:bg-blue-50"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </section>

        <div className="mt-6 flex items-start gap-3 rounded-xl bg-blue-50 p-4 text-sm text-blue-800">
          <Info size={20} className="shrink-0" />

          <p>
            Los datos, cupos y estados mostrados son ficticios.
            Las confirmaciones, rechazos y asignaciones de cupos
            se realizarán mediante FastAPI cuando integremos
            el backend.
          </p>
        </div>

      </div>
    </main>
  )
}

export default GestionInscripcionPage


