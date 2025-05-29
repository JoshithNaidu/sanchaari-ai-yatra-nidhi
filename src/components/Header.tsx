
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/94fa41ec-96bd-400a-8fc5-4c52f8f19917.png" 
                alt="Sanchaari Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/explore/destinations" className="text-gray-700 hover:text-blue-600 transition-colors">
              Explore Destinations
            </Link>
            <Link to="/explore/themes" className="text-gray-700 hover:text-blue-600 transition-colors">
              Themes
            </Link>
            <Link to="/help/center" className="text-gray-700 hover:text-blue-600 transition-colors">
              Help
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/chat">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Plan with AI
              </Button>
            </Link>
            <Link to="/profile/me">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Login / Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-blue-100">
            <div className="space-y-4">
              <Link to="/explore/destinations" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Explore Destinations
              </Link>
              <Link to="/explore/themes" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Themes
              </Link>
              <Link to="/help/center" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Help
              </Link>
              <div className="pt-4 border-t border-blue-100 space-y-2">
                <Link to="/chat">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Plan with AI
                  </Button>
                </Link>
                <Link to="/profile/me">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    Login / Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
