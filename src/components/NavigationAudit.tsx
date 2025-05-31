
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface NavigationLink {
  path: string;
  label: string;
  status: 'working' | 'missing' | 'needs-implementation';
  portal: 'admin' | 'partner' | 'traveler';
}

const NavigationAudit = () => {
  const { toast } = useToast();

  const showNotImplementedMessage = (feature: string) => {
    toast({
      title: "Feature Not Implemented",
      description: `${feature} functionality is coming soon. This is a placeholder for future development.`,
      duration: 3000,
    });
  };

  // Comprehensive list of all navigation links across portals
  const allNavigationLinks: NavigationLink[] = [
    // Traveler Portal
    { path: '/', label: 'Home', status: 'working', portal: 'traveler' },
    { path: '/search', label: 'Search', status: 'working', portal: 'traveler' },
    { path: '/search/flights', label: 'Search Flights', status: 'working', portal: 'traveler' },
    { path: '/search/hotels', label: 'Search Hotels', status: 'working', portal: 'traveler' },
    { path: '/search/activities', label: 'Search Activities', status: 'working', portal: 'traveler' },
    { path: '/search/packages', label: 'Search Packages', status: 'working', portal: 'traveler' },
    { path: '/trips/dashboard', label: 'My Trips', status: 'working', portal: 'traveler' },
    { path: '/community', label: 'Community', status: 'working', portal: 'traveler' },
    { path: '/explore/themes', label: 'Explore', status: 'working', portal: 'traveler' },
    { path: '/blog', label: 'Blog', status: 'working', portal: 'traveler' },
    { path: '/profile/me', label: 'Profile', status: 'working', portal: 'traveler' },
    { path: '/auth/login', label: 'Login', status: 'working', portal: 'traveler' },

    // Admin Portal
    { path: '/admin', label: 'Admin Home', status: 'working', portal: 'admin' },
    { path: '/admin/dashboard', label: 'Admin Dashboard', status: 'working', portal: 'admin' },
    { path: '/admin/users', label: 'Users Management', status: 'working', portal: 'admin' },
    { path: '/admin/bookings', label: 'Bookings Management', status: 'working', portal: 'admin' },
    { path: '/admin/trips', label: 'Trip Management', status: 'working', portal: 'admin' },
    { path: '/admin/reviews', label: 'Reviews Management', status: 'working', portal: 'admin' },
    { path: '/admin/reports', label: 'Reports', status: 'working', portal: 'admin' },
    { path: '/admin/login', label: 'Admin Login', status: 'working', portal: 'admin' },

    // Partner Portal
    { path: '/partner', label: 'Partner Home', status: 'working', portal: 'partner' },
    { path: '/partner/dashboard', label: 'Partner Dashboard', status: 'working', portal: 'partner' },
    { path: '/partner/inventory/listings', label: 'Property Listings', status: 'working', portal: 'partner' },
    { path: '/partner/bookings/list', label: 'Partner Bookings', status: 'working', portal: 'partner' },
    { path: '/partner/reports/revenue', label: 'Revenue Reports', status: 'working', portal: 'partner' },
    { path: '/partner/payouts', label: 'Payouts', status: 'working', portal: 'partner' },
    { path: '/partner/reviews', label: 'Partner Reviews', status: 'working', portal: 'partner' },
    { path: '/partner/login', label: 'Partner Login', status: 'working', portal: 'partner' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'working':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Working</Badge>;
      case 'missing':
        return <Badge variant="destructive"><AlertTriangle className="h-3 w-3 mr-1" />404 Error</Badge>;
      case 'needs-implementation':
        return <Badge variant="secondary"><AlertTriangle className="h-3 w-3 mr-1" />Needs Implementation</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getPortalColor = (portal: string) => {
    switch (portal) {
      case 'admin':
        return 'text-red-600 bg-red-50';
      case 'partner':
        return 'text-blue-600 bg-blue-50';
      case 'traveler':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const groupedLinks = allNavigationLinks.reduce((acc, link) => {
    if (!acc[link.portal]) {
      acc[link.portal] = [];
    }
    acc[link.portal].push(link);
    return acc;
  }, {} as Record<string, NavigationLink[]>);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Navigation Audit Dashboard</h2>
        <p className="text-gray-600">Comprehensive check of all navigation links across portals</p>
      </div>

      {Object.entries(groupedLinks).map(([portal, links]) => (
        <Card key={portal}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPortalColor(portal)}`}>
                {portal.charAt(0).toUpperCase() + portal.slice(1)} Portal
              </span>
              <span className="text-sm font-normal text-gray-500">
                ({links.length} links)
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {links.map((link, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{link.label}</span>
                    {getStatusBadge(link.status)}
                  </div>
                  <div className="text-xs text-gray-500 break-all">{link.path}</div>
                  <div className="flex gap-2">
                    {link.status === 'working' ? (
                      <Link to={link.path}>
                        <Button size="sm" variant="outline" className="text-xs">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Visit
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="text-xs"
                        onClick={() => showNotImplementedMessage(link.label)}
                      >
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {link.status === 'missing' ? 'Fix Required' : 'Coming Soon'}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions & Test Buttons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              onClick={() => showNotImplementedMessage('Advanced Search Filters')}
              variant="outline"
            >
              Test Search Filters
            </Button>
            <Button 
              onClick={() => showNotImplementedMessage('Booking System')}
              variant="outline"
            >
              Test Booking Flow
            </Button>
            <Button 
              onClick={() => showNotImplementedMessage('Payment Gateway')}
              variant="outline"
            >
              Test Payment
            </Button>
            <Button 
              onClick={() => showNotImplementedMessage('Customer Support')}
              variant="outline"
            >
              Test Support Chat
            </Button>
            <Button 
              onClick={() => showNotImplementedMessage('Email Notifications')}
              variant="outline"
            >
              Test Notifications
            </Button>
            <Button 
              onClick={() => showNotImplementedMessage('Mobile App Integration')}
              variant="outline"
            >
              Test Mobile Features
            </Button>
            <Button 
              onClick={() => showNotImplementedMessage('Social Media Login')}
              variant="outline"
            >
              Test Social Login
            </Button>
            <Button 
              onClick={() => showNotImplementedMessage('Analytics Dashboard')}
              variant="outline"
            >
              Test Analytics
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NavigationAudit;
