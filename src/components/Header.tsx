
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Menu, User, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/94fa41ec-96bd-400a-8fc5-4c52f8f19917.png" 
              alt="Sanchaari Logo" 
              className="h-8 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/search" className="text-foreground/60 transition-colors hover:text-foreground/80">
              Search
            </Link>
            <Link to="/trips/dashboard" className="text-foreground/60 transition-colors hover:text-foreground/80">
              My Trips
            </Link>
            <Link to="/explore/destinations" className="text-foreground/60 transition-colors hover:text-foreground/80">
              Destinations
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/search">
            <Button variant="ghost" size="sm" className="gap-2">
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Search</span>
            </Button>
          </Link>
          
          <Link to="/chat">
            <Button variant="outline" size="sm">
              Chat with AI
            </Button>
          </Link>
          
          <Link to="/login">
            <Button variant="ghost" size="sm" className="gap-2">
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">Login</span>
            </Button>
          </Link>
          
          <Link to="/signup">
            <Button variant="default" size="sm">
              Sign Up
            </Button>
          </Link>
          
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
