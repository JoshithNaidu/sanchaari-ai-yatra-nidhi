
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Logout = () => {
  const { logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = () => {
      logout();
      toast({ 
        title: "Logged out", 
        description: "You have been successfully logged out." 
      });
      navigate('/');
    };

    performLogout();
  }, [logout, toast, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Logging you out...</p>
      </div>
    </div>
  );
};

export default Logout;
