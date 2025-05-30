
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Filter, MapPin, MessageCircle } from 'lucide-react';

const TravelThemes = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popularity');

  const filters = ['Romance', 'Adventure', 'Beach', 'Mountains', 'Heritage', 'Budget', 'Wellness', 'Food'];
  
  const themes = [
    {
      id: 1,
      title: 'Best Monsoon Treks',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
      cities: ['Lonavala', 'Munnar', 'Coorg', 'Wayanad'],
      tags: ['Adventure', 'Mountains'],
      description: 'Experience the magic of monsoon in Western Ghats'
    },
    {
      id: 2,
      title: 'Romantic Weekend Getaways',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
      cities: ['Udaipur', 'Shimla', 'Goa', 'Alleppey'],
      tags: ['Romance', 'Budget'],
      description: 'Perfect destinations for couples seeking intimacy'
    },
    {
      id: 3,
      title: 'Heritage Circuit of Rajasthan',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
      cities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Jaisalmer'],
      tags: ['Heritage', 'Culture'],
      description: 'Immerse in royal grandeur and ancient architecture'
    },
    {
      id: 4,
      title: 'Beach Paradise Tour',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&q=80',
      cities: ['Goa', 'Varkala', 'Pondicherry', 'Andaman'],
      tags: ['Beach', 'Wellness'],
      description: 'Sun, sand, and serenity along Indian coastlines'
    },
    {
      id: 5,
      title: 'Spiritual Journey',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80',
      cities: ['Varanasi', 'Rishikesh', 'Amritsar', 'Tirupati'],
      tags: ['Spiritual', 'Heritage'],
      description: 'Find inner peace at sacred destinations'
    },
    {
      id: 6,
      title: 'Foodie Adventures',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
      cities: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
      tags: ['Food', 'Culture'],
      description: 'Culinary exploration across diverse Indian cuisines'
    }
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredThemes = themes.filter(theme => 
    selectedFilters.length === 0 || 
    theme.tags.some(tag => selectedFilters.includes(tag))
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Travel Themes & Collections</h1>
          <p className="text-xl text-gray-600">Discover curated experiences that match your travel style</p>
        </div>

        {/* Sticky Filter Bar */}
        <div className="sticky top-16 bg-white border-b border-gray-200 py-4 mb-8 z-40">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              <span className="font-medium">Filters:</span>
            </div>
            {filters.map(filter => (
              <Button
                key={filter}
                variant={selectedFilters.includes(filter) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter(filter)}
                className="text-sm"
              >
                {filter}
              </Button>
            ))}
            <div className="ml-auto flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm"
              >
                <option value="popularity">Popularity</option>
                <option value="newest">Newest</option>
                <option value="editors-choice">Editor's Choice</option>
              </select>
            </div>
          </div>
        </div>

        {/* Theme Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredThemes.map(theme => (
            <Card key={theme.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <div 
                  className="h-48 bg-cover bg-center transition-transform group-hover:scale-105"
                  style={{ backgroundImage: `url(${theme.image})` }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-2">{theme.title}</h3>
                  <div className="flex items-center text-white text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{theme.cities.length} cities included</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 mb-3">{theme.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {theme.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    <Link to={`/explore/destinations/${theme.cities[0].toLowerCase()}`}>
                      Explore
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Link to="/chat" className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      Plan Trip
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredThemes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No themes match your selected filters</p>
            <Button onClick={() => setSelectedFilters([])}>Clear Filters</Button>
          </div>
        )}

        {/* Blog Preview Strip */}
        <section className="mt-16 p-8 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Related Travel Stories</h2>
          <p className="text-gray-600 mb-6">Get inspired by travel experiences from our community</p>
          <Button>
            <Link to="/blog">Read Travel Blog</Link>
          </Button>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TravelThemes;
