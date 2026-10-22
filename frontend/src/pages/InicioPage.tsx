
import BannerBienvenida from '../components/BannerBienvenida'
import AccesosRapidos from '../components/AccesosRapidos'

function InicioPage() {
  return (
    <main className="min-h-screen bg-[#F5F9FC]">

      {/* Banner de bienvenida */}
      <BannerBienvenida />

      {/* Contenido principal */}
      <div className="px-6 py-8 lg:px-8">

        {/* Accesos rápidos */}
        <AccesosRapidos />

      </div>

    </main>
  )
}

export default InicioPage
