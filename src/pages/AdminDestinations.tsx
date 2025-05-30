
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Search, Filter, Eye, Edit, MapPin, Star, TrendingUp } from 'lucide-react';

const AdminDestinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Mock destination data
  const destinations = [
    {
      id: 'D001',
      name: 'Goa',
      category: 'Beach',
      country: 'India',
      state: 'Goa',
      rating: 4.8,
      totalTrips: 1245,
      status: 'active',
      featured: true,
      popularityScore: 95,
      lastUpdated: '2024-12-20'
    },
    {
      id: 'D002',
      name: 'Mumbai',
      category: 'City',
      country: 'India',
      state: 'Maharashtra',
      rating: 4.5,
      totalTrips: 2890,
      status: 'active',
      featured: true,
      popularityScore: 92,
      lastUpdated: '2024-12-18'
    },
    {
      id: 'D003',
      name: 'Kerala Backwaters',
      category: 'Nature',
      country: 'India',
      state: 'Kerala',
      rating: 4.9,
      totalTrips: 876,
      status: 'active',
      featured: false,
      popularityScore: 88,
      lastUpdated: '2024-12-15'
    },
    {
      id: 'D004',
      name: 'Rajasthan Desert',
      category: 'Adventure',
      country: 'India',
      state: 'Rajasthan',
      rating: 4.7,
      totalTrips: 654,
      status: 'pending_review',
      featured: false,
      popularityScore: 78,
      lastUpdated: '2024-12-22'
    },
    {
      id: 'D005',
      name: 'Manali',
      category: 'Mountain',
      country: 'India',
      state: 'Himachal Pradesh',
      rating: 4.6,
      totalTrips: 1089,
      status: 'active',
      featured: true,
      popularityScore: 85,
      lastUpdated: '2024-12-19'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'pending_review':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending Review</Badge>;
      case 'inactive':
        return <Badge className="bg-red-100 text-red-800">Inactive</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getCategoryBadge = (category: string) => {
    const colors = {
      'Beach': 'bg-blue-50 text-blue-700',
      'City': 'bg-gray-50 text-gray-700',
      'Nature': 'bg-green-50 text-green-700',
      'Adventure': 'bg-orange-50 text-orange-700',
      'Mountain': 'bg-purple-50 text-purple-700'
    };
    return <Badge variant="outline" className={colors[category] || 'bg-gray-50 text-gray-700'}>{category}</Badge>;
  };

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || destination.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/admin" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Destination Control</h1>
              <p className="text-sm text-gray-600">Manage travel destinations and their content</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Destinations</p>
                  <p className="text-2xl font-bold">247</p>
                </div>
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Featured</p>
                  <p className="text-2xl font-bold">18</p>
                </div>
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Review</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg. Rating</p>
                  <p className="text-2xl font-bold">4.7</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by destination name, state, or ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Beach">Beach</SelectItem>
                  <SelectItem value="City">City</SelectItem>
                  <SelectItem value="Nature">Nature</SelectItem>
                  <SelectItem value="Adventure">Adventure</SelectItem>
                  <SelectItem value="Mountain">Mountain</SelectItem>
                </SelectContent>
              </Select>
              <Button>Add Destination</Button>
            </div>
          </CardContent>
        </Card>

        {/* Destinations Table */}
        <Card>
          <CardHeader>
            <CardTitle>Destinations ({filteredDestinations.length})</CardTitle>
            <CardDescription>
              Showing {filteredDestinations.length} of {destinations.length} destinations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Destination</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Popularity</TableHead>
                    <TableHead>Total Trips</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDestinations.map((destination) => (
                    <TableRow key={destination.id}>
                      <TableCell>
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="font-medium">{destination.name}</div>
                            {destination.featured && <Star className="h-3 w-3 text-yellow-500 fill-current" />}
                          </div>
                          <div className="text-sm text-gray-500">{destination.state}, {destination.country}</div>
                          <div className="text-xs text-gray-400">ID: {destination.id}</div>
                        </div>
                      </TableCell>
                      <TableCell>{getCategoryBadge(destination.category)}</TableCell>
                      <TableCell>{getStatusBadge(destination.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          {destination.rating}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${destination.popularityScore}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-600">{destination.popularityScore}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{destination.totalTrips.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDestinations;
