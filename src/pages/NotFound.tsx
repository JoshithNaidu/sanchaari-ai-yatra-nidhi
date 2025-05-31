
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Search, MapPin } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md mx-auto w-full">
        {/* Illustration */}
        <div className="mb-6 lg:mb-8">
          <div className="relative">
            <MapPin className="h-16 w-16 lg:h-24 lg:w-24 text-blue-600 mx-auto mb-4 opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl lg:text-8xl font-bold text-blue-600">404</span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-base lg:text-lg text-gray-600 mb-2 px-2">
          Looks like this page took a wrong turn during its travels.
        </p>
        <p className="text-sm lg:text-base text-gray-500 mb-6 lg:mb-8 px-2">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3 lg:space-y-4">
          <Button size="lg" className="w-full" asChild>
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Return to Homepage
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" className="w-full" asChild>
            <Link to="/search">
              <Search className="h-4 w-4 mr-2" />
              Search Destinations
            </Link>
          </Button>
        </div>

        {/* Help Text */}
        <div className="mt-6 lg:mt-8 text-xs lg:text-sm text-gray-500 px-2">
          <p>Need help? <Link to="/help/center" className="text-blue-600 hover:underline">Visit our Help Center</Link></p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
