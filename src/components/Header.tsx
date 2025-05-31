
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plane, MapPin, Calendar, Users, User } from 'lucide-react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useCentralizedAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
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
          </nav>

          {/* User Menu - Consolidated */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative group">
                <Button variant="ghost" className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{user?.fullName || user?.email || 'User'}</span>
                </Button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                  <Link to="/profile/me" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link to="/trips/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Trips
                  </Link>
                  <Link to="/profile/rewards" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Rewards
                  </Link>
                  <Link to="/profile/payments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Payment Methods
                  </Link>
                  <hr className="my-1" />
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
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
