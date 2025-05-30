
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Download, Share2, Calendar, MapPin, Users } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/Header';

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const { bookingId } = useParams();

  const bookingData = {
    id: bookingId,
    type: 'flight',
    title: 'IndiGo Flight 6E 2001',
    status: 'Confirmed',
    details: {
      route: 'Delhi (DEL) → Mumbai (BOM)',
      date: 'January 15, 2024',
      time: '06:00 - 08:30',
      passengers: 2,
      total: 10200
    },
    qrCode: '/placeholder.svg'
  };

  const suggestions = [
    { title: 'Airport Transfer', description: 'Book cab to airport', price: 800 },
    { title: 'Travel Insurance', description: 'Protect your trip', price: 299 },
    { title: 'Mumbai Hotels', description: 'Book accommodation', price: 3500 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Success Animation Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600">Your travel booking has been successfully confirmed</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Booking Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{bookingData.title}</CardTitle>
                    <Badge variant="default" className="mt-2 bg-green-600">
                      {bookingData.status}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Booking ID</div>
                    <div className="font-mono text-lg font-semibold">{bookingData.id}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-600">Route</div>
                      <div className="font-medium">{bookingData.details.route}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-600">Date & Time</div>
                      <div className="font-medium">{bookingData.details.date}</div>
                      <div className="text-sm text-gray-600">{bookingData.details.time}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-600">Passengers</div>
                      <div className="font-medium">{bookingData.details.passengers} Adults</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    <div>
                      <div className="text-sm text-gray-600">Total Paid</div>
                      <div className="font-medium text-blue-600">₹{bookingData.details.total.toLocaleString()}</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t">
                  <Button className="flex items-center gap-2" variant="outline">
                    <Download className="h-4 w-4" />
                    Download Receipt
                  </Button>
                  <Button className="flex items-center gap-2" variant="outline">
                    <Share2 className="h-4 w-4" />
                    Share Itinerary
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Important Information */}
            <Card>
              <CardHeader>
                <CardTitle>Important Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-1">Check-in Information</h4>
                  <p className="text-sm text-blue-800">
                    Web check-in opens 48 hours before departure. Please arrive at the airport 2 hours before domestic flights.
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <h4 className="font-medium text-yellow-900 mb-1">Baggage Policy</h4>
                  <p className="text-sm text-yellow-800">
                    15kg check-in baggage and 7kg cabin baggage included. Additional baggage can be purchased online.
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-1">Cancellation Policy</h4>
                  <p className="text-sm text-green-800">
                    Free cancellation up to 24 hours before departure. Cancellation charges apply thereafter.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* QR Code */}
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-medium mb-3">Mobile Boarding Pass</h3>
                <div className="w-32 h-32 bg-gray-200 mx-auto mb-3 flex items-center justify-center">
                  <img src={bookingData.qrCode} alt="QR Code" className="w-full h-full" />
                </div>
                <p className="text-xs text-gray-600">Show this QR code at the airport</p>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <Button 
                  onClick={() => navigate('/trips/dashboard')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  View All My Trips
                </Button>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            {/* Suggestions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Complete Your Trip</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{suggestion.title}</h4>
                        <p className="text-xs text-gray-600">{suggestion.description}</p>
                      </div>
                      <div className="text-right ml-2">
                        <div className="text-sm font-medium">₹{suggestion.price}</div>
                        <Button size="sm" variant="outline" className="mt-1 text-xs">
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
