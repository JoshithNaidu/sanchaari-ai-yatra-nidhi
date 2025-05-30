
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { Menu, X, User } from 'lucide-react';

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
            <div className="flex items-center space-x-4">
              <Link 
                to={user.userType === 'admin' ? '/admin' : '/profile/me'} 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              >
                <User className="h-4 w-4" />
                <span>{user.fullName?.split(' ')[0] || 'User'}</span>
                {user.userType === 'admin' && (
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Admin</span>
                )}
              </Link>
              <Button onClick={handleLogout} variant="outline" size="sm">
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/auth/login">
                <Button variant="ghost" size="sm">Login</Button>
              </Link>
              <Link to="/auth/register">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
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
                  <Link 
                    to="/profile/me" 
                    className="block text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Button onClick={handleLogout} variant="outline" size="sm" className="w-full">
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link to="/auth/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" size="sm" className="w-full">Login</Button>
                  </Link>
                  <Link to="/auth/register" onClick={() => setIsMenuOpen(false)}>
                    <Button size="sm" className="w-full">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
