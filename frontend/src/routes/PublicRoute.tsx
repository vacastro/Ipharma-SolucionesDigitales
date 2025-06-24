import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const isAuth = !!localStorage.getItem('token');
  return isAuth ? <Navigate to="/menu-principal" replace /> : <Outlet />;
};