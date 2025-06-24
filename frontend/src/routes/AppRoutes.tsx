import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardLayout } from '../shared/layout/DashboardLayout';
import PageLoader from '../shared/pageLoader/PageLoader';
import BusquedaMedicamentosPage from '../pages/medicamentos/BusquedaMedicamentosPage';
import IngresarMedicamentoPage from '../pages/medicamentos/IngresarMedicamentoPage';
import ControlVencimientosPage from '../pages/medicamentos/ControlVencimientosPage';



const MedicamentosPage = lazy(() => import('../pages/medicamentos/MedicamentosPage'));
const LoginPage = lazy(() => import('../pages/login/LoginPage'));
const RegisterPage = lazy(() => import('../pages/register/RegisterPage'));
const MenuPrincipalPage = lazy(() => import('../pages/menuPrincipal/MenuPrincipal'));

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
          <Route path="/menu-principal" element={<MenuPrincipalPage />} />
          <Route element={<DashboardLayout />}>
            <Route
              path="/medicamentos"
              element={<MedicamentosPage />}
            />
            <Route path="/medicamentos/buscar" element={<BusquedaMedicamentosPage />} />
            <Route path="/medicamentos/ingresar" element={<IngresarMedicamentoPage />} />
            <Route path="/medicamentos/vencimientos" element={<ControlVencimientosPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  </Router>
);