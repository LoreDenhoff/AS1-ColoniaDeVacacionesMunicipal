
import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import InicioPage from './pages/InicioPage'
import TurnosPage from './pages/tutor/TurnosPage'

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
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Route>
    </Routes>
  )
}

export default App
