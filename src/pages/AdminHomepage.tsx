
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
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
  CheckCircle
} from 'lucide-react';

const AdminHomepage = () => {
  const { user, logout } = useCentralizedAuth();
  const [searchQuery, setSearchQuery] = useState('');

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const primaryModules = [
    {
      title: 'Dashboard',
      description: 'System overview and analytics',
      icon: BarChart3,
      path: '/admin/dashboard',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      title: 'User Management',
      description: 'Manage registered users',
      icon: Users,
      path: '/admin/users',
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      title: 'Trip Oversight',
      description: 'Monitor all travel plans',
      icon: MapPin,
      path: '/admin/trips',
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      title: 'Destination Control',
      description: 'Manage travel destinations',
      icon: Database,
      path: '/admin/destinations',
      color: 'bg-orange-50 text-orange-600 border-orange-200'
    },
    {
      title: 'Chatbot Insights',
      description: 'AI performance analytics',
      icon: MessageSquare,
      path: '/admin/analytics/chatbot',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    }
  ];

  const pendingAlerts = [
    {
      id: 1,
      message: 'Flagged conversation requires review',
      type: 'warning',
      action: 'Review Now'
    },
    {
      id: 2,
      message: 'User feedback pending moderation',
      type: 'info',
      action: 'Review Now'
    }
  ];

  const quickTools = [
    { name: 'Clear Cache', icon: RefreshCw },
    { name: 'Refresh Analytics', icon: BarChart3 },
    { name: 'Rerun Data Sync', icon: Database }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 font-semibold">
              ADMIN PANEL
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
              <Badge className="ml-1 h-4 w-4 p-0 text-xs">{pendingAlerts.length}</Badge>
            </Button>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-2">
              {getGreeting()}, {user?.fullName?.split(' ')[0] || 'Admin'}!
            </h1>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-300" />
              <span className="text-blue-100">All systems operational</span>
            </div>
          </div>
        </div>

        {/* Search Component */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search users, trips, logs, destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Alerts & Notices */}
        {pendingAlerts.length > 0 && (
          <div className="mb-8 space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">Alerts & Notices</h2>
            {pendingAlerts.map((alert) => (
              <Alert key={alert.id} className="border-orange-200 bg-orange-50">
                <AlertTriangle className="h-4 w-4 text-orange-600" />
                <AlertDescription className="flex items-center justify-between">
                  <span className="text-orange-800">{alert.message}</span>
                  <Button size="sm" variant="outline" className="text-orange-600 border-orange-300">
                    {alert.action}
                  </Button>
                </AlertDescription>
              </Alert>
            ))}
          </div>
        )}

        {/* Primary Navigation Cards */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Admin Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryModules.map((module) => {
              const IconComponent = module.icon;
              return (
                <Link key={module.path} to={module.path}>
                  <Card className={`hover:shadow-lg transition-shadow cursor-pointer border-2 ${module.color}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${module.color.replace('border-', 'bg-').replace('text-', 'text-')}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{module.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {module.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Quick Tools Panel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Quick Tools
            </CardTitle>
            <CardDescription>Administrative utilities (Super Admin only)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              {quickTools.map((tool) => {
                const IconComponent = tool.icon;
                return (
                  <Button key={tool.name} variant="outline" size="sm" className="flex items-center gap-2">
                    <IconComponent className="h-4 w-4" />
                    {tool.name}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 space-x-4">
          <span>Support Contact: admin@sanchaari.com</span>
          <span>•</span>
          <Button variant="link" size="sm" className="text-gray-500 p-0 h-auto">
            Admin Guide
          </Button>
          <span>•</span>
          <Button variant="link" size="sm" className="text-gray-500 p-0 h-auto">
            Changelog
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminHomepage;
