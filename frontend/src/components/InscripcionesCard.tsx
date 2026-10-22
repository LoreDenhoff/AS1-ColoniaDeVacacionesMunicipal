
import { useState } from 'react'
import {
  UserRound,
  CalendarDays,
  MapPin,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

import type { Inscripcion } from '../data/inscripcionesEjemplo'

interface InscripcionCardProps {
  inscripcion: Inscripcion
}

function formatearFecha(fecha: string) {
  const [anio, mes, dia] = fecha.split('-')
  return `${dia}/${mes}/${anio}`
}

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
    <article className="self-start overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md">

      <div className="p-5">

        <div className="flex flex-wrap items-start justify-between gap-3">

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
              <UserRound size={25} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#142D50]">
                {inscripcion.nombre_chico} {inscripcion.apellido_chico}
              </h2>

              <p className="text-sm text-slate-500">
                Inscripción #{inscripcion.id}
              </p>
            </div>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              confirmada
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-amber-100 text-amber-700'
            }`}
          >
            {inscripcion.estado}
          </span>

        </div>

        <div className="mt-5 space-y-3 border-t border-slate-100 pt-4">

          <div className="flex items-center gap-3 text-sm text-slate-600">
            <CalendarDays size={18} className="shrink-0 text-blue-600" />

            <span>
              {inscripcion.turno} · Temporada {inscripcion.temporada}
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-600">
            <MapPin size={18} className="shrink-0 text-blue-600" />
            <span>{inscripcion.sede}</span>
          </div>

        </div>

        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={() => setExpandida(!expandida)}
            aria-expanded={expandida}
            aria-controls={`detalle-inscripcion-${inscripcion.id}`}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold text-[#1769B3] transition hover:bg-blue-50 hover:text-blue-800"
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

      <div
        id={`detalle-inscripcion-${inscripcion.id}`}
        hidden={!expandida}
        className={expandida ? 'border-t border-slate-100 bg-slate-50/70 p-5' : ''}
      >

        <section className="mb-6">

          <h3 className="mb-4 text-sm font-bold text-[#142D50]">
            Datos del participante
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <DatoDetalle
              etiqueta="Nombre"
              valor={inscripcion.nombre_chico}
            />

            <DatoDetalle
              etiqueta="Apellido"
              valor={inscripcion.apellido_chico}
            />

            <DatoDetalle
              etiqueta="DNI"
              valor={inscripcion.dni_chico}
            />

            <DatoDetalle
              etiqueta="Fecha de nacimiento"
              valor={formatearFecha(inscripcion.fecha_nacimiento)}
            />
          </div>
        </section>

        <section className="mb-6 border-t border-slate-200 pt-5">

          <h3 className="mb-4 text-sm font-bold text-[#142D50]">
            Datos del tutor
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <DatoDetalle
              etiqueta="Nombre"
              valor={inscripcion.nombre_tutor}
            />

            <DatoDetalle
              etiqueta="Apellido"
              valor={inscripcion.apellido_tutor}
            />

            <DatoDetalle
              etiqueta="DNI"
              valor={inscripcion.dni_tutor}
            />

            <DatoDetalle
              etiqueta="Correo electrónico"
              valor={inscripcion.email_tutor}
            />

            <DatoDetalle
              etiqueta="Teléfono"
              valor={inscripcion.telefono_tutor}
            />

          </div>
        </section>

        <section className="border-t border-slate-200 pt-5">

          <h3 className="mb-4 text-sm font-bold text-[#142D50]">
            Información de la inscripción
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <DatoDetalle
              etiqueta="Turno"
              valor={inscripcion.turno}
            />

            <DatoDetalle
              etiqueta="Sede"
              valor={inscripcion.sede}
            />

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

    </article>
  )
}

export default InscripcionCard
