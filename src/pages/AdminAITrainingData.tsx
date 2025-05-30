
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  ArrowLeft,
  Upload,
  Download,
  FileText,
  CheckCircle,
  AlertTriangle,
  Clock,
  User,
  Database,
  RefreshCw,
  Eye,
  Trash2
} from 'lucide-react';

const AdminAITrainingData = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const uploads = [
    {
      id: "UPL001",
      filename: "hotel_booking_intents.jsonl",
      uploader: "ML Engineer",
      uploadTime: "2024-05-30 14:25:00",
      status: "Approved",
      recordCount: 1250,
      fileSize: "2.4 MB",
      reviewer: "AI Team Lead",
      reviewTime: "2024-05-30 15:10:00",
      errors: 0
    },
    {
      id: "UPL002",
      filename: "payment_support_data.csv", 
      uploader: "Support Manager",
      uploadTime: "2024-05-30 11:15:00",
      status: "Pending Review",
      recordCount: 890,
      fileSize: "1.8 MB",
      reviewer: "Unassigned",
      reviewTime: null,
      errors: 3
    },
    {
      id: "UPL003",
      filename: "destination_queries.jsonl",
      uploader: "Content Team",
      uploadTime: "2024-05-29 16:30:00", 
      status: "Rejected",
      recordCount: 567,
      fileSize: "1.2 MB",
      reviewer: "Data Scientist",
      reviewTime: "2024-05-30 09:45:00",
      errors: 45
    },
    {
      id: "UPL004",
      filename: "partner_onboarding_flows.csv",
      uploader: "Partner Team",
      uploadTime: "2024-05-30 13:45:00",
      status: "Processing",
      recordCount: 234,
      fileSize: "0.8 MB",
      reviewer: null,
      reviewTime: null,
      errors: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Pending Review': return 'bg-yellow-100 text-yellow-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Pending Review': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Rejected': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'Processing': return <RefreshCw className="h-4 w-4 text-blue-600 animate-spin" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const stats = {
    totalUploads: 247,
    pendingReview: 18,
    approvedToday: 12,
    totalRecords: 125000,
    avgProcessingTime: "18 minutes"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin/dashboard" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Training Data Upload</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export Template
              </Button>
              <Button className="gap-2">
                <Upload className="h-4 w-4" />
                Upload Data
              </Button>
              <Link to="/admin/logout">
                <Button variant="destructive" size="sm">Logout</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Uploads</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.totalUploads}</p>
                </div>
                <Database className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Review</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.pendingReview}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Approved Today</p>
                  <p className="text-2xl font-bold text-green-600">{stats.approvedToday}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Records</p>
                  <p className="text-2xl font-bold text-purple-600">{stats.totalRecords.toLocaleString()}</p>
                </div>
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Processing</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.avgProcessingTime}</p>
                </div>
                <RefreshCw className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Upload Panel */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Upload Training Data</CardTitle>
                <CardDescription>Upload JSONL or CSV files to improve NLU models</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-sm text-gray-600 mb-4">
                    Drag and drop your files here, or click to browse
                  </p>
                  <Button variant="outline">Select Files</Button>
                </div>
                
                <div className="mt-6 space-y-3">
                  <h4 className="font-medium">Supported Formats:</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• JSONL (Intent, Utterance, Response)</p>
                    <p>• CSV (structured training data)</p>
                    <p>• Max file size: 10MB</p>
                    <p>• UTF-8 encoding required</p>
                  </div>
                </div>

                {isUploading && (
                  <div className="mt-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Uploading...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Validation Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Duplicate detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>UTF-8 encoding check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Empty field validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Intent format validation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upload History */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Upload History</CardTitle>
                <CardDescription>Track all training data uploads and their approval status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>File</TableHead>
                        <TableHead>Uploader</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Records</TableHead>
                        <TableHead>Review</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {uploads.map((upload) => (
                        <TableRow key={upload.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{upload.filename}</p>
                              <p className="text-xs text-gray-500">
                                {upload.fileSize} • {upload.uploadTime}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-gray-400" />
                              <span className="text-sm">{upload.uploader}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {getStatusIcon(upload.status)}
                              <Badge className={getStatusColor(upload.status)}>
                                {upload.status}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <p className="font-medium">{upload.recordCount.toLocaleString()}</p>
                              {upload.errors > 0 && (
                                <p className="text-red-600">{upload.errors} errors</p>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              {upload.reviewer ? (
                                <div>
                                  <p>{upload.reviewer}</p>
                                  <p className="text-gray-500">{upload.reviewTime}</p>
                                </div>
                              ) : (
                                <span className="text-gray-400">Unassigned</span>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button variant="outline" size="sm">
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Download className="h-3 w-3" />
                              </Button>
                              {upload.status === 'Rejected' && (
                                <Button variant="outline" size="sm" className="text-red-600">
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="flex justify-between items-center mt-6 pt-6 border-t">
                  <div className="text-sm text-gray-600">
                    Showing 4 of {stats.totalUploads} uploads
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Previous</Button>
                    <Button variant="outline" size="sm">Next</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAITrainingData;
