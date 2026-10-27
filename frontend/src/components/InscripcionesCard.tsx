
import { useState } from 'react'
import {
  UserRound,
  CalendarDays,
  MapPin,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

import type { Inscripcion } from '../data/inscripcionesEjemplo'

// Propiedades que recibe la tarjeta
interface InscripcionCardProps {
  inscripcion: Inscripcion
}

// Formatea las fechas de YYYY-MM-DD a DD/MM/YYYY
function formatearFecha(fecha: string) {
  const [anio, mes, dia] = fecha.split('-')
  return `${dia}/${mes}/${anio}`
}

// Componente reutilizable para mostrar un dato
interface DatoDetalleProps {
  etiqueta: string
  valor: string
}

function DatoDetalle({ etiqueta, valor }: DatoDetalleProps) {
  return (
    <div className="min-w-0">
      <p className="text-xs text-slate-500">
        {etiqueta}
      </p>

      <p className="mt-1 break-words text-sm font-semibold text-[#142D50]">
        {valor}
      </p>
    </div>
  )
}

function InscripcionCard({ inscripcion }: InscripcionCardProps) {
  const [expandida, setExpandida] = useState(false)

  const confirmada = inscripcion.estado === 'Confirmada'

  return (
    <article className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md">

      {/* RESUMEN DE LA INSCRIPCIÓN */}
      <div className="flex flex-col gap-4 p-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex min-w-0 items-start gap-3">

          <div className="shrink-0 rounded-xl bg-blue-100 p-3 text-blue-700">
            <UserRound size={23} />
          </div>

          <div className="min-w-0">
            <h3 className="font-bold text-[#142D50]">
              {inscripcion.nombre_chico} {inscripcion.apellido_chico}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              DNI: {inscripcion.dni_chico}
            </p>

            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">

              <span className="inline-flex items-center gap-1">
                <CalendarDays size={14} />
                {inscripcion.turno} · Temporada {inscripcion.temporada}
              </span>

              <span className="inline-flex items-center gap-1">
                <MapPin size={14} />
                {inscripcion.sede}
              </span>

            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 lg:justify-end">

          {/* ESTADO */}
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              confirmada
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-amber-100 text-amber-700'
            }`}
          >
            {inscripcion.estado}
          </span>

          {/* BOTÓN DESPLEGABLE */}
          <button
            type="button"
            onClick={() => setExpandida((anterior) => !anterior)}
            aria-expanded={expandida}
            aria-controls={`detalle-inscripcion-${inscripcion.id}`}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-[#1769B3] transition hover:bg-blue-50"
          >
            {expandida ? 'Ocultar detalle' : 'Ver detalle'}

            {expandida ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>

        </div>
      </div>

      {/* DETALLE DESPLEGABLE */}
      {expandida && (
        <div
          id={`detalle-inscripcion-${inscripcion.id}`}
          className="border-t border-slate-200 bg-slate-50/70 p-5"
        >

          {/* DATOS DEL CHICO */}
          <section>
            <h4 className="mb-4 text-sm font-bold text-[#142D50]">
              Datos del participante
            </h4>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

              <DatoDetalle etiqueta="Nombre" valor={inscripcion.nombre_chico} />
              <DatoDetalle etiqueta="Apellido" valor={inscripcion.apellido_chico} />
              <DatoDetalle etiqueta="DNI" valor={inscripcion.dni_chico} />
              <DatoDetalle
                etiqueta="Fecha de nacimiento"
                valor={formatearFecha(inscripcion.fecha_nacimiento)}
              />

            </div>
          </section>

          {/* DATOS DEL TUTOR */}
          <section className="mt-5 border-t border-slate-200 pt-5">
            <h4 className="mb-4 text-sm font-bold text-[#142D50]">
              Datos del tutor
            </h4>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

              <DatoDetalle etiqueta="Nombre" valor={inscripcion.nombre_tutor} />
              <DatoDetalle etiqueta="Apellido" valor={inscripcion.apellido_tutor} />
              <DatoDetalle etiqueta="DNI" valor={inscripcion.dni_tutor} />
              <DatoDetalle etiqueta="Correo electrónico" valor={inscripcion.email_tutor} />
              <DatoDetalle etiqueta="Teléfono" valor={inscripcion.telefono_tutor} />

            </div>
          </section>

          {/* INFORMACIÓN DE LA INSCRIPCIÓN */}
          <section className="mt-5 border-t border-slate-200 pt-5">
            <h4 className="mb-4 text-sm font-bold text-[#142D50]">
              Información de la inscripción
            </h4>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

              <DatoDetalle etiqueta="Turno" valor={inscripcion.turno} />
              <DatoDetalle etiqueta="Sede" valor={inscripcion.sede} />
              <DatoDetalle
                etiqueta="Temporada"
                valor={String(inscripcion.temporada)}
              />
              <DatoDetalle
                etiqueta="Fecha de solicitud"
                valor={formatearFecha(inscripcion.fecha_inscripcion)}
              />

            </div>
          </section>

        </div>
      )}

    </article>
  )
}

export default InscripcionCard
