
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Upload, FileText, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PartnerTaxCompliance = () => {
  const { toast } = useToast();

  const documents = [
    {
      id: '1',
      name: 'GST Certificate',
      type: 'GST',
      status: 'verified',
      uploadedDate: '2024-01-15',
      expiryDate: '2025-01-15',
      fileSize: '2.4 MB'
    },
    {
      id: '2',
      name: 'PAN Card',
      type: 'PAN',
      status: 'verified',
      uploadedDate: '2024-01-10',
      expiryDate: 'N/A',
      fileSize: '1.8 MB'
    },
    {
      id: '3',
      name: 'Business Registration',
      type: 'Business License',
      status: 'under_review',
      uploadedDate: '2024-01-20',
      expiryDate: '2025-06-30',
      fileSize: '3.2 MB'
    },
    {
      id: '4',
      name: 'Tourism License',
      type: 'Tourism',
      status: 'expired',
      uploadedDate: '2023-12-01',
      expiryDate: '2024-01-01',
      fileSize: '2.1 MB'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'under_review': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'expired': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default: return <FileText className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'bg-green-100 text-green-800';
      case 'under_review': return 'bg-yellow-100 text-yellow-800';
      case 'expired': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleFileUpload = (documentType: string) => {
    toast({
      title: "File Uploaded",
      description: `${documentType} has been uploaded successfully and is under review.`,
    });
  };

  const isExpiringRecently = (expiryDate: string) => {
    if (expiryDate === 'N/A') return false;
    const expiry = new Date(expiryDate);
    const today = new Date();
    const daysUntilExpiry = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 3600 * 24));
    return daysUntilExpiry <= 30 && daysUntilExpiry > 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Tax & Compliance Documents</h1>
              <p className="text-gray-600">Upload and manage your compliance documentation</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Upload className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Alerts */}
        <div className="space-y-4 mb-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-red-800">Documents Expiring Soon</h3>
                <p className="text-red-700 text-sm">Your Tourism License expires in 15 days. Please upload a renewed version.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-yellow-800">Documents Under Review</h3>
                <p className="text-yellow-700 text-sm">1 document is currently being reviewed. This typically takes 2-3 business days.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Document Upload Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload New Document</CardTitle>
              <CardDescription>Add or update your compliance documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col gap-2"
                    onClick={() => handleFileUpload('GST Certificate')}
                  >
                    <FileText className="h-6 w-6" />
                    <span className="text-xs">GST Certificate</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col gap-2"
                    onClick={() => handleFileUpload('PAN Card')}
                  >
                    <FileText className="h-6 w-6" />
                    <span className="text-xs">PAN Card</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col gap-2"
                    onClick={() => handleFileUpload('Business License')}
                  >
                    <FileText className="h-6 w-6" />
                    <span className="text-xs">Business License</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col gap-2"
                    onClick={() => handleFileUpload('Other Document')}
                  >
                    <Upload className="h-6 w-6" />
                    <span className="text-xs">Other</span>
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  Supported formats: PDF, JPG, PNG. Max file size: 10MB
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compliance Status</CardTitle>
              <CardDescription>Overview of your document verification status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Verified Documents</span>
                  <span className="text-sm font-medium text-green-600">2 / 4</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                    <span>GST Registration Complete</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                    <span>PAN Verification Complete</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-yellow-600" />
                    <span>Business License Under Review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-3 w-3 text-red-600" />
                    <span>Tourism License Expired</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Documents Table */}
        <Card>
          <CardHeader>
            <CardTitle>Document History</CardTitle>
            <CardDescription>View and manage all your uploaded documents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {documents.map((doc) => (
                <div key={doc.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(doc.status)}
                      <div>
                        <h3 className="font-medium">{doc.name}</h3>
                        <p className="text-sm text-gray-600">{doc.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getStatusColor(doc.status)}>
                        {doc.status.replace('_', ' ')}
                      </Badge>
                      {isExpiringRecently(doc.expiryDate) && (
                        <Badge className="bg-orange-100 text-orange-800">
                          Expiring Soon
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Uploaded:</span> {doc.uploadedDate}
                    </div>
                    <div>
                      <span className="font-medium">Expires:</span> {doc.expiryDate}
                    </div>
                    <div>
                      <span className="font-medium">Size:</span> {doc.fileSize}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Button variant="outline" size="sm">Re-upload</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartnerTaxCompliance;
