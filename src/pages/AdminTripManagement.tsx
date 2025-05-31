
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ArrowLeft, Search, MapPin, Calendar, Users, DollarSign,
  Filter, Eye, Edit, Trash2, AlertTriangle, CheckCircle,
  Clock, Plane, Hotel, Activity
} from 'lucide-react';

const AdminTripManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const trips = [
    {
      id: 'TRP001',
      title: 'Golden Triangle Adventure',
      destination: 'Delhi, Agra, Jaipur',
      traveler: 'John Doe',
      email: 'john@example.com',
      status: 'active',
      startDate: '2024-06-15',
      endDate: '2024-06-22',
      members: 4,
      budget: 125000,
      bookings: 3,
      type: 'group'
    },
    {
      id: 'TRP002',
      title: 'Kerala Backwaters',
      destination: 'Kochi, Alleppey, Munnar',
      traveler: 'Jane Smith',
      email: 'jane@example.com',
      status: 'completed',
      startDate: '2024-05-20',
      endDate: '2024-05-27',
      members: 2,
      budget: 85000,
      bookings: 5,
      type: 'couple'
    },
    {
      id: 'TRP003',
      title: 'Goa Beach Holiday',
      destination: 'North Goa, South Goa',
      traveler: 'Mike Johnson',
      email: 'mike@example.com',
      status: 'planning',
      startDate: '2024-07-10',
      endDate: '2024-07-17',
      members: 6,
      budget: 180000,
      bookings: 1,
      type: 'group'
    },
    {
      id: 'TRP004',
      title: 'Himachal Adventure',
      destination: 'Shimla, Manali, Dharamshala',
      traveler: 'Sarah Wilson',
      email: 'sarah@example.com',
      status: 'cancelled',
      startDate: '2024-06-01',
      endDate: '2024-06-08',
      members: 3,
      budget: 95000,
      bookings: 0,
      type: 'family'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'planning': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'group': return 'bg-purple-100 text-purple-800';
      case 'couple': return 'bg-pink-100 text-pink-800';
      case 'family': return 'bg-orange-100 text-orange-800';
      case 'solo': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const tripStats = {
    total: 1234,
    active: 456,
    planning: 234,
    completed: 489,
    cancelled: 55
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Trip Management</h1>
                <p className="text-sm text-gray-600">Monitor and manage user trips</p>
              </div>
            </div>
            <Button>
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filter
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Trip Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{tripStats.total}</div>
              <div className="text-sm text-gray-600">Total Trips</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{tripStats.active}</div>
              <div className="text-sm text-gray-600">Active</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{tripStats.planning}</div>
              <div className="text-sm text-gray-600">Planning</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-600">{tripStats.completed}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{tripStats.cancelled}</div>
              <div className="text-sm text-gray-600">Cancelled</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search trips..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Sort by Date</SelectItem>
                  <SelectItem value="budget">Sort by Budget</SelectItem>
                  <SelectItem value="members">Sort by Members</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Trips List */}
        <Card>
          <CardHeader>
            <CardTitle>Trip List</CardTitle>
            <CardDescription>Manage and monitor all user trips</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trips.map((trip) => (
                <div key={trip.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-start">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium">{trip.title}</h4>
                        <Badge className={getStatusColor(trip.status)}>
                          {trip.status}
                        </Badge>
                        <Badge className={getTypeColor(trip.type)}>
                          {trip.type}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {trip.destination}
                      </div>
                      <div className="text-sm text-gray-500">{trip.id}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium">{trip.traveler}</div>
                      <div className="text-xs text-gray-600">{trip.email}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {trip.startDate}
                      </div>
                      <div className="text-xs text-gray-600">to {trip.endDate}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {trip.members} members
                      </div>
                      <div className="text-sm flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        ₹{trip.budget.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-600">{trip.bookings} bookings</div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-4 w-4" />
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
