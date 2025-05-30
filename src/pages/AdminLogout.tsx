
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import LoadingSpinner from '@/components/LoadingSpinner';

const AdminLogout = () => {
  const { logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      // Add a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      logout();
      toast({ 
        title: "Admin session ended", 
        description: "You have been securely logged out of the admin portal." 
      });
      navigate('/admin/login');
    };

    performLogout();
  }, [logout, toast, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 border">
          <LoadingSpinner size="lg" />
          <h2 className="text-xl font-semibold text-gray-900 mt-4">Ending admin session...</h2>
          <p className="text-gray-600 mt-2">Logging audit trail and clearing credentials</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogout;
