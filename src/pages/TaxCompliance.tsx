
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  Upload, 
  FileText,
  CheckCircle,
  AlertTriangle,
  X,
  Eye,
  Download
} from 'lucide-react';

const TaxCompliance = () => {
  const { toast } = useToast();
  const [uploadProgress, setUploadProgress] = useState<{[key: string]: number}>({});

  const documents = [
    {
      id: 'pan',
      name: 'PAN Card',
      required: true,
      status: 'approved',
      uploadedDate: '2024-05-15',
      expiryDate: null,
      fileUrl: '/documents/pan_card.pdf'
    },
    {
      id: 'gst',
      name: 'GST Certificate',
      required: false,
      status: 'approved',
      uploadedDate: '2024-05-16',
      expiryDate: '2025-05-16',
      fileUrl: '/documents/gst_certificate.pdf'
    },
    {
      id: 'bank',
      name: 'Bank Proof',
      required: true,
      status: 'pending',
      uploadedDate: '2024-06-01',
      expiryDate: null,
      fileUrl: '/documents/bank_statement.pdf'
    },
    {
      id: 'trade',
      name: 'Trade License / MSME Certificate',
      required: false,
      status: 'rejected',
      uploadedDate: '2024-05-20',
      expiryDate: '2025-12-31',
      fileUrl: '/documents/trade_license.pdf',
      rejectionReason: 'Document quality is poor. Please upload a clearer image.'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <AlertTriangle className="h-4 w-4" />;
      case 'rejected': return <X className="h-4 w-4" />;
      default: return null;
    }
  };

  const handleFileUpload = (documentId: string, file: File) => {
    setUploadProgress(prev => ({ ...prev, [documentId]: 0 }));
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const currentProgress = prev[documentId] || 0;
        if (currentProgress >= 100) {
          clearInterval(interval);
          toast({
            title: "Upload Successful",
            description: "Document uploaded and submitted for review",
            duration: 3000
          });
          return prev;
        }
        return { ...prev, [documentId]: currentProgress + 10 };
      });
    }, 200);
  };

  const complianceScore = Math.round((documents.filter(doc => doc.status === 'approved').length / documents.filter(doc => doc.required).length) * 100);

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
              <h1 className="text-2xl font-bold text-gray-900">Tax & Compliance Documents</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Compliance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">Compliance Score</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">{complianceScore}%</div>
                <Progress value={complianceScore} className="w-full" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">Documents Status</h3>
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">{documents.filter(d => d.status === 'approved').length}</div>
                    <div className="text-xs text-gray-600">Approved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-600">{documents.filter(d => d.status === 'pending').length}</div>
                    <div className="text-xs text-gray-600">Pending</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-red-600">{documents.filter(d => d.status === 'rejected').length}</div>
                    <div className="text-xs text-gray-600">Rejected</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">Payout Status</h3>
                <div className="text-lg font-bold text-green-600 mb-1">
                  {complianceScore >= 100 ? 'Enabled' : 'Incomplete'}
                </div>
                <div className="text-xs text-gray-600">
                  {complianceScore >= 100 ? 'All required documents approved' : 'Complete compliance to enable payouts'}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compliance Alert */}
        {complianceScore < 100 && (
          <Card className="mb-6 border-orange-200 bg-orange-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <div>
                  <h4 className="font-medium text-orange-900">Incomplete Compliance</h4>
                  <p className="text-sm text-orange-700">
                    Please upload and get approval for all required documents to enable payouts and maintain active status.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((document) => (
            <Card key={document.id} className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    {document.name}
                    {document.required && <span className="text-red-500">*</span>}
                  </CardTitle>
                  <Badge className={getStatusColor(document.status)}>
                    {getStatusIcon(document.status)}
                    <span className="ml-1 capitalize">{document.status}</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Document Info */}
                  {document.uploadedDate && (
                    <div className="text-sm">
                      <p className="text-gray-600">
                        Uploaded: {new Date(document.uploadedDate).toLocaleDateString()}
                      </p>
                      {document.expiryDate && (
                        <p className="text-gray-600">
                          Expires: {new Date(document.expiryDate).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Rejection Reason */}
                  {document.status === 'rejected' && document.rejectionReason && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-sm text-red-700">
                        <strong>Rejection Reason:</strong> {document.rejectionReason}
                      </p>
                    </div>
                  )}

                  {/* Upload Progress */}
                  {uploadProgress[document.id] !== undefined && uploadProgress[document.id] < 100 && (
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Uploading...</span>
                        <span>{uploadProgress[document.id]}%</span>
                      </div>
                      <Progress value={uploadProgress[document.id]} className="w-full" />
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    {document.fileUrl && (
                      <>
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </>
                    )}
                    
                    <Button 
                      variant={document.status === 'approved' ? 'outline' : 'default'} 
                      size="sm"
                      onClick={() => {
                        const input = React.createElement('input');
                        input.type = 'file';
                        input.accept = '.pdf,.jpg,.jpeg,.png';
                        input.onchange = (e) => {
                          const file = (e.target as HTMLInputElement).files?.[0];
                          if (file) {
                            handleFileUpload(document.id, file);
                          }
                        };
                        document.body.appendChild(input);
                        input.click();
                        document.body.removeChild(input);
                      }}
                    >
                      <Upload className="h-3 w-3 mr-1" />
                      {document.fileUrl ? 'Replace' : 'Upload'}
                    </Button>
                  </div>

                  {/* File Requirements */}
                  <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                    <p className="font-medium mb-1">Requirements:</p>
                    <ul className="list-disc list-inside space-y-0.5">
                      <li>File types: PDF, JPG, PNG (max 5MB)</li>
                      <li>Clear, readable image quality</li>
                      <li>All corners and text visible</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upload History */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Upload History</CardTitle>
            <CardDescription>Recent document submissions and status changes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { date: '2024-06-01', action: 'Bank Proof uploaded', status: 'pending' },
                { date: '2024-05-20', action: 'Trade License rejected', status: 'rejected' },
                { date: '2024-05-16', action: 'GST Certificate approved', status: 'approved' },
                { date: '2024-05-15', action: 'PAN Card approved', status: 'approved' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div>
                    <p className="text-sm font-medium">{item.action}</p>
                    <p className="text-xs text-gray-600">{item.date}</p>
                  </div>
                  <Badge className={getStatusColor(item.status)}>
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TaxCompliance;
