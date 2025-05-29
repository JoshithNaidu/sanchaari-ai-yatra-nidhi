
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { User, Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/94fa41ec-96bd-400a-8fc5-4c52f8f19917.png" 
                alt="Sanchaari Logo" 
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                    Explore
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <div className="row-span-3">
                        <div className="select-none rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 mt-4 text-lg font-medium text-blue-900">
                            Travel Themes
                          </div>
                          <p className="text-sm leading-tight text-blue-700">
                            Discover curated travel experiences tailored to your interests
                          </p>
                        </div>
                      </div>
                      <div className="grid gap-1">
                        <a href="/explore/themes" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-900">
                          <div className="text-sm font-medium leading-none">Travel Themes</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Adventure, Wellness, Cultural tours and more
                          </p>
                        </a>
                        <a href="/explore/destinations" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-900">
                          <div className="text-sm font-medium leading-none">Destination Guides</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            In-depth guides for every Indian destination
                          </p>
                        </a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                    Plan
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px]">
                      <a href="/trips/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-900">
                        <div className="text-sm font-medium leading-none">My Trips Dashboard</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Manage all your planned and ongoing trips
                        </p>
                      </a>
                      <a href="/trips/new" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-900">
                        <div className="text-sm font-medium leading-none">Create New Trip</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Start planning your next adventure with AI
                        </p>
                      </a>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                    Search
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[500px] lg:grid-cols-2">
                      <a href="/search/flights" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-900">
                        <div className="text-sm font-medium leading-none">Flights</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Find the best flight deals
                        </p>
                      </a>
                      <a href="/search/hotels" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-900">
                        <div className="text-sm font-medium leading-none">Hotels</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Book accommodations
                        </p>
                      </a>
                      <a href="/search/activities" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-900">
                        <div className="text-sm font-medium leading-none">Activities</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Discover experiences
                        </p>
                      </a>
                      <a href="/search/packages" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-900">
                        <div className="text-sm font-medium leading-none">Packages</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Complete travel packages
                        </p>
                      </a>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="/help/center" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">
                    Support
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
              <Globe className="h-4 w-4 mr-2" />
              EN
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Sign Up
            </Button>
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
              <a href="/explore/themes" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Explore Themes</a>
              <a href="/trips/dashboard" className="block px-3 py-2 text-gray-700 hover:text-blue-600">My Trips</a>
              <a href="/search/flights" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Search</a>
              <a href="/help/center" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Support</a>
              <div className="pt-4 border-t border-blue-100 space-y-2">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Sign In
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
