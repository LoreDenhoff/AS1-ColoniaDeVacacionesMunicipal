
import { Routes, Route, Navigate } from 'react-router-dom'
import TurnosPage from './pages/tutor/TurnosPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/tutor/turnos" replace />} />
      <Route path="/tutor/turnos" element={<TurnosPage />} />
    </Routes>
  )
}

export default App
