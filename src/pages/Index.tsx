
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuickStartSection from '@/components/QuickStartSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturedCollections from '@/components/FeaturedCollections';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Footer from '@/components/Footer';
import FloatingChatbot from '@/components/FloatingChatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <QuickStartSection />
      <HowItWorksSection />
      <FeaturedCollections />
      <TestimonialsCarousel />
      
      {/* Testimonials and Reviews Section */}
      <section className="py-16 bg-brand-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark-gray mb-4">What Our Travelers Say</h2>
            <p className="text-brand-medium-gray max-w-2xl mx-auto">
              Real experiences from real travelers who trusted Sanchaari to plan their perfect journeys
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-cyan">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80" 
                  alt="Priya Sharma" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-brand-dark-gray">Priya Sharma</h4>
                  <span className="inline-block bg-brand-red text-white text-xs px-2 py-1 rounded">India</span>
                </div>
              </div>
              <p className="text-brand-medium-gray">
                "Sanchaari made our Kerala honeymoon absolutely magical. Every detail was perfect!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-cyan">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" 
                  alt="Rajesh Kumar" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-brand-dark-gray">Rajesh Kumar</h4>
                  <span className="inline-block bg-brand-red text-white text-xs px-2 py-1 rounded">India</span>
                </div>
              </div>
              <p className="text-brand-medium-gray">
                "Planning our family trip to Rajasthan was so easy with the collaborative features!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-cyan">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" 
                  alt="Sneha Patel" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-brand-dark-gray">Sneha Patel</h4>
                  <span className="inline-block bg-brand-red text-white text-xs px-2 py-1 rounded">India</span>
                </div>
              </div>
              <p className="text-brand-medium-gray">
                "As a solo traveler, I felt confident with Sanchaari's safety recommendations!"
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="/reviews" 
              className="inline-block bg-brand-teal text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Read All Reviews
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default Index;
