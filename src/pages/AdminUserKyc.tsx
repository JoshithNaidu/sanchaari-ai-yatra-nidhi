
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Eye,
  FileCheck,
  FileX,
  Camera,
  Clock,
  Calendar,
  RefreshCw,
  Mail,
  User,
  Images
} from 'lucide-react';

const AdminUserKyc = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showKycDialog, setShowKycDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [verificationAction, setVerificationAction] = useState<'approve' | 'reject' | null>(null);

  // Mock KYC data
  const kycData = [
    {
      id: 'KYC001',
      userId: 'USR001',
      userName: 'Rajesh Kumar',
      submissionDate: '2024-05-15',
      status: 'pending',
      documentType: ['Aadhaar', 'PAN Card'],
      userEmail: 'rajesh.kumar@email.com',
      userPhone: '+91 98765 43210',
      documents: {
        aadhaar: {
          number: '1234-XXXX-XXXX',
          frontImage: '/path/to/aadhaar-front.jpg',
          backImage: '/path/to/aadhaar-back.jpg'
        },
        pan: {
          number: 'ABCDE1234F',
          image: '/path/to/pan.jpg'
        }
      }
    },
    {
      id: 'KYC002',
      userId: 'USR002',
      userName: 'Priya Sharma',
      submissionDate: '2024-05-10',
      status: 'verified',
      documentType: ['Passport', 'PAN Card'],
      verifiedBy: 'Admin User',
      verificationDate: '2024-05-12',
      userEmail: 'priya.sharma@email.com',
      userPhone: '+91 87654 32109',
      documents: {
        passport: {
          number: 'J8765432',
          image: '/path/to/passport.jpg'
        },
        pan: {
          number: 'PQRST5678G',
          image: '/path/to/pan.jpg'
        }
      }
    },
    {
      id: 'KYC003',
      userId: 'USR003',
      userName: 'Amit Patel',
      submissionDate: '2024-05-20',
      status: 'rejected',
      documentType: ['Aadhaar'],
      rejectedBy: 'Admin User',
      rejectionDate: '2024-05-21',
      rejectionReason: 'Documents blurry and unreadable',
      userEmail: 'amit.patel@email.com',
      userPhone: '+91 76543 21098',
      documents: {
        aadhaar: {
          number: '5678-XXXX-XXXX',
          frontImage: '/path/to/aadhaar-front-blurry.jpg',
          backImage: '/path/to/aadhaar-back-blurry.jpg'
        }
      }
    },
    {
      id: 'KYC004',
      userId: 'USR005',
      userName: 'Deepika Verma',
      submissionDate: '2024-05-23',
      status: 'pending',
      documentType: ['Aadhaar', 'Voter ID'],
      userEmail: 'deepika.verma@email.com',
      userPhone: '+91 87654 32109',
      documents: {
        aadhaar: {
          number: '9876-XXXX-XXXX',
          frontImage: '/path/to/aadhaar-front.jpg',
          backImage: '/path/to/aadhaar-back.jpg'
        },
        voterId: {
          number: 'ABC1234567',
          image: '/path/to/voter-id.jpg'
        }
      }
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
      case 'verified':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Verified</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800"><XCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredKyc = kycData.filter(kyc => {
    const matchesSearch = kyc.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         kyc.userEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         kyc.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || kyc.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleOpenKycDetails = (kyc: any) => {
    setSelectedUser(kyc);
    setShowKycDialog(true);
  };

  const handleVerificationAction = (action: 'approve' | 'reject') => {
    setVerificationAction(action);
    // In a real implementation, this would update the database
    setShowKycDialog(false);
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin/users/list" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Users
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">KYC Verification</h1>
                <p className="text-sm text-gray-600">Manage identity verification documents</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-yellow-800 font-medium">Pending Verification</p>
                  <p className="text-2xl font-bold text-yellow-900">{kycData.filter(k => k.status === 'pending').length}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-800 font-medium">Verified Documents</p>
                  <p className="text-2xl font-bold text-green-900">{kycData.filter(k => k.status === 'verified').length}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-red-800 font-medium">Rejected Documents</p>
                  <p className="text-2xl font-bold text-red-900">{kycData.filter(k => k.status === 'rejected').length}</p>
                </div>
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Search & Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name, email, or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="verified">Verified</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* KYC Table */}
        <Card>
          <CardHeader>
            <CardTitle>KYC Documents ({filteredKyc.length})</CardTitle>
            <CardDescription>
              Verification documents submitted by users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Documents</TableHead>
                    <TableHead>Submission Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Verification Details</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredKyc.map((kyc) => (
                    <TableRow key={kyc.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{kyc.userName}</div>
                          <div className="text-xs text-gray-500">{kyc.userId}</div>
                          <div className="text-xs text-gray-400">{kyc.userEmail}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          {kyc.documentType.map((doc, index) => (
                            <Badge key={index} variant="outline">{doc}</Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-3 w-3 text-gray-500" />
                          {kyc.submissionDate}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(kyc.status)}</TableCell>
                      <TableCell>
                        {kyc.status === 'verified' && (
                          <div className="text-sm text-green-600">
                            Verified on {kyc.verificationDate}
                          </div>
                        )}
                        {kyc.status === 'rejected' && (
                          <div className="text-sm text-red-600">
                            Rejected on {kyc.rejectionDate}
                          </div>
                        )}
                        {kyc.status === 'pending' && (
                          <div className="text-sm text-yellow-600">
                            Awaiting review
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleOpenKycDetails(kyc)}
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          {kyc.status === 'pending' && (
                            <>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="text-green-600"
                                onClick={() => {
                                  setSelectedUser(kyc);
                                  setVerificationAction('approve');
                                }}
                              >
                                <FileCheck className="h-3 w-3 mr-1" />
                                Verify
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="text-red-600"
                                onClick={() => {
                                  setSelectedUser(kyc);
                                  setVerificationAction('reject');
                                }}
                              >
                                <FileX className="h-3 w-3 mr-1" />
                                Reject
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredKyc.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                <Images className="h-10 w-10 mx-auto mb-2 opacity-30" />
                <p>No KYC documents match your search criteria</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* KYC Document Dialog */}
        <Dialog open={showKycDialog} onOpenChange={setShowKycDialog}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-blue-600" />
                KYC Document Verification
              </DialogTitle>
              <DialogDescription>
                Review user identity documents before approving or rejecting
              </DialogDescription>
            </DialogHeader>
            
            {selectedUser && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">{selectedUser.userName}</p>
                      <p className="text-sm text-gray-500">{selectedUser.userId}</p>
                    </div>
                  </div>
                  {getStatusBadge(selectedUser.status)}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Email</p>
                    <p className="font-medium">{selectedUser.userEmail}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Phone</p>
                    <p className="font-medium">{selectedUser.userPhone}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Submission Date</p>
                    <p className="font-medium">{selectedUser.submissionDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Document Types</p>
                    <div className="flex gap-2">
                      {selectedUser.documentType.map((doc: string, index: number) => (
                        <Badge key={index} variant="outline">{doc}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Tabs defaultValue="documents">
                  <TabsList className="grid grid-cols-3">
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                    <TabsTrigger value="verification">Verification</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="documents">
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-md border">
                        <h3 className="font-medium mb-2">Document Previews</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Mock document previews */}
                          <div className="bg-white p-3 border rounded-md">
                            <p className="text-sm font-medium mb-2">
                              {selectedUser.documentType.includes('Aadhaar') ? 'Aadhaar Card' : 
                               selectedUser.documentType.includes('Passport') ? 'Passport' : 'ID Document'}
                            </p>
                            <div className="aspect-[3/2] bg-gray-200 rounded-md flex items-center justify-center">
                              <Camera className="h-10 w-10 text-gray-400" />
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Document Front Side</p>
                          </div>
                          
                          {selectedUser.documentType.includes('Aadhaar') && (
                            <div className="bg-white p-3 border rounded-md">
                              <p className="text-sm font-medium mb-2">Aadhaar Card (Back)</p>
                              <div className="aspect-[3/2] bg-gray-200 rounded-md flex items-center justify-center">
                                <Camera className="h-10 w-10 text-gray-400" />
                              </div>
                              <p className="text-xs text-gray-500 mt-2">Document Back Side</p>
                            </div>
                          )}
                          
                          {selectedUser.documentType.includes('PAN Card') && (
                            <div className="bg-white p-3 border rounded-md">
                              <p className="text-sm font-medium mb-2">PAN Card</p>
                              <div className="aspect-[3/2] bg-gray-200 rounded-md flex items-center justify-center">
                                <Camera className="h-10 w-10 text-gray-400" />
                              </div>
                              <p className="text-xs text-gray-500 mt-2">PAN Card</p>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-md border">
                        <h3 className="font-medium mb-2">Extracted Information</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Name on Document</p>
                            <p className="font-medium">{selectedUser.userName}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">ID Number</p>
                            <p className="font-medium">
                              {selectedUser.documents.aadhaar ? selectedUser.documents.aadhaar.number : 
                               selectedUser.documents.passport ? selectedUser.documents.passport.number : 'N/A'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="verification">
                    <div className="space-y-4">
                      <div className="flex gap-4 items-center">
                        <div className="flex-1">
                          <p className="text-sm font-medium mb-2">Verification Notes</p>
                          <Textarea 
                            placeholder="Add verification notes or reasons for approval/rejection..."
                            className="h-20"
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-between">
                        <div>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Mail className="h-3 w-3" />
                            Request Additional Info
                          </Button>
                        </div>
                        <div className="space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-red-600 border-red-200"
                            onClick={() => handleVerificationAction('reject')}
                          >
                            <FileX className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleVerificationAction('approve')}
                          >
                            <FileCheck className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="history">
                    <div className="bg-gray-50 p-4 rounded-md border">
                      <h3 className="font-medium mb-4">Verification Timeline</h3>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                            <Clock className="h-3 w-3 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Documents Submitted</p>
                            <p className="text-xs text-gray-500">{selectedUser.submissionDate}</p>
                          </div>
                        </div>
                        
                        {selectedUser.status === 'verified' && (
                          <div className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Documents Verified</p>
                              <p className="text-xs text-gray-500">{selectedUser.verificationDate} by {selectedUser.verifiedBy}</p>
                            </div>
                          </div>
                        )}
                        
                        {selectedUser.status === 'rejected' && (
                          <div className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                              <XCircle className="h-3 w-3 text-red-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Documents Rejected</p>
                              <p className="text-xs text-gray-500">{selectedUser.rejectionDate} by {selectedUser.rejectedBy}</p>
                              <p className="text-xs text-red-500 mt-1">Reason: {selectedUser.rejectionReason}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowKycDialog(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminUserKyc;
