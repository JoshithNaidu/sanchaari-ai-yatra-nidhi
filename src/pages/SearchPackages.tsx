
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, Users, MapPin, Plane, Hotel, Camera, Filter, SortAsc } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchPackages = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('price');

  const packages = [
    {
      id: 'package-1',
      name: 'Golden Triangle Tour',
      duration: '7 days, 6 nights',
      destinations: ['Delhi', 'Agra', 'Jaipur'],
      rating: 4.8,
      reviews: 2341,
      price: 35000,
      originalPrice: 45000,
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80',
      includes: ['Flights', 'Hotels', 'Meals', 'Sightseeing'],
      highlights: ['Taj Mahal visit', 'Heritage hotels', 'Cultural experiences'],
      groupSize: 'Up to 15 people'
    },
    {
      id: 'package-2',
      name: 'Kerala Backwaters & Hills',
      duration: '5 days, 4 nights',
      destinations: ['Kochi', 'Munnar', 'Alleppey'],
      rating: 4.9,
      reviews: 1876,
      price: 28000,
      originalPrice: 35000,
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80',
      includes: ['Houseboat', 'Hotels', 'Meals', 'Transfers'],
      highlights: ['Backwater cruise', 'Tea plantations', 'Ayurvedic spa'],
      groupSize: 'Up to 12 people'
    },
    {
      id: 'package-3',
      name: 'Rajasthan Royal Experience',
      duration: '10 days, 9 nights',
      destinations: ['Jodhpur', 'Udaipur', 'Jaisalmer', 'Pushkar'],
      rating: 4.7,
      reviews: 1523,
      price: 55000,
      originalPrice: 70000,
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
      includes: ['Palace hotels', 'Camel safari', 'Cultural shows', 'All meals'],
      highlights: ['Desert camping', 'Palace stays', 'Royal dining'],
      groupSize: 'Up to 10 people'
    },
    {
      id: 'package-4',
      name: 'Goa Beach Holiday',
      duration: '4 days, 3 nights',
      destinations: ['North Goa', 'South Goa'],
      rating: 4.6,
      reviews: 3201,
      price: 18000,
      originalPrice: 24000,
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80',
      includes: ['Beach resort', 'Water sports', 'Meals', 'Airport transfers'],
      highlights: ['Beach activities', 'Water sports', 'Nightlife'],
      groupSize: 'Up to 20 people'
    }
  ];

  const handleBookPackage = (packageId: string) => {
    navigate(`/checkout/${packageId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Search Form */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Complete Travel Packages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <select className="border rounded px-3 py-2">
                <option>Select Destination</option>
                <option>Golden Triangle</option>
                <option>Kerala</option>
                <option>Rajasthan</option>
                <option>Goa</option>
              </select>
              <input type="date" placeholder="Travel Date" className="border rounded px-3 py-2" />
              <select className="border rounded px-3 py-2">
                <option>Duration</option>
                <option>3-5 days</option>
                <option>6-7 days</option>
                <option>8+ days</option>
              </select>
              <Button>Search Packages</Button>
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
                    <h4 className="text-sm font-medium mb-2">Price Range</h4>
                    <input type="range" min="15000" max="80000" className="w-full" />
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>₹15,000</span>
                      <span>₹80,000</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Duration</h4>
                    <div className="space-y-2">
                      {['3-5 days', '6-7 days', '8-10 days', '10+ days'].map(duration => (
                        <label key={duration} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{duration}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Package Type</h4>
                    <div className="space-y-2">
                      {['Heritage & Culture', 'Beach & Relaxation', 'Adventure', 'Wildlife'].map(type => (
                        <label key={type} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{type}</span>
                        </label>
                      ))}
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
                <option value="rating">Best Rated</option>
                <option value="duration">Shortest Duration</option>
                <option value="popularity">Most Popular</option>
              </select>
            </div>

            {/* Package Results */}
            <div className="space-y-6">
              {packages.map((pkg) => (
                <Card key={pkg.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="w-64 h-48 bg-gray-200 rounded-lg flex-shrink-0">
                        <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover rounded-lg" />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{pkg.name}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {pkg.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {pkg.groupSize}
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <MapPin className="h-4 w-4" />
                              {pkg.destinations.join(' → ')}
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-sm text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</div>
                            <div className="text-2xl font-bold text-purple-600">₹{pkg.price.toLocaleString()}</div>
                            <div className="text-xs text-gray-600">per person</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{pkg.rating}</span>
                            <span className="text-sm text-gray-600">({pkg.reviews} reviews)</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Package Includes:</h4>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {pkg.includes.map((item, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>
                          
                          <h4 className="text-sm font-medium mb-2">Highlights:</h4>
                          <div className="flex flex-wrap gap-2">
                            {pkg.highlights.map((highlight, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="text-sm text-green-600 font-medium">Free cancellation up to 48 hours</div>
                          <Button 
                            onClick={() => handleBookPackage(pkg.id)}
                            className="bg-purple-600 hover:bg-purple-700 text-white"
                          >
                            Book Package
                          </Button>
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
      
      <Footer />
    </div>
  );
};

export default SearchPackages;
