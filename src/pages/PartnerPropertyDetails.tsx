
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Wifi, Car, Coffee, Tv, ArrowLeft, Edit, Eye, Plus, Star } from 'lucide-react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import Header from '@/components/Header';
import { getPlaceholderImage } from '@/utils/imagePlaceholders';

const PartnerPropertyDetails = () => {
  const { user } = useCentralizedAuth();

  const properties = [
    {
      id: 1,
      name: "Luxury Beachfront Resort",
      type: "Resort",
      location: "Goa, India",
      status: "Active",
      rooms: 45,
      amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Parking"],
      rating: 4.8,
      bookings: 23,
      image: getPlaceholderImage('resort', 300, 200)
    },
    {
      id: 2,
      name: "Mountain View Hotel",
      type: "Hotel",
      location: "Manali, India",
      status: "Active",
      rooms: 30,
      amenities: ["WiFi", "Restaurant", "Parking", "Gym"],
      rating: 4.6,
      bookings: 18,
      image: getPlaceholderImage('hotel', 300, 200)
    },
    {
      id: 3,
      name: "City Center Business Hotel",
      type: "Hotel",
      location: "Mumbai, India",
      status: "Pending",
      rooms: 60,
      amenities: ["WiFi", "Business Center", "Conference Room", "Parking"],
      rating: 4.5,
      bookings: 31,
      image: getPlaceholderImage('city', 300, 200)
    },
    {
      id: 4,
      name: "Heritage Palace Hotel",
      type: "Heritage",
      location: "Rajasthan, India",
      status: "Active",
      rooms: 25,
      amenities: ["WiFi", "Restaurant", "Heritage Tours", "Spa"],
      rating: 4.9,
      bookings: 15,
      image: getPlaceholderImage('default', 300, 200)
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/partner/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Property Management</h1>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">Manage your properties and their details</p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add New Property
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <Badge 
                  variant={property.status === 'Active' ? 'default' : 'secondary'}
                  className="absolute top-2 right-2"
                >
                  {property.status}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  {property.name}
                </CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {property.location}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Type:</span>
                      <p className="font-medium">{property.type}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Rooms:</span>
                      <p className="font-medium">{property.rooms}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500">Rating:</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium ml-1">{property.rating}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500">This Month:</span>
                      <p className="font-medium text-green-600">{property.bookings} bookings</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-gray-500 text-sm">Amenities:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {property.amenities.slice(0, 4).map((amenity, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                      {property.amenities.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{property.amenities.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 mb-4">
            Need help managing your properties?
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/partner/help">
                Visit Help Center
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/partner/contact-support">
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPropertyDetails;
