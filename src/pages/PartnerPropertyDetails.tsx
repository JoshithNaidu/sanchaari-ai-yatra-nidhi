
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Wifi, Car, Coffee, Tv, ArrowLeft, Edit, Eye, Plus } from 'lucide-react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import Header from '@/components/Header';

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
      bookings: 23
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
      bookings: 18
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-4 lg:py-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
          <Link to="/partner">
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Property Details</h1>
        </div>

        <div className="mb-4 lg:mb-6">
          <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add New Property
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2 text-lg lg:text-xl">
                      <Building2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="break-words">{property.name}</span>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span className="break-words">{property.location}</span>
                    </CardDescription>
                  </div>
                  <Badge variant={property.status === 'Active' ? 'default' : 'secondary'} className="self-start">
                    {property.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 lg:gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Type:</span>
                      <p className="font-medium break-words">{property.type}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Rooms:</span>
                      <p className="font-medium">{property.rooms}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Rating:</span>
                      <p className="font-medium">{property.rating}/5</p>
                    </div>
                    <div>
                      <span className="text-gray-500">This Month:</span>
                      <p className="font-medium">{property.bookings} bookings</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-gray-500 text-sm">Amenities:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {property.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      View
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
      </div>
    </div>
  );
};

export default PartnerPropertyDetails;
