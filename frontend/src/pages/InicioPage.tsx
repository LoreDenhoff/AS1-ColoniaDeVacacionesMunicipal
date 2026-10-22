import BannerBienvenida from '../components/BannerBienvenida'
import AccesosRapidos from '../components/AccesosRapidos'
import InformacionColonia from '../components/InformacionColonia'

function InicioPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F5F9FC] xl:h-dvh xl:min-h-0">

      {/* Banner */}
      <div className="shrink-0">
        <BannerBienvenida />
      </div>

      {/* Contenido principal */}
      <div className="flex min-h-0 flex-1 flex-col gap-4 px-5 py-4 lg:px-6">

        {/* Accesos rápidos */}
        <div className="shrink-0">
          <AccesosRapidos />
        </div>

        {/* Información de la colonia */}
        <div className="min-h-0 flex-1">
          <InformacionColonia />
        </div>

      </div>

    </main>
  )
}

export default InicioPage


