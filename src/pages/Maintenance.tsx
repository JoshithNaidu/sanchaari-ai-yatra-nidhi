
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Clock, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Maintenance = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/94fa41ec-96bd-400a-8fc5-4c52f8f19917.png" 
            alt="Sanchaari Logo" 
            className="h-16 w-auto mx-auto mb-6"
          />
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <div className="bg-blue-600 rounded-full p-6 w-24 h-24 mx-auto mb-6 animate-pulse">
            <Settings className="h-12 w-12 text-white mx-auto animate-spin" style={{animationDuration: '3s'}} />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            We're Updating Things!
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Sanchaari is temporarily down for scheduled maintenance. 
            We're making improvements to serve you better.
          </p>
        </div>

        {/* Countdown Timer */}
        <Card className="mb-8 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Clock className="h-5 w-5" />
              Estimated Time Remaining
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-lg p-4 text-2xl font-bold min-w-[60px]">
                  {timeRemaining.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-600 mt-2">Hours</div>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-lg p-4 text-2xl font-bold min-w-[60px]">
                  {timeRemaining.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-600 mt-2">Minutes</div>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-lg p-4 text-2xl font-bold min-w-[60px]">
                  {timeRemaining.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-600 mt-2">Seconds</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card className="mb-8 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle>What We're Working On</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-left text-gray-700 space-y-2">
              <li>• Improving AI recommendation algorithms</li>
              <li>• Enhancing booking system performance</li>
              <li>• Adding new destination content</li>
              <li>• Updating security features</li>
            </ul>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-red-800">Need Urgent Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-700 mb-4">
              If you have an immediate travel emergency, you can still reach our support team:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-50">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+911800XXXXXX">1800-XXX-XXXX</a>
              </Button>
              <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-50">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:emergency@sanchaari.com">Emergency Email</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        <div className="mt-8 text-sm text-gray-500">
          <p>
            Follow us for updates: 
            <a href="https://twitter.com/sanchaari" className="text-blue-600 hover:underline ml-1">@sanchaari</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
