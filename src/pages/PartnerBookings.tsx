
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Label } from '@/components/ui/label';
import { 
  Search, 
  Filter, 
  Calendar, 
  ArrowLeft, 
  Eye, 
  MessageCircle,
  Check,
  X,
  User,
  MapPin,
  Clock
} from 'lucide-react';

const PartnerBookings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const bookings = [
    {
      id: 'BK5489',
      guestName: 'Rahul Sharma',
      guestEmail: 'rahul.sharma@email.com',
      guestPhone: '+91 98765 43210',
      property: 'Sea View Villa',
      checkIn: '2024-06-15',
      checkOut: '2024-06-18',
      guests: 4,
      status: 'confirmed',
      paymentStatus: 'paid',
      amount: 15000,
      requestDate: '2024-05-20'
    },
    {
      id: 'BK5490',
      guestName: 'Priya Patel',
      guestEmail: 'priya.patel@email.com',
      guestPhone: '+91 87654 32109',
      property: 'Mountain Trek Experience',
      checkIn: '2024-06-20',
      checkOut: '2024-06-22',
      guests: 2,
      status: 'requested',
      paymentStatus: 'pending',
      amount: 8000,
      requestDate: '2024-05-25'
    },
    {
      id: 'BK5491',
      guestName: 'Amit Kumar',
      guestEmail: 'amit.kumar@email.com',
      guestPhone: '+91 76543 21098',
      property: 'Heritage Walk Tour',
      checkIn: '2024-06-25',
      checkOut: '2024-06-25',
      guests: 6,
      status: 'cancelled',
      paymentStatus: 'refunded',
      amount: 12000,
      requestDate: '2024-05-18'
    }
  ];

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-800">Confirmed</Badge>;
      case 'requested':
        return <Badge className="bg-blue-100 text-blue-800">Requested</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPaymentBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'refunded':
        return <Badge className="bg-gray-100 text-gray-800">Refunded</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleViewDetails = (booking: any) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const handleAcceptBooking = (bookingId: string) => {
    console.log('Accepting booking:', bookingId);
    // Add accept logic here
  };

  const handleDeclineBooking = (bookingId: string) => {
    console.log('Declining booking:', bookingId);
    // Add decline logic here
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
              <h1 className="text-2xl font-bold text-gray-900">Bookings</h1>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="h-4 w-4 mr-2" />
              Calendar View
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Filters and Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter & Search Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by guest name, booking ID, or property..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="requested">Requested</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Bookings Table */}
        <Card>
          <CardHeader>
            <CardTitle>Your Bookings ({filteredBookings.length})</CardTitle>
            <CardDescription>
              Manage all booking requests and confirmations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking ID</TableHead>
                  <TableHead>Guest</TableHead>
                  <TableHead>Property</TableHead>
                  <TableHead>Dates</TableHead>
                  <TableHead>Guests</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{booking.guestName}</div>
                        <div className="text-sm text-gray-500">{booking.guestEmail}</div>
                      </div>
                    </TableCell>
                    <TableCell>{booking.property}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{new Date(booking.checkIn).toLocaleDateString()}</div>
                        <div className="text-gray-500">to {new Date(booking.checkOut).toLocaleDateString()}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4 text-gray-400" />
                        {booking.guests}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(booking.status)}</TableCell>
                    <TableCell>{getPaymentBadge(booking.paymentStatus)}</TableCell>
                    <TableCell className="font-medium">₹{booking.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleViewDetails(booking)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        {booking.status === 'requested' && (
                          <>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleAcceptBooking(booking.id)}
                              className="text-green-600 hover:text-green-700"
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleDeclineBooking(booking.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Booking Details Modal */}
        {showModal && selectedBooking && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-full max-w-2xl mx-4">
              <CardHeader>
                <CardTitle>Booking Details - {selectedBooking.id}</CardTitle>
                <CardDescription>
                  Requested on {new Date(selectedBooking.requestDate).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Guest Information */}
                <div>
                  <h3 className="font-semibold mb-3">Guest Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-gray-500">Name</Label>
                      <p className="font-medium">{selectedBooking.guestName}</p>
                    </div>
                    <div>
                      <Label className="text-sm text-gray-500">Email</Label>
                      <p>{selectedBooking.guestEmail}</p>
                    </div>
                    <div>
                      <Label className="text-sm text-gray-500">Phone</Label>
                      <p>{selectedBooking.guestPhone}</p>
                    </div>
                    <div>
                      <Label className="text-sm text-gray-500">Guests</Label>
                      <p>{selectedBooking.guests} people</p>
                    </div>
                  </div>
                </div>

                {/* Booking Details */}
                <div>
                  <h3 className="font-semibold mb-3">Booking Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-gray-500">Property</Label>
                      <p className="font-medium">{selectedBooking.property}</p>
                    </div>
                    <div>
                      <Label className="text-sm text-gray-500">Check-in</Label>
                      <p>{new Date(selectedBooking.checkIn).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <Label className="text-sm text-gray-500">Check-out</Label>
                      <p>{new Date(selectedBooking.checkOut).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <Label className="text-sm text-gray-500">Total Amount</Label>
                      <p className="font-medium">₹{selectedBooking.amount.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm text-gray-500">Booking Status</Label>
                    <div className="mt-1">{getStatusBadge(selectedBooking.status)}</div>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-500">Payment Status</Label>
                    <div className="mt-1">{getPaymentBadge(selectedBooking.paymentStatus)}</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4">
                  {selectedBooking.status === 'requested' && (
                    <>
                      <Button 
                        onClick={() => handleAcceptBooking(selectedBooking.id)}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4 mr-2" />
                        Accept Booking
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => handleDeclineBooking(selectedBooking.id)}
                        className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Decline
                      </Button>
                    </>
                  )}
                  <Button variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message Guest
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerBookings;
