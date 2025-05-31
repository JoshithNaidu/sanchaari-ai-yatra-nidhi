import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Calendar, DollarSign, Star, Users, TrendingUp, Bell, Building2, MapPin, Settings, FileText, BarChart3, MessageSquare, CreditCard, Key, Shield, Mail, Languages, Target, UserCog, HelpCircle, Phone, BookOpen, Database, Zap, Eye, Edit, Clock, AlertTriangle, CheckCircle, UserCheck, UserX } from 'lucide-react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import Header from '@/components/Header';

const PartnerHomepage = () => {
  const { user, logout } = useCentralizedAuth();

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

  // Inventory Management Actions
  const quickActions = [
    {
      title: "Manage Listings",
      description: "Add, edit, or remove your service listings",
      href: "/partner/inventory/listings",
      icon: Building2,
      stats: "12 active listings"
    },
    {
      title: "Calendar Availability",
      description: "Update your availability calendar",
      href: "/partner/inventory/availability",
      icon: Calendar,
      stats: "3 properties available"
    },
    {
      title: "Property Details",
      description: "View and manage property information",
      icon: Building2,
      href: "/partner/inventory/details",
      color: "bg-blue-500"
    },
    {
      title: "Pricing Management", 
      description: "Update rates and pricing rules",
      icon: DollarSign,
      href: "/partner/inventory/pricing",
      color: "bg-green-500"
    }
  ];

  // Booking Management Actions
  const bookingActions = [
    {
      title: "All Bookings",
      description: "View and manage all reservations",
      href: "/partner/bookings/list",
      icon: FileText,
      stats: "47 this month"
    },
    {
      title: "Check-ins Today",
      description: "Manage today's guest arrivals",
      icon: UserCheck,
      href: "/partner/bookings/checkins",
      color: "bg-green-500"
    },
    {
      title: "Check-outs Today", 
      description: "Process today's departures",
      icon: UserX,
      href: "/partner/bookings/checkouts",
      color: "bg-orange-500"
    },
    {
      title: "Booking Requests",
      description: "Review pending booking requests",
      icon: Clock,
      href: "/partner/bookings/requests", 
      color: "bg-yellow-500"
    }
  ];

  // Financial Management Actions
  const financialActions = [
    {
      title: "Payouts",
      description: "View your earnings and payment history",
      href: "/partner/payouts",
      icon: DollarSign,
      stats: "₹85,000 pending"
    },
    {
      title: "Revenue Reports",
      description: "Detailed financial analytics",
      href: "/partner/reports/revenue",
      icon: BarChart3,
      stats: "18.5% growth"
    },
    {
      title: "Booking Volume",
      description: "Track booking trends and patterns",
      href: "/partner/reports/booking-volume",
      icon: TrendingUp,
      stats: "47 bookings"
    },
    {
      title: "Customer Feedback",
      description: "Monitor guest reviews and ratings",
      href: "/partner/reports/customer-feedback",
      icon: Star,
      stats: "4.8 avg rating"
    },
    {
      title: "Tax Compliance",
      description: "Manage tax documents and compliance",
      href: "/partner/tax-compliance",
      icon: FileText,
      stats: "Up to date"
    }
  ];

  // Communication & Support Actions
  const communicationActions = [
    {
      title: "Guest Reviews",
      description: "View and respond to guest feedback",
      icon: Star,
      href: "/partner/reviews",
      color: "bg-yellow-500"
    },
    {
      title: "Messages",
      description: "Guest communication center",
      icon: MessageSquare,
      href: "/partner/messages",
      color: "bg-blue-500"
    },
    {
      title: "Contact Support",
      description: "Get help from our team",
      icon: HelpCircle,
      href: "/partner/contact-support",
      color: "bg-purple-500"
    }
  ];

  // Profile & Settings Actions
  const profileActions = [
    {
      title: "Company Profile",
      description: "Update your business information",
      href: "/partner/profile/company",
      icon: Building2,
      stats: "Profile 90% complete"
    },
    {
      title: "API Credentials",
      description: "Manage API keys and integrations",
      href: "/partner/api-credentials",
      icon: Key,
      stats: "2 active keys"
    },
    {
      title: "Account Settings",
      description: "Manage account preferences", 
      icon: Settings,
      href: "/partner/settings",
      color: "bg-gray-500"
    }
  ];

  const recentActivity = [
    { message: "New booking confirmed for July 15, 2025", time: "2 hours ago", type: "booking" },
    { message: "5-star review received from John D.", time: "1 day ago", type: "review" },
    { message: "Payout of ₹25,000 processed", time: "2 days ago", type: "payment" },
    { message: "Calendar updated for next month", time: "3 days ago", type: "calendar" }
  ];

  const renderSectionCards = (cards: any[], sectionTitle: string) => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">{sectionTitle}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => {
          const IconComponent = card.icon;
          return (
            <Card key={card.href} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-lg bg-blue-50">
                    <IconComponent className="h-5 w-5 text-blue-600" />
                  </div>
                  {card.badge && (
                    <Badge variant="destructive" className="text-xs">{card.badge}</Badge>
                  )}
                </div>
                <h4 className="font-medium text-gray-900 mb-1">{card.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{card.description}</p>
                <p className="text-xs text-gray-500">{card.stats}</p>
                <div className="mt-3">
                  <Link to={card.href}>
                    <Button size="sm" variant="outline" className="w-full">
                      Manage
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
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

        {/* Comprehensive Quick Actions Sections */}
        <div className="space-y-8">
          {/* Inventory Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-6 w-6 text-blue-600" />
                Inventory Management
              </CardTitle>
              <CardDescription>Manage your properties and pricing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickActions.map((action, index) => (
                  <Link key={index} to={action.href}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${action.color}`}>
                            <action.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{action.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Booking Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-green-600" />
                Booking Management
              </CardTitle>
              <CardDescription>Handle reservations and guest services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bookingActions.map((action, index) => (
                  <Link key={index} to={action.href}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${action.color}`}>
                            <action.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{action.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Financial Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-red-600" />
                Financial Management
              </CardTitle>
              <CardDescription>Track your financial performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {financialActions.map((action, index) => (
                  <Link key={index} to={action.href}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${action.color}`}>
                            <action.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{action.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Communication & Support */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-purple-600" />
                Communication & Support
              </CardTitle>
              <CardDescription>Connect with guests and get help</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {communicationActions.map((action, index) => (
                  <Link key={index} to={action.href}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${action.color}`}>
                            <action.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{action.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Profile & Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-6 w-6 text-gray-600" />
                Profile & Settings
              </CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {profileActions.map((action, index) => (
                  <Link key={index} to={action.href}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${action.color}`}>
                            <action.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{action.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
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
  );
};

export default PartnerHomepage;
