
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
      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default Index;
