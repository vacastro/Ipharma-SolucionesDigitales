import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  //const isAuth = !!localStorage.getItem('token');
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};