
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users, MapPin, Filter, SortAsc } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchActivities = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('rating');

  const activities = [
    {
      id: 'activity-1',
      name: 'Mumbai Street Food Tour',
      rating: 4.9,
      reviews: 1247,
      duration: '3 hours',
      groupSize: 'Up to 15 people',
      price: 1500,
      originalPrice: 2000,
      location: 'Mumbai, Maharashtra',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80',
      category: 'Food & Drink',
      highlights: ['Local markets', 'Street food tasting', 'Cultural experience']
    },
    {
      id: 'activity-2',
      name: 'Sunset Boat Cruise',
      rating: 4.7,
      reviews: 856,
      duration: '2 hours',
      groupSize: 'Up to 25 people',
      price: 2500,
      originalPrice: 3000,
      location: 'Gateway of India, Mumbai',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80',
      category: 'Water Activities',
      highlights: ['Sunset views', 'Mumbai skyline', 'Refreshments included']
    },
    {
      id: 'activity-3',
      name: 'Bollywood Studio Tour',
      rating: 4.6,
      reviews: 2134,
      duration: '4 hours',
      groupSize: 'Up to 20 people',
      price: 3500,
      originalPrice: 4500,
      location: 'Film City, Mumbai',
      image: 'https://images.unsplash.com/photo-1489599904178-225cebef9d73?auto=format&fit=crop&w=400&q=80',
      category: 'Entertainment',
      highlights: ['Studio sets', 'Behind-the-scenes', 'Meet artists']
    },
    {
      id: 'activity-4',
      name: 'Heritage Walking Tour',
      rating: 4.5,
      reviews: 934,
      duration: '2.5 hours',
      groupSize: 'Up to 12 people',
      price: 1200,
      originalPrice: 1500,
      location: 'Fort District, Mumbai',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80',
      category: 'Culture & History',
      highlights: ['Colonial architecture', 'Historical stories', 'Photography spots']
    }
  ];

  const handleBookActivity = (activityId: string) => {
    navigate(`/checkout/${activityId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Search Form */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Discover Amazing Experiences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <input type="text" placeholder="Where?" className="border rounded px-3 py-2" defaultValue="Mumbai" />
              <input type="date" placeholder="When?" className="border rounded px-3 py-2" />
              <select className="border rounded px-3 py-2">
                <option>Any category</option>
                <option>Food & Drink</option>
                <option>Culture & History</option>
                <option>Entertainment</option>
                <option>Water Activities</option>
              </select>
              <Button>Search Activities</Button>
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
                    <input type="range" min="500" max="5000" className="w-full" />
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>₹500</span>
                      <span>₹5,000</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Duration</h4>
                    <div className="space-y-2">
                      {['Under 2 hours', '2-4 hours', '4-6 hours', 'Full day'].map(duration => (
                        <label key={duration} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{duration}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Category</h4>
                    <div className="space-y-2">
                      {['Food & Drink', 'Culture & History', 'Entertainment', 'Water Activities'].map(category => (
                        <label key={category} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{category}</span>
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
                <option value="duration">Shortest Duration</option>
                <option value="popularity">Most Popular</option>
              </select>
            </div>

            {/* Activity Results */}
            <div className="grid md:grid-cols-2 gap-6">
              {activities.map((activity) => (
                <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img src={activity.image} alt={activity.name} className="w-full h-48 object-cover rounded-t-lg" />
                    <Badge className="absolute top-3 left-3 bg-white text-gray-900">{activity.category}</Badge>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{activity.name}</h3>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 line-through">₹{activity.originalPrice}</div>
                        <div className="text-xl font-bold text-green-600">₹{activity.price}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                      <MapPin className="h-3 w-3" />
                      {activity.location}
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{activity.rating}</span>
                        <span className="text-sm text-gray-600">({activity.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="h-3 w-3" />
                        {activity.duration}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Users className="h-3 w-3" />
                        {activity.groupSize}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {activity.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm text-green-600 font-medium">Free cancellation</div>
                      <Button 
                        onClick={() => handleBookActivity(activity.id)}
                        className="bg-orange-600 hover:bg-orange-700 text-white"
                      >
                        Book Now
                      </Button>
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

export default SearchActivities;
