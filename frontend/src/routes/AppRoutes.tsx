import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardLayout } from '../shared/layout/dashboardLayout';
import { LoginForm } from '../pages/login/loginForm';

const MedicamentosPage = lazy(() => import('../pages/medicamentos/MedicamentosPage'));
const LoginPage = () => <LoginForm />;

export const AppRoutes = () => (
  <Router>
    <Routes>
      {/* Rutas públicas */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Rutas privadas */}
      <Route element={<PrivateRoute />}>
        <Route element={<DashboardLayout />}>
          <Route
            path="/medicamentos"
            element={
              <Suspense fallback={<div>Cargando...</div>}>
                <MedicamentosPage />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  </Router>
);