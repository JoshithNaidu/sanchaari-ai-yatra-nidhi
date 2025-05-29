
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6">
          Discover
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
            Incredible India
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
          Discover, customize, and book your trip with AI-powered travel planning
        </p>
        
        {/* Enhanced Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <Input 
              placeholder="Where do you want to go?"
              className="h-16 pl-14 pr-20 text-lg border-2 border-blue-200 focus:border-blue-500 rounded-full bg-white/90 backdrop-blur-sm shadow-lg"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-blue-500" />
            <Link to="/chat">
              <Button className="absolute right-2 top-2 h-12 px-8 bg-blue-600 hover:bg-blue-700 rounded-full">
                <Zap className="h-4 w-4 mr-2" />
                AI Search
              </Button>
            </Link>
          </div>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/chat">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg"
            >
              <Zap className="h-5 w-5 mr-2" />
              Start Planning with AI
            </Button>
          </Link>
          <Link to="/explore/themes">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg rounded-full"
            >
              Browse Travel Ideas
            </Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white/20 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-700">Destinations Covered</div>
          </div>
          <div className="text-center bg-white/20 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-600">50K+</div>
            <div className="text-gray-700">Happy Travelers</div>
          </div>
          <div className="text-center bg-white/20 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-600">AI-Powered</div>
            <div className="text-gray-700">Smart Recommendations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
