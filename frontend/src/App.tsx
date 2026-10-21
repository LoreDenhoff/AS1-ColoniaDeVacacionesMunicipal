
import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import TurnosPage from './pages/tutor/TurnosPage'

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route
          path="/"
          element={<Navigate to="/tutor/turnos" replace />}
        />

        <Route
          path="/tutor/turnos"
          element={<TurnosPage />}
        />
      </Route>
    </Routes>
  )
}

export default App
