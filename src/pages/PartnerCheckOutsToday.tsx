
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, User, MapPin, Phone, ArrowLeft, CheckCircle, DollarSign } from 'lucide-react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import Header from '@/components/Header';

const PartnerCheckOutsToday = () => {
  const { user } = useCentralizedAuth();

  const checkOuts = [
    {
      id: "BK004",
      guestName: "Anita Patel",
      phone: "+91 9876543213",
      roomType: "Deluxe Room",
      roomNumber: "105",
      checkOutTime: "11:00 AM",
      status: "Checked Out",
      totalAmount: "₹10,500",
      paymentStatus: "Paid"
    },
    {
      id: "BK005",
      guestName: "David Wilson", 
      phone: "+91 9876543214",
      roomType: "Suite",
      roomNumber: "201",
      checkOutTime: "12:00 PM",
      status: "Pending",
      totalAmount: "₹18,000",
      paymentStatus: "Pending"
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
          <h1 className="text-3xl font-bold text-gray-900">Check-outs Today</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Check-outs</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
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
              <p className="text-xs text-muted-foreground">50% completion rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue Today</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹28,500</div>
              <p className="text-xs text-muted-foreground">From check-outs</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {checkOuts.map((checkOut) => (
            <Card key={checkOut.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-lg font-semibold">{checkOut.guestName}</h3>
                      <Badge 
                        variant={checkOut.status === 'Checked Out' ? 'default' : 'outline'}
                      >
                        {checkOut.status}
                      </Badge>
                      <Badge 
                        variant={checkOut.paymentStatus === 'Paid' ? 'default' : 'destructive'}
                      >
                        {checkOut.paymentStatus}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Booking ID:</span>
                        <p className="font-medium">{checkOut.id}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Room:</span>
                        <p className="font-medium">{checkOut.roomType} - {checkOut.roomNumber}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Check-out Time:</span>
                        <p className="font-medium">{checkOut.checkOutTime}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Total Amount:</span>
                        <p className="font-medium text-green-600">{checkOut.totalAmount}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{checkOut.phone}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {checkOut.status === 'Pending' && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Process Check-out
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

export default PartnerCheckOutsToday;
