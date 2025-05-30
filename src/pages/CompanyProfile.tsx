
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  Camera, 
  Save,
  Eye,
  CheckCircle
} from 'lucide-react';

const CompanyProfile = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    entityName: 'Sanchaari Travel Partners',
    contactPerson: 'Rajesh Kumar',
    email: 'rajesh@sanchaari.com',
    phone: '+91 98765 43210',
    address: '123 Business District, Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    pan: 'ABCDE1234F',
    gstin: '27ABCDE1234F1ZV',
    description: 'Premium homestay and travel experience provider specializing in authentic local experiences across India.'
  });

  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Auto-save simulation
    setTimeout(() => {
      setLastSaved(new Date());
      toast({
        title: "Auto-saved",
        description: "Changes saved automatically",
        duration: 2000
      });
    }, 1000);
  };

  const validatePAN = (pan: string) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan);
  };

  const validateGSTIN = (gstin: string) => {
    const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}$/;
    return gstinRegex.test(gstin);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/partner/dashboard" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Company Profile</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Preview Live Profile
              </Button>
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Required fields for platform visibility and compliance
                  {lastSaved && (
                    <span className="flex items-center gap-1 text-green-600 text-xs mt-1">
                      <CheckCircle className="h-3 w-3" />
                      Last saved: {lastSaved.toLocaleTimeString()}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="entityName">Entity Name *</Label>
                    <Input
                      id="entityName"
                      value={formData.entityName}
                      onChange={(e) => handleInputChange('entityName', e.target.value)}
                      placeholder="Company/Business name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      placeholder="Primary contact name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="business@email.com"
                      className={!validateEmail(formData.email) ? 'border-red-300' : ''}
                    />
                    {!validateEmail(formData.email) && (
                      <p className="text-xs text-red-600 mt-1">Please enter a valid email address</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Business Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe your business and services..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Address Information */}
            <Card>
              <CardHeader>
                <CardTitle>Address Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Business Address</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Complete business address"
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode">PIN Code</Label>
                    <Input
                      id="pincode"
                      value={formData.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value)}
                      placeholder="123456"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tax & Legal Information */}
            <Card>
              <CardHeader>
                <CardTitle>Tax & Legal Information</CardTitle>
                <CardDescription>Required for compliance and payouts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pan">PAN Number *</Label>
                    <Input
                      id="pan"
                      value={formData.pan}
                      onChange={(e) => handleInputChange('pan', e.target.value.toUpperCase())}
                      placeholder="ABCDE1234F"
                      maxLength={10}
                      className={!validatePAN(formData.pan) ? 'border-red-300' : 'border-green-300'}
                    />
                    {!validatePAN(formData.pan) && (
                      <p className="text-xs text-red-600 mt-1">PAN should be 10 characters (5 letters, 4 digits, 1 letter)</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="gstin">GSTIN (if applicable)</Label>
                    <Input
                      id="gstin"
                      value={formData.gstin}
                      onChange={(e) => handleInputChange('gstin', e.target.value.toUpperCase())}
                      placeholder="27ABCDE1234F1ZV"
                      maxLength={15}
                      className={formData.gstin && !validateGSTIN(formData.gstin) ? 'border-red-300' : ''}
                    />
                    {formData.gstin && !validateGSTIN(formData.gstin) && (
                      <p className="text-xs text-red-600 mt-1">GSTIN should be 15 characters alphanumeric</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            {/* Avatar Upload */}
            <Card>
              <CardHeader>
                <CardTitle>Company Logo</CardTitle>
                <CardDescription>Upload your company logo (max 2MB)</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" className="w-full">
                    <Camera className="h-4 w-4 mr-2" />
                    Upload Logo
                  </Button>
                  <input type="file" accept="image/*" className="hidden" />
                </div>
              </CardContent>
            </Card>

            {/* Live Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
                <CardDescription>How your profile appears to customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-4 bg-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{formData.entityName}</h3>
                      <p className="text-sm text-gray-600">{formData.city}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{formData.description}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>Contact: {formData.contactPerson}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Completion Status */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Basic Info</span>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Address</span>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Tax Details</span>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Logo Upload</span>
                    <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">75% Complete</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
