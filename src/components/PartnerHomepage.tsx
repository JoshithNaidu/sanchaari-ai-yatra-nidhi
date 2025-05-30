
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Calendar,
  Star,
  BarChart3,
  MessageSquare,
  Settings,
  Plus,
  Bell,
  LogOut
} from 'lucide-react';

const PartnerHomepage = () => {
  const { user, logout } = useCentralizedAuth();

  const quickStats = [
    { title: "Monthly Revenue", value: "₹2.5L", change: "+18%", color: "text-green-600", icon: DollarSign },
    { title: "Total Bookings", value: "89", change: "+12%", color: "text-blue-600", icon: Calendar },
    { title: "Average Rating", value: "4.7", change: "+0.2", color: "text-yellow-600", icon: Star },
    { title: "Active Listings", value: "12", change: "0", color: "text-purple-600", icon: Building2 }
  ];

  const quickActions = [
    { title: "Add New Listing", description: "List a new property or service", icon: Plus, link: "/partner/inventory/listings", color: "bg-blue-500" },
    { title: "Manage Bookings", description: "View and update reservations", icon: Calendar, link: "/partner/bookings/list", color: "bg-green-500" },
    { title: "View Reports", description: "Check performance analytics", icon: BarChart3, link: "/partner/reports/revenue", color: "bg-purple-500" },
    { title: "Guest Messages", description: "Respond to customer inquiries", icon: MessageSquare, link: "/partner/messages", color: "bg-orange-500" }
  ];

  const recentBookings = [
    { guest: "Rajesh Kumar", property: "Mountain View Resort", checkIn: "June 15", amount: "₹12,500", status: "confirmed" },
    { guest: "Priya Sharma", property: "Valley Cottages", checkIn: "June 20", amount: "₹8,900", status: "pending" },
    { guest: "Amit Patel", property: "Alpine Camp", checkIn: "June 25", amount: "₹6,200", status: "confirmed" }
  ];

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
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              PARTNER PORTAL
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
              <Badge className="ml-1 h-4 w-4 p-0 text-xs">3</Badge>
            </Button>
            <Link to="/partner/profile/company">
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
      <section className="bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Welcome back, {user?.companyName || user?.fullName}! 🏨
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Manage your properties and grow your hospitality business with Sanchaari
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/partner/inventory/listings">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Plus className="mr-2 h-5 w-5" />
                  Add New Listing
                </Button>
              </Link>
              <Link to="/partner/dashboard">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  View Full Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : 'text-gray-600'}`}>
                    {stat.change !== '0' && (stat.change.startsWith('+') ? '↗️ ' : '↘️ ')}
                    {stat.change !== '0' ? `${stat.change} from last month` : 'No change'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
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

        {/* Recent Activity */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Recent Bookings
                  <Link to="/partner/bookings/list">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentBookings.map((booking, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{booking.guest}</p>
                        <p className="text-sm text-gray-600">{booking.property}</p>
                        <p className="text-xs text-gray-500">Check-in: {booking.checkIn}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{booking.amount}</p>
                        <Badge variant={booking.status === 'confirmed' ? 'default' : 'secondary'}>
                          {booking.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-900">Booking Trend</span>
                    </div>
                    <p className="text-sm text-green-700">Your bookings increased by 18% this month!</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-blue-900">Guest Satisfaction</span>
                    </div>
                    <p className="text-sm text-blue-700">Average rating improved to 4.7 stars</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageSquare className="h-4 w-4 text-orange-600" />
                      <span className="font-medium text-orange-900">Pending Messages</span>
                    </div>
                    <p className="text-sm text-orange-700">3 new guest inquiries awaiting response</p>
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

export default PartnerHomepage;
