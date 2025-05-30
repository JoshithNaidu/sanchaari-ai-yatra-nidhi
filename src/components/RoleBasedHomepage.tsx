
import React from 'react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import Index from '@/pages/Index';
import AdminHomepage from '@/components/AdminHomepage';
import PartnerHomepage from '@/components/PartnerHomepage';
import TravelerHomepage from '@/components/TravelerHomepage';

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
      return <AdminHomepage />;
    case 'partner':
      return <PartnerHomepage />;
    case 'traveler':
      return <TravelerHomepage />;
    default:
      return <Index />;
  }
};

export default RoleBasedHomepage;
