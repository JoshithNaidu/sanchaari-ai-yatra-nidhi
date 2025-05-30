
import React from 'react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import Index from '@/pages/Index';
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

  // Only handle traveler users now
  if (user.userType === 'traveler') {
    return <TravelerHomepage />;
  }

  // Fallback to public homepage for any other user type
  return <Index />;
};

export default RoleBasedHomepage;
