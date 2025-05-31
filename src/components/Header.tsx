
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plane, MapPin, Calendar, Users, User, Search, Settings, BarChart3, Building2, DollarSign, Bell, LogOut } from 'lucide-react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useCentralizedAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearchNavigation = (path: string) => {
    navigate(path);
  };

  const getLogoRedirect = () => {
    if (!user) return '/';
    switch (user.userType) {
      case 'admin':
        return '/admin';
      case 'partner':
        return '/partner';
      default:
        return '/';
    }
  };

  const renderAdminHeader = () => (
    <header className="bg-brand-dark-blue shadow-sm border-b border-brand-cyan">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Admin Logo */}
          <Link to={getLogoRedirect()} className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/3cf89503-eca7-4713-bdd0-55ba1176c477.png" 
              alt="Sanchaari Admin" 
              className="h-16 w-auto"
            />
            <Badge className="bg-brand-red text-white border-brand-red font-semibold">
              ADMIN PORTAL
            </Badge>
          </Link>

          {/* Admin Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/admin/dashboard" className="flex items-center space-x-1 text-white hover:text-brand-cyan transition-colors">
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link to="/admin/users" className="flex items-center space-x-1 text-white hover:text-brand-cyan transition-colors">
              <Users className="h-4 w-4" />
              <span>Users</span>
            </Link>
            <Link to="/admin/bookings" className="flex items-center space-x-1 text-white hover:text-brand-cyan transition-colors">
              <Calendar className="h-4 w-4" />
              <span>Bookings</span>
            </Link>
            <Link to="/admin/reports" className="flex items-center space-x-1 text-white hover:text-brand-cyan transition-colors">
              <BarChart3 className="h-4 w-4" />
              <span>Reports</span>
            </Link>
            <Link to="/admin/settings/system" className="flex items-center space-x-1 text-white hover:text-brand-cyan transition-colors">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </nav>

          {/* Admin User Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-brand-cyan hover:bg-brand-teal">
              <Bell className="h-4 w-4" />
            </Button>
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1 text-white hover:text-brand-cyan hover:bg-brand-teal">
                    <User className="h-4 w-4" />
                    <span>{user?.fullName || user?.email || 'Admin'}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white border shadow-lg z-50">
                  <DropdownMenuLabel className="text-brand-dark-gray">Admin Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/admin/dashboard" className="flex items-center text-brand-medium-gray hover:text-brand-dark-blue">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/admin/settings/system" className="flex items-center text-brand-medium-gray hover:text-brand-dark-blue">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-brand-red hover:text-brand-red">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/admin/login">
                <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );

  const renderPartnerHeader = () => (
    <header className="bg-brand-dark-blue shadow-sm border-b border-brand-cyan">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Partner Logo */}
          <Link to={getLogoRedirect()} className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/3cf89503-eca7-4713-bdd0-55ba1176c477.png" 
              alt="Sanchaari Partner" 
              className="h-16 w-auto"
            />
            <Badge className="bg-brand-teal text-white border-brand-teal font-semibold">
              PARTNER PORTAL
            </Badge>
          </Link>

          {/* Partner Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/partner/dashboard" className="flex items-center space-x-1 text-white hover:text-brand-cyan transition-colors">
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link to="/partner/inventory/listings" className="flex items-center space-x-1 text-white hover:text-brand-cyan transition-colors">
              <Building2 className="h-4 w-4" />
              <span>Properties</span>
            </Link>
            <Link to="/partner/bookings/list" className="flex items-center space-x-1 text-white hover:text-brand-cyan transition-colors">
              <Calendar className="h-4 w-4" />
              <span>Bookings</span>
            </Link>
            <Link to="/partner/payouts" className="flex items-center space-x-1 text-white hover:text-brand-cyan transition-colors">
              <DollarSign className="h-4 w-4" />
              <span>Payouts</span>
            </Link>
            <Link to="/partner/reports/revenue" className="flex items-center space-x-1 text-white hover:text-brand-cyan transition-colors">
              <BarChart3 className="h-4 w-4" />
              <span>Reports</span>
            </Link>
          </nav>

          {/* Partner User Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-brand-cyan hover:bg-brand-teal">
              <Bell className="h-4 w-4" />
            </Button>
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1 text-white hover:text-brand-cyan hover:bg-brand-teal">
                    <User className="h-4 w-4" />
                    <span>{user?.companyName || user?.fullName || user?.email || 'Partner'}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white border shadow-lg z-50">
                  <DropdownMenuLabel className="text-brand-dark-gray">Partner Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/partner/dashboard" className="flex items-center text-brand-medium-gray hover:text-brand-dark-blue">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/partner/profile/company" className="flex items-center text-brand-medium-gray hover:text-brand-dark-blue">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/partner/help" className="flex items-center text-brand-medium-gray hover:text-brand-dark-blue">
                      <span>Help Center</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-brand-red hover:text-brand-red">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/partner/login">
                <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );

  const renderTravelerHeader = () => (
    <header className="bg-white shadow-sm border-b border-brand-cyan">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Enlarged */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/3cf89503-eca7-4713-bdd0-55ba1176c477.png" 
              alt="Sanchaari" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/search/flights" className="flex items-center space-x-1 text-brand-dark-gray hover:text-brand-teal transition-colors">
              <Plane className="h-4 w-4" />
              <span>Flights</span>
            </Link>
            <Link to="/search/hotels" className="flex items-center space-x-1 text-brand-dark-gray hover:text-brand-teal transition-colors">
              <MapPin className="h-4 w-4" />
              <span>Hotels</span>
            </Link>
            <Link to="/search/activities" className="flex items-center space-x-1 text-brand-dark-gray hover:text-brand-teal transition-colors">
              <Calendar className="h-4 w-4" />
              <span>Activities</span>
            </Link>
            <Link to="/community" className="flex items-center space-x-1 text-brand-dark-gray hover:text-brand-teal transition-colors">
              <Users className="h-4 w-4" />
              <span>Community</span>
            </Link>
            
            {/* Search Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1 text-brand-dark-gray hover:text-brand-teal">
                  <Search className="h-4 w-4" />
                  <span>Search</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg z-50">
                <DropdownMenuLabel className="text-brand-dark-gray">Quick Search</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleSearchNavigation('/search/flights')} className="text-brand-medium-gray hover:text-brand-dark-blue">
                  <Plane className="mr-2 h-4 w-4" />
                  <span>Search Flights</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSearchNavigation('/search/hotels')} className="text-brand-medium-gray hover:text-brand-dark-blue">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Search Hotels</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSearchNavigation('/search/activities')} className="text-brand-medium-gray hover:text-brand-dark-blue">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Search Activities</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSearchNavigation('/search/packages')} className="text-brand-medium-gray hover:text-brand-dark-blue">
                  <Users className="mr-2 h-4 w-4" />
                  <span>Search Packages</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1 text-brand-dark-gray hover:text-brand-teal">
                    <User className="h-4 w-4" />
                    <span>{user?.fullName || user?.email || 'User'}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white border shadow-lg z-50">
                  <DropdownMenuLabel className="text-brand-dark-gray">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile/me" className="flex items-center text-brand-medium-gray hover:text-brand-dark-blue">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/trips/dashboard" className="flex items-center text-brand-medium-gray hover:text-brand-dark-blue">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>My Trips</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile/rewards" className="flex items-center text-brand-medium-gray hover:text-brand-dark-blue">
                      <span>Rewards</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile/payments" className="flex items-center text-brand-medium-gray hover:text-brand-dark-blue">
                      <span>Payment Methods</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-brand-red hover:text-brand-red">
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth/login">
                <Button className="bg-brand-dark-blue hover:bg-brand-dark-blue/90 text-white">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );

  // Render appropriate header based on user type
  if (user?.userType === 'admin') {
    return renderAdminHeader();
  }
  
  if (user?.userType === 'partner') {
    return renderPartnerHeader();
  }
  
  return renderTravelerHeader();
};

export default Header;
