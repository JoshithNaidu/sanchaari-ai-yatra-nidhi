
import React from 'react';
import Header from '@/components/Header';
import NavigationAudit from '@/components/NavigationAudit';

const NavigationTest = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto">
        <NavigationAudit />
      </div>
    </div>
  );
};

export default NavigationTest;
