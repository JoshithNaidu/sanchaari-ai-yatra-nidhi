
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Search, MapPin, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          {/* Illustration */}
          <div className="mb-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&crop=center" 
                alt="Mountain landscape representing a lost journey" 
                className="w-64 h-48 object-cover rounded-lg mx-auto mb-4 opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold text-blue-600 bg-white bg-opacity-95 px-6 py-3 rounded-lg shadow-lg">404</span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Looks like this page took a wrong turn during its travels.
          </p>
          <p className="text-gray-500 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
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

            <Button variant="ghost" size="lg" className="w-full" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Help Text */}
          <div className="mt-8 text-sm text-gray-500">
            <p>
              Need help? <Link to="/help/center" className="text-blue-600 hover:underline">Visit our Help Center</Link> or{' '}
              <Link to="/help/contact" className="text-blue-600 hover:underline">Contact Support</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
