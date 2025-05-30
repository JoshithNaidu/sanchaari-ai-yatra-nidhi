
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, DollarSign, TrendingUp, TrendingDown, 
  Download, Calendar, BarChart3, PieChart
} from 'lucide-react';

const AdminReportsRevenue = () => {
  const [dateRange, setDateRange] = useState('30d');
  const [breakdown, setBreakdown] = useState('country');

  const revenueMetrics = [
    {
      title: 'Gross Revenue',
      value: '₹45,23,100',
      change: '+12.5%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Net Revenue',
      value: '₹38,91,200',
      change: '+10.8%',
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      title: 'Refunds',
      value: '₹2,45,800',
      change: '-5.2%',
      icon: TrendingDown,
      color: 'text-red-600'
    },
    {
      title: 'Commission Earned',
      value: '₹8,95,400',
      change: '+15.3%',
      icon: DollarSign,
      color: 'text-purple-600'
    },
    {
      title: 'Average Order Value',
      value: '₹12,450',
      change: '+8.7%',
      icon: BarChart3,
      color: 'text-orange-600'
    }
  ];

  const revenueByCountry = [
    { country: 'India', revenue: '₹35,20,000', percentage: 78, bookings: 1456 },
    { country: 'UAE', revenue: '₹4,80,000', percentage: 11, bookings: 198 },
    { country: 'USA', revenue: '₹2,90,000', percentage: 6, bookings: 87 },
    { country: 'UK', revenue: '₹1,20,000', percentage: 3, bookings: 45 },
    { country: 'Others', revenue: '₹90,000', percentage: 2, bookings: 34 }
  ];

  const revenueByPartner = [
    { partner: 'MakeMyTrip', revenue: '₹18,50,000', commission: '₹3,70,000' },
    { partner: 'Cleartrip', revenue: '₹12,30,000', commission: '₹2,46,000' },
    { partner: 'Booking.com', revenue: '₹8,90,000', commission: '₹1,78,000' },
    { partner: 'Airbnb', revenue: '₹5,50,000', commission: '₹1,10,000' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin/reports/overview" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Reports
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Revenue Reports</h1>
                <p className="text-sm text-gray-600">Financial reporting with deep drilldowns</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">7 Days</SelectItem>
                  <SelectItem value="30d">30 Days</SelectItem>
                  <SelectItem value="90d">90 Days</SelectItem>
                  <SelectItem value="1y">1 Year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Excel
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Revenue Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          {revenueMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  <IconComponent className={`h-4 w-4 ${metric.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className={`text-xs ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change} from last period
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Revenue Chart */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Revenue performance over time</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Bar Chart
                </Button>
                <Button variant="outline" size="sm">
                  Line Chart
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Revenue chart visualization would be displayed here</p>
                <p className="text-sm text-gray-400">Integration with charting library needed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Breakdown Views */}
        <Tabs value={breakdown} onValueChange={setBreakdown} className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList className="grid w-fit grid-cols-4">
              <TabsTrigger value="country">By Country</TabsTrigger>
              <TabsTrigger value="partner">By Partner</TabsTrigger>
              <TabsTrigger value="category">By Category</TabsTrigger>
              <TabsTrigger value="gateway">By Payment Gateway</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="country" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Country</CardTitle>
                <CardDescription>Breakdown of revenue by geographical location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueByCountry.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="font-medium">{item.country}</div>
                        <div className="text-sm text-gray-500">{item.bookings} bookings</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-medium">{item.revenue}</div>
                          <div className="text-sm text-gray-500">{item.percentage}% of total</div>
                        </div>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="partner" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Partner</CardTitle>
                <CardDescription>Performance breakdown by integration partners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueByPartner.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="font-medium">{item.partner}</div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Revenue</div>
                          <div className="font-medium">{item.revenue}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Commission</div>
                          <div className="font-medium text-green-600">{item.commission}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="category" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Category</CardTitle>
                <CardDescription>Revenue distribution across travel categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                  <div className="text-center">
                    <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Category breakdown chart would be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gateway" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Payment Gateway</CardTitle>
                <CardDescription>Performance breakdown by payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Payment gateway breakdown would be displayed here</p>
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

export default AdminReportsRevenue;
