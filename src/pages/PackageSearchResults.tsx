
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, Users, MapPin, Filter, SortAsc, Plane, Building, Camera, Utensils, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';

const PackageSearchResults = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('recommended');
  const [expandedPackages, setExpandedPackages] = useState<string[]>([]);

  const packages = [
    {
      id: 'package-1',
      title: 'Golden Triangle Tour - Delhi, Agra & Jaipur',
      duration: '6 Days, 5 Nights',
      destinations: ['Delhi', 'Agra', 'Jaipur'],
      rating: 4.7,
      reviews: 892,
      price: 45000,
      originalPrice: 55000,
      image: '/placeholder.svg',
      type: 'Cultural Heritage',
      includes: {
        flights: 'Round-trip flights from Mumbai',
        hotels: '4-star hotels with breakfast',
        transport: 'AC vehicle with driver',
        activities: '8 guided tours & experiences',
        meals: '5 breakfasts, 3 lunches, 2 dinners'
      },
      highlights: [
        'Taj Mahal sunrise tour',
        'Amber Fort elephant ride',
        'Red Fort & India Gate',
        'Local cooking class',
        'Shopping in Pink City'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Delhi', activities: ['Airport pickup', 'Hotel check-in', 'India Gate visit', 'Welcome dinner'] },
        { day: 2, title: 'Delhi Sightseeing', activities: ['Red Fort', 'Jama Masjid', 'Chandni Chowk', 'Humayun Tomb'] },
        { day: 3, title: 'Delhi to Agra', activities: ['Drive to Agra', 'Agra Fort', 'Mehtab Bagh sunset'] },
        { day: 4, title: 'Agra to Jaipur', activities: ['Taj Mahal sunrise', 'Drive to Jaipur', 'City Palace'] },
        { day: 5, title: 'Jaipur Exploration', activities: ['Amber Fort', 'Hawa Mahal', 'Local bazaar shopping'] },
        { day: 6, title: 'Departure', activities: ['Hotel checkout', 'Airport transfer', 'Flight to Mumbai'] }
      ],
      cancellation: 'Free cancellation up to 15 days',
      groupSize: '2-20 people'
    },
    {
      id: 'package-2',
      title: 'Kerala Backwaters & Hill Stations Complete Tour',
      duration: '8 Days, 7 Nights',
      destinations: ['Kochi', 'Munnar', 'Alleppey', 'Kumarakom'],
      rating: 4.8,
      reviews: 567,
      price: 52000,
      originalPrice: 62000,
      image: '/placeholder.svg',
      type: 'Nature & Wellness',
      includes: {
        flights: 'Round-trip flights included',
        hotels: 'Resort & houseboat stays',
        transport: 'All transfers included',
        activities: '12 experiences & tours',
        meals: 'All meals included'
      },
      highlights: [
        'Houseboat stay in backwaters',
        'Tea plantation tour',
        'Ayurvedic spa treatments',
        'Traditional Kerala cooking',
        'Kathakali dance performance'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Kochi', activities: ['Airport pickup', 'Fort Kochi walk', 'Chinese fishing nets'] },
        { day: 2, title: 'Kochi to Munnar', activities: ['Drive to Munnar', 'Tea museum', 'Evening at leisure'] }
      ],
      cancellation: 'Free cancellation up to 21 days',
      groupSize: '2-16 people'
    },
    {
      id: 'package-3',
      title: 'Rajasthan Royal Heritage Experience',
      duration: '10 Days, 9 Nights',
      destinations: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer'],
      rating: 4.9,
      reviews: 743,
      price: 75000,
      originalPrice: 90000,
      image: '/placeholder.svg',
      type: 'Luxury Heritage',
      includes: {
        flights: 'Domestic flights included',
        hotels: '5-star palace hotels',
        transport: 'Luxury vehicles',
        activities: '15 curated experiences',
        meals: 'Royal dining experiences'
      },
      highlights: [
        'Stay in palace hotels',
        'Camel safari in Thar Desert',
        'Private boat on Lake Pichola',
        'Mehrangarh Fort sunset',
        'Traditional Rajasthani performances'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Jaipur', activities: ['Palace hotel check-in', 'Welcome royal dinner'] }
      ],
      cancellation: 'Free cancellation up to 30 days',
      groupSize: '2-12 people'
    }
  ];

  const handleBookPackage = (packageId: string) => {
    navigate(`/checkout/${packageId}`);
  };

  const togglePackageExpansion = (packageId: string) => {
    setExpandedPackages(prev => 
      prev.includes(packageId) 
        ? prev.filter(id => id !== packageId)
        : [...prev, packageId]
    );
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
                <span className="font-medium">India Tour Packages</span>
                <span className="text-gray-600">Starting Jan 15, 2024</span>
                <span className="text-gray-600">{searchParams.get('adults') || 2} travelers</span>
                <Badge variant="outline">{searchParams.get('package_type') || 'All Packages'}</Badge>
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
                    <h4 className="text-sm font-medium mb-2">Price Range</h4>
                    <input type="range" min="20000" max="150000" className="w-full" />
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>₹20K</span>
                      <span>₹1.5L</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Package Type</h4>
                    <div className="space-y-2">
                      {['Cultural Heritage', 'Adventure', 'Nature & Wildlife', 'Luxury', 'Budget Friendly', 'Honeymoon'].map(type => (
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
                      {['3-5 Days', '6-8 Days', '9-12 Days', '13+ Days'].map(duration => (
                        <label key={duration} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{duration}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Destinations</h4>
                    <div className="space-y-2">
                      {['North India', 'South India', 'Rajasthan', 'Kerala', 'Himachal Pradesh', 'Goa'].map(dest => (
                        <label key={dest} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{dest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Inclusions</h4>
                    <div className="space-y-2">
                      {['Flights Included', 'Meals Included', 'Guide Included', 'Transport Included'].map(inclusion => (
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
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <SortAsc className="h-4 w-4" />
                  <span className="text-sm font-medium">Sort by:</span>
                </div>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded px-3 py-1 text-sm"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price">Lowest Price</option>
                  <option value="rating">Highest Rated</option>
                  <option value="duration">Duration</option>
                </select>
              </div>
              <div className="text-sm text-gray-600">
                {packages.length} packages found
              </div>
            </div>

            {/* Package Results */}
            <div className="space-y-6">
              {packages.map((pkg) => (
                <Card key={pkg.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-80 h-56 bg-gray-200 rounded-lg flex-shrink-0 relative">
                        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover rounded-lg" />
                        <Badge className="absolute top-2 left-2 bg-purple-600">
                          {pkg.type}
                        </Badge>
                        <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded text-sm font-medium">
                          {pkg.duration}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {pkg.destinations.join(' → ')}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {pkg.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {pkg.groupSize}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-medium">{pkg.rating}</span>
                                <span className="text-sm text-gray-600">({pkg.reviews} reviews)</span>
                              </div>
                            </div>
                          </div>

                          <div className="text-right ml-4">
                            <div className="text-sm text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</div>
                            <div className="text-2xl font-bold text-blue-600">₹{pkg.price.toLocaleString()}</div>
                            <div className="text-xs text-gray-600">for {pkg.duration}</div>
                          </div>
                        </div>

                        {/* Package Highlights */}
                        <div className="space-y-2 mb-4">
                          <h4 className="text-sm font-medium">Package Highlights:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                            {pkg.highlights.slice(0, 4).map((highlight, index) => (
                              <div key={index} className="text-sm text-gray-600 flex items-center gap-1">
                                <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                                {highlight}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Package Inclusions */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Plane className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-600">Flights</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Building className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-600">Hotels</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Camera className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-600">Activities</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Utensils className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-600">Meals</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-600">Guide</span>
                          </div>
                        </div>

                        {/* Expandable Itinerary */}
                        {expandedPackages.includes(pkg.id) && (
                          <div className="border-t pt-4 mb-4">
                            <h4 className="text-sm font-medium mb-3">Day-by-Day Itinerary:</h4>
                            <div className="space-y-2">
                              {pkg.itinerary.map((day, index) => (
                                <div key={index} className="flex gap-3">
                                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                                    {day.day}
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="text-sm font-medium">{day.title}</h5>
                                    <p className="text-xs text-gray-600">{day.activities.join(' • ')}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-green-600 font-medium">{pkg.cancellation}</div>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => togglePackageExpansion(pkg.id)}
                              className="text-blue-600"
                            >
                              {expandedPackages.includes(pkg.id) ? (
                                <>
                                  <ChevronUp className="h-4 w-4 mr-1" />
                                  Hide Itinerary
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="h-4 w-4 mr-1" />
                                  View Itinerary
                                </>
                              )}
                            </Button>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Customize Package
                            </Button>
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

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" className="px-8">
                Load More Packages
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSearchResults;
