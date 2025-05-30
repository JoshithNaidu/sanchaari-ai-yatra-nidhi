
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles, MapPin, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksSection = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Tell us what you want",
      description: "Share your preferences, budget, and travel style with our AI assistant",
      cta: "Start Planning",
      link: "/chat",
      disabled: false
    },
    {
      number: "02",
      icon: Sparkles,
      title: "We generate the perfect itinerary",
      description: "Our AI creates a personalized travel plan based on your requirements",
      cta: "Create Trip",
      link: "/trips/new",
      disabled: false
    },
    {
      number: "03",
      icon: MapPin,
      title: "You travel, we track and optimize",
      description: "Real-time updates and suggestions to make your trip even better",
      cta: "View Sample",
      link: "/trips/dashboard",
      disabled: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Three simple steps to your perfect trip
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 text-lg rounded-full"
            onClick={() => setShowVideoModal(true)}
          >
            <Play className="h-5 w-5 mr-2" />
            Watch How It Works
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step Number - positioned better */}
              <div className="text-5xl font-bold text-blue-50 mb-2 select-none">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-10 w-10 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                {step.description}
              </p>

              {/* CTA */}
              <Link to={step.link}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                  {step.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">How It Works</h3>
              <Button
                variant="ghost"
                onClick={() => setShowVideoModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </Button>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Demo video placeholder</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HowItWorksSection;
