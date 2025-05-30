
import React from 'react';
import { Button } from '@/components/ui/button';
import { LogIn, UserPlus, User, LogOut, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

const Header = () => {
  const { user, isAuthenticated } = useCentralizedAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <Link to="/trips/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors relative group">
              My Trips
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/explore/destinations" className="text-gray-700 hover:text-blue-600 transition-colors relative group">
              Destinations
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/search" className="text-gray-700 hover:text-blue-600 transition-colors relative group">
              Search
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/chat">
            <Button variant="outline" size="sm" className="hidden sm:flex hover:bg-blue-50 hover:border-blue-300 transition-colors">
              Chat with AI
            </Button>
          </Link>
          
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
                <DropdownMenuItem asChild>
                  <Link to={user.userType === 'partner' ? '/partner/dashboard' : user.userType === 'admin' ? '/admin/dashboard' : '/trips/dashboard'} className="flex items-center w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile/me" className="flex items-center w-full">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile/history" className="flex items-center w-full">Travel History</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile/saved" className="flex items-center w-full">Saved Trips</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile/rewards" className="flex items-center w-full">Rewards</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/auth/logout" className="flex items-center w-full text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth/login">
              <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">Get Started</span>
              </Button>
            </Link>
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
            <Link to="/trips/dashboard" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
              My Trips
            </Link>
            <Link to="/explore/destinations" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
              Destinations
            </Link>
            <Link to="/search" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
              Search
            </Link>
            <Link to="/chat" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
              Chat with AI
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
