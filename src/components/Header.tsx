
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { Menu, X, User, Settings, LogOut, Dashboard } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useCentralizedAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = async () => {
    await logout();
    setIsMenuOpen(false);
  };

  const travelerNavItems = [
    { label: 'Search', href: '/search' },
    { label: 'Chat', href: '/chat' },
    { label: 'My Trips', href: '/trips/dashboard' },
    { label: 'Explore', href: '/explore/themes' },
    { label: 'Blog', href: '/blog' },
    { label: 'Community', href: '/community' },
  ];

  const getNavItems = () => {
    if (!isAuthenticated || !user) {
      return [
        { label: 'Search', href: '/search' },
        { label: 'Chat', href: '/chat' },
        { label: 'Explore', href: '/explore/themes' },
        { label: 'Blog', href: '/blog' },
        { label: 'Community', href: '/community' },
      ];
    }

    if (user.userType === 'traveler') {
      return travelerNavItems;
    }

    return [];
  };

  // Determine home path based on user type
  const getHomePath = () => {
    if (!isAuthenticated || !user) {
      return '/';
    }
    
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

  // Get dashboard path based on user type
  const getDashboardPath = () => {
    if (!user) return '/';
    
    switch (user.userType) {
      case 'admin':
        return '/admin/dashboard';
      case 'partner':
        return '/partner/dashboard';
      case 'traveler':
      default:
        return '/trips/dashboard';
    }
  };

  // Get profile path based on user type
  const getProfilePath = () => {
    if (!user) return '/';
    
    switch (user.userType) {
      case 'admin':
        return '/admin';
      case 'partner':
        return '/partner/dashboard';
      case 'traveler':
      default:
        return '/profile/me';
    }
  };

  // Get role display text
  const getRoleText = () => {
    if (!user) return '';
    
    switch (user.userType) {
      case 'admin':
        return 'Admin';
      case 'partner':
        return 'Partner';
      case 'traveler':
      default:
        return 'User';
    }
  };

  const navItems = getNavItems();

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to={getHomePath()} className="hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/94fa41ec-96bd-400a-8fc5-4c52f8f19917.png" 
            alt="Sanchaari Logo" 
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation - Only show for non-admin users */}
        {user?.userType !== 'admin' && (
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Auth Section */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{user.fullName?.split(' ')[0] || 'User'}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {getRoleText()}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to={getDashboardPath()} className="flex items-center">
                    <Dashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getProfilePath()} className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button - Only show for non-admin users */}
        {user?.userType !== 'admin' && (
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        )}
      </div>

      {/* Mobile Menu - Only show for non-admin users */}
      {isMenuOpen && user?.userType !== 'admin' && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-4 border-t">
              {isAuthenticated && user ? (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="h-4 w-4" />
                    <span className="font-medium">{user.fullName?.split(' ')[0] || 'User'}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {getRoleText()}
                    </span>
                  </div>
                  <Link 
                    to={getDashboardPath()} 
                    className="block text-gray-700 hover:text-blue-600 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to={getProfilePath()} 
                    className="block text-gray-700 hover:text-blue-600 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link 
                    to="/settings" 
                    className="block text-gray-700 hover:text-blue-600 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <Button onClick={handleLogout} variant="outline" size="sm" className="w-full mt-2">
                    Logout
                  </Button>
                </div>
              ) : (
                <Link to="/auth/login" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="w-full">Login</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
