
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Zap, ArrowRight } from 'lucide-react';

const AIAssistantPreview = () => {
  const [selectedPrompt, setSelectedPrompt] = useState(null);

  const prompts = [
    "Plan 7 days in Kerala backwaters",
    "Best time to visit Kashmir",
    "Budget trip to Rajasthan under ₹30,000",
    "Romantic getaway in Udaipur",
    "Adventure activities in Himachal Pradesh",
    "Cultural tour of Tamil Nadu temples"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Try Our AI Travel Assistant
          </h2>
          <p className="text-xl text-gray-600">
            See how our AI can instantly plan your perfect trip
          </p>
        </div>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center text-blue-900">
                <MessageCircle className="h-6 w-6 mr-2" />
                AI Travel Assistant
              </CardTitle>
              <Badge className="bg-blue-600 text-white">
                <Zap className="h-3 w-3 mr-1" />
                Powered by AI
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-gray-700 mb-4">Click on any prompt to see how our AI works:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {prompts.map((prompt, index) => (
                  <Button
                    key={index}
                    variant={selectedPrompt === index ? "default" : "outline"}
                    className={`justify-start text-left h-auto p-4 ${
                      selectedPrompt === index 
                        ? "bg-blue-600 text-white" 
                        : "border-blue-200 text-blue-700 hover:bg-blue-50"
                    }`}
                    onClick={() => setSelectedPrompt(index)}
                  >
                    {prompt}
                  </Button>
                ))}
              </div>
            </div>

            {selectedPrompt !== null && (
              <div className="bg-white rounded-lg p-6 border border-blue-200 animate-fade-in">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-2">AI Assistant:</p>
                    <p className="text-gray-800">
                      I'd be happy to help you with "{prompts[selectedPrompt]}". Let me create a personalized itinerary with the best destinations, activities, and budget recommendations for your trip.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="text-center pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Planning with AI
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIAssistantPreview;
