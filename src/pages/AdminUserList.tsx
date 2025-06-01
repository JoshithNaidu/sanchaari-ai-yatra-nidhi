
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  Search,
  Filter,
  Download,
  Ban,
  CheckCircle,
  Eye,
  Edit,
  Mail,
  Phone,
  AlertTriangle,
  UserCheck
} from 'lucide-react';
import Header from '@/components/Header';

const AdminUserList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const users = [
    {
      id: 'USR001',
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@email.com',
      phone: '+91 98765 43210',
      userType: 'traveler',
      status: 'active',
      verified: true,
      joinDate: '2024-01-15',
      lastLogin: '2024-05-29 14:30',
      bookings: 12,
      totalSpent: 185000,
      riskLevel: 'low',
      location: 'Mumbai, Maharashtra'
    },
    {
      id: 'USR002',
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 87654 32109',
      userType: 'traveler',
      status: 'suspended',
      verified: true,
      joinDate: '2024-02-20',
      lastLogin: '2024-05-25 09:15',
      bookings: 3,
      totalSpent: 25000,
      riskLevel: 'high',
      location: 'Delhi, Delhi'
    },
    {
      id: 'USR003',
      name: 'Mountain Resort Ltd',
      email: 'contact@mountainresort.com',
      phone: '+91 76543 21098',
      userType: 'partner',
      status: 'active',
      verified: true,
      joinDate: '2024-03-10',
      lastLogin: '2024-05-30 11:45',
      bookings: 234,
      totalSpent: 0,
      revenue: 1250000,
      riskLevel: 'low',
      location: 'Manali, Himachal Pradesh'
    },
    {
      id: 'USR004',
      name: 'Admin User',
      email: 'admin@sanchaari.com',
      phone: '+91 65432 10987',
      userType: 'admin',
      status: 'active',
      verified: true,
      joinDate: '2024-01-01',
      lastLogin: '2024-05-30 16:20',
      bookings: 0,
      totalSpent: 0,
      riskLevel: 'system',
      location: 'System Account'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-red-600';
      case 'system': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getUserTypeColor = (type: string) => {
    switch (type) {
      case 'traveler': return 'bg-blue-100 text-blue-800';
      case 'partner': return 'bg-purple-100 text-purple-800';
      case 'admin': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link to="/admin/dashboard" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Back to Dashboard</span>
              </Link>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">User Management</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Export Users</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search and Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>User Database</CardTitle>
            <CardDescription>Monitor and manage all user accounts, permissions, and activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search users by name, email, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">More Filters</span>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">{users.filter(u => u.userType === 'traveler').length}</div>
                <div className="text-sm text-blue-700">Travelers</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-purple-600">{users.filter(u => u.userType === 'partner').length}</div>
                <div className="text-sm text-purple-700">Partners</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-green-600">{users.filter(u => u.status === 'active').length}</div>
                <div className="text-sm text-green-700">Active</div>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-red-600">{users.filter(u => u.riskLevel === 'high').length}</div>
                <div className="text-sm text-red-700">High Risk</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardContent className="p-0 sm:p-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[200px]">User Details</TableHead>
                    <TableHead className="min-w-[200px]">Contact</TableHead>
                    <TableHead>Type & Status</TableHead>
                    <TableHead className="min-w-[150px]">Activity</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium text-sm sm:text-base">{user.name}</div>
                          <div className="text-xs sm:text-sm text-gray-500">{user.id}</div>
                          <div className="text-xs text-gray-400">{user.location}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Mail className="h-3 w-3" />
                            <span className="text-xs sm:text-sm break-all">{user.email}</span>
                            {user.verified && <CheckCircle className="h-3 w-3 text-green-500" />}
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-3 w-3" />
                            <span className="text-xs sm:text-sm">{user.phone}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-2">
                          <Badge className={getUserTypeColor(user.userType)}>
                            {user.userType}
                          </Badge>
                          <Badge className={getStatusColor(user.status)}>
                            {user.status}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-xs sm:text-sm space-y-1">
                          <div>Joined: {user.joinDate}</div>
                          <div>Last: {user.lastLogin}</div>
                          {user.userType === 'traveler' && (
                            <div>Bookings: {user.bookings} | ₹{user.totalSpent.toLocaleString()}</div>
                          )}
                          {user.userType === 'partner' && user.revenue && (
                            <div>Revenue: ₹{user.revenue.toLocaleString()}</div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className={`font-medium text-sm ${getRiskColor(user.riskLevel)}`}>
                          {user.riskLevel.toUpperCase()}
                          {user.riskLevel === 'high' && <AlertTriangle className="inline h-3 w-3 ml-1" />}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-3 w-3" />
                          </Button>
                          {user.status === 'active' ? (
                            <Button variant="outline" size="sm" className="text-red-600">
                              <Ban className="h-3 w-3" />
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm" className="text-green-600">
                              <UserCheck className="h-3 w-3" />
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

export default AdminUserList;
