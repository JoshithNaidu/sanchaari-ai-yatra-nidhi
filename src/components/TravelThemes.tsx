
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mountain, Heart, Utensils, Camera, Waves, TreePine } from 'lucide-react';

const TravelThemes = () => {
  const themes = [
    {
      id: "adventure",
      name: "Adventure",
      description: "Thrilling experiences and outdoor activities",
      icon: Mountain,
      image: "photo-1506905925346-21bda4d32df4",
      color: "from-orange-400 to-red-500"
    },
    {
      id: "wellness",
      name: "Wellness",
      description: "Rejuvenate your mind, body and soul",
      icon: Heart,
      image: "photo-1545389336-cf090694435e",
      color: "from-green-400 to-teal-500"
    },
    {
      id: "cultural",
      name: "Cultural Tours",
      description: "Immerse in rich traditions and heritage",
      icon: Camera,
      image: "photo-1551038247-3d9af20df552",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: "foodie",
      name: "Foodie Trips",
      description: "Savor authentic flavors and cuisines",
      icon: Utensils,
      image: "photo-1555396273-367ea4eb4db5",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: "beaches",
      name: "Beach Getaways",
      description: "Relax by pristine coastlines",
      icon: Waves,
      image: "photo-1470813740244-df37b8c1edcb",
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: "offbeat",
      name: "Offbeat Destinations",
      description: "Discover hidden gems and untouched beauty",
      icon: TreePine,
      image: "photo-1506905925346-21bda4d32df4",
      color: "from-indigo-400 to-blue-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Explore by Travel Themes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find your perfect travel style and let our AI create the ideal itinerary for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden">
              <div className="relative">
                <img 
                  src={`https://images.unsplash.com/${theme.image}?auto=format&fit=crop&w=500&q=80`}
                  alt={theme.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${theme.color} opacity-70 group-hover:opacity-60 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm">
                    <theme.icon className="h-3 w-3 mr-1" />
                    {theme.name}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{theme.name}</h3>
                <p className="text-gray-600">{theme.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelThemes;
