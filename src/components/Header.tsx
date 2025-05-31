
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plane, MapPin, Calendar, Users, User, Search } from 'lucide-react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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

  return (
    <header className="bg-white shadow-sm border-b">
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
            
            {/* Search Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                  <Search className="h-4 w-4" />
                  <span>Search</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg">
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
          </nav>

          {/* User Menu - Fixed Dropdown */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{user?.fullName || user?.email || 'User'}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white border shadow-lg">
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
                  <DropdownMenuItem asChild>
                    <Link to="/profile/rewards" className="flex items-center">
                      <span>Rewards</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile/payments" className="flex items-center">
                      <span>Payment Methods</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth/login">
                <Button>Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
