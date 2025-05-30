
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ArrowLeft, Download, Calendar, TrendingUp, TrendingDown, 
  Users, DollarSign, MapPin, Star, BarChart3, PieChart 
} from 'lucide-react';

const AdminReports = () => {
  const [dateRange, setDateRange] = useState('last30days');
  const [reportType, setReportType] = useState('overview');

  const revenueData = [
    { period: 'Jan 2024', revenue: 1250000, bookings: 234, growth: 12.5 },
    { period: 'Feb 2024', revenue: 1180000, bookings: 198, growth: -5.6 },
    { period: 'Mar 2024', revenue: 1420000, bookings: 267, growth: 20.3 },
    { period: 'Apr 2024', revenue: 1560000, bookings: 298, growth: 9.9 },
    { period: 'May 2024', revenue: 1680000, bookings: 321, growth: 7.7 }
  ];

  const topDestinations = [
    { name: 'Goa', bookings: 156, revenue: 2340000, rating: 4.6 },
    { name: 'Kerala', bookings: 134, revenue: 2010000, rating: 4.8 },
    { name: 'Rajasthan', bookings: 98, revenue: 1950000, rating: 4.5 },
    { name: 'Himachal Pradesh', bookings: 87, revenue: 1420000, rating: 4.7 },
    { name: 'Kashmir', bookings: 76, revenue: 1890000, rating: 4.9 }
  ];

  const userGrowth = [
    { period: 'Week 1', newUsers: 45, activeUsers: 1250 },
    { period: 'Week 2', newUsers: 67, activeUsers: 1289 },
    { period: 'Week 3', newUsers: 52, activeUsers: 1334 },
    { period: 'Week 4', newUsers: 78, activeUsers: 1398 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Admin
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Analytics & Reports</h1>
                <p className="text-sm text-gray-600">Business intelligence and performance insights</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last7days">Last 7 days</SelectItem>
                  <SelectItem value="last30days">Last 30 days</SelectItem>
                  <SelectItem value="last90days">Last 90 days</SelectItem>
                  <SelectItem value="lastyear">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="users">User Analytics</TabsTrigger>
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹76,89,000</div>
                  <div className="flex items-center text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5% from last month
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,326</div>
                  <div className="flex items-center text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8.2% from last month
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4,567</div>
                  <div className="flex items-center text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +18.9% from last month
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.7</div>
                  <div className="flex items-center text-xs text-red-600">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -0.2 from last month
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Revenue Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {revenueData.slice(-3).map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{item.period}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">₹{(item.revenue / 100000).toFixed(1)}L</span>
                          <Badge className={item.growth > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                            {item.growth > 0 ? '+' : ''}{item.growth}%
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Top Destinations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topDestinations.slice(0, 3).map((dest, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <span className="font-medium">{dest.name}</span>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {dest.rating}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{dest.bookings} bookings</div>
                          <div className="text-xs text-gray-500">₹{(dest.revenue / 100000).toFixed(1)}L</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Analytics</CardTitle>
                <CardDescription>Detailed revenue breakdown and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">₹1.68Cr</div>
                      <div className="text-sm text-gray-600">This Month</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">₹1.56Cr</div>
                      <div className="text-sm text-gray-600">Last Month</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">+7.7%</div>
                      <div className="text-sm text-gray-600">Growth Rate</div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-4">Monthly Revenue Breakdown</h3>
                    <div className="space-y-2">
                      {revenueData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-2">
                          <span>{item.period}</span>
                          <div className="flex items-center gap-4">
                            <span className="font-mono">₹{(item.revenue / 100000).toFixed(1)}L</span>
                            <span className="text-sm text-gray-500">{item.bookings} bookings</span>
                            <Badge className={item.growth > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                              {item.growth > 0 ? '+' : ''}{item.growth}%
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Growth & Engagement</CardTitle>
                <CardDescription>User acquisition and retention metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-4">Weekly User Growth</h3>
                    <div className="space-y-3">
                      {userGrowth.map((week, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded">
                          <span className="font-medium">{week.period}</span>
                          <div className="text-right">
                            <div className="text-sm">+{week.newUsers} new users</div>
                            <div className="text-xs text-gray-500">{week.activeUsers} active</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">User Segments</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded">
                        <span>New Users (0-30 days)</span>
                        <Badge>342</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <span>Regular Users (30-90 days)</span>
                        <Badge>1,256</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <span>Loyal Users (90+ days)</span>
                        <Badge>2,969</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="destinations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Destination Performance</CardTitle>
                <CardDescription>Popular destinations and booking trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topDestinations.map((dest, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-600">#{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-medium">{dest.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {dest.rating} rating
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">₹{(dest.revenue / 100000).toFixed(1)}L</div>
                        <div className="text-sm text-gray-500">{dest.bookings} bookings</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminReports;
