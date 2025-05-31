
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, User, MapPin, Phone, ArrowLeft, CheckCircle } from 'lucide-react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import Header from '@/components/Header';

const PartnerCheckInsToday = () => {
  const { user } = useCentralizedAuth();

  const checkIns = [
    {
      id: "BK001",
      guestName: "Rajesh Kumar",
      phone: "+91 9876543210",
      roomType: "Deluxe Room",
      roomNumber: "205",
      checkInTime: "2:00 PM",
      status: "Confirmed",
      guests: 2,
      nights: 3
    },
    {
      id: "BK002", 
      guestName: "Priya Sharma",
      phone: "+91 9876543211",
      roomType: "Suite",
      roomNumber: "301",
      checkInTime: "3:30 PM",
      status: "Pending",
      guests: 4,
      nights: 2
    },
    {
      id: "BK003",
      guestName: "Michael Johnson",
      phone: "+91 9876543212", 
      roomType: "Standard Room",
      roomNumber: "102",
      checkInTime: "4:00 PM",
      status: "Checked In",
      guests: 2,
      nights: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/partner">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Check-ins Today</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Check-ins</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Scheduled for today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">33% completion rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Awaiting arrival</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {checkIns.map((checkIn) => (
            <Card key={checkIn.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-lg font-semibold">{checkIn.guestName}</h3>
                      <Badge 
                        variant={
                          checkIn.status === 'Checked In' ? 'default' : 
                          checkIn.status === 'Confirmed' ? 'secondary' : 'outline'
                        }
                      >
                        {checkIn.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Booking ID:</span>
                        <p className="font-medium">{checkIn.id}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Room:</span>
                        <p className="font-medium">{checkIn.roomType} - {checkIn.roomNumber}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Check-in Time:</span>
                        <p className="font-medium">{checkIn.checkInTime}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Guests:</span>
                        <p className="font-medium">{checkIn.guests} guests, {checkIn.nights} nights</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{checkIn.phone}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {checkIn.status === 'Pending' && (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Check In
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      View Details
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

export default PartnerCheckInsToday;
