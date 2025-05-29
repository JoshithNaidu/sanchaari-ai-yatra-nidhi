
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const FeaturedCollections = () => {
  const collections = [
    {
      title: "Hill Stations for Summer",
      description: "Escape the heat with cool mountain retreats",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
      link: "/explore/themes#hillstations"
    },
    {
      title: "Family-Friendly Getaways",
      description: "Perfect destinations for memorable family vacations",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      link: "/explore/themes#family"
    },
    {
      title: "Weekend Escapes Near You",
      description: "Quick getaways for your next weekend adventure",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      link: "/explore/destinations?type=weekend"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated travel experiences for every type of adventurer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {collection.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {collection.description}
                </p>
                <Link to={collection.link}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full w-full">
                    Explore
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
