import type { Turno } from '../types/turno'

interface TurnoCardProps{
    turno: Turno
}

function TurnoCard({ turno}: TurnoCardProps){
    const hayCupos = turno.cupos_disponibles > 0

    return(
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-800">
          {turno.nombre}
        </h2>

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            hayCupos
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {hayCupos ? 'Disponible' : 'Sin cupos'}
        </span>
      </div>

      <p className="mb-2 text-slate-600">
        <strong>Sede:</strong> {turno.sede}
      </p>

      <p className="mb-2 text-slate-600">
        <strong>Temporada:</strong> {turno.temporada}
      </p>

      <p className="mb-4 text-slate-600">
        <strong>Cupos disponibles:</strong> {turno.cupos_disponibles} de {turno.cupo_total}
      </p>

      <button
        type="button"
        disabled={!hayCupos}
        className="w-full rounded-lg bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        Seleccionar turno
      </button>
        </article>
    )
}

export default TurnoCard