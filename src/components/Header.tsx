
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plane, MapPin, Calendar, Users, User, Search, Settings, BarChart3, Building2, DollarSign, Bell, LogOut, Menu, X } from 'lucide-react';
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
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useCentralizedAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const handleSearchNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
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
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Admin Logo - Always Visible */}
          <Link to={getLogoRedirect()} className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src="/lovable-uploads/3cf89503-eca7-4713-bdd0-55ba1176c477.png" 
              alt="Sanchaari Admin" 
              className="h-8 w-auto sm:h-10 md:h-12 object-contain"
            />
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 font-semibold text-xs hidden sm:inline-flex">
              ADMIN
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/admin/dashboard" className="flex items-center space-x-1 text-gray-600 hover:text-red-600">
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link to="/admin/users" className="flex items-center space-x-1 text-gray-600 hover:text-red-600">
              <Users className="h-4 w-4" />
              <span>Users</span>
            </Link>
            <Link to="/admin/bookings" className="flex items-center space-x-1 text-gray-600 hover:text-red-600">
              <Calendar className="h-4 w-4" />
              <span>Bookings</span>
            </Link>
            <Link to="/admin/reports" className="flex items-center space-x-1 text-gray-600 hover:text-red-600">
              <BarChart3 className="h-4 w-4" />
              <span>Reports</span>
            </Link>
            <Link to="/admin/settings/system" className="flex items-center space-x-1 text-gray-600 hover:text-red-600">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </nav>

          {/* Mobile Menu & Actions */}
          <div className="flex items-center space-x-2">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="hidden sm:flex p-2">
              <Bell className="h-4 w-4" />
            </Button>
            
            {/* Mobile Hamburger Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden p-2">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <img 
                      src="/lovable-uploads/3cf89503-eca7-4713-bdd0-55ba1176c477.png" 
                      alt="Sanchaari Admin" 
                      className="h-8 w-auto object-contain"
                    />
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 font-semibold text-xs">
                      ADMIN
                    </Badge>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/admin/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                    <BarChart3 className="h-5 w-5 text-red-600" />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                  <Link to="/admin/users" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                    <Users className="h-5 w-5 text-red-600" />
                    <span className="font-medium">Users</span>
                  </Link>
                  <Link to="/admin/bookings" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                    <Calendar className="h-5 w-5 text-red-600" />
                    <span className="font-medium">Bookings</span>
                  </Link>
                  <Link to="/admin/reports" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                    <BarChart3 className="h-5 w-5 text-red-600" />
                    <span className="font-medium">Reports</span>
                  </Link>
                  <Link to="/admin/settings/system" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                    <Settings className="h-5 w-5 text-red-600" />
                    <span className="font-medium">Settings</span>
                  </Link>
                  <div className="border-t pt-4 mt-4">
                    <Button onClick={handleLogout} variant="ghost" className="w-full justify-start text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop User Menu */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hidden lg:flex items-center space-x-1 text-sm p-2">
                    <User className="h-4 w-4" />
                    <span>{user?.fullName || user?.email || 'Admin'}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white border shadow-lg z-50">
                  <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/admin/dashboard" className="flex items-center">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/admin/settings/system" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/admin/login">
                <Button size="sm">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );

  const renderPartnerHeader = () => (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Partner Logo - Always Visible */}
          <Link to={getLogoRedirect()} className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src="/lovable-uploads/3cf89503-eca7-4713-bdd0-55ba1176c477.png" 
              alt="Sanchaari Partner" 
              className="h-8 w-auto sm:h-10 md:h-12 object-contain"
            />
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 font-semibold text-xs hidden sm:inline-flex">
              PARTNER
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/partner/dashboard" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link to="/partner/inventory/listings" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Building2 className="h-4 w-4" />
              <span>Properties</span>
            </Link>
            <Link to="/partner/bookings/list" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Calendar className="h-4 w-4" />
              <span>Bookings</span>
            </Link>
            <Link to="/partner/payouts" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <DollarSign className="h-4 w-4" />
              <span>Payouts</span>
            </Link>
            <Link to="/partner/reports/revenue" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <BarChart3 className="h-4 w-4" />
              <span>Reports</span>
            </Link>
          </nav>

          {/* Mobile Menu & Actions */}
          <div className="flex items-center space-x-2">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="hidden sm:flex p-2">
              <Bell className="h-4 w-4" />
            </Button>
            
            {/* Mobile Hamburger Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden p-2">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <img 
                      src="/lovable-uploads/3cf89503-eca7-4713-bdd0-55ba1176c477.png" 
                      alt="Sanchaari Partner" 
                      className="h-8 w-auto object-contain"
                    />
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 font-semibold text-xs">
                      PARTNER
                    </Badge>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/partner/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                  <Link to="/partner/inventory/listings" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Properties</span>
                  </Link>
                  <Link to="/partner/bookings/list" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Bookings</span>
                  </Link>
                  <Link to="/partner/payouts" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Payouts</span>
                  </Link>
                  <Link to="/partner/reports/revenue" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Reports</span>
                  </Link>
                  <div className="border-t pt-4 mt-4">
                    <Button onClick={handleLogout} variant="ghost" className="w-full justify-start text-blue-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop User Menu */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hidden lg:flex items-center space-x-1 text-sm p-2">
                    <User className="h-4 w-4" />
                    <span>{user?.companyName || user?.fullName || user?.email || 'Partner'}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white border shadow-lg z-50">
                  <DropdownMenuLabel>Partner Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/partner/dashboard" className="flex items-center">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/partner/profile/company" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/partner/login">
                <Button size="sm">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );

  const renderTravelerHeader = () => (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Always Visible */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src="/lovable-uploads/3cf89503-eca7-4713-bdd0-55ba1176c477.png" 
              alt="Sanchaari" 
              className="h-8 w-auto sm:h-10 md:h-12 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/search/flights" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Plane className="h-4 w-4" />
              <span>Flights</span>
            </Link>
            <Link to="/search/hotels" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <MapPin className="h-4 w-4" />
              <span>Hotels</span>
            </Link>
            <Link to="/search/activities" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Calendar className="h-4 w-4" />
              <span>Activities</span>
            </Link>
            <Link to="/community" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Users className="h-4 w-4" />
              <span>Community</span>
            </Link>
          </nav>

          {/* Mobile Menu & Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden p-2">
                  <Search className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg z-50">
                <DropdownMenuLabel>Quick Search</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleSearchNavigation('/search/flights')}>
                  <Plane className="mr-2 h-4 w-4" />
                  <span>Search Flights</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSearchNavigation('/search/hotels')}>
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Search Hotels</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSearchNavigation('/search/activities')}>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Search Activities</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSearchNavigation('/search/packages')}>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Search Packages</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Mobile Hamburger Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden p-2">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <img 
                      src="/lovable-uploads/3cf89503-eca7-4713-bdd0-55ba1176c477.png" 
                      alt="Sanchaari" 
                      className="h-8 w-auto object-contain"
                    />
                    <span className="text-blue-600 font-semibold">Sanchaari</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/search/flights" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                    <Plane className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Flights</span>
                  </Link>
                  <Link to="/search/hotels" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Hotels</span>
                  </Link>
                  <Link to="/search/activities" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Activities</span>
                  </Link>
                  <Link to="/community" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Community</span>
                  </Link>
                  {isAuthenticated && (
                    <>
                      <div className="border-t pt-4 mt-4">
                        <Link to="/profile/me" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                          <User className="h-5 w-5 text-blue-600" />
                          <span className="font-medium">Profile</span>
                        </Link>
                        <Link to="/trips/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                          <Calendar className="h-5 w-5 text-blue-600" />
                          <span className="font-medium">My Trips</span>
                        </Link>
                      </div>
                      <div className="border-t pt-4">
                        <Button onClick={handleLogout} variant="ghost" className="w-full justify-start text-blue-600">
                          <LogOut className="mr-2 h-4 w-4" />
                          Logout
                        </Button>
                      </div>
                    </>
                  )}
                  {!isAuthenticated && (
                    <div className="border-t pt-4 mt-4">
                      <Link to="/auth/login" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full">
                          Login
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop User Menu */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hidden lg:flex items-center space-x-1 text-sm p-2">
                    <User className="h-4 w-4" />
                    <span>{user?.fullName || user?.email || 'User'}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white border shadow-lg z-50">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile/me" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/trips/dashboard" className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>My Trips</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth/login" className="hidden lg:block">
                <Button size="sm">Login</Button>
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
