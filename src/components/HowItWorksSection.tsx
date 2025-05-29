
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksSection = () => {
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
      cta: "View Itinerary",
      link: "#",
      disabled: true
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to your perfect trip
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step Number */}
              <div className="text-6xl font-bold text-blue-100 mb-4">
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
              {step.disabled ? (
                <Button 
                  disabled 
                  className="bg-gray-300 text-gray-500 px-6 py-2 rounded-full cursor-not-allowed"
                >
                  {step.cta}
                </Button>
              ) : (
                <Link to={step.link}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                    {step.cta}
                  </Button>
                </Link>
              )}

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gray-200 transform -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
