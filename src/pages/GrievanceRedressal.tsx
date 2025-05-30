
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Scale, Shield, Clock, Mail, Phone, FileText, Send, CheckCircle, AlertTriangle } from 'lucide-react';

const GrievanceRedressal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bookingId: '',
    complaint: '',
    evidence: null as File | null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, evidence: file }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-3xl mx-auto px-4 py-24 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Grievance Submitted Successfully</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your formal complaint has been registered in our grievance system.
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Grievance Details
            </h3>
            <div className="space-y-2 text-green-700">
              <p><strong>Reference Number:</strong> GR-{Date.now().toString().slice(-8)}</p>
              <p><strong>Submitted On:</strong> {new Date().toLocaleDateString()}</p>
              <p><strong>Expected Resolution:</strong> Within 7-10 business days</p>
              <p><strong>Status:</strong> Under Review</p>
            </div>
          </div>

          <Alert className="mb-8 text-left">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Important:</strong> You will receive email updates on your grievance status. 
              If you don't receive a response within 10 business days, you may escalate to 
              the Grievance Officer directly.
            </AlertDescription>
          </Alert>

          <div className="flex gap-4 justify-center">
            <Button onClick={() => setIsSubmitted(false)}>
              Submit Another Grievance
            </Button>
            <Button variant="outline">
              <a href="/help/center">Back to Help Center</a>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Scale className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Grievance Redressal</h1>
          <p className="text-xl text-gray-600">
            Formal complaint submission for unresolved issues
          </p>
        </div>

        {/* Policy Disclosure */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Grievance Policy & Process
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Response Timeline
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Acknowledgment: Within 2 business days</li>
                  <li>• Investigation: 5-7 business days</li>
                  <li>• Resolution: Within 10 business days</li>
                  <li>• Complex cases: Up to 15 business days</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Grievance Officer Contact</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    grievance@sanchaari.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    +91 1800-XXX-XXXX (Ext: 101)
                  </p>
                </div>
              </div>
            </div>
            
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Legal Compliance:</strong> This grievance mechanism complies with the Information Technology Act, 2000, 
                Consumer Protection Act, 2019, and relevant consumer protection guidelines. 
                Unresolved grievances may be escalated to appropriate regulatory authorities.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Grievance Form */}
        <Card>
          <CardHeader>
            <CardTitle>Submit Your Formal Complaint</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full legal name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Mobile Number *</label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Booking ID (Optional)</label>
                  <Input
                    value={formData.bookingId}
                    onChange={(e) => handleInputChange('bookingId', e.target.value)}
                    placeholder="Enter booking reference if applicable"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Detailed Complaint *</label>
                <Textarea
                  required
                  value={formData.complaint}
                  onChange={(e) => handleInputChange('complaint', e.target.value)}
                  placeholder="Please provide a detailed description of your complaint including:
• Nature of the issue
• Date(s) when the incident occurred
• Previous attempts to resolve the issue
• Impact or inconvenience caused
• Expected resolution

Be as specific as possible to help us investigate effectively."
                  className="min-h-[150px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Supporting Evidence (Optional)</label>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Upload any relevant documents, screenshots, or evidence (Max 10MB)
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Declaration</h4>
                <div className="space-y-2 text-sm">
                  <label className="flex items-start gap-2">
                    <input type="checkbox" required className="mt-1" />
                    <span>I declare that the information provided is true and accurate to the best of my knowledge.</span>
                  </label>
                  <label className="flex items-start gap-2">
                    <input type="checkbox" required className="mt-1" />
                    <span>I understand that false or misleading information may result in dismissal of this grievance.</span>
                  </label>
                  <label className="flex items-start gap-2">
                    <input type="checkbox" required className="mt-1" />
                    <span>I consent to the processing of this complaint and my personal data for resolution purposes.</span>
                  </label>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700" 
                disabled={isSubmitting}
                size="lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting Grievance...
                  </div>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Submit Formal Grievance
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Important Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">When to Use Grievance Redressal</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Your issue was not resolved through regular customer support</li>
                <li>• You have experienced significant inconvenience or financial loss</li>
                <li>• Service standards were not met despite multiple attempts</li>
                <li>• You need formal documentation for legal or insurance purposes</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Escalation Path</h4>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Regular Customer Support (recommended first step)</li>
                <li>2. Formal Grievance (this form)</li>
                <li>3. Grievance Officer review</li>
                <li>4. External regulatory authorities (if unresolved)</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default GrievanceRedressal;
