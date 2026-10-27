
import { useState } from 'react'
import {
  UserRound,
  CalendarDays,
  MapPin,
  ChevronDown,
  ChevronUp,
  Clock3,
} from 'lucide-react'

import type { Inscripcion } from '../data/inscripcionesEjemplo'

interface InscripcionesCardProps {
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

function InscripcionesCard({ inscripcion }: InscripcionesCardProps) {
  const [expandida, setExpandida] = useState(false)

  const confirmada = inscripcion.estado === 'Confirmada'
  const enEspera = inscripcion.estado === 'Lista de espera'

  const estiloEstado = confirmada
    ? 'bg-emerald-100 text-emerald-700'
    : enEspera
      ? 'bg-violet-100 text-violet-700'
      : 'bg-amber-100 text-amber-700'

  return (
    <article className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md">

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

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${estiloEstado}`}
          >
            {inscripcion.estado}
          </span>

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

      {expandida && (
        <div
          id={`detalle-inscripcion-${inscripcion.id}`}
          className="border-t border-slate-200 bg-slate-50/70 p-5"
        >

          <section>
            <h4 className="mb-4 text-sm font-bold text-[#142D50]">
              Datos del participante
            </h4>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

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

          <section className="mt-5 border-t border-slate-200 pt-5">

            <h4 className="mb-4 text-sm font-bold text-[#142D50]">
              Datos del tutor
            </h4>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

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

          <section className="mt-5 border-t border-slate-200 pt-5">

            <h4 className="mb-4 text-sm font-bold text-[#142D50]">
              Información de la inscripción
            </h4>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

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

          {enEspera && (
            <section className="mt-5 rounded-xl border border-violet-200 bg-violet-50 p-5">

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-100 p-3 text-violet-700">
                  <Clock3 size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-violet-800">
                    Lista de espera
                  </h4>

                  <p className="mt-1 text-sm text-violet-700">
                    Esta inscripción se encuentra en lista de espera.
                  </p>
                </div>
              </div>

              {inscripcion.posicion_espera !== undefined ? (
                <div className="mt-5 flex items-center gap-3">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-200 text-xl font-extrabold text-violet-800">
                    {inscripcion.posicion_espera}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-violet-800">
                      Posición en la lista
                    </p>

                    <p className="text-xs text-violet-600">
                      La asignación de cupos se realizará según
                      el orden de espera.
                    </p>
                  </div>

                </div>
              ) : (
                <p className="mt-4 text-sm text-violet-700">
                  Posición pendiente de asignación.
                </p>
              )}

            </section>
          )}

        </div>
      )}

    </article>
  )
}

export default InscripcionesCard

