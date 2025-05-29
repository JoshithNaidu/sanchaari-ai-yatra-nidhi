
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuickStartSection from '@/components/QuickStartSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturedCollections from '@/components/FeaturedCollections';
import PartnerCTASection from '@/components/PartnerCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <QuickStartSection />
      <HowItWorksSection />
      <FeaturedCollections />
      <PartnerCTASection />
      <Footer />
    </div>
  );
};

export default Index;
