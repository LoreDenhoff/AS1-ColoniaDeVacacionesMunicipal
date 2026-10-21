
import TurnoCard from '../../components/TurnoCard'
import type { Turno } from '../../types/turno'

// Datos de prueba 
const turnosEjemplo: Turno[] = [
  {
    id: 1,
    nombre: 'Turno mañana',
    sede: 'Polideportivo Municipal',
    fecha_desde: '2027-01-04',
    fecha_hasta: '2027-01-29',
    cupo_total: 100,
    temporada: 2027,
    cupos_disponibles: 45,
  },
  {
    id: 2,
    nombre: 'Turno tarde',
    sede: 'Club Municipal',
    fecha_desde: '2027-01-04',
    fecha_hasta: '2027-01-29',
    cupo_total: 100,
    temporada: 2027,
    cupos_disponibles: 0,
  },
]

function TurnosPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Turnos disponibles
          </h1>

          <p className="mt-2 text-slate-600">
            Consultá los turnos de la colonia de vacaciones municipal.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {turnosEjemplo.map((turno) => (
            <TurnoCard key={turno.id} turno={turno} />
          ))}
        </div>

      </div>
    </main>
  )
}

export default TurnosPage
