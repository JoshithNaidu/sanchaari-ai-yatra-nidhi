
import React from 'react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { Navigate } from 'react-router-dom';
import Index from '@/pages/Index';
import AdminDashboard from '@/pages/AdminDashboard';
import PartnerDashboard from '@/pages/PartnerDashboard';
import TripsDashboard from '@/pages/TripsDashboard';

const RoleBasedHomepage = () => {
  const { user, isAuthenticated, isLoading } = useCentralizedAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // If not authenticated, show public homepage
  if (!isAuthenticated || !user) {
    return <Index />;
  }

  // Role-based homepage routing
  switch (user.userType) {
    case 'admin':
      return <AdminDashboard />;
    case 'partner':
      return <PartnerDashboard />;
    case 'traveler':
      return <TripsDashboard />;
    default:
      return <Index />;
  }
};

export default RoleBasedHomepage;
