
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Users, 
  Building2, 
  CreditCard, 
  AlertTriangle, 
  TrendingUp,
  TrendingDown,
  Activity,
  Calendar,
  RefreshCw,
  Download,
  Eye
} from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    // Simulate refresh
    await new Promise(resolve => setTimeout(resolve, 1000));
    setRefreshing(false);
  };

  const metrics = [
    {
      title: "Total Users",
      value: "45,234",
      delta: "+2.4%",
      trend: "up",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Sessions",
      value: "1,203",
      delta: "+5.2%",
      trend: "up",
      icon: Activity,
      color: "text-green-600"
    },
    {
      title: "Bookings Today",
      value: "127",
      delta: "-1.2%",
      trend: "down",
      icon: Calendar,
      color: "text-orange-600"
    },
    {
      title: "Cancellations %",
      value: "2.1%",
      delta: "+0.3%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-red-600"
    },
    {
      title: "Refunds Processed",
      value: "₹1.2L",
      delta: "-15%",
      trend: "up",
      icon: CreditCard,
      color: "text-purple-600"
    },
    {
      title: "SLA Breaches",
      value: "3",
      delta: "-2",
      trend: "up",
      icon: AlertTriangle,
      color: "text-red-600"
    }
  ];

  const recentBookings = [
    { id: "BK001", amount: "₹25,000", user: "Rahul Sharma", partner: "TravelCorp", status: "confirmed", method: "UPI" },
    { id: "BK002", amount: "₹45,000", user: "Priya Patel", partner: "BookMyTrip", status: "pending", method: "Card" },
    { id: "BK003", amount: "₹18,500", user: "Amit Kumar", partner: "TravelCorp", status: "cancelled", method: "Wallet" },
    { id: "BK004", amount: "₹67,000", user: "Sneha Singh", partner: "Wanderlust", status: "confirmed", method: "Card" },
    { id: "BK005", amount: "₹32,000", user: "Vikram Joshi", partner: "BookMyTrip", status: "confirmed", method: "UPI" }
  ];

  const recentSignups = [
    { id: "USR001", name: "Anita Verma", time: "2 mins ago", device: "Mobile", source: "Organic" },
    { id: "USR002", name: "Rajesh Gupta", time: "5 mins ago", device: "Desktop", source: "Google Ads" },
    { id: "USR003", name: "Meera Shah", time: "12 mins ago", device: "Mobile", source: "Referral" },
    { id: "USR004", name: "Suresh Reddy", time: "18 mins ago", device: "Desktop", source: "Facebook" },
    { id: "USR005", name: "Kavya Nair", time: "25 mins ago", device: "Mobile", source: "Organic" }
  ];

  const systemAlerts = [
    { type: "critical", message: "High booking dropoff detected in Mumbai region", time: "5 mins ago" },
    { type: "warning", message: "Payment gateway latency above threshold", time: "12 mins ago" },
    { type: "info", message: "Partner onboarding queue requires attention", time: "1 hour ago" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical': return 'border-red-200 bg-red-50';
      case 'warning': return 'border-yellow-200 bg-yellow-50';
      default: return 'border-blue-200 bg-blue-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.fullName}</p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={refreshing}
                className="gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export
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
        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <div className="flex items-center mt-1">
                      {metric.trend === 'up' ? 
                        <TrendingUp className="h-4 w-4 text-green-600 mr-1" /> : 
                        <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                      }
                      <span className={`text-sm ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {metric.delta}
                      </span>
                    </div>
                  </div>
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Alerts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>System Alert Center</CardTitle>
            <CardDescription>Real-time monitoring and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {systemAlerts.map((alert, index) => (
                <div key={index} className={`p-4 rounded-lg border ${getAlertColor(alert.type)}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-current" />
                      <span className="font-medium">{alert.message}</span>
                    </div>
                    <span className="text-sm text-gray-600">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Bookings */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
              <CardDescription>Latest booking activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBookings.map((booking, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{booking.id}</p>
                      <p className="text-sm text-gray-600">{booking.user} • {booking.partner}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{booking.amount}</p>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status}
                        </Badge>
                        <span className="text-xs text-gray-500">{booking.method}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link to="/admin/bookings/list">
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    View All Bookings
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Recent Signups */}
          <Card>
            <CardHeader>
              <CardTitle>New User Signups</CardTitle>
              <CardDescription>Latest user registrations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSignups.map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.id}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{user.time}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {user.device}
                        </span>
                        <span className="text-xs text-gray-500">{user.source}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link to="/admin/users/list">
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    View All Users
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/admin/users/list">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">User Management</h3>
                <p className="text-sm text-gray-600">Manage users, KYC, and permissions</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/partners/list">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Building2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Partner Management</h3>
                <p className="text-sm text-gray-600">Manage partners and onboarding</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/bookings/list">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Booking Management</h3>
                <p className="text-sm text-gray-600">View and manage all bookings</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/users/feedback">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Support Center</h3>
                <p className="text-sm text-gray-600">Handle support tickets and feedback</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
