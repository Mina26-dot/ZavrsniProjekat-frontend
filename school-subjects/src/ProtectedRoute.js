
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; 
  const userRole = localStorage.getItem('userRole'); 

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;