
import { useState, type FormEvent } from 'react'
import {
  CalendarDays,
  UsersRound,
  UserRound,
  ArrowRight,
  Info,
} from 'lucide-react'

interface FormularioInscripcion {
  turno_id: string
  dni_chico: string
  nombre_chico: string
  apellido_chico: string
  fecha_nacimiento: string
  dni_tutor: string
  nombre_tutor: string
  apellido_tutor: string
  email_tutor: string
  telefono_tutor: string
}

const datosIniciales: FormularioInscripcion = {
  turno_id: '',
  dni_chico: '',
  nombre_chico: '',
  apellido_chico: '',
  fecha_nacimiento: '',
  dni_tutor: '',
  nombre_tutor: '',
  apellido_tutor: '',
  email_tutor: '',
  telefono_tutor: '',
}

const estiloInput =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100'

function NuevaInscripcionPage() {
  const [formulario, setFormulario] =
    useState<FormularioInscripcion>(datosIniciales)

  function actualizarCampo(
    campo: keyof FormularioInscripcion,
    valor: string
  ) {
    setFormulario((anterior) => ({
      ...anterior,
      [campo]: valor,
    }))
  }

  // Envío pendiente de conexión con FastAPI
  function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()

    // Todavía no enviamos datos al backend.
    // Primero debemos integrar Keycloak y revisar
    // el contrato de inscripción.
  }

  return (
    <main className="min-h-screen bg-[#F5F9FC] px-5 py-8 lg:px-10">
      <div className="mx-auto max-w-5xl">

        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-[#142D50]">
            Nueva inscripción
          </h1>

          <p className="mt-2 text-slate-600">
            Completá los datos para solicitar un cupo en la
            colonia de vacaciones municipal.
          </p>
        </header>

        <form onSubmit={manejarEnvio} className="space-y-6">

          <section className="rounded-2xl bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                <CalendarDays size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#142D50]">
                  Selección del turno
                </h2>
                <p className="text-sm text-slate-500">
                  Elegí el turno al que querés inscribir al chico.
                </p>
              </div>
            </div>

            <label
              htmlFor="turno"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Turno disponible *
            </label>

            <select
              id="turno"
              value={formulario.turno_id}
              onChange={(e) =>
                actualizarCampo('turno_id', e.target.value)
              }
              className={estiloInput}
              required
              disabled
            >
              <option value="">
                Pendiente de conexión con el sistema de turnos
              </option>
            </select>

            <div className="mt-4 flex gap-2 rounded-xl bg-blue-50 p-4 text-sm text-blue-800">
              <Info size={20} className="shrink-0" />
              <p>
                Los turnos disponibles se cargarán desde el sistema
                cuando integremos la autenticación con Keycloak.
              </p>
            </div>

          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                <UsersRound size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#142D50]">
                  Datos del chico
                </h2>
                <p className="text-sm text-slate-500">
                  Ingresá los datos del participante.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div>
                <label
                  htmlFor="nombre_chico"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nombre *
                </label>

                <input
                  id="nombre_chico"
                  type="text"
                  minLength={2}
                  maxLength={100}
                  required
                  value={formulario.nombre_chico}
                  onChange={(e) =>
                    actualizarCampo('nombre_chico', e.target.value)
                  }
                  className={estiloInput}
                  placeholder="Nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="apellido_chico"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Apellido *
                </label>

                <input
                  id="apellido_chico"
                  type="text"
                  minLength={2}
                  maxLength={100}
                  required
                  value={formulario.apellido_chico}
                  onChange={(e) =>
                    actualizarCampo('apellido_chico', e.target.value)
                  }
                  className={estiloInput}
                  placeholder="Apellido"
                />
              </div>

              <div>
                <label
                  htmlFor="dni_chico"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  DNI *
                </label>

                <input
                  id="dni_chico"
                  type="text"
                  minLength={6}
                  maxLength={20}
                  required
                  value={formulario.dni_chico}
                  onChange={(e) =>
                    actualizarCampo('dni_chico', e.target.value)
                  }
                  className={estiloInput}
                  placeholder="DNI sin puntos"
                />
              </div>

              <div>
                <label
                  htmlFor="fecha_nacimiento"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Fecha de nacimiento *
                </label>

                <input
                  id="fecha_nacimiento"
                  type="date"
                  required
                  max={new Date().toLocaleDateString('en-CA')}
                  value={formulario.fecha_nacimiento}
                  onChange={(e) =>
                    actualizarCampo('fecha_nacimiento', e.target.value)
                  }
                  className={estiloInput}
                />
              </div>

            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-violet-100 p-3 text-violet-700">
                <UserRound size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#142D50]">
                  Datos del tutor
                </h2>
                <p className="text-sm text-slate-500">
                  Ingresá los datos de la persona responsable.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div>
                <label
                  htmlFor="nombre_tutor"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nombre *
                </label>

                <input
                  id="nombre_tutor"
                  type="text"
                  minLength={2}
                  maxLength={120}
                  required
                  value={formulario.nombre_tutor}
                  onChange={(e) =>
                    actualizarCampo('nombre_tutor', e.target.value)
                  }
                  className={estiloInput}
                  placeholder="Nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="apellido_tutor"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Apellido *
                </label>

                <input
                  id="apellido_tutor"
                  type="text"
                  minLength={2}
                  maxLength={120}
                  required
                  value={formulario.apellido_tutor}
                  onChange={(e) =>
                    actualizarCampo('apellido_tutor', e.target.value)
                  }
                  className={estiloInput}
                  placeholder="Apellido"
                />
              </div>

              <div>
                <label
                  htmlFor="dni_tutor"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  DNI *
                </label>

                <input
                  id="dni_tutor"
                  type="text"
                  minLength={6}
                  maxLength={20}
                  required
                  value={formulario.dni_tutor}
                  onChange={(e) =>
                    actualizarCampo('dni_tutor', e.target.value)
                  }
                  className={estiloInput}
                  placeholder="DNI sin puntos"
                />
              </div>

              <div>
                <label
                  htmlFor="email_tutor"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Correo electrónico *
                </label>

                <input
                  id="email_tutor"
                  type="email"
                  required
                  value={formulario.email_tutor}
                  onChange={(e) =>
                    actualizarCampo('email_tutor', e.target.value)
                  }
                  className={estiloInput}
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div>
                <label
                  htmlFor="telefono_tutor"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Teléfono *
                </label>

                <input
                  id="telefono_tutor"
                  type="tel"
                  minLength={6}
                  maxLength={50}
                  required
                  value={formulario.telefono_tutor}
                  onChange={(e) =>
                    actualizarCampo('telefono_tutor', e.target.value)
                  }
                  className={estiloInput}
                  placeholder="Teléfono de contacto"
                />
              </div>

            </div>
          </section>

          <div className="flex justify-end pb-6">
            <button
              type="submit"
              disabled
              className="flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              Solicitar inscripción
              <ArrowRight size={20} />
            </button>
          </div>

        </form>
      </div>
    </main>
  )
}

export default NuevaInscripcionPage
