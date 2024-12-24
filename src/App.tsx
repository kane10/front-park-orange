import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Vehicles } from './pages/Vehicles';
import { Users } from './pages/Users';
import { Drivers } from './pages/Drivers';
import { Reservations } from './pages/Reservations';
import { Reports } from './pages/Reports';
import { Statistics } from './pages/Statistics';
import { Settings } from './pages/Settings';
import { Assignments } from './pages/Assignments';
import { RequestReporting } from './pages/RequestReporting';
import { Profile } from './pages/Profile';
import { Maintenance } from './pages/Maintenance';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        
        {/* Routes protégées */}
        <Route path="/dashboard" element={<PrivateRoute><Layout><Dashboard /></Layout></PrivateRoute>} />
        <Route path="/vehicules" element={<PrivateRoute><Layout><Vehicles /></Layout></PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute><Layout><Users /></Layout></PrivateRoute>} />
        <Route path="/drivers" element={<PrivateRoute><Layout><Drivers /></Layout></PrivateRoute>} />
        <Route path="/reservations" element={<PrivateRoute><Layout><Reservations /></Layout></PrivateRoute>} />
        <Route path="/assignments" element={<PrivateRoute><Layout><Assignments /></Layout></PrivateRoute>} />
        <Route path="/maintenance" element={<PrivateRoute><Layout><Maintenance /></Layout></PrivateRoute>} />
        <Route path="/request-reporting" element={<PrivateRoute><Layout><RequestReporting /></Layout></PrivateRoute>} />
        <Route path="/reports" element={<PrivateRoute><Layout><Reports /></Layout></PrivateRoute>} />
        <Route path="/statistics" element={<PrivateRoute><Layout><Statistics /></Layout></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><Layout><Settings /></Layout></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Layout><Profile /></Layout></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}