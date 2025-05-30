
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Users, Mic, MapPin, Plane, Building, Camera, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

const Search = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('flights');
  const [travelers, setTravelers] = useState({ adults: 2, children: 0, infants: 0 });

  const popularSearches = [
    { destination: 'Goa', type: 'Beach Paradise', image: '/placeholder.svg' },
    { destination: 'Kerala', type: 'Backwaters', image: '/placeholder.svg' },
    { destination: 'Rajasthan', type: 'Heritage Tours', image: '/placeholder.svg' },
    { destination: 'Himachal', type: 'Mountain Escape', image: '/placeholder.svg' },
  ];

  const handleSearch = () => {
    const searchParams = new URLSearchParams({
      q: searchQuery,
      adults: travelers.adults.toString(),
      children: travelers.children.toString(),
      infants: travelers.infants.toString(),
    });

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

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Where to? (city, airport, hotel name, or activity)"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-10"
                    />
                    <Mic className="absolute right-3 top-3 h-4 w-4 text-gray-400 cursor-pointer md:hidden" />
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <Input type="date" className="w-auto" />
                    <span className="text-gray-400">to</span>
                    <Input type="date" className="w-auto" />
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <select 
                      className="border rounded px-3 py-2"
                      value={travelers.adults}
                      onChange={(e) => setTravelers({...travelers, adults: parseInt(e.target.value)})}
                    >
                      {[1,2,3,4,5,6].map(num => (
                        <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <Button 
                  onClick={handleSearch}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  size="lg"
                >
                  Search Now
                </Button>
              </div>
            </Tabs>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-xl font-semibold mb-4">Popular Searches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularSearches.map((search, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-video bg-gray-200 rounded-lg mb-3"></div>
                  <h3 className="font-medium text-gray-900">{search.destination}</h3>
                  <p className="text-sm text-gray-600">{search.type}</p>
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
