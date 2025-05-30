
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  Building2, 
  DollarSign, 
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  BarChart3,
  Activity,
  Globe,
  Zap,
  Shield,
  Settings,
  Bell,
  LogOut,
  Eye,
  Plus,
  Filter,
  Calendar
} from 'lucide-react';

const AdminDashboard = () => {
  const { user, logout } = useCentralizedAuth();
  const [timePeriod, setTimePeriod] = useState('month');

  // System metrics
  const systemMetrics = {
    totalUsers: 15847,
    activeUsers: 12563,
    totalPartners: 342,
    activePartners: 287,
    totalBookings: 8439,
    pendingBookings: 156,
    totalRevenue: 45678900,
    monthlyGrowth: 12.5,
    systemUptime: 99.9,
    apiResponseTime: 145
  };

  // User activity data
  const userActivity = [
    { type: 'new_registrations', count: 145, change: +12 },
    { type: 'active_sessions', count: 3247, change: +8 },
    { type: 'bookings_completed', count: 89, change: -3 },
    { type: 'support_tickets', count: 23, change: +5 }
  ];

  // Recent alerts
  const systemAlerts = [
    { 
      id: 1, 
      type: 'critical', 
      message: 'High API response time detected on payment gateway', 
      timestamp: '2 minutes ago',
      action: 'Investigate'
    },
    { 
      id: 2, 
      type: 'warning', 
      message: 'Unusual spike in failed login attempts', 
      timestamp: '15 minutes ago',
      action: 'Review Logs'
    },
    { 
      id: 3, 
      type: 'info', 
      message: 'Scheduled maintenance window approaching', 
      timestamp: '1 hour ago',
      action: 'Prepare'
    }
  ];

  // Recent partner applications
  const partnerApplications = [
    { 
      id: 'PA2024001', 
      company: 'Mountain View Resorts', 
      type: 'Hotels', 
      status: 'pending_review',
      submitted: '2024-01-15',
      documents: 8
    },
    { 
      id: 'PA2024002', 
      company: 'Adventure Tours India', 
      type: 'Activities', 
      status: 'approved',
      submitted: '2024-01-14',
      documents: 12
    },
    { 
      id: 'PA2024003', 
      company: 'Sky Airlines', 
      type: 'Flights', 
      status: 'rejected',
      submitted: '2024-01-13',
      documents: 5
    }
  ];

  // Top performing partners
  const topPartners = [
    { name: 'Luxury Hotels Group', bookings: 234, revenue: 1250000, rating: 4.8 },
    { name: 'Adventure Seekers', bookings: 189, revenue: 890000, rating: 4.7 },
    { name: 'City Break Hotels', bookings: 156, revenue: 675000, rating: 4.6 },
    { name: 'Mountain Escapes', bookings: 142, revenue: 598000, rating: 4.9 }
  ];

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical': return 'border-red-200 bg-red-50 text-red-800';
      case 'warning': return 'border-yellow-200 bg-yellow-50 text-yellow-800';
      default: return 'border-blue-200 bg-blue-50 text-blue-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending_review': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="h-4 w-4" />;
      case 'pending_review': return <Clock className="h-4 w-4" />;
      case 'rejected': return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
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
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
              Admin Portal
            </Badge>
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
            Admin Dashboard
          </h1>
          <p className="text-gray-600">System overview and management console</p>
        </div>

        {/* System Alerts */}
        {systemAlerts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              System Alerts
            </h2>
            <div className="space-y-3">
              {systemAlerts.map((alert) => (
                <div key={alert.id} className={`p-4 rounded-lg border ${getAlertColor(alert.type)} flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5" />
                    <div>
                      <span className="font-medium">{alert.message}</span>
                      <p className="text-sm opacity-80">{alert.timestamp}</p>
                    </div>
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
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Key System Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemMetrics.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 text-green-600 mr-1" />
                {systemMetrics.activeUsers.toLocaleString()} active users
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Partners</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemMetrics.totalPartners}</div>
              <p className="text-xs text-muted-foreground">
                {systemMetrics.activePartners} active partners
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{(systemMetrics.totalRevenue / 1000000).toFixed(1)}M</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 text-green-600 mr-1" />
                +{systemMetrics.monthlyGrowth}% this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Health</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemMetrics.systemUptime}%</div>
              <p className="text-xs text-muted-foreground">
                {systemMetrics.apiResponseTime}ms avg response
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent User Activity */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>User Activity Overview</CardTitle>
                <CardDescription>Real-time user engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium capitalize">{activity.type.replace('_', ' ')}</h4>
                        <p className="text-2xl font-bold mt-1">{activity.count.toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <div className={`flex items-center gap-1 ${activity.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {activity.change >= 0 ? 
                            <TrendingUp className="h-4 w-4" /> : 
                            <TrendingDown className="h-4 w-4" />
                          }
                          <span className="text-sm font-medium">{Math.abs(activity.change)}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Partner Applications */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Partner Applications</CardTitle>
                <CardDescription>Pending partner reviews</CardDescription>
              </div>
              <Link to="/admin/partners/applications">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {partnerApplications.map((application) => (
                  <div key={application.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{application.company}</span>
                      <Badge className={getStatusColor(application.status)} variant="secondary">
                        <span className="flex items-center gap-1">
                          {getStatusIcon(application.status)}
                          {application.status.replace('_', ' ')}
                        </span>
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{application.type}</p>
                    <p className="text-xs text-gray-500">Submitted: {application.submitted}</p>
                    <p className="text-xs text-gray-500">{application.documents} documents</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Performing Partners */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Top Performing Partners</CardTitle>
            <CardDescription>Highest revenue generating partners this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {topPartners.map((partner, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{partner.name}</h4>
                    <Badge variant="outline">#{index + 1}</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bookings:</span>
                      <span className="font-medium">{partner.bookings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue:</span>
                      <span className="font-medium">₹{(partner.revenue / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <span className="font-medium flex items-center gap-1">
                        ⭐ {partner.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Admin Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Admin Actions</CardTitle>
            <CardDescription>Frequently used administrative functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/admin/users/list">
                <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Manage Users</h3>
                  <p className="text-sm text-gray-600">View, edit, and moderate user accounts</p>
                </div>
              </Link>

              <Link to="/admin/partners/list">
                <div className="p-6 rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Partner Management</h3>
                  <p className="text-sm text-gray-600">Review applications and manage partners</p>
                </div>
              </Link>

              <Link to="/admin/content/destinations">
                <div className="p-6 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Content Management</h3>
                  <p className="text-sm text-gray-600">Manage destinations, blogs, and content</p>
                </div>
              </Link>

              <Link to="/admin/reports/overview">
                <div className="p-6 rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics & Reports</h3>
                  <p className="text-sm text-gray-600">View detailed analytics and generate reports</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
