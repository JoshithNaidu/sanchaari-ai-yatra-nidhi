
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Star, Compass, Camera, Hotel, Car } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-900">Sanchaari</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#destinations" className="text-gray-700 hover:text-blue-600 transition-colors">Destinations</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6">
            Discover
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Incredible India
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let our AI-powered trip planner create your perfect Indian adventure. 
            From the Himalayas to the backwaters, we'll craft personalized journeys just for you.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Input 
                placeholder="Where would you like to explore in India?"
                className="h-14 pl-12 pr-4 text-lg border-2 border-blue-200 focus:border-blue-500 rounded-full"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
              <Button className="absolute right-2 top-2 h-10 px-6 bg-blue-600 hover:bg-blue-700 rounded-full">
                Plan Trip
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Destinations Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50K+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">AI-Powered</div>
              <div className="text-gray-600">Smart Recommendations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore India's most incredible destinations, handpicked by our AI and travel experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Kerala Backwaters", image: "photo-1500673922987-e212871fec22", rating: 4.8, highlights: ["Houseboat Stay", "Ayurveda", "Spice Gardens"] },
              { name: "Rajasthan Palaces", image: "photo-1466442929976-97f336a657be", rating: 4.9, highlights: ["Heritage Hotels", "Desert Safari", "Royal Culture"] },
              { name: "Himalayan Valleys", image: "photo-1482938289607-e9573fc25ebb", rating: 4.7, highlights: ["Trekking", "Mountain Views", "Adventure Sports"] },
              { name: "Golden Triangle", image: "photo-1551038247-3d9af20df552", rating: 4.8, highlights: ["Taj Mahal", "Red Fort", "Pink City"] },
              { name: "Goa Beaches", image: "photo-1470813740244-df37b8c1edcb", rating: 4.6, highlights: ["Beach Resorts", "Nightlife", "Portuguese Heritage"] },
              { name: "Kashmir Valley", image: "photo-1482938289607-e9573fc25ebb", rating: 4.9, highlights: ["Dal Lake", "Shikara Rides", "Mughal Gardens"] }
            ].map((destination, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://images.unsplash.com/${destination.image}?auto=format&fit=crop&w=500&q=80`}
                    alt={destination.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-blue-800 backdrop-blur-sm">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      {destination.rating}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{destination.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Travel Planning</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experience the future of travel planning with our intelligent recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: "Smart Itineraries", description: "AI creates perfect day-by-day plans based on your preferences" },
              { icon: Hotel, title: "Best Accommodations", description: "Handpicked stays that match your budget and style" },
              { icon: Car, title: "Transportation", description: "Seamless travel arrangements from flights to local transport" },
              { icon: Camera, title: "Hidden Gems", description: "Discover secret spots only locals know about" }
            ].map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardHeader className="text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Ready to Start Your Indian Adventure?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of travelers who've discovered their perfect Indian journey with Sanchaari
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full">
            Start Planning Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Compass className="h-6 w-6" />
                <span className="text-xl font-bold">Sanchaari</span>
              </div>
              <p className="text-blue-200">
                Your AI-powered companion for exploring the incredible diversity of India.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Destinations</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">North India</a></li>
                <li><a href="#" className="hover:text-white transition-colors">South India</a></li>
                <li><a href="#" className="hover:text-white transition-colors">East India</a></li>
                <li><a href="#" className="hover:text-white transition-colors">West India</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
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
