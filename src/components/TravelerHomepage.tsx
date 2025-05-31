
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Heart, 
  Plane, 
  Camera,
  TrendingUp,
  Star,
  Clock
} from 'lucide-react';

const TravelerHomepage = () => {
  const { user } = useCentralizedAuth();

  const quickActions = [
    { title: "Plan New Trip", description: "Start planning your next adventure", icon: MapPin, link: "/trips/new", color: "bg-blue-500" },
    { title: "Search Flights", description: "Find the best flight deals", icon: Plane, link: "/search/flights", color: "bg-green-500" },
    { title: "Discover Destinations", description: "Explore amazing places", icon: Camera, link: "/explore/destinations", color: "bg-purple-500" },
    { title: "My Trips", description: "View your planned trips", icon: Calendar, link: "/trips/dashboard", color: "bg-orange-500" }
  ];

  const trendingDestinations = [
    { name: "Manali", state: "Himachal Pradesh", price: "₹8,500", rating: 4.8, image: "/placeholder.svg" },
    { name: "Goa", state: "Goa", price: "₹6,200", rating: 4.7, image: "/placeholder.svg" },
    { name: "Udaipur", state: "Rajasthan", price: "₹7,800", rating: 4.9, image: "/placeholder.svg" },
    { name: "Munnar", state: "Kerala", price: "₹5,900", rating: 4.6, image: "/placeholder.svg" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome back, {user?.fullName?.split(' ')[0]}! 🌟
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Ready for your next adventure? Let's make it unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/trips/new">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <MapPin className="mr-2 h-5 w-5" />
                  Plan New Trip
                </Button>
              </Link>
              <Link to="/search">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Explore Destinations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Destinations */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Trending Destinations</h2>
            <Link to="/explore/destinations">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingDestinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {destination.rating}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{destination.name}</CardTitle>
                  <CardDescription>{destination.state}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">{destination.price}</span>
                    <span className="text-xs text-gray-500">per person</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Your Journey</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Recent Searches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Delhi to Goa</p>
                      <p className="text-sm text-gray-600">Flight • June 15-20</p>
                    </div>
                    <Button size="sm" variant="outline">Continue</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Hotels in Manali</p>
                      <p className="text-sm text-gray-600">Stay • July 10-15</p>
                    </div>
                    <Button size="sm" variant="outline">Continue</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Personalized Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-900">Adventure Packages</p>
                    <p className="text-sm text-blue-700">Based on your travel preferences</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-900">Mountain Destinations</p>
                    <p className="text-sm text-green-700">Perfect for your next trip</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TravelerHomepage;
