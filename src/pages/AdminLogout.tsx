
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { useToast } from '@/hooks/use-toast';
import LoadingSpinner from '@/components/LoadingSpinner';

const AdminLogout = () => {
  const { logout } = useCentralizedAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      // Add a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await logout();
      toast({ 
        title: "Admin session ended", 
        description: "You have been securely logged out from the admin panel." 
      });
      
      navigate('/admin/login');
    };

    performLogout();
  }, [logout, toast, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 border">
          <LoadingSpinner size="lg" />
          <h2 className="text-xl font-semibold text-gray-900 mt-4">Ending admin session...</h2>
          <p className="text-gray-600 mt-2">Securing your admin access</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogout;
