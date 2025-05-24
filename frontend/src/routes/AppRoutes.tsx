import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardLayout } from '../shared/layout/DashboardLayout';
import PageLoader from '../shared/pageLoader/PageLoader';

const MedicamentosPage = lazy(() => import('../pages/medicamentos/MedicamentosPage'));
const LoginPage = lazy(() => import('../pages/login/LoginPage'));
const RegisterPage = lazy(() => import('../pages/register/RegisterPage'));

export const AppRoutes = () => (
  <Router>
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Rutas privadas */}
        <Route element={<PrivateRoute />}>
          <Route element={<DashboardLayout />}>
            <Route
              path="/medicamentos"
              element={<MedicamentosPage />}
            />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  </Router>
);