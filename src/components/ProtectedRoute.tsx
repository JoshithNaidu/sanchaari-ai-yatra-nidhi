
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user, isAuthenticated, isLoading } = useCentralizedAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    // Redirect to appropriate login page based on intended access
    const isAdminRoute = allowedRoles.includes('admin');
    return <Navigate to={isAdminRoute ? "/admin/login" : "/auth/login"} replace />;
  }

  if (!allowedRoles.includes(user.userType)) {
    // Redirect to user's appropriate homepage
    const homePath = user.userType === 'admin' ? '/admin' : '/';
    return <Navigate to={homePath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
