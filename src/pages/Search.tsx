
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Users, Mic, MapPin, Plane, Building, Camera, Package, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

const Search = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('flights');
  const [travelers, setTravelers] = useState({ adults: 2, children: 0, infants: 0 });
  const [flightClass, setFlightClass] = useState('economy');
  const [tripType, setTripType] = useState('round-trip');
  const [rooms, setRooms] = useState(1);
  const [activityType, setActivityType] = useState('all');
  const [packageType, setPackageType] = useState('all');

  const popularSearches = [
    { 
      destination: 'Goa', 
      type: 'Beach Paradise', 
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80', 
      price: '₹15,000' 
    },
    { 
      destination: 'Kerala', 
      type: 'Backwaters', 
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80', 
      price: '₹12,000' 
    },
    { 
      destination: 'Rajasthan', 
      type: 'Heritage Tours', 
      image: 'https://images.unsplash.com/photo-1599661046827-dacff0acdb4b?auto=format&fit=crop&w=400&q=80', 
      price: '₹18,000' 
    },
    { 
      destination: 'Himachal', 
      type: 'Mountain Escape', 
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80', 
      price: '₹14,000' 
    },
  ];

  const handleSearch = () => {
    const searchParams = new URLSearchParams({
      q: searchQuery,
      adults: travelers.adults.toString(),
      children: travelers.children.toString(),
      infants: travelers.infants.toString(),
    });

    if (activeTab === 'flights') {
      searchParams.append('class', flightClass);
      searchParams.append('type', tripType);
    } else if (activeTab === 'hotels') {
      searchParams.append('rooms', rooms.toString());
    } else if (activeTab === 'activities') {
      searchParams.append('activity_type', activityType);
    } else if (activeTab === 'packages') {
      searchParams.append('package_type', packageType);
    }

    switch (activeTab) {
      case 'flights':
        navigate(`/search/flights?${searchParams}`);
        break;
      case 'hotels':
        navigate(`/search/hotels?${searchParams}`);
        break;
      case 'activities':
        navigate(`/search/activities?${searchParams}`);
        break;
      case 'packages':
        navigate(`/search/packages?${searchParams}`);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Your Perfect Trip</h1>
          <p className="text-gray-600">Find flights, hotels, activities, and packages all in one place</p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="flights" className="flex items-center gap-2">
                  <Plane className="h-4 w-4" />
                  Flights
                </TabsTrigger>
                <TabsTrigger value="hotels" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Hotels
                </TabsTrigger>
                <TabsTrigger value="activities" className="flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  Activities
                </TabsTrigger>
                <TabsTrigger value="packages" className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Packages
                </TabsTrigger>
              </TabsList>

              <TabsContent value="flights" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium mb-1">Trip Type</label>
                    <select 
                      value={tripType}
                      onChange={(e) => setTripType(e.target.value)}
                      className="w-full border rounded-md px-3 py-2"
                    >
                      <option value="round-trip">Round Trip</option>
                      <option value="one-way">One Way</option>
                      <option value="multi-city">Multi City</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">From</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input placeholder="Departure city or airport" className="pl-10" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">To</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input placeholder="Destination city or airport" className="pl-10" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Departure</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Return</label>
                    <Input type="date" disabled={tripType === 'one-way'} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Class</label>
                    <select 
                      value={flightClass}
                      onChange={(e) => setFlightClass(e.target.value)}
                      className="w-full border rounded-md px-3 py-2"
                    >
                      <option value="economy">Economy</option>
                      <option value="premium-economy">Premium Economy</option>
                      <option value="business">Business</option>
                      <option value="first">First Class</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Travelers</label>
                    <Input placeholder="2 Adults" readOnly />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="hotels" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Destination</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input placeholder="City, hotel name, or landmark" className="pl-10" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Rooms</label>
                    <select 
                      value={rooms}
                      onChange={(e) => setRooms(parseInt(e.target.value))}
                      className="w-full border rounded-md px-3 py-2"
                    >
                      {[1,2,3,4,5].map(num => (
                        <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Check-in</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Check-out</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Guests</label>
                    <Input placeholder="2 Adults, 1 Child" readOnly />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Star Rating</label>
                    <select className="w-full border rounded-md px-3 py-2">
                      <option value="">Any Rating</option>
                      <option value="5">5 Stars</option>
                      <option value="4">4+ Stars</option>
                      <option value="3">3+ Stars</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Property Type</label>
                    <select className="w-full border rounded-md px-3 py-2">
                      <option value="">All Types</option>
                      <option value="hotel">Hotel</option>
                      <option value="resort">Resort</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Price Range</label>
                    <select className="w-full border rounded-md px-3 py-2">
                      <option value="">Any Price</option>
                      <option value="budget">Budget (Under ₹3,000)</option>
                      <option value="mid">Mid-range (₹3,000-₹8,000)</option>
                      <option value="luxury">Luxury (₹8,000+)</option>
                    </select>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="activities" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Destination</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input placeholder="City or attraction" className="pl-10" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Activity Date</label>
                    <Input type="date" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select 
                      value={activityType}
                      onChange={(e) => setActivityType(e.target.value)}
                      className="w-full border rounded-md px-3 py-2"
                    >
                      <option value="all">All Categories</option>
                      <option value="adventure">Adventure & Outdoor</option>
                      <option value="cultural">Cultural & Historical</option>
                      <option value="food">Food & Drink</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="wellness">Wellness & Spa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Duration</label>
                    <select className="w-full border rounded-md px-3 py-2">
                      <option value="">Any Duration</option>
                      <option value="short">1-3 hours</option>
                      <option value="half">Half Day (4-6 hours)</option>
                      <option value="full">Full Day (7+ hours)</option>
                      <option value="multi">Multi-day</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Group Size</label>
                    <select className="w-full border rounded-md px-3 py-2">
                      <option value="">Any Size</option>
                      <option value="private">Private Tour</option>
                      <option value="small">Small Group (2-10)</option>
                      <option value="large">Large Group (10+)</option>
                    </select>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="packages" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Destination</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input placeholder="Country, city, or region" className="pl-10" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Package Type</label>
                    <select 
                      value={packageType}
                      onChange={(e) => setPackageType(e.target.value)}
                      className="w-full border rounded-md px-3 py-2"
                    >
                      <option value="all">All Packages</option>
                      <option value="flight-hotel">Flight + Hotel</option>
                      <option value="full-tour">Complete Tour Package</option>
                      <option value="adventure">Adventure Package</option>
                      <option value="honeymoon">Honeymoon Package</option>
                      <option value="family">Family Package</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Start Date</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Duration</label>
                    <select className="w-full border rounded-md px-3 py-2">
                      <option value="">Any Duration</option>
                      <option value="2-3">2-3 Days</option>
                      <option value="4-6">4-6 Days</option>
                      <option value="7-10">7-10 Days</option>
                      <option value="10+">10+ Days</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Budget Range</label>
                    <select className="w-full border rounded-md px-3 py-2">
                      <option value="">Any Budget</option>
                      <option value="budget">Budget (Under ₹25,000)</option>
                      <option value="mid">Mid-range (₹25,000-₹75,000)</option>
                      <option value="luxury">Luxury (₹75,000+)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Travelers</label>
                    <Input placeholder="2 Adults" readOnly />
                  </div>
                </div>
              </TabsContent>

              <Button 
                onClick={handleSearch}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 mt-6"
                size="lg"
              >
                <span className="flex items-center gap-2">
                  {activeTab === 'flights' && <Plane className="h-4 w-4" />}
                  {activeTab === 'hotels' && <Building className="h-4 w-4" />}
                  {activeTab === 'activities' && <Camera className="h-4 w-4" />}
                  {activeTab === 'packages' && <Package className="h-4 w-4" />}
                  Search {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </span>
              </Button>
            </Tabs>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-xl font-semibold mb-4">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularSearches.map((search, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden">
                    <img 
                      src={search.image} 
                      alt={search.destination}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-sm font-medium">
                      {search.price}
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900">{search.destination}</h3>
                  <p className="text-sm text-gray-600">{search.type}</p>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">4.5 (234 reviews)</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
