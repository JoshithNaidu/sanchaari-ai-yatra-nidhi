
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Thermometer, Users, Star, Camera, Utensils, Hotel, Navigation } from 'lucide-react';

const DestinationGuide = () => {
  const { cityName } = useParams();
  const [selectedMapPin, setSelectedMapPin] = useState<string | null>(null);

  // Mock data - in real app, this would come from API
  const cityData = {
    name: cityName || 'Jaipur',
    tagline: 'Discover the soul of the Pink City',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=80',
    climate: 'Hot desert climate with moderate winters',
    bestTime: 'October to March',
    culture: 'Rich Rajasthani heritage with royal palaces and vibrant markets',
    attractions: [
      { name: 'Hawa Mahal', type: 'Palace', rating: 4.8, image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=400&q=80' },
      { name: 'City Palace', type: 'Heritage', rating: 4.9, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80' },
      { name: 'Amber Fort', type: 'Fort', rating: 4.7, image: 'https://images.unsplash.com/photo-1564500430454-a80c8570aca3?auto=format&fit=crop&w=400&q=80' }
    ],
    hotels: [
      { name: 'Taj Jai Mahal Palace', price: '₹15,000', rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80' },
      { name: 'Hotel Pearl Palace', price: '₹3,500', rating: 4.6, image: 'https://images.unsplash.com/photo-1578774296842-c89dab73d264?auto=format&fit=crop&w=400&q=80' }
    ],
    experiences: [
      { name: 'Royal Food Tour', duration: '4 hours', price: '₹2,500', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80' },
      { name: 'Heritage Walk', duration: '3 hours', price: '₹1,800', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80' }
    ]
  };

  const sampleItinerary = [
    { day: 1, title: 'Arrival & City Palace', activities: ['Check-in', 'City Palace', 'Local market visit'] },
    { day: 2, title: 'Forts & Heritage', activities: ['Amber Fort', 'Jaigarh Fort', 'Traditional lunch'] },
    { day: 3, title: 'Culture & Shopping', activities: ['Hawa Mahal', 'Johari Bazaar', 'Departure'] }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cityData.heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div>
            {/* Breadcrumbs */}
            <nav className="mb-4 text-sm">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">&gt;</span>
              <Link to="/explore/destinations" className="hover:underline">Destinations</Link>
              <span className="mx-2">&gt;</span>
              <span>{cityData.name}</span>
            </nav>
            <h1 className="text-5xl font-bold mb-4">{cityData.name}</h1>
            <p className="text-xl">{cityData.tagline}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* City Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">City Overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5" />
                  Climate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{cityData.climate}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Best Time to Visit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{cityData.bestTime}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Local Culture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{cityData.culture}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interactive Map Widget */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Explore on Map</h2>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center relative">
            <div className="text-center">
              <Navigation className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Interactive map with attractions, hotels, and activities</p>
              <Button className="mt-4">
                <Link to="/search/activities">Find Activities Nearby</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Top Places to Visit */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Top Places to Visit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cityData.attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${attraction.image})` }} />
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{attraction.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{attraction.rating}</span>
                    </div>
                  </div>
                  <Badge variant="secondary">{attraction.type}</Badge>
                  <Button className="w-full mt-4" size="sm">
                    <Link to="/search/activities">Book Experience</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Where to Stay */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Where to Stay</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cityData.hotels.map((hotel, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex">
                  <div className="w-1/3 h-32 bg-cover bg-center" style={{ backgroundImage: `url(${hotel.image})` }} />
                  <CardContent className="w-2/3 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{hotel.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{hotel.rating}</span>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-blue-600 mb-2">{hotel.price}/night</p>
                    <Button size="sm">
                      <Link to="/search/hotels">View Details</Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Experiences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Unique Experiences</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cityData.experiences.map((experience, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${experience.image})` }} />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{experience.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">{experience.duration}</span>
                    <span className="font-bold text-blue-600">{experience.price}</span>
                  </div>
                  <Button className="w-full">Book Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sample Itinerary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">3-Day Itinerary Idea</h2>
          <div className="space-y-4">
            {sampleItinerary.map((day) => (
              <Card key={day.day}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {day.day}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Day {day.day}: {day.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {day.activities.map((activity, index) => (
                          <Badge key={index} variant="outline">{activity}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/trips/new">Create My Trip to {cityData.name}</Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationGuide;
