import React, { use } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../components/ui/Spinner';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) return <Spinner />;

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivateRoutes;
