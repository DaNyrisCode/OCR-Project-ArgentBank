/* eslint-disable react/prop-types */

//! ROUTE SECURISÉ VERS LA PAGE USER
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useMemo } from 'react';

// Si non authentifié, redirige vers la page d'accueil
const PrivateRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  const isAuthenticated = useMemo(() => !!token, [token]);

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;


