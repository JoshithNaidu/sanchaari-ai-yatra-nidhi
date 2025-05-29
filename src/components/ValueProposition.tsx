
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Users, Calculator, ArrowRight } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast AI Trip Planning",
      description: "Get personalized itineraries in minutes with our advanced AI technology",
      link: "/chat"
    },
    {
      icon: Users,
      title: "Collaborative Tools",
      description: "Plan together with friends and family in real-time collaboration",
      link: "/trips/collaborate"
    },
    {
      icon: Calculator,
      title: "Transparent Budget Tracking",
      description: "Keep track of expenses and stay within budget effortlessly",
      link: "/trips/budget"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Why Choose Sanchaari?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of travel planning with our innovative features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-blue-100">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
