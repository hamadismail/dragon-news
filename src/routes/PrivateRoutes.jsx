import React, { use } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router';
import Spinner from '../components/ui/Spinner';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) return <Spinner />;

  if (user && user?.email) {
    return children;
  }

  return <Navigate to="/auth/login" />;
};

export default PrivateRoutes;
