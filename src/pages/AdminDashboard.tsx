import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
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
  Database,
  Server,
  Activity,
  Shield,
  Settings,
  Bell,
  LogOut,
  Eye,
  Ban,
  RefreshCw,
  MonitorSpeaker,
  FileText,
  BarChart3,
  Zap,
  MessageSquare
} from 'lucide-react';

const AdminDashboard = () => {
  const { user, logout } = useCentralizedAuth();
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  // System Health Metrics
  const systemHealth = {
    uptime: 99.97,
    activeConnections: 2847,
    dbConnections: 145,
    memoryUsage: 72,
    cpuUsage: 45,
    diskUsage: 68,
    responseTime: 142,
    errorRate: 0.08,
    throughput: 1250
  };

  // Critical System Alerts
  const criticalAlerts = [
    { 
      id: 1, 
      severity: 'critical', 
      message: 'Payment gateway response time >3s', 
      timestamp: '3 mins ago',
      affected: 'Payment Processing',
      status: 'investigating'
    },
    { 
      id: 2, 
      severity: 'warning', 
      message: 'Database connection pool at 85% capacity', 
      timestamp: '12 mins ago',
      affected: 'Database Layer',
      status: 'monitoring'
    },
    { 
      id: 3, 
      severity: 'high', 
      message: 'Suspicious login patterns detected - Account: user@domain.com', 
      timestamp: '25 mins ago',
      affected: 'Security',
      status: 'action_required'
    }
  ];

  // Business Intelligence
  const businessMetrics = {
    totalRevenue: 15680000,
    revenueGrowth: 18.5,
    activeUsers: 45670,
    userGrowth: 12.3,
    totalBookings: 8934,
    bookingGrowth: 15.8,
    partnerCount: 892,
    partnerGrowth: 8.2,
    conversionRate: 3.4,
    avgBookingValue: 8750,
    supportTickets: 89,
    pendingApprovals: 23
  };

  // Real-time Activity Feed
  const realtimeActivity = [
    { action: 'User Registration', user: 'john.doe@email.com', timestamp: '2 mins ago', status: 'completed' },
    { action: 'Partner Application', partner: 'Luxury Resorts Ltd', timestamp: '5 mins ago', status: 'pending' },
    { action: 'High-Value Booking', amount: '₹125,000', timestamp: '8 mins ago', status: 'confirmed' },
    { action: 'Security Alert', detail: 'Failed login attempts', timestamp: '12 mins ago', status: 'blocked' },
    { action: 'System Backup', detail: 'Database backup completed', timestamp: '15 mins ago', status: 'success' }
  ];

  // Geographic Revenue Distribution
  const geoRevenue = [
    { region: 'Mumbai', revenue: 4250000, percentage: 27.1 },
    { region: 'Delhi', revenue: 3890000, percentage: 24.8 },
    { region: 'Bangalore', revenue: 2760000, percentage: 17.6 },
    { region: 'Chennai', revenue: 2140000, percentage: 13.6 },
    { region: 'Others', revenue: 2640000, percentage: 16.9 }
  ];

  const getAlertSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-red-500 bg-red-50 text-red-900';
      case 'high': return 'border-orange-500 bg-orange-50 text-orange-900';
      case 'warning': return 'border-yellow-500 bg-yellow-50 text-yellow-900';
      default: return 'border-blue-500 bg-blue-50 text-blue-900';
    }
  };

  const getHealthStatus = (value: number, type: string) => {
    if (type === 'uptime') return value > 99.5 ? 'excellent' : value > 99 ? 'good' : 'poor';
    if (type === 'usage') return value < 70 ? 'good' : value < 85 ? 'warning' : 'critical';
    if (type === 'response') return value < 200 ? 'good' : value < 500 ? 'warning' : 'poor';
    return 'good';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': case 'good': case 'success': case 'completed': return 'text-green-600';
      case 'warning': case 'monitoring': case 'pending': return 'text-yellow-600';
      case 'critical': case 'poor': case 'blocked': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/94fa41ec-96bd-400a-8fc5-4c52f8f19917.png" 
                alt="Sanchaari Logo" 
                className="h-8 w-auto"
              />
            </Link>
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 font-semibold">
              ADMIN CONTROL PANEL
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">Quarter</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
              <Badge className="ml-1 h-4 w-4 p-0 text-xs">3</Badge>
            </Button>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Welcome & Critical Alerts */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            System Administration Dashboard
          </h1>
          
          {criticalAlerts.length > 0 && (
            <div className="space-y-2 mb-6">
              {criticalAlerts.map((alert) => (
                <Alert key={alert.id} className={getAlertSeverityColor(alert.severity)}>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">{alert.message}</span>
                      <span className="text-sm ml-2">({alert.affected})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">{alert.timestamp}</span>
                      <Button size="sm" variant="outline">Investigate</Button>
                    </div>
                  </AlertDescription>
                </Alert>
              ))}
            </div>
          )}
        </div>

        {/* System Health Monitoring */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">System Uptime</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemHealth.uptime}%</div>
              <div className={`text-xs ${getStatusColor(getHealthStatus(systemHealth.uptime, 'uptime'))}`}>
                {getHealthStatus(systemHealth.uptime, 'uptime').toUpperCase()}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Active Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemHealth.activeConnections}</div>
              <div className="text-xs text-gray-600">DB: {systemHealth.dbConnections}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemHealth.responseTime}ms</div>
              <div className={`text-xs ${getStatusColor(getHealthStatus(systemHealth.responseTime, 'response'))}`}>
                Avg API Response
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Error Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemHealth.errorRate}%</div>
              <div className="text-xs text-green-600">WITHIN LIMITS</div>
            </CardContent>
          </Card>
        </div>

        {/* Resource Usage */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              Resource Usage Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Memory Usage</span>
                  <span className="text-sm">{systemHealth.memoryUsage}%</span>
                </div>
                <Progress value={systemHealth.memoryUsage} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">CPU Usage</span>
                  <span className="text-sm">{systemHealth.cpuUsage}%</span>
                </div>
                <Progress value={systemHealth.cpuUsage} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Disk Usage</span>
                  <span className="text-sm">{systemHealth.diskUsage}%</span>
                </div>
                <Progress value={systemHealth.diskUsage} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Business Intelligence */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Business Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">₹{(businessMetrics.totalRevenue / 1000000).toFixed(1)}M</div>
                    <div className="text-xs text-gray-600">Total Revenue</div>
                    <div className="text-xs text-green-600 flex items-center justify-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +{businessMetrics.revenueGrowth}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{(businessMetrics.activeUsers / 1000).toFixed(1)}K</div>
                    <div className="text-xs text-gray-600">Active Users</div>
                    <div className="text-xs text-green-600 flex items-center justify-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +{businessMetrics.userGrowth}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{(businessMetrics.totalBookings / 1000).toFixed(1)}K</div>
                    <div className="text-xs text-gray-600">Total Bookings</div>
                    <div className="text-xs text-green-600 flex items-center justify-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +{businessMetrics.bookingGrowth}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{businessMetrics.partnerCount}</div>
                    <div className="text-xs text-gray-600">Active Partners</div>
                    <div className="text-xs text-green-600 flex items-center justify-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +{businessMetrics.partnerGrowth}%
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold">{businessMetrics.conversionRate}%</div>
                      <div className="text-xs text-gray-600">Conversion Rate</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">₹{businessMetrics.avgBookingValue.toLocaleString()}</div>
                      <div className="text-xs text-gray-600">Avg Booking Value</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-red-600">{businessMetrics.supportTickets}</div>
                      <div className="text-xs text-gray-600">Open Tickets</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Real-time Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Real-time Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {realtimeActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex-1">
                      <div className="text-sm font-medium">{activity.action}</div>
                      <div className="text-xs text-gray-600">
                        {activity.user || activity.partner || activity.amount || activity.detail}
                      </div>
                      <div className="text-xs text-gray-500">{activity.timestamp}</div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getStatusColor(activity.status)}`}
                    >
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Geographic Revenue & Admin Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue by Region</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {geoRevenue.map((region, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{region.region}</span>
                        <span className="text-sm">₹{(region.revenue / 1000000).toFixed(1)}M ({region.percentage}%)</span>
                      </div>
                      <Progress value={region.percentage} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Admin Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/admin/users/list">
                  <Button variant="outline" className="w-full h-16 flex-col gap-1">
                    <Users className="h-5 w-5" />
                    <span className="text-xs">User Management</span>
                  </Button>
                </Link>
                <Link to="/admin/trip-management">
                  <Button variant="outline" className="w-full h-16 flex-col gap-1">
                    <FileText className="h-5 w-5" />
                    <span className="text-xs">Trip Management</span>
                  </Button>
                </Link>
                <Link to="/admin/ai/knowledge-base">
                  <Button variant="outline" className="w-full h-16 flex-col gap-1">
                    <Database className="h-5 w-5" />
                    <span className="text-xs">Knowledge Base</span>
                  </Button>
                </Link>
                <Link to="/admin/ai/training-data">
                  <Button variant="outline" className="w-full h-16 flex-col gap-1">
                    <Zap className="h-5 w-5" />
                    <span className="text-xs">Training Data</span>
                  </Button>
                </Link>
                <Link to="/admin/reports/overview">
                  <Button variant="outline" className="w-full h-16 flex-col gap-1">
                    <BarChart3 className="h-5 w-5" />
                    <span className="text-xs">Overview Dashboard</span>
                  </Button>
                </Link>
                <Link to="/admin/group-collaboration">
                  <Button variant="outline" className="w-full h-16 flex-col gap-1">
                    <Users className="h-5 w-5" />
                    <span className="text-xs">Group Collaboration</span>
                  </Button>
                </Link>
                <Link to="/admin/chatbot-analytics">
                  <Button variant="outline" className="w-full h-16 flex-col gap-1">
                    <MessageSquare className="h-5 w-5" />
                    <span className="text-xs">Chatbot Analytics</span>
                  </Button>
                </Link>
                <Link to="/admin/integrations">
                  <Button variant="outline" className="w-full h-16 flex-col gap-1">
                    <Settings className="h-5 w-5" />
                    <span className="text-xs">System Config</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
