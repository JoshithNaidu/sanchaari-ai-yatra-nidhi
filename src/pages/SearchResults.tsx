
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock, Users } from 'lucide-react';

const SearchResults = () => {
  const searchResults = [
    {
      id: 1,
      title: "Beautiful Beach Resort in Goa",
      location: "North Goa, India",
      price: "₹8,500",
      rating: 4.5,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80",
      duration: "3 Days 2 Nights"
    },
    {
      id: 2,
      title: "Mountain Adventure Package",
      location: "Manali, Himachal Pradesh",
      price: "₹12,000",
      rating: 4.7,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
      duration: "5 Days 4 Nights"
    },
    {
      id: 3,
      title: "Heritage Tour of Rajasthan",
      location: "Udaipur, Rajasthan",
      price: "₹15,500",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1599661046827-dacff0acdb4b?auto=format&fit=crop&w=400&q=80",
      duration: "4 Days 3 Nights"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Search Results</h1>
          <p className="text-gray-600">Found {searchResults.length} results for your search</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Price Range</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Under ₹10,000</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">₹10,000 - ₹20,000</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Above ₹20,000</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Duration</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">1-3 Days</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">4-7 Days</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">7+ Days</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {searchResults.map((result) => (
                <Card key={result.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img 
                          src={result.image} 
                          alt={result.title}
                          className="w-full h-48 md:h-full object-cover rounded-l-lg"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{result.title}</h3>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-600">{result.price}</div>
                            <div className="text-sm text-gray-500">per person</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{result.location}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{result.duration}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm font-medium">{result.rating}</span>
                          </div>
                          <span className="text-sm text-gray-500">({result.reviews} reviews)</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button className="flex-1">View Details</Button>
                          <Button variant="outline">Save</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
