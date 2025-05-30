
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Wifi, Car, Utensils, Filter, SortAsc } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';

const HotelSearchResults = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('rating');

  const hotels = [
    {
      id: 'hotel-1',
      name: 'The Oberoi Mumbai',
      rating: 4.8,
      reviews: 2547,
      location: 'Nariman Point, Mumbai',
      price: 12500,
      originalPrice: 15000,
      image: '/placeholder.svg',
      amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant'],
      starRating: 5
    },
    {
      id: 'hotel-2',
      name: 'Taj Mahal Palace',
      rating: 4.7,
      reviews: 3201,
      location: 'Colaba, Mumbai',
      price: 18000,
      originalPrice: 22000,
      image: '/placeholder.svg',
      amenities: ['Free WiFi', 'Pool', 'Gym', 'Spa'],
      starRating: 5
    },
    {
      id: 'hotel-3',
      name: 'Hotel Marine Plaza',
      rating: 4.2,
      reviews: 1834,
      location: 'Marine Drive, Mumbai',
      price: 8500,
      originalPrice: 10000,
      image: '/placeholder.svg',
      amenities: ['Free WiFi', 'Restaurant', 'Parking'],
      starRating: 4
    }
  ];

  const handleBookHotel = (hotelId: string) => {
    navigate(`/checkout/${hotelId}`);
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
                <span className="font-medium">Mumbai Hotels</span>
                <span className="text-gray-600">Jan 15 - Jan 18, 2024</span>
                <span className="text-gray-600">{searchParams.get('adults') || 2} guests</span>
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
                    <input type="range" min="2000" max="25000" className="w-full" />
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>₹2,000</span>
                      <span>₹25,000</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Star Rating</h4>
                    <div className="space-y-2">
                      {[5, 4, 3, 2].map(stars => (
                        <label key={stars} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <div className="flex">
                            {Array.from({ length: stars }).map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Amenities</h4>
                    <div className="space-y-2">
                      {['Free WiFi', 'Pool', 'Spa', 'Gym', 'Restaurant', 'Parking'].map(amenity => (
                        <label key={amenity} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{amenity}</span>
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
                <option value="distance">Closest Distance</option>
                <option value="featured">Featured</option>
              </select>
            </div>

            {/* Hotel Results */}
            <div className="space-y-4">
              {hotels.map((hotel) => (
                <Card key={hotel.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-48 h-32 bg-gray-200 rounded-lg flex-shrink-0">
                        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover rounded-lg" />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{hotel.name}</h3>
                            <div className="flex items-center gap-1 mb-1">
                              {Array.from({ length: hotel.starRating }).map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <MapPin className="h-3 w-3" />
                              {hotel.location}
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-sm text-gray-500 line-through">₹{hotel.originalPrice.toLocaleString()}</div>
                            <div className="text-2xl font-bold text-blue-600">₹{hotel.price.toLocaleString()}</div>
                            <div className="text-xs text-gray-600">per night</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{hotel.rating}</span>
                            <span className="text-sm text-gray-600">({hotel.reviews} reviews)</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {hotel.amenities.map((amenity, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="text-sm text-green-600 font-medium">Free cancellation</div>
                          <Button 
                            onClick={() => handleBookHotel(hotel.id)}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            View Rooms
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
    </div>
  );
};

export default HotelSearchResults;
