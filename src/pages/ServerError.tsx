
import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServerError = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Illustration */}
        <div className="mb-8">
          <div className="relative">
            <AlertTriangle className="h-24 w-24 text-red-500 mx-auto mb-4" />
            <div className="absolute -bottom-2 -right-2">
              <div className="bg-orange-500 rounded-full p-2">
                <span className="text-white text-sm font-bold">500</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          Our servers are having a temporary hiccup.
        </p>
        <p className="text-gray-500 mb-8">
          Our team has been automatically notified and is working to fix this issue.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button size="lg" className="w-full" onClick={handleRetry}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
          
          <Button variant="outline" size="lg" className="w-full" asChild>
            <Link to="/help/center">
              <HelpCircle className="h-4 w-4 mr-2" />
              Visit Help Center
            </Link>
          </Button>
        </div>

        {/* Support Info */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg text-sm">
          <p className="text-blue-800 mb-2">
            <strong>Need urgent help?</strong>
          </p>
          <p className="text-blue-700">
            Email: <a href="mailto:support@sanchaari.com" className="underline">support@sanchaari.com</a>
          </p>
          <p className="text-blue-700">
            Phone: <a href="tel:+911800XXXXXX" className="underline">1800-XXX-XXXX</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
