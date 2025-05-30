
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, Users, Plane, Building, Camera, MapPin, Filter, SortAsc } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';

const PackageSearchResults = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('rating');

  const packages = [
    {
      id: 'package-1',
      title: 'Golden Triangle Discovery',
      destination: 'Delhi, Agra, Jaipur',
      duration: '6 Days / 5 Nights',
      rating: 4.8,
      reviews: 234,
      price: 25000,
      originalPrice: 30000,
      image: '/placeholder.svg',
      inclusions: ['Flights', 'Hotels', 'Meals', 'Guide'],
      highlights: ['Taj Mahal visit', 'Palace tours', 'Cultural shows']
    },
    {
      id: 'package-2',
      title: 'Kerala Backwaters Escape',
      destination: 'Kochi, Munnar, Alleppey',
      duration: '5 Days / 4 Nights',
      rating: 4.9,
      reviews: 187,
      price: 18000,
      originalPrice: 22000,
      image: '/placeholder.svg',
      inclusions: ['Hotels', 'Houseboat', 'Meals', 'Transfers'],
      highlights: ['Houseboat stay', 'Tea gardens', 'Spice plantations']
    },
    {
      id: 'package-3',
      title: 'Rajasthan Royal Heritage',
      destination: 'Jaipur, Udaipur, Jodhpur',
      duration: '8 Days / 7 Nights',
      rating: 4.7,
      reviews: 156,
      price: 35000,
      originalPrice: 42000,
      image: '/placeholder.svg',
      inclusions: ['Flights', 'Palace hotels', 'Meals', 'Guide'],
      highlights: ['Palace stays', 'Desert safari', 'Royal experiences']
    }
  ];

  const handleBookPackage = (packageId: string) => {
    navigate(`/checkout/${packageId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Search Summary */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">India Travel Packages</span>
                <span className="text-gray-600">Departing Jan 15, 2024</span>
                <span className="text-gray-600">{searchParams.get('adults') || 2} travelers</span>
              </div>
              <Button variant="outline" size="sm">Modify Search</Button>
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
                    <h4 className="text-sm font-medium mb-2">Package Type</h4>
                    <div className="space-y-2">
                      {['Solo Travel', 'Couple', 'Family', 'Group'].map(type => (
                        <label key={type} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Duration</h4>
                    <div className="space-y-2">
                      {['2-3 days', '4-6 days', '7-10 days', '10+ days'].map(duration => (
                        <label key={duration} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{duration}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Budget Range</h4>
                    <input type="range" min="10000" max="100000" className="w-full" />
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>₹10K</span>
                      <span>₹1L</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Inclusions</h4>
                    <div className="space-y-2">
                      {['Flights', 'Hotels', 'Meals', 'Guide', 'Transport'].map(inclusion => (
                        <label key={inclusion} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{inclusion}</span>
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
                <option value="rating">Best Rated</option>
                <option value="price">Lowest Price</option>
                <option value="duration">Duration</option>
                <option value="featured">Featured</option>
              </select>
            </div>

            {/* Package Results */}
            <div className="space-y-6">
              {packages.map((pkg) => (
                <Card key={pkg.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="w-64 h-48 bg-gray-200 rounded-lg flex-shrink-0">
                        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover rounded-lg" />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{pkg.title}</h3>
                            <div className="flex items-center gap-1 text-gray-600 mb-2">
                              <MapPin className="h-4 w-4" />
                              {pkg.destination}
                            </div>
                            <div className="flex items-center gap-1 text-gray-600">
                              <Calendar className="h-4 w-4" />
                              {pkg.duration}
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-sm text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</div>
                            <div className="text-2xl font-bold text-blue-600">₹{pkg.price.toLocaleString()}</div>
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
                          <h4 className="text-sm font-medium text-gray-700 mb-2">What's Included:</h4>
                          <div className="flex flex-wrap gap-2">
                            {pkg.inclusions.map((inclusion, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {inclusion}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Highlights:</h4>
                          <div className="flex flex-wrap gap-2">
                            {pkg.highlights.map((highlight, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="text-sm text-green-600 font-medium">Free cancellation up to 24 hours</div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">View Details</Button>
                            <Button 
                              onClick={() => handleBookPackage(pkg.id)}
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                            >
                              Book Package
                            </Button>
                          </div>
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

export default PackageSearchResults;
