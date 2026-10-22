import {
  CalendarDays,
  CalendarCheck,
  UsersRound,
  ClipboardList,
  Clock3,
  Waves,
  Volleyball,
  Palette,
  Trees,
  Sun,
} from "lucide-react";

function InformacionColonia() {
  const actividades = [
    {
      nombre: "Natación",
      icono: Waves,
      color: "text-sky-500",
      fondo: "bg-sky-50",
    },
    {
      nombre: "Deportes",
      icono: Volleyball,
      color: "text-orange-500",
      fondo: "bg-orange-50",
    },
    {
      nombre: "Talleres",
      icono: Palette,
      color: "text-pink-500",
      fondo: "bg-pink-50",
    },
    {
      nombre: "Naturaleza",
      icono: Trees,
      color: "text-green-600",
      fondo: "bg-green-50",
    },
    {
      nombre: "Juegos grupales",
      icono: UsersRound,
      color: "text-violet-600",
      fondo: "bg-violet-50",
    },
    {
      nombre: "Recreación",
      icono: Sun,
      color: "text-amber-500",
      fondo: "bg-amber-50",
    },
  ];

  return (
    <section
      className="grid grid-cols-1 gap-4 xl:grid-cols-5"
      aria-label="Información general de la colonia"
    >
      <article className="rounded-2xl bg-white p-6 shadow-sm xl:col-span-3">
        <h2 className="mb-5 text-2xl font-bold text-[#142D50]">
          Información de la colonia
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
            <CalendarDays size={30} className="shrink-0 text-blue-600" />

            <div>
              <p className="text-sm text-slate-500">Inicio</p>

              <p className="font-bold text-[#142D50]">A confirmar</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
            <CalendarCheck size={30} className="shrink-0 text-pink-500" />

            <div>
              <p className="text-sm text-slate-500">Fin</p>

              <p className="font-bold text-[#142D50]">A confirmar</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
            <UsersRound size={30} className="shrink-0 text-violet-600" />

            <div>
              <p className="text-sm text-slate-500">Edades</p>

              <p className="font-bold text-[#142D50]">6 a 12 años</p>
            </div>
          </div>
        </div>
      </article>

      <article className="rounded-2xl bg-white p-6 shadow-sm xl:col-span-2">
        <div className="mb-5 flex items-center gap-3">
          <ClipboardList size={27} className="text-orange-500" />

          <h2 className="text-2xl font-bold text-[#142D50]">Inscripciones</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <UsersRound size={26} className="mb-2 text-blue-600" />

            <p className="text-xl font-bold text-[#142D50]">600</p>

            <p className="text-sm text-slate-600">Cupos previstos</p>
          </div>

          <div className="rounded-xl bg-violet-50 p-4">
            <Clock3 size={26} className="mb-2 text-violet-600" />

            <p className="text-xl font-bold text-[#142D50]">3 semanas</p>

            <p className="text-sm text-slate-600">Período de inscripción</p>
          </div>
        </div>
      </article>

      <article className="rounded-2xl bg-white p-6 shadow-sm xl:col-span-3">
        <h2 className="mb-5 text-2xl font-bold text-[#142D50]">Actividades</h2>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {actividades.map((actividad) => {
            const Icono = actividad.icono;

            return (
              <div
                key={actividad.nombre}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div
                  className={`
                    flex h-16 w-16 items-center justify-center
                    rounded-2xl
                    ${actividad.fondo}
                  `}
                >
                  <Icono
                    size={34}
                    className={actividad.color}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                <span className="text-sm font-medium text-[#142D50]">
                  {actividad.nombre}
                </span>
              </div>
            );
          })}
        </div>
      </article>

      <article className="relative min-h-[220px] overflow-hidden rounded-2xl bg-[#FFF3D8] p-7 shadow-sm xl:col-span-2">
        <Sun
          size={80}
          strokeWidth={1.5}
          className="absolute right-4 top-2 text-yellow-400"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[60%]">
          <h2 className="text-3xl font-extrabold leading-tight text-[#142D50]">
            ¡Un verano inolvidable!
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-[#243B5A]">
            Deporte, amistad y diversión en un entorno seguro.
          </p>
        </div>

        <img
          src="/images/palmera.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 z-0 w-[45%] max-w-[220px] object-contain"
        />
      </article>
    </section>
  );
}

export default InformacionColonia;
