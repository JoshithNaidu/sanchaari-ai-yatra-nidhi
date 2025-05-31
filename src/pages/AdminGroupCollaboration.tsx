
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { Users, Search, Plus, MessageSquare, Calendar, UserPlus } from 'lucide-react';

const AdminGroupCollaboration = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const groupTrips = [
    {
      id: 'GT001',
      name: 'Corporate Retreat - Mumbai',
      organizer: 'John Smith',
      participants: 25,
      status: 'active',
      createdDate: '2024-05-20',
      totalBudget: '₹5,50,000'
    },
    {
      id: 'GT002',
      name: 'Wedding Group - Goa',
      organizer: 'Priya Sharma',
      participants: 45,
      status: 'planning',
      createdDate: '2024-05-18',
      totalBudget: '₹8,75,000'
    },
    {
      id: 'GT003',
      name: 'Friends Trip - Kerala',
      organizer: 'Rahul Gupta',
      participants: 12,
      status: 'completed',
      createdDate: '2024-05-10',
      totalBudget: '₹2,40,000'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'planning': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Group Collaboration</h1>
              <p className="text-sm text-gray-600">Manage group trips and collaborative bookings</p>
            </div>
            <div className="flex items-center gap-4">
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Create Group Trip
              </Button>
              <Link to="/admin">
                <Button variant="outline" size="sm">Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search group trips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Groups</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">234</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Group Revenue</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹18.5L</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Group Size</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">19</div>
            </CardContent>
          </Card>
        </div>

        {/* Group Trips */}
        <Card>
          <CardHeader>
            <CardTitle>Group Trips</CardTitle>
            <CardDescription>Manage collaborative travel bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {groupTrips.map((trip) => (
                <div key={trip.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                    <div className="md:col-span-2">
                      <div className="font-medium">{trip.name}</div>
                      <div className="text-sm text-gray-600">{trip.id}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">{trip.organizer}</div>
                      <div className="text-xs text-gray-600">Organizer</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">{trip.participants} people</div>
                      <div className="text-xs text-gray-600">Participants</div>
                    </div>
                    <div>
                      <Badge className={getStatusColor(trip.status)}>
                        {trip.status}
                      </Badge>
                      <div className="text-xs text-gray-500 mt-1">{trip.createdDate}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    Budget: {trip.totalBudget}
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

export default AdminGroupCollaboration;
