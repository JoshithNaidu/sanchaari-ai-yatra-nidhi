
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plane, Clock, ArrowRight, Filter, SortAsc } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchFlights = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('price');

  const flights = [
    {
      id: 'flight-1',
      airline: 'IndiGo',
      flightNumber: '6E 2001',
      departure: { time: '06:00', airport: 'DEL' },
      arrival: { time: '08:30', airport: 'BOM' },
      duration: '2h 30m',
      stops: 'Non-stop',
      price: 4500,
      baggage: '15kg included',
      logo: 'https://images.unsplash.com/photo-1556388158-158dc45da493?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'flight-2',
      airline: 'Air India',
      flightNumber: 'AI 131',
      departure: { time: '14:20', airport: 'DEL' },
      arrival: { time: '17:00', airport: 'BOM' },
      duration: '2h 40m',
      stops: 'Non-stop',
      price: 5200,
      baggage: '25kg included',
      logo: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'flight-3',
      airline: 'SpiceJet',
      flightNumber: 'SG 8196',
      departure: { time: '09:15', airport: 'DEL' },
      arrival: { time: '13:45', airport: 'BOM' },
      duration: '4h 30m',
      stops: '1 stop',
      price: 3800,
      baggage: '15kg included',
      logo: 'https://images.unsplash.com/photo-1583776221291-b15591b26726?auto=format&fit=crop&w=100&q=80'
    }
  ];

  const handleBookFlight = (flightId: string) => {
    navigate(`/checkout/${flightId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Search Form */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Search Flights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <input type="text" placeholder="From" className="border rounded px-3 py-2" defaultValue="Delhi (DEL)" />
              <input type="text" placeholder="To" className="border rounded px-3 py-2" defaultValue="Mumbai (BOM)" />
              <input type="date" className="border rounded px-3 py-2" />
              <Button>Search Flights</Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className="w-64 hidden lg:block">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="h-4 w-4" />
                  <h3 className="font-medium">Filters</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Airlines</h4>
                    <div className="space-y-2">
                      {['IndiGo', 'Air India', 'SpiceJet', 'Vistara'].map(airline => (
                        <label key={airline} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{airline}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Price Range</h4>
                    <input type="range" min="2000" max="10000" className="w-full" />
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>₹2,000</span>
                      <span>₹10,000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Sort Controls */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <SortAsc className="h-4 w-4" />
                <span className="text-sm font-medium">Sort by:</span>
              </div>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded px-3 py-1 text-sm"
              >
                <option value="price">Lowest Price</option>
                <option value="duration">Shortest Duration</option>
                <option value="departure">Earliest Departure</option>
              </select>
            </div>

            {/* Flight Results */}
            <div className="space-y-4">
              {flights.map((flight) => (
                <Card key={flight.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 flex-1">
                        <div className="text-center">
                          <img src={flight.logo} alt={flight.airline} className="w-8 h-8 mx-auto mb-1 rounded" />
                          <div className="text-xs text-gray-600">{flight.flightNumber}</div>
                        </div>

                        <div className="flex items-center gap-4 flex-1">
                          <div className="text-center">
                            <div className="text-lg font-semibold">{flight.departure.time}</div>
                            <div className="text-sm text-gray-600">{flight.departure.airport}</div>
                          </div>

                          <div className="flex-1 relative">
                            <div className="flex items-center justify-center">
                              <div className="border-t border-gray-300 flex-1"></div>
                              <Plane className="h-4 w-4 mx-2 text-gray-400" />
                              <div className="border-t border-gray-300 flex-1"></div>
                            </div>
                            <div className="text-center mt-1">
                              <div className="text-xs text-gray-600">{flight.duration}</div>
                              <div className="text-xs text-gray-600">{flight.stops}</div>
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="text-lg font-semibold">{flight.arrival.time}</div>
                            <div className="text-sm text-gray-600">{flight.arrival.airport}</div>
                          </div>
                        </div>
                      </div>

                      <div className="text-right ml-6">
                        <div className="text-2xl font-bold text-emerald-600">₹{flight.price.toLocaleString()}</div>
                        <div className="text-xs text-gray-600 mb-2">{flight.baggage}</div>
                        <Button 
                          onClick={() => handleBookFlight(flight.id)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white"
                        >
                          Select
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchFlights;
