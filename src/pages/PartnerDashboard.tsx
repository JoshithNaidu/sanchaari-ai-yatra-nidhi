
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Building2, 
  Calendar, 
  DollarSign, 
  Star, 
  TrendingUp,
  TrendingDown,
  Users,
  Bell,
  Settings,
  LogOut,
  Package,
  BookOpen,
  AlertTriangle,
  Eye,
  Plus,
  BarChart3,
  CheckCircle,
  Clock,
  XCircle,
  MessageSquare,
  MapPin,
  Plane,
  Hotel,
  Camera
} from 'lucide-react';

const PartnerDashboard = () => {
  const { user, logout } = useCentralizedAuth();
  const [timePeriod, setTimePeriod] = useState('week');

  // Partner-specific metrics
  const businessMetrics = {
    totalListings: 24,
    activeListings: 18,
    pendingBookings: 12,
    confirmedBookings: 87,
    monthlyRevenue: 2456780,
    occupancyRate: 78,
    avgRating: 4.6,
    reviewCount: 342,
    responseRate: 94,
    cancellationRate: 2.1
  };

  // Recent bookings with partner-specific data
  const recentBookings = [
    { 
      id: "BK2024001", 
      guest: "Arjun Mehta", 
      property: "Sea View Villa", 
      checkIn: "2024-01-15", 
      checkOut: "2024-01-18",
      amount: 45000, 
      status: "confirmed",
      nights: 3,
      guests: 4
    },
    { 
      id: "BK2024002", 
      guest: "Priya Sharma", 
      property: "Mountain Cottage", 
      checkIn: "2024-01-20", 
      checkOut: "2024-01-23",
      amount: 28500, 
      status: "pending",
      nights: 3,
      guests: 2
    },
    { 
      id: "BK2024003", 
      guest: "Rajesh Kumar", 
      property: "City Apartment", 
      checkIn: "2024-01-18", 
      checkOut: "2024-01-20",
      amount: 18000, 
      status: "cancelled",
      nights: 2,
      guests: 3
    }
  ];

  // Property performance data
  const topPerformingProperties = [
    { name: "Sea View Villa", bookings: 23, revenue: 892000, rating: 4.8, occupancy: 85 },
    { name: "Mountain Cottage", bookings: 18, revenue: 624000, rating: 4.7, occupancy: 72 },
    { name: "City Apartment", bookings: 31, revenue: 485000, rating: 4.5, occupancy: 90 },
    { name: "Beach House", bookings: 15, revenue: 745000, rating: 4.9, occupancy: 68 }
  ];

  // Recent guest messages/inquiries
  const guestMessages = [
    { guest: "Sanya Patel", property: "Sea View Villa", message: "What time is check-in?", time: "2 hours ago", unread: true },
    { guest: "Vikram Singh", property: "Mountain Cottage", message: "Can we get early check-in?", time: "4 hours ago", unread: true },
    { guest: "Meera Joshi", property: "City Apartment", message: "Thank you for the excellent stay!", time: "1 day ago", unread: false }
  ];

  // Business alerts
  const businessAlerts = [
    { type: "urgent", message: "Payment pending for booking BK2024001", action: "Review Payment" },
    { type: "warning", message: "Mountain Cottage has low availability next month", action: "Update Calendar" },
    { type: "info", message: "New review received for Sea View Villa", action: "View Review" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'cancelled': return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'urgent': return 'border-red-200 bg-red-50 text-red-800';
      case 'warning': return 'border-yellow-200 bg-yellow-50 text-yellow-800';
      default: return 'border-blue-200 bg-blue-50 text-blue-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/94fa41ec-96bd-400a-8fc5-4c52f8f19917.png" 
              alt="Sanchaari Logo" 
              className="h-8 w-auto"
            />
          </Link>
          
          <div className="flex items-center gap-4">
            <Link to="/partner/help/center" className="text-gray-600 hover:text-blue-600 transition-colors">
              Help Center
            </Link>
            <Link to="/partner/messages" className="text-gray-600 hover:text-blue-600 transition-colors relative">
              Messages
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Link>
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.companyName || user?.fullName || 'Partner'}!
          </h1>
          <p className="text-gray-600">Here's how your business is performing today.</p>
        </div>

        {/* Business Alerts */}
        {businessAlerts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Business Alerts</h2>
            <div className="space-y-3">
              {businessAlerts.map((alert, index) => (
                <div key={index} className={`p-4 rounded-lg border ${getAlertColor(alert.type)} flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5" />
                    <span className="font-medium">{alert.message}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    {alert.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Time Period Filter */}
        <div className="mb-6">
          <Select value={timePeriod} onValueChange={setTimePeriod}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Key Business Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{businessMetrics.monthlyRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 text-green-600 mr-1" />
                +15.3% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{businessMetrics.occupancyRate}%</div>
              <Progress value={businessMetrics.occupancyRate} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-1">
                Target: 85%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{businessMetrics.avgRating}</div>
              <p className="text-xs text-muted-foreground">
                Based on {businessMetrics.reviewCount} reviews
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{businessMetrics.activeListings}</div>
              <p className="text-xs text-muted-foreground">
                {businessMetrics.totalListings} total properties
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Bookings</CardTitle>
                  <CardDescription>Latest reservations and their status</CardDescription>
                </div>
                <Link to="/partner/bookings/list">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{booking.id}</span>
                          <Badge className={getStatusColor(booking.status)} variant="secondary">
                            <span className="flex items-center gap-1">
                              {getStatusIcon(booking.status)}
                              {booking.status}
                            </span>
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{booking.guest} • {booking.property}</p>
                        <p className="text-xs text-gray-500">
                          {booking.checkIn} to {booking.checkOut} • {booking.nights} nights • {booking.guests} guests
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₹{booking.amount.toLocaleString()}</p>
                        <Button variant="ghost" size="sm" className="mt-1">
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Guest Messages */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Guest Messages</CardTitle>
                <CardDescription>Recent inquiries and communications</CardDescription>
              </div>
              <Link to="/partner/messages">
                <Button variant="outline" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {guestMessages.map((message, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{message.guest}</span>
                      {message.unread && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{message.property}</p>
                    <p className="text-sm text-gray-700 mb-2">{message.message}</p>
                    <p className="text-xs text-gray-400">{message.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Property Performance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Property Performance</CardTitle>
            <CardDescription>How your listings are performing this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {topPerformingProperties.map((property, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">{property.name}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bookings:</span>
                      <span className="font-medium">{property.bookings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue:</span>
                      <span className="font-medium">₹{property.revenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <span className="font-medium flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {property.rating}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Occupancy:</span>
                      <span className="font-medium">{property.occupancy}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions for Partners */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your business efficiently</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/partner/inventory/listings">
                <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Manage Properties</h3>
                  <p className="text-sm text-gray-600">Add, edit, or update your property listings</p>
                </div>
              </Link>

              <Link to="/partner/bookings/list">
                <div className="p-6 rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">View Bookings</h3>
                  <p className="text-sm text-gray-600">Manage reservations and guest requests</p>
                </div>
              </Link>

              <Link to="/partner/inventory/availability">
                <div className="p-6 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Update Calendar</h3>
                  <p className="text-sm text-gray-600">Manage availability and pricing</p>
                </div>
              </Link>

              <Link to="/partner/payouts">
                <div className="p-6 rounded-lg border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">View Earnings</h3>
                  <p className="text-sm text-gray-600">Track payments and payouts</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartnerDashboard;
