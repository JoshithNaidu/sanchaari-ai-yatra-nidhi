
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Shield, 
  Ban,
  CheckCircle,
  XCircle,
  MessageSquare,
  Plane,
  AlertTriangle,
  FileText
} from 'lucide-react';

const AdminUserProfile = () => {
  const { userId } = useParams();

  // Mock user data
  const user = {
    id: userId || 'USR001',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 98765 43210',
    dateOfBirth: '1985-03-15',
    location: 'Mumbai, Maharashtra',
    registrationDate: '2024-01-15',
    lastLogin: '2024-05-30 14:30',
    status: 'active',
    verified: true,
    kycStatus: 'completed',
    profileImage: null,
    preferences: {
      budget: '₹50,000 - ₹1,00,000',
      travelType: 'Adventure, Cultural',
      dietary: 'Vegetarian',
      accommodation: 'Hotels, Resorts'
    }
  };

  const tripHistory = [
    {
      id: 'TRP001',
      destination: 'Goa',
      dates: '2024-04-15 to 2024-04-20',
      status: 'completed',
      amount: '₹45,000'
    },
    {
      id: 'TRP002',
      destination: 'Kerala',
      dates: '2024-03-10 to 2024-03-15',
      status: 'completed',
      amount: '₹32,000'
    },
    {
      id: 'TRP003',
      destination: 'Rajasthan',
      dates: '2024-06-01 to 2024-06-07',
      status: 'upcoming',
      amount: '₹55,000'
    }
  ];

  const supportTickets = [
    {
      id: 'TKT001',
      subject: 'Payment issue with booking',
      status: 'resolved',
      date: '2024-04-20',
      priority: 'high'
    },
    {
      id: 'TKT002',
      subject: 'Request for itinerary change',
      status: 'open',
      date: '2024-05-25',
      priority: 'medium'
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

  const getTripStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'upcoming':
        return <Badge className="bg-blue-100 text-blue-800">Upcoming</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTicketStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge className="bg-yellow-100 text-yellow-800">Open</Badge>;
      case 'resolved':
        return <Badge className="bg-green-100 text-green-800">Resolved</Badge>;
      case 'closed':
        return <Badge className="bg-gray-100 text-gray-800">Closed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
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
                <h1 className="text-2xl font-bold text-gray-900">User Profile</h1>
                <p className="text-sm text-gray-600">Detailed view of user: {user.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="text-yellow-600">
                <Ban className="h-4 w-4 mr-2" />
                Suspend User
              </Button>
              <Button variant="destructive" size="sm">
                Ban Permanently
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* User Overview */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">{user.name}</CardTitle>
                  <CardDescription>User ID: {user.id}</CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    {getStatusBadge(user.status)}
                    {user.verified && (
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Last Login</p>
                <p className="font-medium">{user.lastLogin}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{user.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{user.location}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">DOB: {user.dateOfBirth}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Registered: {user.registrationDate}</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Quick Actions</p>
                <div className="space-y-2">
                  <Button size="sm" variant="outline" className="w-full">
                    <Mail className="h-3 w-3 mr-2" />
                    Resend Verification
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    <MessageSquare className="h-3 w-3 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="trips" className="space-y-4">
          <TabsList>
            <TabsTrigger value="trips">Trip History</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="support">Support Tickets</TabsTrigger>
            <TabsTrigger value="kyc">KYC Details</TabsTrigger>
          </TabsList>

          <TabsContent value="trips">
            <Card>
              <CardHeader>
                <CardTitle>Trip History</CardTitle>
                <CardDescription>All trips planned and completed by this user</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tripHistory.map((trip) => (
                    <div key={trip.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Plane className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium">{trip.destination}</p>
                          <p className="text-sm text-gray-600">{trip.dates}</p>
                          <p className="text-sm text-gray-500">Trip ID: {trip.id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{trip.amount}</p>
                        {getTripStatusBadge(trip.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle>Travel Preferences</CardTitle>
                <CardDescription>User's travel preferences and settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-medium mb-2">Budget Range</p>
                    <p className="text-gray-600">{user.preferences.budget}</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Travel Type</p>
                    <p className="text-gray-600">{user.preferences.travelType}</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Dietary Preferences</p>
                    <p className="text-gray-600">{user.preferences.dietary}</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Accommodation</p>
                    <p className="text-gray-600">{user.preferences.accommodation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support">
            <Card>
              <CardHeader>
                <CardTitle>Support Tickets</CardTitle>
                <CardDescription>User's support requests and feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportTickets.map((ticket) => (
                    <div key={ticket.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="font-medium">{ticket.subject}</p>
                          <p className="text-sm text-gray-600">Date: {ticket.date}</p>
                          <p className="text-sm text-gray-500">Ticket ID: {ticket.id}</p>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        {getTicketStatusBadge(ticket.status)}
                        <p className="text-xs text-gray-500">Priority: {ticket.priority}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="kyc">
            <Card>
              <CardHeader>
                <CardTitle>KYC Information</CardTitle>
                <CardDescription>Identity verification details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">KYC Status: Completed</p>
                        <p className="text-sm text-gray-600">Verified on: 2024-01-20</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View Documents</Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium">Aadhaar Card</p>
                      <p className="text-sm text-gray-600">****-****-1234</p>
                      <Badge className="bg-green-100 text-green-800 mt-1">Verified</Badge>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium">PAN Card</p>
                      <p className="text-sm text-gray-600">ABCDE1234F</p>
                      <Badge className="bg-green-100 text-green-800 mt-1">Verified</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminUserProfile;
