import { Routes, Route, Navigate } from 'react-router-dom'

import DashboardLayout from './layouts/DashboardLayout'
import InicioPage from './pages/InicioPage'
import TurnosPage from './pages/tutor/TurnosPage'
import NuevaInscripcionPage from './pages/tutor/NuevaInscripcionPage'

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>

        <Route path="/" element={<InicioPage />} />

        <Route
          path="/tutor/turnos"
          element={<TurnosPage />}
        />

        <Route
          path="/inscripciones/nueva"
          element={<NuevaInscripcionPage />}
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

