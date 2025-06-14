import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import Header from '@/components/Header';
import { 
  Users, UserCheck, MapPin, MessageSquare, CreditCard, 
  Settings, BarChart3, TrendingUp, Calendar, Bell,
  Search, Command, AlertTriangle, CheckCircle, Clock,
  Database, Globe, Shield, Key, FileText, Flag,
  DollarSign, Target, UserCog, Mail, Languages,
  Brain, Zap, Book, RefreshCw, Star, Megaphone
} from 'lucide-react';

const AdminHomepage = () => {
  const { user, logout } = useCentralizedAuth();
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

  const quickActions = [
    { name: "User Lookup", icon: Users, action: () => {} },
    { name: "System Status", icon: Shield, action: () => {} },
    { name: "Clear Cache", icon: RefreshCw, action: () => {} },
    { name: "Send Notification", icon: Bell, action: () => {} },
  ];

  const contentActions = [
    {
      title: "Destination Management",
      description: "Manage travel destinations and guides",
      icon: MapPin,
      href: "/admin/content/destinations",
      color: "bg-green-500"
    },
    {
      title: "Blog Management",
      description: "Create and manage travel blog posts",
      icon: FileText,
      href: "/admin/content/blog",
      color: "bg-blue-500"
    },
    {
      title: "Reviews Management",
      description: "Moderate and manage customer reviews",
      icon: Star,
      href: "/admin/reviews",
      color: "bg-yellow-500"
    },
    {
      title: "Promotions",
      description: "Manage promotional campaigns",
      icon: Megaphone,
      href: "/admin/content/promotions",
      color: "bg-purple-500"
    },
    {
      title: "User-Generated Content",
      description: "Review user submissions",
      icon: Users,
      href: "/admin/content/ugc",
      color: "bg-indigo-500"
    },
    {
      title: "Flagged Content",
      description: "Review reported content",
      icon: Flag,
      href: "/admin/content/flagged",
      color: "bg-red-500"
    }
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

  const aiManagementCards = [
    {
      title: "AI Analytics",
      description: "Monitor AI performance and insights",
      icon: Brain,
      href: "/admin/ai/analytics",
      stats: "94.2% accuracy"
    },
    {
      title: "AI Models",
      description: "Manage AI models and configurations",
      icon: Settings,
      href: "/admin/ai/models",
      stats: "3 active models"
    },
    {
      title: "Conversation Flows",
      description: "Design and manage chat flows",
      icon: Zap,
      href: "/admin/ai/flows",
      stats: "8 active flows"
    },
    {
      title: "Human Handoffs",
      description: "Manage AI-to-human escalations",
      icon: Users,
      href: "/admin/ai/handoffs",
      stats: "12 pending"
    },
    {
      title: "Knowledge Base",
      description: "Manage AI training content",
      icon: Book,
      href: "/admin/ai/knowledge-base",
      stats: "150 articles"
    },
    {
      title: "Training Data",
      description: "Manage AI training datasets",
      icon: Database,
      href: "/admin/ai/training-data",
      stats: "248K records"
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

  const extendedReportsAnalyticsCards = [
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
      title: "User Behavior",
      description: "User interaction analytics",
      icon: Users,
      href: "/admin/reports/user-behavior",
      stats: "125K page views"
    },
    {
      title: "Retention Analysis",
      description: "User retention and churn metrics",
      icon: TrendingUp,
      href: "/admin/reports/retention",
      stats: "78.5% retention"
    },
    {
      title: "Conversion Funnel",
      description: "User journey drop-off analysis",
      icon: Target,
      href: "/admin/reports/funnel",
      stats: "15.2% conversion"
    },
    {
      title: "Group Collaboration",
      description: "Group trip planning analytics",
      icon: Users,
      href: "/admin/reports/group-collaboration",
      stats: "1,234 group trips"
    },
    {
      title: "Custom Reports",
      description: "Create and manage custom reports",
      icon: FileText,
      href: "/admin/reports/custom",
      stats: "5 saved reports"
    }
  ];

  const completeSystemSettingsCards = [
    {
      title: "API Keys",
      description: "Manage internal and third-party keys",
      icon: Key,
      href: "/admin/settings/api",
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
      title: "Data Privacy",
      description: "Manage data protection settings",
      icon: Shield,
      href: "/admin/settings/privacy",
      stats: "GDPR compliant"
    },
    {
      title: "User Roles",
      description: "Manage permissions and access",
      icon: UserCog,
      href: "/admin/settings/roles",
      stats: "8 roles defined"
    },
    {
      title: "System Config",
      description: "Global system settings",
      icon: Settings,
      href: "/admin/settings/system",
      stats: "All systems operational"
    },
    {
      title: "Notifications",
      description: "Email and SMS templates",
      icon: Mail,
      href: "/admin/settings/notifications",
      stats: "24 templates"
    },
    {
      title: "Localization",
      description: "Multi-language management",
      icon: Languages,
      href: "/admin/settings/localization",
      stats: "4 languages supported"
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
      <Header />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Admin Portal
          </h1>
          <p className="text-gray-600">Manage your travel platform efficiently</p>
        </div>

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

        {/* AI Management Section */}
        {renderSectionCards(aiManagementCards, "AI Management")}

        {/* Content Management Section */}
        {renderSectionCards(contentManagementCards, "Content Management")}

        {/* Reports & Analytics Section */}
        {renderSectionCards(extendedReportsAnalyticsCards, "Reports & Analytics")}

        {/* System Settings Section */}
        {renderSectionCards(completeSystemSettingsCards, "System Settings")}

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
              {quickActions.map((tool, index) => {
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
    </div>
  );
};

export default AdminHomepage;
