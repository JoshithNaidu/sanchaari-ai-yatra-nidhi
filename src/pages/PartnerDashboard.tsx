
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Building2,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  Users,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  BarChart3,
  Settings,
  Bell,
  LogOut,
  Plus,
  Eye,
  Edit
} from 'lucide-react';

const PartnerDashboard = () => {
  const { user, logout } = useCentralizedAuth();
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // Business Performance Metrics
  const businessMetrics = {
    totalRevenue: 1250000,
    monthlyGrowth: 18.5,
    totalBookings: 234,
    bookingGrowth: 12.3,
    averageRating: 4.7,
    totalReviews: 189,
    occupancyRate: 78,
    conversionRate: 8.4,
    repeatCustomers: 45,
    pendingPayouts: 85000
  };

  // Property Performance
  const propertyPerformance = [
    {
      id: 'PROP001',
      name: 'Mountain View Resort',
      type: 'Hotel',
      location: 'Manali, HP',
      bookings: 89,
      revenue: 680000,
      rating: 4.8,
      occupancy: 82,
      status: 'active'
    },
    {
      id: 'PROP002',
      name: 'Valley Side Cottages',
      type: 'Cottage',
      location: 'Kasol, HP',
      bookings: 67,
      revenue: 345000,
      rating: 4.6,
      occupancy: 75,
      status: 'active'
    },
    {
      id: 'PROP003',
      name: 'Alpine Adventure Camp',
      type: 'Camp',
      location: 'Solang Valley, HP',
      bookings: 78,
      revenue: 225000,
      rating: 4.7,
      occupancy: 68,
      status: 'maintenance'
    }
  ];

  // Recent Bookings
  const recentBookings = [
    {
      id: 'BK001',
      guestName: 'Rajesh Kumar',
      property: 'Mountain View Resort',
      checkIn: '2024-06-05',
      checkOut: '2024-06-08',
      amount: 12500,
      status: 'confirmed',
      guests: 4
    },
    {
      id: 'BK002',
      guestName: 'Priya Sharma',
      property: 'Valley Side Cottages',
      checkIn: '2024-06-10',
      checkOut: '2024-06-15',
      amount: 8900,
      status: 'pending',
      guests: 2
    },
    {
      id: 'BK003',
      guestName: 'Amit Patel',
      property: 'Alpine Adventure Camp',
      checkIn: '2024-06-12',
      checkOut: '2024-06-14',
      amount: 3600,
      status: 'checked_in',
      guests: 3
    }
  ];

  // Guest Messages
  const guestMessages = [
    {
      id: 'MSG001',
      from: 'Rajesh Kumar',
      property: 'Mountain View Resort',
      message: 'Can we arrange early check-in for tomorrow?',
      timestamp: '2 hours ago',
      urgent: false
    },
    {
      id: 'MSG002',
      from: 'Priya Sharma',
      property: 'Valley Side Cottages',
      message: 'Is airport pickup available for our booking?',
      timestamp: '4 hours ago',
      urgent: false
    },
    {
      id: 'MSG003',
      from: 'System Alert',
      property: 'Alpine Adventure Camp',
      message: 'Equipment maintenance scheduled for tomorrow',
      timestamp: '6 hours ago',
      urgent: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'checked_in': return 'bg-blue-100 text-blue-800';
      case 'maintenance': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': case 'active': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'maintenance': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Partner Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/94fa41ec-96bd-400a-8fc5-4c52f8f19917.png" 
                alt="Sanchaari Logo" 
                className="h-8 w-auto"
              />
            </Link>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 font-semibold">
              PARTNER PORTAL
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
              <Badge className="ml-1 h-4 w-4 p-0 text-xs">2</Badge>
            </Button>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.companyName || 'Partner'}! 🏨
          </h1>
          <p className="text-gray-600">Manage your properties, bookings, and grow your business with Sanchaari</p>
        </div>

        {/* Key Business Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Total Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">₹{(businessMetrics.totalRevenue / 1000).toFixed(0)}K</div>
              <div className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +{businessMetrics.monthlyGrowth}% this month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Total Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{businessMetrics.totalBookings}</div>
              <div className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +{businessMetrics.bookingGrowth}%
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Average Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600 flex items-center gap-1">
                <Star className="h-5 w-5 fill-current" />
                {businessMetrics.averageRating}
              </div>
              <div className="text-xs text-gray-600">{businessMetrics.totalReviews} reviews</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Occupancy Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{businessMetrics.occupancyRate}%</div>
              <Progress value={businessMetrics.occupancyRate} className="h-2 mt-1" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Pending Payouts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">₹{(businessMetrics.pendingPayouts / 1000).toFixed(0)}K</div>
              <div className="text-xs text-gray-600">Next payout: June 15</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Property Performance */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Property Performance
                </CardTitle>
                <CardDescription>Monitor individual property metrics and occupancy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {propertyPerformance.map((property) => (
                    <div key={property.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div>
                            <h4 className="font-semibold">{property.name}</h4>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <MapPin className="h-3 w-3" />
                              {property.location}
                              <Badge variant="outline">{property.type}</Badge>
                            </div>
                          </div>
                        </div>
                        <Badge className={getStatusColor(property.status)}>
                          <span className="flex items-center gap-1">
                            {getStatusIcon(property.status)}
                            {property.status}
                          </span>
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Bookings</span>
                          <div className="font-semibold">{property.bookings}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Revenue</span>
                          <div className="font-semibold">₹{(property.revenue / 1000).toFixed(0)}K</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Rating</span>
                          <div className="font-semibold flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {property.rating}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">Occupancy</span>
                          <div className="font-semibold">{property.occupancy}%</div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3 mr-1" />
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-3 w-3 mr-1" />
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Guest Messages & Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Guest Messages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {guestMessages.map((message) => (
                    <div key={message.id} className={`p-3 rounded-lg ${message.urgent ? 'bg-red-50 border border-red-200' : 'bg-gray-50'}`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{message.from}</span>
                        <span className="text-xs text-gray-500">{message.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{message.message}</p>
                      <div className="text-xs text-gray-500">{message.property}</div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    View All Messages
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link to="/partner/inventory/listings">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Building2 className="h-4 w-4" />
                      Manage Properties
                    </Button>
                  </Link>
                  <Link to="/partner/bookings/list">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Calendar className="h-4 w-4" />
                      View Bookings
                    </Button>
                  </Link>
                  <Link to="/partner/reports/revenue">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <BarChart3 className="h-4 w-4" />
                      Revenue Reports
                    </Button>
                  </Link>
                  <Link to="/partner/payouts">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <DollarSign className="h-4 w-4" />
                      Payouts
                    </Button>
                  </Link>
                  <Link to="/partner/profile/company">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Settings className="h-4 w-4" />
                      Settings
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Bookings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Recent Bookings
              </span>
              <Link to="/partner/bookings/list">
                <Button variant="outline" size="sm">View All</Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="font-semibold">{booking.guestName}</div>
                      <div className="text-sm text-gray-600">{booking.property}</div>
                      <div className="text-xs text-gray-500">
                        {booking.checkIn} to {booking.checkOut} • {booking.guests} guests
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">₹{booking.amount.toLocaleString()}</div>
                    <Badge className={getStatusColor(booking.status)}>
                      <span className="flex items-center gap-1">
                        {getStatusIcon(booking.status)}
                        {booking.status.replace('_', ' ')}
                      </span>
                    </Badge>
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

export default PartnerDashboard;
