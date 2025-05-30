
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Bell, Shield, Globe, CreditCard, Key } from 'lucide-react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';

const Settings = () => {
  const { user } = useCentralizedAuth();

  // Get back path based on user type
  const getBackPath = () => {
    if (!user) return '/';
    
    switch (user.userType) {
      case 'admin':
        return '/admin';
      case 'partner':
        return '/partner/dashboard';
      case 'traveler':
      default:
        return '/';
    }
  };

  const settingsCards = [
    {
      title: "Account Settings",
      description: "Manage your account information and preferences",
      icon: User,
      href: "/profile/me",
      available: true
    },
    {
      title: "Notifications",
      description: "Configure email and push notification preferences",
      icon: Bell,
      href: "/profile/notifications",
      available: user?.userType === 'traveler'
    },
    {
      title: "Privacy & Security",
      description: "Manage your privacy settings and security options",
      icon: Shield,
      href: "#",
      available: true
    },
    {
      title: "Language & Region",
      description: "Set your preferred language and regional settings",
      icon: Globe,
      href: "#",
      available: true
    },
    {
      title: "Payment Methods",
      description: "Manage your saved payment methods and billing",
      icon: CreditCard,
      href: "/profile/payments",
      available: user?.userType === 'traveler'
    },
    {
      title: "API Keys",
      description: "Manage API keys and integrations",
      icon: Key,
      href: "/admin/settings/api-keys",
      available: user?.userType === 'admin'
    }
  ];

  const availableSettings = settingsCards.filter(card => card.available);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to={getBackPath()}>
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                <p className="text-sm text-gray-600">Manage your account and preferences</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableSettings.map((setting) => {
            const IconComponent = setting.icon;
            const isComingSoon = setting.href === '#';
            
            return (
              <Card key={setting.title} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{setting.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>{setting.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {isComingSoon ? (
                    <Button variant="outline" disabled className="w-full">
                      Coming Soon
                    </Button>
                  ) : (
                    <Link to={setting.href}>
                      <Button variant="outline" className="w-full">
                        Configure
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Settings;
