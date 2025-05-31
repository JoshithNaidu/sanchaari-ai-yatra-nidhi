
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Calendar, Phone, ArrowLeft, Check, X, AlertTriangle } from 'lucide-react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import Header from '@/components/Header';

const PartnerBookingRequests = () => {
  const { user } = useCentralizedAuth();

  const requests = [
    {
      id: "REQ001",
      guestName: "Sarah Johnson",
      phone: "+91 9876543215",
      roomType: "Deluxe Room", 
      checkIn: "Jan 15, 2025",
      checkOut: "Jan 18, 2025",
      guests: 2,
      amount: "₹12,600",
      requestedAt: "2 hours ago",
      status: "Pending",
      urgency: "High"
    },
    {
      id: "REQ002",
      guestName: "Robert Chen",
      phone: "+91 9876543216",
      roomType: "Suite",
      checkIn: "Jan 20, 2025", 
      checkOut: "Jan 23, 2025",
      guests: 4,
      amount: "₹21,000",
      requestedAt: "4 hours ago",
      status: "Pending",
      urgency: "Medium"
    },
    {
      id: "REQ003",
      guestName: "Emma Williams",
      phone: "+91 9876543217",
      roomType: "Standard Room",
      checkIn: "Jan 25, 2025",
      checkOut: "Jan 27, 2025", 
      guests: 1,
      amount: "₹7,000",
      requestedAt: "6 hours ago",
      status: "Pending",
      urgency: "Low"
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
          <h1 className="text-3xl font-bold text-gray-900">Booking Requests</h1>
          <Badge variant="destructive" className="ml-auto">
            {requests.length} Pending
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{requests.length}</div>
              <p className="text-xs text-muted-foreground">Require your attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Priority</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">Urgent responses needed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Potential Revenue</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹40,600</div>
              <p className="text-xs text-muted-foreground">From pending requests</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {requests.map((request) => (
            <Card key={request.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-lg font-semibold">{request.guestName}</h3>
                      <Badge variant="outline">{request.status}</Badge>
                      <Badge 
                        variant={
                          request.urgency === 'High' ? 'destructive' : 
                          request.urgency === 'Medium' ? 'default' : 'secondary'
                        }
                      >
                        {request.urgency} Priority
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Request ID:</span>
                        <p className="font-medium">{request.id}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Room Type:</span>
                        <p className="font-medium">{request.roomType}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Check-in:</span>
                        <p className="font-medium">{request.checkIn}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Check-out:</span>
                        <p className="font-medium">{request.checkOut}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Total Amount:</span>
                        <p className="font-medium text-green-600">{request.amount}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        <span>{request.phone}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{request.guests} guests</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>Requested {request.requestedAt}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <Check className="h-4 w-4 mr-1" />
                      Accept
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                      <X className="h-4 w-4 mr-1" />
                      Decline
                    </Button>
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

export default PartnerBookingRequests;
