
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { useToast } from '@/hooks/use-toast';
import { Building2, Upload, Eye, EyeOff, Phone, Mail, MapPin, FileText, User, Shield } from 'lucide-react';

const PartnerSignup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
    partnershipType: '',
    operatingCity: '',
    businessLicense: null as File | null,
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { register } = useCentralizedAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const partnershipTypes = [
    'Homestay Owner',
    'Local Guide',
    'Tour Operator',
    'Vehicle Provider',
    'Experience Host',
    'Restaurant/Cafe'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    if (!/^[0-9]{10}$/.test(formData.mobile)) newErrors.mobile = 'Enter valid 10-digit mobile number';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter valid email address';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.partnershipType) newErrors.partnershipType = 'Partnership type is required';
    if (!formData.operatingCity.trim()) newErrors.operatingCity = 'Operating city is required';
    if (!formData.businessLicense) newErrors.businessLicense = 'Business license is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = async () => {
    if (!formData.mobile || !/^[0-9]{10}$/.test(formData.mobile)) {
      setErrors({ mobile: 'Enter valid 10-digit mobile number' });
      return;
    }

    setIsLoading(true);
    // Simulate OTP sending
    setTimeout(() => {
      setOtpSent(true);
      setIsLoading(false);
      toast({ title: "OTP sent", description: "Please check your mobile for verification code" });
    }, 1000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ businessLicense: 'File size must be less than 5MB' });
        return;
      }
      if (!['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        setErrors({ businessLicense: 'Only PDF, JPG, and PNG files allowed' });
        return;
      }
      setFormData({ ...formData, businessLicense: file });
      setErrors({ ...errors, businessLicense: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    if (!otpSent) {
      toast({ title: "Please verify your mobile number first", variant: "destructive" });
      return;
    }
    if (!otp) {
      toast({ title: "Please enter OTP", variant: "destructive" });
      return;
    }

    setIsLoading(true);

    try {
      const result = await register({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        userType: 'partner',
        phone: formData.mobile,
        companyName: formData.businessName
      });

      if (result.success) {
        toast({ 
          title: "Registration successful!", 
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
        title: "Registration failed", 
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/94fa41ec-96bd-400a-8fc5-4c52f8f19917.png" 
              alt="Sanchaari Logo" 
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Already a partner?</span>
            <Link to="/partner/login">
              <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                Partner Login
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Sanchaari as a Partner</h1>
            <p className="text-gray-600">
              Connect with travelers and grow your business across India
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-600" />
                  Personal Information
                </h3>
                
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className={errors.fullName ? 'border-red-500' : ''}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="mobile">Mobile Number *</Label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="mobile"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                        placeholder="Enter 10-digit mobile number"
                        maxLength={10}
                        className={`pl-10 ${errors.mobile ? 'border-red-500' : ''}`}
                        disabled={otpSent}
                      />
                    </div>
                    <Button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={isLoading || otpSent}
                      variant="outline"
                      className="border-blue-200 text-blue-600 hover:bg-blue-50"
                    >
                      {otpSent ? 'Sent' : 'Send OTP'}
                    </Button>
                  </div>
                  {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                </div>

                {otpSent && (
                  <div>
                    <Label htmlFor="otp">Enter OTP *</Label>
                    <Input
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                      placeholder="Enter 6-digit OTP"
                      maxLength={6}
                    />
                  </div>
                )}
              </div>

              {/* Business Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  Business Information
                </h3>

                <div>
                  <Label htmlFor="businessName">Business/Entity Name *</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Enter your business name"
                    className={errors.businessName ? 'border-red-500' : ''}
                  />
                  {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>}
                </div>

                <div>
                  <Label htmlFor="partnershipType">Type of Partnership *</Label>
                  <Select 
                    value={formData.partnershipType} 
                    onValueChange={(value) => setFormData({ ...formData, partnershipType: value })}
                  >
                    <SelectTrigger className={errors.partnershipType ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Select partnership type" />
                    </SelectTrigger>
                    <SelectContent>
                      {partnershipTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.partnershipType && <p className="text-red-500 text-sm mt-1">{errors.partnershipType}</p>}
                </div>

                <div>
                  <Label htmlFor="operatingCity">City / Operating Base *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="operatingCity"
                      value={formData.operatingCity}
                      onChange={(e) => setFormData({ ...formData, operatingCity: e.target.value })}
                      placeholder="Enter your operating city"
                      className={`pl-10 ${errors.operatingCity ? 'border-red-500' : ''}`}
                    />
                  </div>
                  {errors.operatingCity && <p className="text-red-500 text-sm mt-1">{errors.operatingCity}</p>}
                </div>

                <div>
                  <Label htmlFor="businessLicense">Business License or GST/PAN *</Label>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-blue-300 transition-colors">
                    <input
                      type="file"
                      id="businessLicense"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label htmlFor="businessLicense" className="cursor-pointer">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        {formData.businessLicense ? formData.businessLicense.name : 'Click to upload PDF, JPG, or PNG (max 5MB)'}
                      </p>
                    </label>
                  </div>
                  {errors.businessLicense && <p className="text-red-500 text-sm mt-1">{errors.businessLicense}</p>}
                </div>
              </div>

              {/* Security */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Security
                </h3>

                <div>
                  <Label htmlFor="password">Password *</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Create a strong password"
                      className={errors.password ? 'border-red-500' : ''}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      placeholder="Confirm your password"
                      className={errors.confirmPassword ? 'border-red-500' : ''}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                />
                <div className="text-sm">
                  <label htmlFor="agreeToTerms" className="cursor-pointer">
                    I agree to the{' '}
                    <Link to="/terms" className="text-blue-600 hover:underline" target="_blank">
                      Terms and Conditions
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-blue-600 hover:underline" target="_blank">
                      Privacy Policy
                    </Link>
                  </label>
                  {errors.agreeToTerms && <p className="text-red-500 mt-1">{errors.agreeToTerms}</p>}
                </div>
              </div>

              {/* reCAPTCHA Placeholder */}
              <div className="bg-gray-50 p-4 rounded-lg border">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded"></div>
                  <span className="text-sm text-gray-600">I'm not a robot</span>
                  <div className="ml-auto">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              >
                {isLoading ? 'Creating Account...' : 'Create Partner Account'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSignup;
