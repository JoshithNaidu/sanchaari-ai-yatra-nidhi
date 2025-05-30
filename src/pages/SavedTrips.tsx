
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Calendar, IndianRupee, Trash2, LayoutGrid, List } from 'lucide-react';
import Header from '@/components/Header';

const SavedTrips = () => {
  const [viewMode, setViewMode] = useState('grid');

  // Mock data for saved trips
  const savedTrips = [
    {
      id: 1,
      title: "Himalayan Adventure",
      destination: "Manali, Himachal Pradesh",
      budget: "₹35,000 - ₹45,000",
      duration: "7 days",
      coverImage: "/placeholder.svg",
      savedDate: "2 days ago",
      tags: ["Adventure", "Mountain", "Trekking"]
    },
    {
      id: 2,
      title: "Spiritual Varanasi",
      destination: "Varanasi, Uttar Pradesh",
      budget: "₹20,000 - ₹30,000",
      duration: "4 days",
      coverImage: "/placeholder.svg",
      savedDate: "1 week ago",
      tags: ["Spiritual", "Heritage", "Culture"]
    },
    {
      id: 3,
      title: "Andaman Islands",
      destination: "Port Blair, Andaman",
      budget: "₹55,000 - ₹70,000",
      duration: "6 days",
      coverImage: "/placeholder.svg",
      savedDate: "2 weeks ago",
      tags: ["Beach", "Water Sports", "Nature"]
    }
  ];

  const handleRemoveTrip = (id: number) => {
    console.log(`Removing trip ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Saved Trips & Wishlists</h1>
            <p className="text-gray-600">Your collection of dream destinations and future adventures</p>
          </div>
          
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Saved Trips */}
        {savedTrips.length > 0 ? (
          <div className={viewMode === 'grid' ? 
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : 
            "space-y-4"
          }>
            {savedTrips.map((trip) => (
              <Card key={trip.id} className="group hover:shadow-lg transition-shadow duration-300">
                {viewMode === 'grid' ? (
                  <>
                    <div className="relative">
                      <img
                        src={trip.coverImage}
                        alt={trip.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <button
                        onClick={() => handleRemoveTrip(trip.id)}
                        className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                      >
                        <Heart className="h-4 w-4 text-red-500 fill-current" />
                      </button>
                      <div className="absolute bottom-4 left-4 text-white text-sm bg-black/50 rounded px-2 py-1">
                        {trip.savedDate}
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{trip.title}</h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{trip.destination}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{trip.duration}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <IndianRupee className="h-4 w-4 mr-2" />
                          <span className="text-sm">{trip.budget}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {trip.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1">
                          Open in Planner
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleRemoveTrip(trip.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <img
                        src={trip.coverImage}
                        alt={trip.title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{trip.title}</h3>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-600 mb-2">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {trip.destination}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {trip.duration}
                          </div>
                          <div className="flex items-center">
                            <IndianRupee className="h-4 w-4 mr-1" />
                            {trip.budget}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {trip.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="text-sm text-gray-500">Saved {trip.savedDate}</div>
                      </div>

                      <div className="flex gap-2">
                        <Button>Open in Planner</Button>
                        <Button variant="outline" size="sm" onClick={() => handleRemoveTrip(trip.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Heart className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No saved trips yet</h3>
            <p className="text-gray-600 mb-6">Start exploring destinations and save your favorites!</p>
            <Button>Explore Destinations</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedTrips;
