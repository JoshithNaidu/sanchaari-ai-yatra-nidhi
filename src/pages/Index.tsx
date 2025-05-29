
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import TravelThemes from '@/components/TravelThemes';
import AIAssistantPreview from '@/components/AIAssistantPreview';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Compass, Instagram, Twitter, Linkedin, Youtube, Globe } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ValueProposition />
      <TravelThemes />
      <AIAssistantPreview />
      <TestimonialsCarousel />
      <NewsletterSignup />

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Compass className="h-6 w-6" />
                <span className="text-xl font-bold">Sanchaari</span>
              </div>
              <p className="text-blue-200 mb-4">
                Your AI-powered companion for exploring the incredible diversity of India.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-5 w-5 text-blue-200 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-blue-200 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 text-blue-200 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="h-5 w-5 text-blue-200 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Destinations</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="/explore/destinations/north-india" className="hover:text-white transition-colors">North India</a></li>
                <li><a href="/explore/destinations/south-india" className="hover:text-white transition-colors">South India</a></li>
                <li><a href="/explore/destinations/east-india" className="hover:text-white transition-colors">East India</a></li>
                <li><a href="/explore/destinations/west-india" className="hover:text-white transition-colors">West India</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/help/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="/press" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support & Legal</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="/help/center" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li>
                  <div className="flex items-center space-x-2 text-blue-200 hover:text-white cursor-pointer transition-colors">
                    <Globe className="h-4 w-4" />
                    <span>Language</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 Sanchaari. All rights reserved. Made with ❤️ for incredible India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
