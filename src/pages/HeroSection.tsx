
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Sparkles, MapPin, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep-blue/70 via-brand-deep-blue/50 to-brand-deep-blue/70" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-brand-sky-blue/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-brand-accent-aqua/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
          <Sparkles className="h-4 w-4 text-brand-accent-aqua" />
          <span className="text-sm font-medium">AI-Powered Travel Planning</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-brand-sky-blue bg-clip-text text-transparent">
          Travel Plans, Made Simple by AI
        </h1>
        
        <h2 className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Tell us your preferences, and our AI will craft the perfect itinerary. 
          From flights to activities, we handle everything so you can focus on the journey.
        </h2>

        {/* Enhanced CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link to="/chat">
            <Button 
              size="lg" 
              className="bg-brand-sky-blue hover:bg-brand-accent-aqua text-white px-8 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-brand-sky-blue/25 transition-all duration-300 transform hover:scale-105 border border-brand-sky-blue/50"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Start Planning with AI
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-6 py-4 text-lg rounded-2xl border-brand-sky-blue/30 hover:border-brand-sky-blue/50 transition-all duration-300"
            onClick={() => setShowVideoModal(true)}
          >
            <Play className="h-5 w-5 mr-2" />
            Watch How It Works
          </Button>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <MapPin className="h-8 w-8 text-brand-sky-blue mb-4" />
            <h3 className="text-lg font-semibold mb-2">Smart Destinations</h3>
            <p className="text-gray-300 text-sm">AI recommends perfect spots based on your interests and travel style</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Calendar className="h-8 w-8 text-brand-accent-aqua mb-4" />
            <h3 className="text-lg font-semibold mb-2">Instant Itineraries</h3>
            <p className="text-gray-300 text-sm">Get detailed day-by-day plans in minutes, not hours</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Users className="h-8 w-8 text-brand-sky-blue mb-4" />
            <h3 className="text-lg font-semibold mb-2">Group Planning</h3>
            <p className="text-gray-300 text-sm">Collaborate with friends and share travel expenses seamlessly</p>
          </div>
        </div>
      </div>

      {/* Enhanced Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-3xl w-full shadow-2xl animate-scale-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-brand-charcoal">See Sanchaari in Action</h3>
              <Button
                variant="ghost"
                onClick={() => setShowVideoModal(false)}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-brand-soft-gray"
              >
                ✕
              </Button>
            </div>
            <div className="aspect-video bg-gradient-to-br from-brand-soft-gray to-gray-200 rounded-2xl flex items-center justify-center shadow-inner">
              <div className="text-center">
                <Play className="h-16 w-16 text-brand-sky-blue mx-auto mb-4" />
                <p className="text-brand-charcoal text-lg">Demo video coming soon</p>
                <p className="text-brand-charcoal/70 text-sm mt-2">Experience the magic of AI-powered travel planning</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
