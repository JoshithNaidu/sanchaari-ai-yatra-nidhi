
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building2, Upload, Eye, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PartnerCompanyProfile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    companyName: 'Sanchaari Travel Services',
    businessType: 'hotel',
    description: 'Premium travel and hospitality services providing unforgettable experiences.',
    contactEmail: 'partner@sanchaari.com',
    phone: '+91-9876543210',
    address: '123 Tourism Street, Travel City, India 110001'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Profile Updated",
        description: "Your company profile has been updated successfully.",
      });
      setIsEditing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Company Profile</h1>
              <p className="text-gray-600">Manage your business identity and contact details</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Preview Profile
              </Button>
              {isEditing ? (
                <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              ) : (
                <Button onClick={() => setIsEditing(true)} className="bg-blue-600 hover:bg-blue-700">
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Logo Upload */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Business Logo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
                    <Building2 className="h-12 w-12 text-gray-400" />
                  </div>
                  <Button variant="outline" className="w-full">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Logo
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Recommended: 300x300px, PNG or JPG
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>License Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Upload className="h-4 w-4 mr-2" />
                    Business License
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Upload className="h-4 w-4 mr-2" />
                    GST Certificate
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Upload className="h-4 w-4 mr-2" />
                    Other Documents
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>Update your company details and contact information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="businessType">Business Type *</Label>
                      <Select
                        value={formData.businessType}
                        onValueChange={(value) => handleInputChange('businessType', value)}
                        disabled={!isEditing}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hotel">Hotel</SelectItem>
                          <SelectItem value="tour">Tour Operator</SelectItem>
                          <SelectItem value="guide">Local Guide</SelectItem>
                          <SelectItem value="agency">Travel Agency</SelectItem>
                          <SelectItem value="restaurant">Restaurant</SelectItem>
                          <SelectItem value="activity">Activity Provider</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Business Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      disabled={!isEditing}
                      className="mt-1"
                      rows={3}
                      placeholder="Describe your business and services..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactEmail">Contact Email *</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        value={formData.contactEmail}
                        onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Business Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      disabled={!isEditing}
                      className="mt-1"
                      rows={2}
                    />
                  </div>

                  {isEditing && (
                    <div className="flex gap-3 pt-4">
                      <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCompanyProfile;
