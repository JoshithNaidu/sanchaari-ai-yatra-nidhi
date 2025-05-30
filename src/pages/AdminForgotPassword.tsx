
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { useToast } from '@/hooks/use-toast';
import { Mail, ArrowLeft, Loader2, CheckCircle, Shield } from 'lucide-react';

const AdminForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { forgotPassword } = useCentralizedAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await forgotPassword(email);
      setIsSubmitted(true);
      toast({ 
        title: "Recovery instructions sent", 
        description: "Please check your email for admin password reset instructions." 
      });
    } catch (error) {
      toast({ 
        title: "Error", 
        description: "Something went wrong. Please contact IT Security.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/94fa41ec-96bd-400a-8fc5-4c52f8f19917.png" 
              alt="Sanchaari Logo" 
              className="h-8 w-auto"
            />
          </Link>
          <div className="text-sm text-gray-600">
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
              ADMIN ACCESS
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-slate-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset Admin Password</h1>
            <p className="text-gray-600">
              Secure password recovery for administrators
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Admin Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your admin email address"
                      required
                      className="pl-10 h-12 border-gray-200 focus:border-slate-500 focus:ring-slate-500"
                    />
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800 text-sm">
                    <strong>Security Notice:</strong> Reset attempts are logged and monitored. 
                    Contact IT Security if you don't have access to your registered email.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-xl transition-colors shadow-lg hover:shadow-xl" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending recovery email...
                    </>
                  ) : (
                    "Send Reset Instructions"
                  )}
                </Button>

                <div className="text-center">
                  <Link to="/admin/login" className="inline-flex items-center text-sm text-gray-600 hover:text-slate-600 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to Admin Login
                  </Link>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Recovery email sent</h3>
                  <p className="text-gray-600">
                    Password reset instructions have been sent to <strong>{email}</strong>
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Security:</strong> Reset link expires in 30 minutes and can only be used once.
                    Check your spam folder if you don't receive the email.
                  </p>
                </div>

                <Link to="/admin/login">
                  <Button variant="outline" className="w-full h-12 rounded-xl border-gray-200 hover:bg-gray-50">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Admin Login
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminForgotPassword;
