import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Users, IndianRupee, Eye, RotateCcw, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';

const TravelHistory = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Mock data for travel history with proper images
  const travelHistory = [
    {
      id: 1,
      title: "Kerala Backwaters",
      destination: "Alleppey, Kerala",
      dateRange: "Mar 15-22, 2024",
      coverImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80",
      participants: 3,
      totalSpent: 45000,
      activities: 12,
      type: "family"
    },
    {
      id: 2,
      title: "Rajasthan Heritage",
      destination: "Jaipur, Udaipur",
      dateRange: "Jan 10-18, 2024",
      coverImage: "https://images.unsplash.com/photo-1599661046827-dacff0acdb4b?auto=format&fit=crop&w=400&q=80",
      participants: 2,
      totalSpent: 65000,
      activities: 18,
      type: "couple"
    },
    {
      id: 3,
      title: "Goa Beach Retreat",
      destination: "North Goa",
      dateRange: "Dec 20-25, 2023",
      coverImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80",
      participants: 6,
      totalSpent: 38000,
      activities: 8,
      type: "group"
    }
  ];

  const [travelHistoryData, setTravelHistoryData] = useState(travelHistory);

  const handleViewTrip = (tripId: number) => {
    navigate(`/trips/${tripId}`);
    toast({
      title: "Opening trip details",
      description: "Loading your trip itinerary..."
    });
  };

  const handleRepeatTrip = (trip: any) => {
    navigate('/trips/new', { state: { repeatTrip: trip } });
    toast({
      title: "Creating new trip",
      description: `Creating a new trip based on "${trip.title}"`
    });
  };

  const filteredTrips = travelHistoryData.filter(trip => {
    const matchesSearch = trip.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trip.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || trip.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Travel History</h1>
          <p className="text-gray-600">Explore your past adventures and travel memories</p>
        </div>

        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search trips by destination..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Trips</SelectItem>
              <SelectItem value="solo">Solo</SelectItem>
              <SelectItem value="couple">Couple</SelectItem>
              <SelectItem value="family">Family</SelectItem>
              <SelectItem value="group">Group</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrips.map((trip) => (
            <Card key={trip.id} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={trip.coverImage}
                  alt={trip.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-medium capitalize">
                  {trip.type}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{trip.title}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{trip.destination}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{trip.dateRange}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {trip.participants} people
                    </div>
                    <div className="flex items-center">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      ₹{trip.totalSpent.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="text-sm text-gray-600 text-center">
                    <span className="font-medium text-emerald-600">{trip.activities}</span> activities completed
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 gap-2"
                    onClick={() => handleViewTrip(trip.id)}
                  >
                    <Eye className="h-4 w-4" />
                    View Trip
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 gap-2 bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => handleRepeatTrip(trip)}
                  >
                    <RotateCcw className="h-4 w-4" />
                    Repeat Trip
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTrips.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <MapPin className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {searchTerm || filterType !== 'all' ? 'No matching trips found' : 'No trips yet'}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || filterType !== 'all' ? 'Try adjusting your search or filters' : 'Start planning your first adventure!'}
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => navigate('/trips/new')}>
              Plan Your First Trip
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelHistory;
