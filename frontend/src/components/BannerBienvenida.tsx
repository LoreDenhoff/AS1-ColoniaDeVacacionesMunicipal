
function BannerBienvenida() {
  return (
    <section
      className="relative flex h-[220px] items-center overflow-hidden bg-white bg-no-repeat lg:h-[250px]"
      style={{
        backgroundImage: "url('/images/banner-colonia.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Texto de bienvenida */}
      <div className="relative z-10 w-[65%] px-6 py-6 lg:w-[60%] lg:px-12">
        <h1 className="text-3xl font-extrabold leading-tight text-[#142D50] lg:text-4xl xl:text-5xl">
          Bienvenidos a la

          <span className="mt-2 block text-[#0862AE]">
            Colonia Municipal
          </span>
        </h1>

        <p className="mt-4 text-sm text-[#243B5A] lg:text-lg">
          Un verano para jugar, aprender y hacer amigos
        </p>
      </div>
    </section>
  )
}

export default BannerBienvenida
