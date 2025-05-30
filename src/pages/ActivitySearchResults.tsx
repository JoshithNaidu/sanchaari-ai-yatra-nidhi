
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users, MapPin, Filter, SortAsc, Calendar, Heart } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';

const ActivitySearchResults = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('recommended');

  const activities = [
    {
      id: 'activity-1',
      title: 'Taj Mahal Sunrise Tour with Skip-the-Line Entry',
      location: 'Agra, Uttar Pradesh',
      rating: 4.8,
      reviews: 1247,
      duration: '4 hours',
      groupSize: 'Up to 15 people',
      price: 2500,
      originalPrice: 3000,
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=400&q=80',
      category: 'Cultural & Historical',
      highlights: ['Skip-the-line access', 'Professional guide', 'Sunrise viewing'],
      ageRange: '5-80 years',
      languages: ['English', 'Hindi'],
      includes: ['Entry tickets', 'Guide', 'Transportation'],
      cancellation: 'Free cancellation up to 24 hours',
      availability: 'Available today'
    },
    {
      id: 'activity-2',
      title: 'White Water Rafting Adventure in Rishikesh',
      location: 'Rishikesh, Uttarakhand',
      rating: 4.6,
      reviews: 892,
      duration: '6 hours',
      groupSize: 'Up to 12 people',
      price: 1800,
      originalPrice: 2200,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80',
      category: 'Adventure & Outdoor',
      highlights: ['Grade 3-4 rapids', 'Safety equipment', 'Experienced guides'],
      ageRange: '16-55 years',
      languages: ['English', 'Hindi'],
      includes: ['Rafting gear', 'Lunch', 'Transportation'],
      cancellation: 'Free cancellation up to 48 hours',
      availability: 'Limited availability'
    },
    {
      id: 'activity-3',
      title: 'Kerala Backwaters Houseboat Experience',
      location: 'Alleppey, Kerala',
      rating: 4.7,
      reviews: 654,
      duration: '8 hours',
      groupSize: 'Up to 8 people',
      price: 4500,
      originalPrice: 5500,
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80',
      category: 'Cultural & Nature',
      highlights: ['Traditional houseboat', 'Local cuisine', 'Scenic backwaters'],
      ageRange: 'All ages',
      languages: ['English', 'Malayalam'],
      includes: ['Houseboat', 'Meals', 'Guide'],
      cancellation: 'Free cancellation up to 7 days',
      availability: 'Available'
    }
  ];

  const handleBookActivity = (activityId: string) => {
    navigate(`/checkout/${activityId}`);
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
                <span className="font-medium">Activities in Delhi</span>
                <span className="text-gray-600">Jan 15, 2024</span>
                <span className="text-gray-600">{searchParams.get('adults') || 2} guests</span>
                <Badge variant="outline">{searchParams.get('activity_type') || 'All Categories'}</Badge>
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
                    <input type="range" min="500" max="10000" className="w-full" />
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>₹500</span>
                      <span>₹10,000</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Category</h4>
                    <div className="space-y-2">
                      {['Adventure & Outdoor', 'Cultural & Historical', 'Food & Drink', 'Entertainment', 'Wellness & Spa'].map(category => (
                        <label key={category} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Duration</h4>
                    <div className="space-y-2">
                      {['1-3 hours', '4-6 hours', '7+ hours', 'Multi-day'].map(duration => (
                        <label key={duration} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{duration}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Rating</h4>
                    <div className="space-y-2">
                      {[4.5, 4.0, 3.5, 3.0].map(rating => (
                        <label key={rating} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <div className="flex items-center">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm ml-1">{rating}+ Stars</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Group Size</h4>
                    <div className="space-y-2">
                      {['Private Tour', 'Small Group (2-10)', 'Large Group (10+)'].map(size => (
                        <label key={size} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{size}</span>
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
                  <option value="duration">Shortest Duration</option>
                </select>
              </div>
              <div className="text-sm text-gray-600">
                {activities.length} activities found
              </div>
            </div>

            {/* Activity Results */}
            <div className="space-y-4">
              {activities.map((activity) => (
                <Card key={activity.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-64 h-48 bg-gray-200 rounded-lg flex-shrink-0 relative">
                        <img src={activity.image} alt={activity.title} className="w-full h-full object-cover rounded-lg" />
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Badge className="absolute bottom-2 left-2 bg-blue-600">
                          {activity.category}
                        </Badge>
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{activity.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {activity.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {activity.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {activity.groupSize}
                              </div>
                            </div>
                          </div>

                          <div className="text-right ml-4">
                            <div className="text-sm text-gray-500 line-through">₹{activity.originalPrice.toLocaleString()}</div>
                            <div className="text-2xl font-bold text-blue-600">₹{activity.price.toLocaleString()}</div>
                            <div className="text-xs text-gray-600">per person</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{activity.rating}</span>
                            <span className="text-sm text-gray-600">({activity.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Calendar className="h-3 w-3" />
                            {activity.availability}
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div>
                            <span className="text-sm font-medium">Highlights: </span>
                            <span className="text-sm text-gray-600">{activity.highlights.join(', ')}</span>
                          </div>
                          <div>
                            <span className="text-sm font-medium">Age range: </span>
                            <span className="text-sm text-gray-600">{activity.ageRange}</span>
                          </div>
                          <div>
                            <span className="text-sm font-medium">Languages: </span>
                            <span className="text-sm text-gray-600">{activity.languages.join(', ')}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {activity.includes.map((item, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="text-sm text-green-600 font-medium">{activity.cancellation}</div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button 
                              onClick={() => handleBookActivity(activity.id)}
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                            >
                              Book Now
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
                Load More Activities
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitySearchResults;
