
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
  Search,
  Filter,
  Download,
  Eye,
  Calendar,
  AlertTriangle,
  RefreshCw,
  DollarSign
} from 'lucide-react';

const AdminBookings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateRange, setDateRange] = useState('7days');

  const bookings = [
    {
      id: "BK12345",
      userName: "Rahul Sharma",
      userId: "USR001",
      partnerName: "TravelCorp India",
      partnerId: "PTR001",
      listingTitle: "Deluxe Room - Goa Resort",
      checkinDate: "2024-06-15",
      checkoutDate: "2024-06-18",
      paymentStatus: "Paid",
      bookingStatus: "Confirmed",
      amount: "₹15,000",
      createdDate: "2024-05-30",
      flagged: false
    },
    {
      id: "BK12346",
      userName: "Priya Patel",
      userId: "USR002",
      partnerName: "Mountain Adventures",
      partnerId: "PTR002",
      listingTitle: "Himalayan Trek Package",
      checkinDate: "2024-07-01",
      checkoutDate: "2024-07-05",
      paymentStatus: "Pending",
      bookingStatus: "Pending",
      amount: "₹25,000",
      createdDate: "2024-05-29",
      flagged: false
    },
    {
      id: "BK12347",
      userName: "Amit Kumar",
      userId: "USR003",
      partnerName: "City Hotels",
      partnerId: "PTR003",
      listingTitle: "Business Suite - Mumbai",
      checkinDate: "2024-06-01",
      checkoutDate: "2024-06-03",
      paymentStatus: "Refunded",
      bookingStatus: "Cancelled",
      amount: "₹8,500",
      createdDate: "2024-05-28",
      flagged: true
    },
    {
      id: "BK12348",
      userName: "Sneha Singh",
      userId: "USR004",
      partnerName: "Heritage Hotels",
      partnerId: "PTR004",
      listingTitle: "Royal Palace Suite - Rajasthan",
      checkinDate: "2024-08-15",
      checkoutDate: "2024-08-20",
      paymentStatus: "Paid",
      bookingStatus: "Confirmed",
      amount: "₹85,000",
      createdDate: "2024-05-30",
      flagged: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      case 'Refunded': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Refunded': return 'bg-purple-100 text-purple-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.partnerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || booking.bookingStatus.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

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
              <h1 className="text-2xl font-bold text-gray-900">All Bookings</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export Data
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                  <p className="text-2xl font-bold text-gray-900">12,847</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Revenue Today</p>
                  <p className="text-2xl font-bold text-green-600">₹4,25,000</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Cancellation Rate</p>
                  <p className="text-2xl font-bold text-yellow-600">3.2%</p>
                </div>
                <RefreshCw className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Flagged Bookings</p>
                  <p className="text-2xl font-bold text-red-600">23</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Booking Management</CardTitle>
            <CardDescription>Search, filter, and manage all platform bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by booking ID, user, partner, or destination..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border rounded-md bg-white"
                >
                  <option value="all">All Status</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="pending">Pending</option>
                  <option value="cancelled">Cancelled</option>
                  <option value="refunded">Refunded</option>
                </select>
                <select 
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="px-3 py-2 border rounded-md bg-white"
                >
                  <option value="7days">Last 7 Days</option>
                  <option value="30days">Last 30 Days</option>
                  <option value="90days">Last 90 Days</option>
                  <option value="custom">Custom Range</option>
                </select>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>

            {/* Bookings Table */}
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Booking ID</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Partner</TableHead>
                    <TableHead>Listing</TableHead>
                    <TableHead>Dates</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Payment Status</TableHead>
                    <TableHead>Booking Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBookings.map((booking) => (
                    <TableRow key={booking.id} className={booking.flagged ? 'bg-red-50' : ''}>
                      <TableCell className="font-mono text-sm">
                        <div className="flex items-center gap-2">
                          {booking.flagged && <AlertTriangle className="h-4 w-4 text-red-500" />}
                          {booking.id}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{booking.userName}</p>
                          <p className="text-xs text-gray-500">{booking.userId}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{booking.partnerName}</p>
                          <p className="text-xs text-gray-500">{booking.partnerId}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm font-medium">{booking.listingTitle}</p>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>{booking.checkinDate}</p>
                          <p className="text-gray-500">to {booking.checkoutDate}</p>
                        </div>
                      </TableCell>
                      <TableCell className="font-semibold">{booking.amount}</TableCell>
                      <TableCell>
                        <Badge className={getPaymentStatusColor(booking.paymentStatus)}>
                          {booking.paymentStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(booking.bookingStatus)}>
                          {booking.bookingStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Link to={`/admin/bookings/${booking.id}`}>
                          <Button variant="outline" size="sm">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-gray-600">
                Showing {filteredBookings.length} of {bookings.length} bookings
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminBookings;
