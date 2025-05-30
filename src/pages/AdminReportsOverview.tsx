
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ArrowLeft, Users, CreditCard, MessageSquare, DollarSign, 
  HelpCircle, TrendingUp, Calendar, Settings, RefreshCw
} from 'lucide-react';

const AdminReportsOverview = () => {
  const [dateRange, setDateRange] = useState('30d');

  const kpiWidgets = [
    {
      title: 'Total Users',
      value: '12,847',
      change: '+12.5%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Bookings',
      value: '1,234',
      change: '+8.3%',
      icon: CreditCard,
      color: 'text-green-600'
    },
    {
      title: 'Daily Chat Sessions',
      value: '2,890',
      change: '+15.7%',
      icon: MessageSquare,
      color: 'text-purple-600'
    },
    {
      title: 'Revenue Today',
      value: '₹4.2L',
      change: '+22.1%',
      icon: DollarSign,
      color: 'text-orange-600'
    },
    {
      title: 'Support Tickets Open',
      value: '23',
      change: '-18.2%',
      icon: HelpCircle,
      color: 'text-red-600'
    }
  ];

  const popularDestinations = [
    { name: 'Goa', bookings: 245, trend: '+12%' },
    { name: 'Kerala', bookings: 189, trend: '+8%' },
    { name: 'Rajasthan', bookings: 156, trend: '+15%' },
    { name: 'Mumbai', bookings: 134, trend: '+5%' },
    { name: 'Delhi', bookings: 98, trend: '-2%' }
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
                <h1 className="text-2xl font-bold text-gray-900">Performance Dashboard</h1>
                <p className="text-sm text-gray-600">Bird's eye view of platform KPIs</p>
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
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Customize
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* KPI Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          {kpiWidgets.map((widget, index) => {
            const IconComponent = widget.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{widget.title}</CardTitle>
                  <IconComponent className={`h-4 w-4 ${widget.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{widget.value}</div>
                  <p className={`text-xs ${widget.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {widget.change} from last period
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* User Acquisition Graph */}
          <Card>
            <CardHeader>
              <CardTitle>User Acquisition (30-day)</CardTitle>
              <CardDescription>New user registrations over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Chart visualization would be displayed here</p>
                  <p className="text-sm text-gray-400">Integration with charting library needed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Popular Destinations */}
          <Card>
            <CardHeader>
              <CardTitle>Popular Destinations</CardTitle>
              <CardDescription>Top destinations by booking volume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularDestinations.map((destination, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium">{destination.name}</div>
                        <div className="text-sm text-gray-500">{destination.bookings} bookings</div>
                      </div>
                    </div>
                    <div className={`text-sm font-medium ${destination.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {destination.trend}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Reports</CardTitle>
            <CardDescription>Access detailed analytics and reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/admin/reports/revenue">
                <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2">
                  <DollarSign className="h-6 w-6" />
                  <span>Revenue Reports</span>
                </Button>
              </Link>
              <Link to="/admin/reports/marketing">
                <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2">
                  <TrendingUp className="h-6 w-6" />
                  <span>Marketing ROI</span>
                </Button>
              </Link>
              <Link to="/admin/reports/user-behavior">
                <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2">
                  <Users className="h-6 w-6" />
                  <span>User Behavior</span>
                </Button>
              </Link>
              <Link to="/admin/reports/funnel">
                <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2">
                  <Calendar className="h-6 w-6" />
                  <span>Conversion Funnel</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminReportsOverview;
