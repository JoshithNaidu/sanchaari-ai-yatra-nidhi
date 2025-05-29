
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import TravelThemes from '@/components/TravelThemes';
import AIAssistantPreview from '@/components/AIAssistantPreview';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Compass, Instagram, Twitter, Linkedin, Youtube, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                <li><Link to="/explore/destinations/north-india" className="hover:text-white transition-colors">North India</Link></li>
                <li><Link to="/explore/destinations/south-india" className="hover:text-white transition-colors">South India</Link></li>
                <li><Link to="/explore/destinations/east-india" className="hover:text-white transition-colors">East India</Link></li>
                <li><Link to="/explore/destinations/west-india" className="hover:text-white transition-colors">West India</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-blue-200">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/help/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/press" className="hover:text-white transition-colors">Press</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support & Legal</h3>
              <ul className="space-y-2 text-blue-200">
                <li><Link to="/help/center" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
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
