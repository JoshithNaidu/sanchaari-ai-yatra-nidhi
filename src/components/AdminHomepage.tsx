
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { 
  Shield, 
  Users, 
  Building2, 
  DollarSign, 
  TrendingUp,
  AlertTriangle,
  Activity,
  Database,
  Settings,
  BarChart3,
  Bell,
  LogOut,
  Eye,
  Zap
} from 'lucide-react';

const AdminHomepage = () => {
  const { user, logout } = useCentralizedAuth();

  const systemMetrics = [
    { title: "Total Users", value: "45,670", change: "+12%", color: "text-blue-600", icon: Users },
    { title: "Active Partners", value: "892", change: "+8%", color: "text-green-600", icon: Building2 },
    { title: "Total Revenue", value: "₹15.6M", change: "+18%", color: "text-purple-600", icon: DollarSign },
    { title: "System Health", value: "99.97%", change: "+0.02%", color: "text-green-600", icon: Activity }
  ];

  const quickActions = [
    { title: "User Management", description: "Manage users and permissions", icon: Users, link: "/admin/users/list", color: "bg-blue-500" },
    { title: "Partner Oversight", description: "Monitor partner activities", icon: Building2, link: "/admin/bookings/all", color: "bg-green-500" },
    { title: "System Config", description: "Configure system settings", icon: Settings, link: "/admin/integrations", color: "bg-purple-500" },
    { title: "AI Management", description: "Monitor AI systems", icon: Zap, link: "/admin/ai/analytics", color: "bg-orange-500" }
  ];

  const criticalAlerts = [
    { type: "warning", message: "Database connection pool at 85% capacity", time: "5 mins ago" },
    { type: "info", message: "New partner applications require approval", time: "15 mins ago" },
    { type: "critical", message: "Payment gateway response time above threshold", time: "25 mins ago" }
  ];

  const recentActivity = [
    { action: "User Registration", detail: "john.doe@email.com", time: "2 mins ago", status: "success" },
    { action: "Partner Application", detail: "Luxury Resorts Ltd", time: "5 mins ago", status: "pending" },
    { action: "High-Value Booking", detail: "₹125,000 transaction", time: "8 mins ago", status: "completed" },
    { action: "Security Alert", detail: "Multiple failed login attempts", time: "12 mins ago", status: "blocked" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
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
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
              ADMIN CONTROL PANEL
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
              <Badge className="ml-1 h-4 w-4 p-0 text-xs bg-red-500">5</Badge>
            </Button>
            <Link to="/admin/integrations">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              System Administration 🛡️
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Monitor, manage, and optimize the Sanchaari platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/admin/dashboard">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Full Dashboard
                </Button>
              </Link>
              <Link to="/admin/users/list">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  <Users className="mr-2 h-5 w-5" />
                  Manage Users
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Critical Alerts */}
        {criticalAlerts.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">System Alerts</h2>
            <div className="space-y-3">
              {criticalAlerts.map((alert, index) => (
                <Alert key={index} className={
                  alert.type === 'critical' ? 'border-red-500 bg-red-50' :
                  alert.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                  'border-blue-500 bg-blue-50'
                }>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="flex items-center justify-between">
                    <span>{alert.message}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{alert.time}</span>
                      <Button size="sm" variant="outline">Investigate</Button>
                    </div>
                  </AlertDescription>
                </Alert>
              ))}
            </div>
          </section>
        )}

        {/* System Metrics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemMetrics.map((metric, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {metric.title}
                  </CardTitle>
                  <metric.icon className={`h-4 w-4 ${metric.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className={`text-xs ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change.startsWith('+') ? '↗️ ' : '↘️ '}
                    {metric.change} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Administrative Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Real-time Activity */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Real-time Activity
                  </span>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{activity.action}</p>
                        <p className="text-xs text-gray-600">{activity.detail}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                      <Badge variant={
                        activity.status === 'success' || activity.status === 'completed' ? 'default' :
                        activity.status === 'pending' ? 'secondary' :
                        activity.status === 'blocked' ? 'destructive' : 'outline'
                      }>
                        {activity.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  System Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Server Uptime</span>
                    <span className="font-bold text-green-600">99.97%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Database Performance</span>
                    <span className="font-bold text-green-600">Optimal</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">API Response Time</span>
                    <span className="font-bold text-yellow-600">142ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Error Rate</span>
                    <span className="font-bold text-green-600">0.08%</span>
                  </div>
                  <div className="pt-4 border-t">
                    <Link to="/admin/reports/overview">
                      <Button variant="outline" className="w-full">
                        View Detailed Reports
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminHomepage;
