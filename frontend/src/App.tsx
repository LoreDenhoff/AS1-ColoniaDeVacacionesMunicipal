
import { Routes, Route, Navigate } from 'react-router-dom'

import DashboardLayout from './layouts/DashboardLayout'
import InicioPage from './pages/InicioPage'
import NuevaInscripcionPage from './pages/tutor/NuevaInscripcionPage'
import MisInscripcionesPage from './pages/tutor/MisInscripcionesPage'
import TurnosPage from './pages/tutor/TurnosPage'
import GestionInscripcionesPage from './pages/administrativo/GestionInscripcionPage'

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>

        <Route
          path="/"
          element={<InicioPage />}
        />

        <Route
          path="/inscripciones/nueva"
          element={<NuevaInscripcionPage />}
        />

        <Route
            path="/administrativo/inscripciones"
            element={<GestionInscripcionesPage />}
         />
         
        <Route
          path="/tutor/mis-inscripciones"
          element={<MisInscripcionesPage />}
        />

        <Route
          path="/tutor/turnos"
          element={<TurnosPage />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Route>
    </Routes>
  )
}

export default App

