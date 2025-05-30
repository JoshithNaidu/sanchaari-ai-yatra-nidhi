
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  MapPin, 
  Calendar, 
  Plane, 
  Hotel, 
  Camera,
  Plus,
  Eye,
  Edit,
  Share,
  Heart,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Globe,
  Star,
  DollarSign
} from 'lucide-react';
import Header from '@/components/Header';

const TripsDashboard = () => {
  const { user } = useCentralizedAuth();
  const [activeTab, setActiveTab] = useState('upcoming');

  // Mock trip data
  const trips = {
    upcoming: [
      {
        id: 'trip_001',
        title: 'Tokyo Adventure',
        destination: 'Tokyo, Japan',
        dates: 'Mar 15 - Mar 22, 2024',
        status: 'confirmed',
        progress: 85,
        image: '/placeholder.svg',
        travelers: 2,
        budget: 180000,
        spent: 125000,
        daysLeft: 12,
        activities: 8,
        bookings: { flights: true, hotels: true, activities: 6 }
      },
      {
        id: 'trip_002', 
        title: 'Kerala Backwaters',
        destination: 'Alleppey, Kerala',
        dates: 'Apr 5 - Apr 10, 2024',
        status: 'planning',
        progress: 45,
        image: '/placeholder.svg',
        travelers: 4,
        budget: 85000,
        spent: 25000,
        daysLeft: 28,
        activities: 3,
        bookings: { flights: false, hotels: true, activities: 1 }
      }
    ],
    past: [
      {
        id: 'trip_003',
        title: 'Goa Beach Holiday',
        destination: 'Goa, India',
        dates: 'Dec 20 - Dec 27, 2023',
        status: 'completed',
        rating: 4.8,
        memories: 145,
        travelers: 3,
        totalSpent: 65000
      }
    ],
    saved: [
      {
        id: 'trip_004',
        title: 'European Explorer',
        destination: 'Paris, Rome, Barcelona',
        estimatedBudget: 250000,
        duration: '14 days',
        saved: true
      }
    ]
  };

  const quickStats = {
    totalTrips: 8,
    countriesVisited: 12,
    totalSpent: 485000,
    upcomingTrips: 2,
    rewardPoints: 2450
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'planning': return 'bg-blue-100 text-blue-800'; 
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="h-4 w-4" />;
      case 'planning': return <Clock className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.fullName?.split(' ')[0] || 'Traveler'}! ✈️
          </h1>
          <p className="text-gray-600">Ready for your next adventure? Let's plan something amazing.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Globe className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">{quickStats.totalTrips}</div>
              <p className="text-xs text-gray-600">Total Trips</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">{quickStats.countriesVisited}</div>
              <p className="text-xs text-gray-600">Countries</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <DollarSign className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">₹{(quickStats.totalSpent / 1000).toFixed(0)}K</div>
              <p className="text-xs text-gray-600">Total Spent</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Calendar className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">{quickStats.upcomingTrips}</div>
              <p className="text-xs text-gray-600">Upcoming</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Star className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">{quickStats.rewardPoints}</div>
              <p className="text-xs text-gray-600">Reward Points</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <Link to="/trips/new">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Plan New Trip
              </Button>
            </Link>
            <Link to="/search">
              <Button variant="outline">
                <Plane className="h-4 w-4 mr-2" />
                Search Flights
              </Button>
            </Link>
            <Link to="/search/hotels">
              <Button variant="outline">
                <Hotel className="h-4 w-4 mr-2" />
                Find Hotels
              </Button>
            </Link>
            <Link to="/explore/destinations">
              <Button variant="outline">
                <Globe className="h-4 w-4 mr-2" />
                Explore Destinations
              </Button>
            </Link>
          </div>
        </div>

        {/* Trips Tabs */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-gray-200 rounded-lg p-1 w-fit">
            {['upcoming', 'past', 'saved'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Trips
              </button>
            ))}
          </div>
        </div>

        {/* Upcoming Trips */}
        {activeTab === 'upcoming' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trips.upcoming.map((trip) => (
              <Card key={trip.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-r from-blue-400 to-purple-500 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className={getStatusColor(trip.status)} variant="secondary">
                      <span className="flex items-center gap-1">
                        {getStatusIcon(trip.status)}
                        {trip.status}
                      </span>
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{trip.title}</h3>
                    <p className="text-sm opacity-90">{trip.destination}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      {trip.dates}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      {trip.travelers} travelers
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Trip Planning Progress</span>
                      <span>{trip.progress}%</span>
                    </div>
                    <Progress value={trip.progress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-gray-600">Budget</p>
                      <p className="font-semibold">₹{trip.budget.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Spent</p>
                      <p className="font-semibold">₹{trip.spent.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Days Left</p>
                      <p className="font-semibold">{trip.daysLeft} days</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Link to={`/trips/${trip.id}`}>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </Link>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Share className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Past Trips */}
        {activeTab === 'past' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.past.map((trip) => (
              <Card key={trip.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-r from-green-400 to-blue-500 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{trip.title}</h3>
                    <p className="text-sm opacity-90">{trip.destination}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-white/20 rounded-full px-2 py-1 text-white text-sm">
                      <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {trip.rating}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      {trip.dates}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Camera className="h-4 w-4 mr-1" />
                      {trip.memories} photos
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      View Memories
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Saved Trips */}
        {activeTab === 'saved' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.saved.map((trip) => (
              <Card key={trip.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-r from-purple-400 to-pink-500 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{trip.title}</h3>
                    <p className="text-sm opacity-90">{trip.destination}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Heart className="h-5 w-5 text-red-400 fill-red-400" />
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-gray-600">
                      Estimated Budget: ₹{trip.estimatedBudget.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      {trip.duration}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Plus className="h-4 w-4 mr-1" />
                      Plan This Trip
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Heart className="h-4 w-4 fill-red-400 text-red-400" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {((activeTab === 'upcoming' && trips.upcoming.length === 0) || 
          (activeTab === 'past' && trips.past.length === 0) || 
          (activeTab === 'saved' && trips.saved.length === 0)) && (
          <Card className="text-center py-12">
            <CardContent>
              <Plane className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No {activeTab} trips yet
              </h3>
              <p className="text-gray-600 mb-6">
                {activeTab === 'upcoming' && "Start planning your next adventure!"}
                {activeTab === 'past' && "Your completed trips will appear here."}
                {activeTab === 'saved' && "Save trips you're interested in for later."}
              </p>
              <Link to="/trips/new">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Plan Your First Trip
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TripsDashboard;
