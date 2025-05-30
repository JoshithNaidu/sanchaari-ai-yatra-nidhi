
import React from 'react';
import { Button } from '@/components/ui/button';
import { LogIn, UserPlus, User, LogOut, Menu, X, Settings, Shield, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

const Header = () => {
  const { user, isAuthenticated } = useCentralizedAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define navigation based on user type
  const getNavigationItems = () => {
    if (!isAuthenticated || !user) {
      // Public navigation for non-authenticated users
      return [
        { to: "/explore/destinations", label: "Destinations" },
        { to: "/blog", label: "Travel Blog" },
        { to: "/community", label: "Community" },
        { to: "/about", label: "About" }
      ];
    }

    switch (user.userType) {
      case 'traveler':
        return [
          { to: "/trips/dashboard", label: "My Trips" },
          { to: "/search", label: "Search" },
          { to: "/explore/destinations", label: "Destinations" },
          { to: "/workflows", label: "Workflows" }
        ];
      
      case 'partner':
        return [
          { to: "/partner/dashboard", label: "Dashboard" },
          { to: "/partner/inventory/listings", label: "Listings" },
          { to: "/partner/bookings/list", label: "Bookings" },
          { to: "/partner/reports/revenue", label: "Reports" }
        ];
      
      case 'admin':
        return [
          { to: "/admin/dashboard", label: "Dashboard" },
          { to: "/admin/users/list", label: "Users" },
          { to: "/admin/bookings/all", label: "All Bookings" },
          { to: "/admin/reports/overview", label: "Reports" }
        ];
      
      default:
        return [];
    }
  };

  const getProfileMenuItems = () => {
    if (!user) return [];

    switch (user.userType) {
      case 'traveler':
        return [
          { to: "/trips/dashboard", label: "Dashboard" },
          { to: "/profile/me", label: "My Profile" },
          { to: "/profile/history", label: "Travel History" },
          { to: "/profile/saved", label: "Saved Trips" },
          { to: "/profile/rewards", label: "Rewards" }
        ];
      
      case 'partner':
        return [
          { to: "/partner/dashboard", label: "Dashboard" },
          { to: "/partner/profile/company", label: "Company Profile" },
          { to: "/partner/messages", label: "Messages" },
          { to: "/partner/help/center", label: "Help Center" }
        ];
      
      case 'admin':
        return [
          { to: "/admin/dashboard", label: "Dashboard" },
          { to: "/admin/users/list", label: "User Management" },
          { to: "/admin/integrations", label: "System Settings" }
        ];
      
      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();
  const profileMenuItems = getProfileMenuItems();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/94fa41ec-96bd-400a-8fc5-4c52f8f19917.png" 
              alt="Sanchaari Logo" 
              className="h-9 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navigationItems.map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className="text-gray-700 hover:text-blue-600 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Only show chat for travelers */}
          {(!isAuthenticated || user?.userType === 'traveler') && (
            <Link to="/chat">
              <Button variant="outline" size="sm" className="hidden sm:flex hover:bg-blue-50 hover:border-blue-300 transition-colors">
                Chat with AI
              </Button>
            </Link>
          )}
          
          {isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 hover:bg-gray-100 transition-colors">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {user.fullName.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden sm:inline font-medium">{user.fullName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white shadow-lg border">
                {profileMenuItems.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to} className="flex items-center w-full">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link to="/auth/logout" className="flex items-center w-full text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
                  <LogIn className="h-4 w-4" />
                  <span className="hidden sm:inline">Sign In</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white shadow-lg border">
                <DropdownMenuItem asChild>
                  <Link to="/auth/login" className="flex items-center w-full">
                    <User className="h-4 w-4 mr-2" />
                    Traveler Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/partner/login" className="flex items-center w-full">
                    <Building2 className="h-4 w-4 mr-2" />
                    Partner Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/admin/login" className="flex items-center w-full">
                    <Shield className="h-4 w-4 mr-2" />
                    Admin Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/auth/register" className="flex items-center w-full">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Create Account
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/partner/signup" className="flex items-center w-full">
                    <Building2 className="h-4 w-4 mr-2" />
                    Partner Signup
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white shadow-lg">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            {navigationItems.map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            {(!isAuthenticated || user?.userType === 'traveler') && (
              <Link to="/chat" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                Chat with AI
              </Link>
            )}
            
            {!isAuthenticated && (
              <>
                <div className="border-t my-2"></div>
                <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Sign In
                </div>
                <Link to="/auth/login" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Traveler Login
                </Link>
                <Link to="/partner/login" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors flex items-center">
                  <Building2 className="h-4 w-4 mr-2" />
                  Partner Login
                </Link>
                <Link to="/admin/login" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Admin Login
                </Link>
                <div className="border-t my-2"></div>
                <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Sign Up
                </div>
                <Link to="/auth/register" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors flex items-center">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Create Account
                </Link>
                <Link to="/partner/signup" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors flex items-center">
                  <Building2 className="h-4 w-4 mr-2" />
                  Partner Signup
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
