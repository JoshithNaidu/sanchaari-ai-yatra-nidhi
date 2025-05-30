
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  CreditCard,
  MapPin,
  Calendar,
  Download,
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';

const AdminReports = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const kpiMetrics = [
    {
      title: "Revenue",
      daily: "₹2.8L",
      mtd: "₹45.2L",
      ytd: "₹384.5L",
      change: "+12.5%",
      trend: "up",
      icon: CreditCard,
      color: "text-green-600"
    },
    {
      title: "Gross Bookings",
      daily: "147",
      mtd: "3,420",
      ytd: "28,650",
      change: "+8.2%",
      trend: "up",
      icon: Calendar,
      color: "text-blue-600"
    },
    {
      title: "Cancellations",
      daily: "12",
      mtd: "285",
      ytd: "2,145",
      change: "-3.1%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-orange-600"
    },
    {
      title: "Active Listings",
      daily: "8,450",
      mtd: "8,450",
      ytd: "8,450",
      change: "+15.8%",
      trend: "up",
      icon: MapPin,
      color: "text-purple-600"
    },
    {
      title: "Conversion Rate",
      daily: "6.8%",
      mtd: "7.2%",
      ytd: "6.9%",
      change: "+0.4%",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Customer NPS",
      daily: "8.5",
      mtd: "8.3",
      ytd: "8.1",
      change: "+0.2",
      trend: "up",
      icon: Star,
      color: "text-yellow-600"
    }
  ];

  const alerts = [
    {
      type: "Revenue Drop",
      message: "Daily revenue 15% below weekly average",
      severity: "high",
      timestamp: "2 hours ago"
    },
    {
      type: "Booking Spike",
      message: "Unusual booking volume from Mumbai region",
      severity: "medium",
      timestamp: "4 hours ago"
    },
    {
      type: "SLA Breach",
      message: "Support ticket response time exceeded 24h SLA",
      severity: "high",
      timestamp: "6 hours ago"
    }
  ];

  const topDestinations = [
    { name: "Goa", bookings: 245, revenue: "₹12.5L", growth: "+18%" },
    { name: "Manali", bookings: 189, revenue: "₹8.7L", growth: "+12%" },
    { name: "Kerala", bookings: 156, revenue: "₹9.2L", growth: "+8%" },
    { name: "Rajasthan", bookings: 134, revenue: "₹11.1L", growth: "+22%" },
    { name: "Kashmir", bookings: 98, revenue: "₹7.8L", growth: "+5%" }
  ];

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
              <h1 className="text-2xl font-bold text-gray-900">Performance Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <select 
                className="border rounded px-3 py-1 text-sm"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
                <option value="1y">Last Year</option>
              </select>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export Report
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
        
        {/* KPI Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {kpiMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-600">{metric.title}</h3>
                  <metric.icon className={`h-5 w-5 ${metric.color}`} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Daily</span>
                    <span className="text-sm font-bold">{metric.daily}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">MTD</span>
                    <span className="text-sm font-bold">{metric.mtd}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">YTD</span>
                    <span className="text-sm font-bold">{metric.ytd}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-xs text-gray-500">Change</span>
                    <div className="flex items-center gap-1">
                      {metric.trend === 'up' ? (
                        <TrendingUp className="h-3 w-3 text-green-500" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-500" />
                      )}
                      <span className={`text-xs font-medium ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Charts Area */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Booking Trends Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Booking Trends</CardTitle>
                <CardDescription>Daily bookings with confirmed vs cancelled breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Booking trends chart placeholder</p>
                    <p className="text-xs text-gray-400">Time series visualization would go here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Geographic Heatmap */}
            <Card>
              <CardHeader>
                <CardTitle>Geographic Performance</CardTitle>
                <CardDescription>User activity and bookings by region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Interactive map placeholder</p>
                    <p className="text-xs text-gray-400">Geographic heatmap visualization would go here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Destinations Table */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Destinations</CardTitle>
                <CardDescription>Highest booking volume and revenue destinations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topDestinations.map((dest, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                        </div>
                        <div>
                          <p className="font-medium">{dest.name}</p>
                          <p className="text-xs text-gray-500">{dest.bookings} bookings</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{dest.revenue}</p>
                        <p className="text-xs text-green-600">{dest.growth}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* System Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
                <CardDescription>Real-time notifications and threshold breaches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alerts.map((alert, index) => (
                    <div key={index} className="border rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className={`h-4 w-4 mt-0.5 ${alert.severity === 'high' ? 'text-red-500' : 'text-yellow-500'}`} />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{alert.type}</p>
                          <p className="text-xs text-gray-600">{alert.message}</p>
                          <p className="text-xs text-gray-400 mt-1">{alert.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full gap-2">
                    <Download className="h-4 w-4" />
                    Generate Report
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Custom Analytics
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Set Alert Thresholds
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Calendar className="h-4 w-4" />
                    Schedule Reports
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card>
              <CardHeader>
                <CardTitle>System Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">API Response Time</span>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span className="text-sm font-medium">245ms</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Server Uptime</span>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span className="text-sm font-medium">99.9%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Payment Gateway</span>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span className="text-sm font-medium">Online</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Support Queue</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-yellow-500" />
                      <span className="text-sm font-medium">24 pending</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReports;
