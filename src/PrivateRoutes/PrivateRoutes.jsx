import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  if (loading) {
   return <progress className="w-56 progress"></progress>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to='/login' replace></Navigate>;
};

export default PrivateRoutes;