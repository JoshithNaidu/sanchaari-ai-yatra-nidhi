import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { 
  Users, UserCheck, MapPin, MessageSquare, CreditCard, 
  Settings, BarChart3, TrendingUp, Calendar, Bell,
  Search, Command, AlertTriangle, CheckCircle, Clock,
  Database, Globe, Shield, Key, FileText, Flag,
  DollarSign, Target, UserCog, Mail, Languages
} from 'lucide-react';

const AdminHomepage = () => {
  const { user } = useCentralizedAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showCommandPalette, setShowCommandPalette] = useState(false);

  const stats = [
    { title: "Total Users", value: "12,345", change: "+12%", icon: Users },
    { title: "Active Trips", value: "1,234", change: "+5%", icon: MapPin },
    { title: "Bookings Today", value: "89", change: "+15%", icon: CreditCard },
    { title: "Chat Sessions", value: "456", change: "+8%", icon: MessageSquare },
  ];

  const alerts = [
    { 
      id: 1, 
      title: "System Maintenance", 
      description: "Scheduled downtime on June 15, 2024 at 02:00 IST", 
      type: "info", 
      icon: Clock,
      time: "2 hours ago"
    },
    { 
      id: 2, 
      title: "Payment Gateway Error", 
      description: "Intermittent failures with Razorpay integration", 
      type: "error", 
      icon: AlertTriangle,
      time: "15 mins ago"
    },
    { 
      id: 3, 
      title: "New User Spike", 
      description: "300+ new registrations in the last hour", 
      type: "success", 
      icon: CheckCircle,
      time: "Just now"
    }
  ];

  const quickTools = [
    { name: "User Lookup", icon: Users, action: () => {} },
    { name: "System Status", icon: Shield, action: () => {} },
    { name: "Clear Cache", icon: RefreshCw, action: () => {} },
    { name: "Send Notification", icon: Bell, action: () => {} },
  ];

  const managementCards = [
    {
      title: "User Management",
      description: "Manage users, permissions and profiles",
      icon: Users,
      href: "/admin/users",
      stats: "12,345 users"
    },
    {
      title: "Trip Management",
      description: "Monitor and manage user trips",
      icon: MapPin,
      href: "/admin/trips",
      stats: "1,234 active trips"
    },
    {
      title: "Booking Management",
      description: "Track reservations and payments",
      icon: CreditCard,
      href: "/admin/bookings",
      stats: "89 today"
    },
    {
      title: "Chatbot Analytics",
      description: "Monitor AI assistant performance",
      icon: MessageSquare,
      href: "/admin/analytics/chatbot",
      stats: "456 sessions today"
    }
  ];

  const contentManagementCards = [
    {
      title: "Destinations",
      description: "Manage travel destinations and metadata",
      icon: MapPin,
      href: "/admin/content/destinations",
      stats: "245 destinations"
    },
    {
      title: "Blog & Articles",
      description: "Curate and publish travel content",
      icon: FileText,
      href: "/admin/content/blog",
      stats: "89 articles"
    },
    {
      title: "Promotions",
      description: "Manage promotional banners and offers",
      icon: Target,
      href: "/admin/content/promotions",
      stats: "12 active"
    },
    {
      title: "Flagged Content",
      description: "Review user-reported content",
      icon: Flag,
      href: "/admin/content/flagged",
      stats: "3 pending",
      badge: "3"
    }
  ];

  const reportsAnalyticsCards = [
    {
      title: "Overview Dashboard",
      description: "KPIs and performance metrics",
      icon: BarChart3,
      href: "/admin/reports/overview",
      stats: "Real-time data"
    },
    {
      title: "Revenue Reports",
      description: "Financial analytics and insights",
      icon: DollarSign,
      href: "/admin/reports/revenue",
      stats: "₹2.4M this month"
    },
    {
      title: "Marketing ROI",
      description: "Campaign performance tracking",
      icon: TrendingUp,
      href: "/admin/reports/marketing",
      stats: "15.2% avg ROAS"
    },
    {
      title: "Conversion Funnel",
      description: "User journey drop-off analysis",
      icon: Target,
      href: "/admin/reports/funnel",
      stats: "15.2% conversion"
    }
  ];

  const systemSettingsCards = [
    {
      title: "API Keys",
      description: "Manage internal and third-party keys",
      icon: Key,
      href: "/admin/settings/api-keys",
      stats: "5 active keys"
    },
    {
      title: "Security & Audit",
      description: "Monitor system activities",
      icon: Shield,
      href: "/admin/settings/security",
      stats: "1,247 actions logged"
    },
    {
      title: "User Roles",
      description: "Manage permissions and access",
      icon: UserCog,
      href: "/admin/settings/roles",
      stats: "8 roles defined",
      disabled: true
    },
    {
      title: "Notifications",
      description: "Email and SMS templates",
      icon: Mail,
      href: "/admin/settings/notifications",
      stats: "24 templates",
      disabled: true
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const renderStatsCards = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <IconComponent className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );

  const handleQuickTool = (tool: any) => {
    tool.action();
  };

  const renderSectionCards = (cards: any[], sectionTitle: string) => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">{sectionTitle}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => {
          const IconComponent = card.icon;
          return (
            <Card key={card.href} className={`hover:shadow-md transition-shadow ${card.disabled ? 'opacity-50' : ''}`}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 rounded-lg ${card.disabled ? 'bg-gray-100' : 'bg-blue-50'}`}>
                    <IconComponent className={`h-5 w-5 ${card.disabled ? 'text-gray-400' : 'text-blue-600'}`} />
                  </div>
                  {card.badge && (
                    <Badge variant="destructive" className="text-xs">{card.badge}</Badge>
                  )}
                </div>
                <h4 className="font-medium text-gray-900 mb-1">{card.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{card.description}</p>
                <p className="text-xs text-gray-500">{card.stats}</p>
                <div className="mt-3">
                  {card.disabled ? (
                    <Button size="sm" variant="outline" disabled className="w-full">
                      Coming Soon
                    </Button>
                  ) : (
                    <Link to={card.href}>
                      <Button size="sm" variant="outline" className="w-full">
                        Manage
                      </Button>
                    </Link>
                  )}
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
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {user?.fullName || 'Admin'}</p>
            </div>
            <div className="flex items-center gap-4">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </form>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2"
                onClick={() => setShowCommandPalette(true)}
              >
                <Command className="h-4 w-4" />
                <span>Command</span>
                <kbd className="bg-gray-100 px-2 py-0.5 text-xs rounded">⌘K</kbd>
              </Button>
              <Link to="/admin/logout">
                <Button variant="ghost" size="sm">Logout</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-8">
        {/* Stats Overview */}
        {renderStatsCards()}

        {/* Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
            <CardDescription>Recent notifications and system status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => {
                const IconComponent = alert.icon;
                return (
                  <div 
                    key={alert.id} 
                    className={`flex items-start p-3 rounded-lg ${
                      alert.type === 'error' ? 'bg-red-50' : 
                      alert.type === 'success' ? 'bg-green-50' : 'bg-blue-50'
                    }`}
                  >
                    <div className={`p-2 rounded-full ${
                      alert.type === 'error' ? 'bg-red-100' : 
                      alert.type === 'success' ? 'bg-green-100' : 'bg-blue-100'
                    }`}>
                      <IconComponent className={`h-4 w-4 ${
                        alert.type === 'error' ? 'text-red-600' : 
                        alert.type === 'success' ? 'text-green-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">{alert.title}</h4>
                        <span className="text-xs text-gray-500">{alert.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{alert.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Content Management Section */}
        {renderSectionCards(contentManagementCards, "Content Management")}

        {/* Reports & Analytics Section */}
        {renderSectionCards(reportsAnalyticsCards, "Reports & Analytics")}

        {/* System Settings Section */}
        {renderSectionCards(systemSettingsCards, "System Settings")}

        {/* Existing Management Sections */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Core Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {managementCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <Card key={card.href} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 rounded-lg bg-blue-50">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
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

        {/* Quick Tools */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Tools</CardTitle>
            <CardDescription>Frequently used admin utilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {quickTools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <Button 
                    key={index} 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleQuickTool(tool)}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {tool.name}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Command Palette */}
      {showCommandPalette && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowCommandPalette(false)}>
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center border-b pb-2 mb-2">
              <Command className="h-4 w-4 mr-2 text-gray-400" />
              <Input 
                placeholder="Search commands..." 
                className="border-none shadow-none focus-visible:ring-0"
                autoFocus
              />
            </div>
            <div className="space-y-1 py-2">
              {/* Command options would go here */}
              <div className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Go to User Management</div>
              <div className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">View System Status</div>
              <div className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Generate Reports</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHomepage;
