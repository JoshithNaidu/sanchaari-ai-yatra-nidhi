
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Chat = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">AI Travel Assistant</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Chat with our AI Travel Assistant
              </h2>
              <p className="text-gray-600">
                Get personalized travel recommendations and plan your perfect trip with AI assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Chat;
