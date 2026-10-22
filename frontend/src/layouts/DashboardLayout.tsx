import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Menu } from 'lucide-react'
import Sidebar from '../components/Sidebar'

function DashboardLayout() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <div className="flex min-h-dvh bg-[#F5F9FC]">

      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <header className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center justify-between bg-[#172E4D] px-5 text-white lg:hidden">

        <span className="text-lg font-bold">
          Colonia Municipal
        </span>

        <button
          type="button"
          onClick={() => setMenuAbierto(true)}
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
          aria-controls="menu-movil"
          className="rounded-lg p-2 hover:bg-white/10"
        >
          <Menu size={26} />
        </button>
      </header>

      {menuAbierto && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMenuAbierto(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="menu-movil"
        className={`
          fixed inset-y-0 left-0 z-50 w-60
          transform transition-transform duration-300
          lg:hidden
          ${menuAbierto ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <Sidebar onNavigate={() => setMenuAbierto(false)} />
      </div>

      <div className="min-w-0 flex-1 pt-16 lg:pt-0">
        <Outlet />
      </div>

    </div>
  )
}

export default DashboardLayout
