
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, DollarSign, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickStartSection = () => {
  const quickStartOptions = [
    {
      icon: Users,
      title: "Planning for a Group?",
      description: "Coordinate with friends and family",
      link: "/chat?mode=group"
    },
    {
      icon: DollarSign,
      title: "Planning on a Budget?",
      description: "Get the best value for your money",
      link: "/chat?mode=budget"
    },
    {
      icon: Search,
      title: "Just Browsing?",
      description: "Explore destinations and themes",
      link: "/explore/themes"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Start Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your planning style and get started in seconds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickStartOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <option.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {option.description}
                </p>
                <Link to={option.link}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStartSection;
