
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Calendar, DollarSign, Star, Users, TrendingUp, Bell } from 'lucide-react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import Header from '@/components/Header';

const PartnerHomepage = () => {
  const { user } = useCentralizedAuth();

  const kpiData = [
    {
      title: "Total Bookings",
      value: "47",
      subtitle: "Last 30 Days",
      icon: Users,
      trend: "+12%"
    },
    {
      title: "Earnings",
      value: "₹1,23,450",
      subtitle: "This Month",
      icon: DollarSign,
      trend: "+8%"
    },
    {
      title: "Upcoming Check-ins",
      value: "12",
      subtitle: "Next 7 Days",
      icon: Calendar,
      trend: ""
    },
    {
      title: "Average Rating",
      value: "4.8",
      subtitle: "All-time",
      icon: Star,
      trend: "+0.2"
    }
  ];

  const quickActions = [
    {
      title: "Manage Listings",
      description: "Add, edit, or remove your service listings",
      href: "/partner/inventory/listings",
      icon: Plus
    },
    {
      title: "Calendar Availability",
      description: "Update your availability calendar",
      href: "/partner/inventory/availability",
      icon: Calendar
    },
    {
      title: "Payout History",
      description: "View your earnings and payment history",
      href: "/partner/payouts",
      icon: DollarSign
    },
    {
      title: "Support Requests",
      description: "Get help and manage support tickets",
      href: "/partner/support",
      icon: Bell
    }
  ];

  const recentActivity = [
    { message: "New booking confirmed for July 15, 2025", time: "2 hours ago", type: "booking" },
    { message: "5-star review received from John D.", time: "1 day ago", type: "review" },
    { message: "Payout of ₹25,000 processed", time: "2 days ago", type: "payment" },
    { message: "Calendar updated for next month", time: "3 days ago", type: "calendar" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.companyName || user?.fullName || 'Partner'}! 🏨
          </h1>
          <p className="text-gray-600">Manage your travel services and bookings with Sanchaari</p>
          <div className="flex justify-center gap-3 mt-4">
            <Link to="/partner/inventory/listings">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Create New Listing
              </Button>
            </Link>
            <Link to="/partner/inventory/availability">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Update Availability
              </Button>
            </Link>
          </div>
        </div>

        {/* KPI Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi) => {
            const IconComponent = kpi.icon;
            return (
              <Card key={kpi.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                  <IconComponent className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpi.value}</div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">{kpi.subtitle}</p>
                    {kpi.trend && (
                      <Badge variant="secondary" className="text-green-600">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {kpi.trend}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions Panel */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your business operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickActions.map((action) => {
                    const IconComponent = action.icon;
                    return (
                      <Link key={action.title} to={action.href}>
                        <Card className="hover:shadow-md transition-shadow cursor-pointer">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-blue-50">
                                <IconComponent className="h-5 w-5 text-blue-600" />
                              </div>
                              <div>
                                <CardTitle className="text-sm">{action.title}</CardTitle>
                                <CardDescription className="text-xs">
                                  {action.description}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates and notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerHomepage;
