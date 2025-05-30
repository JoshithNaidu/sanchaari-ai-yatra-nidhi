
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users, MapPin, Filter, SortAsc } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';

const ActivitySearchResults = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('rating');

  const activities = [
    {
      id: 'activity-1',
      title: 'Mumbai Street Food Tour',
      location: 'Mumbai, Maharashtra',
      rating: 4.9,
      reviews: 1245,
      duration: '3 hours',
      price: 1200,
      ageGroup: 'All ages',
      image: '/placeholder.svg',
      category: 'Food & Drink',
      highlights: ['Local guide', 'Food included', 'Small group']
    },
    {
      id: 'activity-2',
      title: 'Elephanta Caves Half Day Tour',
      location: 'Elephanta Island, Mumbai',
      rating: 4.6,
      reviews: 892,
      duration: '5 hours',
      price: 2500,
      ageGroup: '8+',
      image: '/placeholder.svg',
      category: 'Culture & History',
      highlights: ['Ferry included', 'Audio guide', 'UNESCO site']
    },
    {
      id: 'activity-3',
      title: 'Bollywood Studio Tour',
      location: 'Film City, Mumbai',
      rating: 4.7,
      reviews: 567,
      duration: '4 hours',
      price: 3000,
      ageGroup: '12+',
      image: '/placeholder.svg',
      category: 'Entertainment',
      highlights: ['Behind scenes', 'Celebrity spots', 'Photo ops']
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
                <span className="font-medium">Mumbai Activities</span>
                <span className="text-gray-600">Jan 15, 2024</span>
                <div className="flex gap-2">
                  {['Adventure', 'Culture', 'Food', 'Family'].map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button variant="outline" size="sm">Refine Search</Button>
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
                    <h4 className="text-sm font-medium mb-2">Categories</h4>
                    <div className="space-y-2">
                      {['Food & Drink', 'Culture & History', 'Adventure', 'Entertainment', 'Nature'].map(category => (
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
                      {['Under 2 hours', '2-4 hours', '4-8 hours', 'Full day'].map(duration => (
                        <label key={duration} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{duration}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Price Range</h4>
                    <input type="range" min="500" max="5000" className="w-full" />
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>₹500</span>
                      <span>₹5,000</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Age Group</h4>
                    <div className="space-y-2">
                      {['All ages', '8+', '12+', '18+'].map(age => (
                        <label key={age} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{age}</span>
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
                <option value="featured">Featured</option>
              </select>
            </div>

            {/* Activity Results */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activities.map((activity) => (
                <Card key={activity.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gray-200 rounded-t-lg">
                      <img src={activity.image} alt={activity.title} className="w-full h-full object-cover rounded-t-lg" />
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{activity.title}</h3>
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {activity.category}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                        <MapPin className="h-3 w-3" />
                        {activity.location}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {activity.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {activity.ageGroup}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{activity.rating}</span>
                          <span className="text-sm text-gray-600">({activity.reviews})</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {activity.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-xl font-bold text-blue-600">₹{activity.price.toLocaleString()}</div>
                        <Button 
                          onClick={() => handleBookActivity(activity.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Book Now
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
    </div>
  );
};

export default ActivitySearchResults;
