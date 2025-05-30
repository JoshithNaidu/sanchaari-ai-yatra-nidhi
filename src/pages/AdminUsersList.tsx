
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  Eye, 
  Ban, 
  RefreshCw, 
  Users, 
  Download,
  UserCheck,
  UserX,
  Mail,
  Shield,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';

const AdminUsersList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [verificationFilter, setVerificationFilter] = useState('all');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  // Mock user data
  const users = [
    {
      id: 'USR001',
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@email.com',
      phone: '+91 98765 43210',
      registrationDate: '2024-01-15',
      status: 'active',
      verified: true,
      kycStatus: 'completed',
      totalTrips: 12,
      location: 'Mumbai, Maharashtra'
    },
    {
      id: 'USR002',
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 87654 32109',
      registrationDate: '2024-02-20',
      status: 'suspended',
      verified: true,
      kycStatus: 'pending',
      totalTrips: 3,
      location: 'Delhi, Delhi'
    },
    {
      id: 'USR003',
      name: 'Amit Patel',
      email: 'amit.patel@email.com',
      phone: '+91 76543 21098',
      registrationDate: '2024-03-10',
      status: 'active',
      verified: false,
      kycStatus: 'incomplete',
      totalTrips: 0,
      location: 'Ahmedabad, Gujarat'
    },
    {
      id: 'USR004',
      name: 'Sneha Singh',
      email: 'sneha.singh@email.com',
      phone: '+91 65432 10987',
      registrationDate: '2024-03-25',
      status: 'blacklisted',
      verified: true,
      kycStatus: 'rejected',
      totalTrips: 1,
      location: 'Bangalore, Karnataka'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'suspended':
        return <Badge className="bg-yellow-100 text-yellow-800">Suspended</Badge>;
      case 'blacklisted':
        return <Badge className="bg-red-100 text-red-800">Blacklisted</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getKycBadge = (kycStatus: string) => {
    switch (kycStatus) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Verified</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800"><AlertTriangle className="h-3 w-3 mr-1" />Pending</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800"><XCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="outline">Incomplete</Badge>;
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.phone.includes(searchQuery);
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesVerification = verificationFilter === 'all' || 
                               (verificationFilter === 'verified' && user.verified) ||
                               (verificationFilter === 'unverified' && !user.verified);
    return matchesSearch && matchesStatus && matchesVerification;
  });

  const handleSelectUser = (userId: string) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    setSelectedUsers(
      selectedUsers.length === filteredUsers.length 
        ? [] 
        : filteredUsers.map(user => user.id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Admin
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                <p className="text-sm text-gray-600">View, filter, and manage all registered users</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Link to="/admin/logout">
                <Button variant="destructive" size="sm">Logout</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold">{users.length}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Users</p>
                  <p className="text-2xl font-bold">{users.filter(u => u.status === 'active').length}</p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">KYC Pending</p>
                  <p className="text-2xl font-bold">{users.filter(u => u.kycStatus === 'pending').length}</p>
                </div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Blacklisted</p>
                  <p className="text-2xl font-bold">{users.filter(u => u.status === 'blacklisted').length}</p>
                </div>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
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
                  placeholder="Search by name, email, or phone..."
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
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                  <SelectItem value="blacklisted">Blacklisted</SelectItem>
                </SelectContent>
              </Select>
              <Select value={verificationFilter} onValueChange={setVerificationFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Verification status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Verification</SelectItem>
                  <SelectItem value="verified">Verified</SelectItem>
                  <SelectItem value="unverified">Unverified</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>

            {/* Batch Actions */}
            {selectedUsers.length > 0 && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-900">
                    {selectedUsers.length} users selected
                  </span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-yellow-600">
                      <Ban className="h-3 w-3 mr-1" />
                      Suspend
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600">
                      <UserX className="h-3 w-3 mr-1" />
                      Blacklist
                    </Button>
                    <Button size="sm" variant="outline" className="text-green-600">
                      <Mail className="h-3 w-3 mr-1" />
                      Send Email
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Users ({filteredUsers.length})</CardTitle>
            <CardDescription>
              Showing {filteredUsers.length} of {users.length} users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox
                        checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                        onCheckedChange={handleSelectAll}
                      />
                    </TableHead>
                    <TableHead>User Details</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Registration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>KYC</TableHead>
                    <TableHead>Trips</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id} className="cursor-pointer hover:bg-gray-50">
                      <TableCell>
                        <Checkbox
                          checked={selectedUsers.includes(user.id)}
                          onCheckedChange={() => handleSelectUser(user.id)}
                        />
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-500">ID: {user.id}</div>
                          <div className="text-xs text-gray-400">{user.location}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm">{user.email}</div>
                          <div className="text-sm text-gray-500">{user.phone}</div>
                          {user.verified && <CheckCircle className="h-3 w-3 text-green-500 inline" />}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{user.registrationDate}</div>
                      </TableCell>
                      <TableCell>{getStatusBadge(user.status)}</TableCell>
                      <TableCell>{getKycBadge(user.kycStatus)}</TableCell>
                      <TableCell>
                        <div className="text-sm font-medium">{user.totalTrips}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Link to={`/admin/users/${user.id}`}>
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3 mr-1" />
                              View
                            </Button>
                          </Link>
                          {user.status === 'active' ? (
                            <Button size="sm" variant="outline" className="text-yellow-600">
                              <Ban className="h-3 w-3 mr-1" />
                              Suspend
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline" className="text-green-600">
                              <UserCheck className="h-3 w-3 mr-1" />
                              Activate
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminUsersList;
