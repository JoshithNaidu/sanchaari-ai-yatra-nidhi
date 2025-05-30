
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DestinationGuide = () => {
  const { cityName } = useParams<{ cityName: string }>();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 capitalize">
            {cityName?.replace('-', ' ')} Travel Guide
          </h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Explore {cityName?.replace('-', ' ')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-gray-600">
                  Destination guide for {cityName} will be displayed here.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DestinationGuide;
