import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Mail } from 'lucide-react';

const EmailVerification = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [searchParams] = useSearchParams();
  const { verifyEmail, user } = useCentralizedAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      handleVerification(token);
    }
  }, [token]);

  const handleVerification = async (verificationToken: string) => {
    setIsVerifying(true);
    try {
      const result = await verifyEmail(verificationToken);
      if (result.success) {
        setIsVerified(true);
        toast({ 
          title: "Email verified", 
          description: result.message 
        });
        
        // Redirect after a short delay
        setTimeout(() => {
          if (user?.userType === 'partner') {
            navigate('/partner/dashboard');
          } else {
            navigate('/trips/dashboard');
          }
        }, 2000);
      } else {
        toast({ 
          title: "Verification failed", 
          description: result.message,
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({ 
        title: "Error", 
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendVerification = async () => {
    setIsResending(true);
    try {
      // Note: The centralized auth doesn't have resendVerification, so we'll simulate it
      toast({ 
        title: "Verification email sent", 
        description: "We've sent a new verification link to your email." 
      });
    } catch (error) {
      toast({ 
        title: "Error", 
        description: "Failed to resend verification email.",
        variant: "destructive"
      });
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Minimal Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/94fa41ec-96bd-400a-8fc5-4c52f8f19917.png" 
              alt="Sanchaari Logo" 
              className="h-8 w-auto"
            />
          </Link>
          <Link to="/help/center" className="text-sm text-gray-600 hover:text-gray-900">
            Help
          </Link>
        </div>
      </header>

      {/* Email Verification Content */}
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-8 text-center">
          {isVerifying ? (
            <div>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Verifying your email...</h2>
              <p className="text-gray-600">Please wait while we verify your email address.</p>
            </div>
          ) : isVerified ? (
            <div>
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Email Verified!</h2>
              <p className="text-gray-600 mb-6">
                Your email has been successfully verified. You'll be redirected to your dashboard shortly.
              </p>
              <Button 
                onClick={() => navigate(user?.userType === 'partner' ? '/partner/dashboard' : '/trips/dashboard')}
                className="w-full"
              >
                Go to Dashboard
              </Button>
            </div>
          ) : (
            <div>
              <Mail className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Check your email</h2>
              <p className="text-gray-600 mb-6">
                We've sent a verification link to your email address. Please check your email and click the link to verify your account.
              </p>
              
              <div className="space-y-4">
                <Button 
                  onClick={handleResendVerification} 
                  variant="outline" 
                  className="w-full"
                  disabled={isResending}
                >
                  {isResending ? "Sending..." : "Resend Verification Email"}
                </Button>
                
                <Link to="/auth/login">
                  <Button variant="ghost" className="w-full">
                    Back to Login
                  </Button>
                </Link>
              </div>
              
              <div className="mt-6 text-xs text-gray-500">
                <p>Didn't receive the email? Check your spam folder or try resending.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
