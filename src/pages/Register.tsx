
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const { register } = useCentralizedAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
  };

  const handlePasswordChange = (password: string) => {
    setFormData({ ...formData, password });
    setPasswordStrength(checkPasswordStrength(password));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({ 
        title: "Password mismatch", 
        description: "Passwords do not match.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.agreeToTerms) {
      toast({ 
        title: "Terms required", 
        description: "Please agree to the terms and conditions.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await register({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        userType: 'traveler' // Default to traveler for all registrations
      });

      if (result.success) {
        toast({ 
          title: "Account created", 
          description: result.message 
        });
        navigate('/auth/verify-email');
      } else {
        toast({ 
          title: "Registration failed", 
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
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    toast({ title: "Coming soon", description: `${provider} signup will be available soon.` });
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

      {/* Register Form */}
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Join thousands of travelers planning their perfect trips
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Enter your full name"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email or Mobile
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email or mobile"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                    placeholder="Create a password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all ${
                            passwordStrength < 50 ? 'bg-red-500' : 
                            passwordStrength < 75 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${passwordStrength}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500">
                        {passwordStrength < 50 ? 'Weak' : passwordStrength < 75 ? 'Good' : 'Strong'}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="relative mt-1">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the{' '}
                  <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>
          </form>

          {/* Social Signup */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" onClick={() => handleSocialSignup('Google')}>
                Google
              </Button>
              <Button variant="outline" onClick={() => handleSocialSignup('Apple')}>
                Apple
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
