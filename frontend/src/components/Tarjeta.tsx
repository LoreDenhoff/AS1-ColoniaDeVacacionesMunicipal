import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { ChevronRight } from 'lucide-react'

interface TarjetaProps {
  titulo: string
  descripcion: string
  icono: LucideIcon
  fondo: string
  colorIcono: string
  ruta?: string
}

function Tarjeta({
  titulo,
  descripcion,
  icono: Icono,
  fondo,
  colorIcono,
  ruta,
}: TarjetaProps) {

  const contenido = (
    <>
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white ${colorIcono}`}
      >
        <Icono size={28} strokeWidth={2} aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-bold text-[#142D50]">
          {titulo}
        </h3>

        <p className="mt-1 text-sm text-slate-600">
          {descripcion}
        </p>
      </div>

      {ruta && (
        <ChevronRight
          size={24}
          className="shrink-0 text-[#142D50]"
          aria-hidden="true"
        />
      )}
    </>
  )

  const estilos = `
    flex min-h-[105px] items-center gap-4
    rounded-2xl p-4 shadow-sm
    ${fondo}
  `

  if (ruta) {
    return (
      <Link
        to={ruta}
        className={`
          ${estilos}
          transition-all duration-200
          hover:-translate-y-1 hover:shadow-md
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-blue-600
        `}
      >
        {contenido}
      </Link>
    )
  }

  return (
    <article className={estilos}>
      {contenido}
    </article>
  )
}

export default Tarjeta
