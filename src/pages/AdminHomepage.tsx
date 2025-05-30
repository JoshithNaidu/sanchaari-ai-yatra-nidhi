import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Users, 
  MapPin, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  AlertTriangle, 
  Search,
  Database,
  RefreshCw,
  FileText,
  Bell,
  LogOut,
  CheckCircle,
  DollarSign,
  Settings,
  CreditCard,
  Image,
  BookOpen,
  Activity,
  Clock,
  Zap,
  Command,
  Flag,
  Star,
  TrendingUp,
  Calendar,
  Globe,
  Target,
  Edit
} from 'lucide-react';

const AdminHomepage = () => {
  const { user, logout } = useCentralizedAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showCommandPalette, setShowCommandPalette] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  // Enhanced primary modules with new pages
  const primaryModules = [
    {
      title: 'Dashboard',
      description: 'System overview and analytics',
      icon: BarChart3,
      path: '/admin/dashboard',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      notifications: 0
    },
    {
      title: 'User Management',
      description: 'Manage registered users',
      icon: Users,
      path: '/admin/users/list',
      color: 'bg-green-50 text-green-600 border-green-200',
      notifications: 3
    },
    {
      title: 'Booking Management',
      description: 'View and manage all bookings',
      icon: CreditCard,
      path: '/admin/bookings',
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      notifications: 12
    },
    {
      title: 'Trip Oversight',
      description: 'Monitor all travel plans',
      icon: MapPin,
      path: '/admin/trips',
      color: 'bg-orange-50 text-orange-600 border-orange-200',
      notifications: 0
    },
    {
      title: 'Integration Management',
      description: 'Monitor third-party integrations',
      icon: Database,
      path: '/admin/integrations',
      color: 'bg-red-50 text-red-600 border-red-200',
      notifications: 2
    },
    {
      title: 'Pricing & Commission',
      description: 'Configure pricing rules',
      icon: DollarSign,
      path: '/admin/pricing',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      notifications: 0
    },
    {
      title: 'User Generated Content',
      description: 'Moderate reviews and photos',
      icon: Image,
      path: '/admin/ugc',
      color: 'bg-pink-50 text-pink-600 border-pink-200',
      notifications: 8
    },
    {
      title: 'Analytics & Reports',
      description: 'Business intelligence insights',
      icon: BarChart3,
      path: '/admin/reports/overview',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      notifications: 0
    },
    {
      title: 'Chatbot Insights',
      description: 'AI performance analytics',
      icon: MessageSquare,
      path: '/admin/analytics/chatbot',
      color: 'bg-cyan-50 text-cyan-600 border-cyan-200',
      notifications: 1
    }
  ];

  // New content management modules
  const contentModules = [
    {
      title: 'Manage Destinations',
      description: 'Add and edit travel destinations',
      icon: Globe,
      path: '/admin/content/destinations',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      title: 'Blog/Articles',
      description: 'Curate and publish content',
      icon: BookOpen,
      path: '/admin/content/blog',
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      title: 'Promotional Content',
      description: 'Manage banners and offers',
      icon: Star,
      path: '/admin/content/promotions',
      color: 'bg-yellow-50 text-yellow-600 border-yellow-200'
    },
    {
      title: 'Flagged Content',
      description: 'Review flagged user content',
      icon: Flag,
      path: '/admin/content/flagged',
      color: 'bg-red-50 text-red-600 border-red-200'
    }
  ];

  // New reporting modules
  const reportingModules = [
    {
      title: 'Revenue Reports',
      description: 'Financial analytics and drilldowns',
      icon: DollarSign,
      path: '/admin/reports/revenue',
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      title: 'Marketing ROI',
      description: 'Track marketing performance',
      icon: TrendingUp,
      path: '/admin/reports/marketing',
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      title: 'User Behavior',
      description: 'Understand user interactions',
      icon: Users,
      path: '/admin/reports/user-behavior',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      title: 'Conversion Funnel',
      description: 'Track conversion drop-offs',
      icon: Target,
      path: '/admin/reports/funnel',
      color: 'bg-orange-50 text-orange-600 border-orange-200'
    }
  ];

  // Enhanced system health status
  const systemHealth = {
    overall: 'operational',
    services: [
      { name: 'Chatbot API', status: 'operational', uptime: '99.9%' },
      { name: 'Booking API', status: 'operational', uptime: '100%' },
      { name: 'Payment Gateway', status: 'degraded', uptime: '97.2%' },
      { name: 'External Integrations', status: 'operational', uptime: '98.8%' }
    ]
  };

  const pendingAlerts = [
    {
      id: 1,
      message: 'Payment gateway experiencing intermittent issues',
      type: 'warning',
      action: 'Monitor',
      priority: 'high'
    },
    {
      id: 2,
      message: '12 bookings pending manual review',
      type: 'info',
      action: 'Review',
      priority: 'medium'
    },
    {
      id: 3,
      message: '8 user-generated content items flagged',
      type: 'warning',
      action: 'Moderate',
      priority: 'medium'
    },
    {
      id: 4,
      message: 'Airbnb integration sync failed',
      type: 'error',
      action: 'Fix Now',
      priority: 'high'
    }
  ];

  const quickTools = [
    { name: 'Refresh Chatbot Training', icon: RefreshCw, action: 'chatbot-refresh' },
    { name: 'Flush Redis Cache', icon: Database, action: 'cache-flush' },
    { name: 'Re-index Destination Search', icon: Search, action: 'reindex-search' },
    { name: 'Generate System Report', icon: FileText, action: 'system-report' }
  ];

  const quickSearchSuggestions = [
    'User: john@example.com',
    'Booking: BK12345',
    'Integration: MakeMyTrip',
    'Destination: Goa',
    'Report: Revenue Analytics'
  ];

  const handleQuickTool = (action: string) => {
    console.log(`Executing quick tool: ${action}`);
    // In real implementation, this would trigger actual system operations
  };

  // Command palette functionality (Cmd+K)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowCommandPalette(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getHealthStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-600';
      case 'degraded': return 'text-yellow-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getAlertColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-200 bg-red-50';
      case 'medium': return 'border-orange-200 bg-orange-50';
      case 'low': return 'border-blue-200 bg-blue-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/admin" className="hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/94fa41ec-96bd-400a-8fc5-4c52f8f19917.png" 
                alt="Sanchaari Logo" 
                className="h-8 w-auto"
              />
            </Link>
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 font-semibold">
              ADMIN PANEL
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              {pendingAlerts.length > 0 && (
                <Badge className="ml-1 h-4 w-4 p-0 text-xs bg-red-500">{pendingAlerts.length}</Badge>
              )}
            </Button>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Banner with Health Status */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">
                  {getGreeting()}, {user?.fullName?.split(' ')[0] || 'Admin'}!
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span className="text-blue-100">System Status: All Operational</span>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-blue-100 hover:text-white">
                        <Activity className="h-4 w-4 mr-2" />
                        Service Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>System Health Status</DialogTitle>
                        <DialogDescription>Real-time status of all platform services</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-3">
                        {systemHealth.services.map((service, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded">
                            <div>
                              <div className="font-medium">{service.name}</div>
                              <div className="text-sm text-gray-500">Uptime: {service.uptime}</div>
                            </div>
                            <Badge className={`${getHealthStatusColor(service.status)} bg-white border`}>
                              {service.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-blue-200">Last login</div>
                <div className="text-blue-100">{new Date().toLocaleDateString()}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Search Component with Command Palette */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search users, bookings, integrations... (⌘K)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowCommandPalette(true)}
              className="pl-10 pr-16"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 text-xs bg-gray-100 rounded">⌘</kbd>
              <kbd className="px-1.5 py-0.5 text-xs bg-gray-100 rounded">K</kbd>
            </div>
          </div>
          
          {/* Command Palette Modal */}
          <Dialog open={showCommandPalette} onOpenChange={setShowCommandPalette}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Command className="h-5 w-5" />
                  Quick Navigation
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-2">
                {quickSearchSuggestions.map((suggestion, index) => (
                  <div key={index} className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                    {suggestion}
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Enhanced Alerts & Notices */}
        {pendingAlerts.length > 0 && (
          <div className="mb-8 space-y-3">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              System Alerts ({pendingAlerts.length})
            </h2>
            {pendingAlerts.map((alert) => (
              <Alert key={alert.id} className={getAlertColor(alert.priority)}>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span>{alert.message}</span>
                    <Badge className="text-xs">
                      {alert.priority}
                    </Badge>
                  </div>
                  <Button size="sm" variant="outline">
                    {alert.action}
                  </Button>
                </AlertDescription>
              </Alert>
            ))}
          </div>
        )}

        {/* Enhanced Primary Navigation Cards */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Admin Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryModules.map((module) => {
              const IconComponent = module.icon;
              return (
                <Link key={module.path} to={module.path}>
                  <Card className={`hover:shadow-lg transition-all duration-200 cursor-pointer border-2 ${module.color} relative group`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${module.color.replace('border-', 'bg-').replace('text-', 'text-')}`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{module.title}</CardTitle>
                          </div>
                        </div>
                        {module.notifications > 0 && (
                          <Badge className="bg-red-500 text-white text-xs">
                            {module.notifications}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {module.description}
                      </CardDescription>
                    </CardContent>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg" />
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Content Management Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Content Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentModules.map((module) => {
              const IconComponent = module.icon;
              return (
                <Link key={module.path} to={module.path}>
                  <Card className={`hover:shadow-lg transition-all duration-200 cursor-pointer border-2 ${module.color} relative group`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${module.color.replace('border-', 'bg-').replace('text-', 'text-')}`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-base">{module.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-sm">
                        {module.description}
                      </CardDescription>
                    </CardContent>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg" />
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Reporting & Analytics Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Reporting & Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportingModules.map((module) => {
              const IconComponent = module.icon;
              return (
                <Link key={module.path} to={module.path}>
                  <Card className={`hover:shadow-lg transition-all duration-200 cursor-pointer border-2 ${module.color} relative group`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${module.color.replace('border-', 'bg-').replace('text-', 'text-')}`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-base">{module.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-sm">
                        {module.description}
                      </CardDescription>
                    </CardContent>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg" />
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Enhanced Quick Tools Panel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Quick Administrative Tools
            </CardTitle>
            <CardDescription>One-click system operations (Super Admin only)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickTools.map((tool) => {
                const IconComponent = tool.icon;
                return (
                  <Button 
                    key={tool.action} 
                    variant="outline" 
                    size="sm" 
                    className="flex flex-col items-center gap-2 h-auto py-3"
                    onClick={() => handleQuickTool(tool.action)}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="text-xs text-center">{tool.name}</span>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Footer with Enhanced Shortcuts */}
        <div className="text-center text-sm text-gray-500 space-x-4">
          <span>Support: admin@sanchaari.com</span>
          <span>•</span>
          <Button variant="link" size="sm" className="text-gray-500 p-0 h-auto">
            <FileText className="h-3 w-3 mr-1" />
            Admin Guide
          </Button>
          <span>•</span>
          <Button variant="link" size="sm" className="text-gray-500 p-0 h-auto">
            <Clock className="h-3 w-3 mr-1" />
            Release Notes
          </Button>
          <span>•</span>
          <Button variant="link" size="sm" className="text-gray-500 p-0 h-auto">
            <Zap className="h-3 w-3 mr-1" />
            System Status
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminHomepage;
