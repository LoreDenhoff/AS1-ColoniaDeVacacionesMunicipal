
function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="flex w-full items-center px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-800 text-lg font-bold text-white">
            CM
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-800">
              Colonia Municipal
            </h1>
            <p className="text-sm text-slate-500">
              Sistema de inscripción
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
