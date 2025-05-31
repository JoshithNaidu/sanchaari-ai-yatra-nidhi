
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { MapPin, Calendar, Users, DollarSign, Eye, Edit } from 'lucide-react';

const AdminTripManagement = () => {
  const [filter, setFilter] = useState('all');

  const trips = [
    {
      id: 'TR001',
      customerName: 'John Doe',
      destination: 'Goa',
      startDate: '2024-06-15',
      endDate: '2024-06-20',
      status: 'confirmed',
      travelers: 2,
      totalAmount: '₹45,000',
      bookingDate: '2024-05-20'
    },
    {
      id: 'TR002',
      customerName: 'Jane Smith',
      destination: 'Kerala',
      startDate: '2024-07-10',
      endDate: '2024-07-18',
      status: 'pending',
      travelers: 4,
      totalAmount: '₹85,000',
      bookingDate: '2024-05-18'
    },
    {
      id: 'TR003',
      customerName: 'Mike Johnson',
      destination: 'Rajasthan',
      startDate: '2024-05-25',
      endDate: '2024-05-30',
      status: 'completed',
      travelers: 3,
      totalAmount: '₹67,500',
      bookingDate: '2024-05-10'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Trip Management</h1>
              <p className="text-sm text-gray-600">Monitor and manage all customer trips</p>
            </div>
            <div className="flex items-center gap-4">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Trips</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Link to="/admin">
                <Button variant="outline" size="sm">Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Trips</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Travelers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">432</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹42.5L</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Trip Value</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹65,750</div>
              <p className="text-xs text-muted-foreground">+3% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Trips List */}
        <Card>
          <CardHeader>
            <CardTitle>All Trips</CardTitle>
            <CardDescription>Comprehensive trip management dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trips.map((trip) => (
                <div key={trip.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
                    <div>
                      <div className="font-medium">{trip.id}</div>
                      <div className="text-sm text-gray-600">{trip.customerName}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="font-medium">{trip.destination}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">{trip.startDate}</div>
                      <div className="text-xs text-gray-600">to {trip.endDate}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">{trip.travelers} travelers</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">{trip.totalAmount}</div>
                      <div className="text-xs text-gray-600">Total</div>
                    </div>
                    <div>
                      <Badge className={getStatusColor(trip.status)}>
                        {trip.status}
                      </Badge>
                      <div className="text-xs text-gray-500 mt-1">
                        Booked: {trip.bookingDate}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminTripManagement;
