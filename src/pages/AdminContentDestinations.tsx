
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  ArrowLeft, Search, Filter, Eye, Edit, Plus, MapPin, Globe, 
  Calendar, Star, Eye as EyeIcon, Trash2
} from 'lucide-react';

const AdminContentDestinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibilityFilter, setVisibilityFilter] = useState('all');

  const destinations = [
    {
      id: 'DEST001',
      name: 'Goa Beaches',
      country: 'India',
      region: 'South India',
      visibility: 'Public',
      popularityScore: 95,
      lastUpdated: '2024-05-28',
      category: 'Beach',
      slug: 'goa-beaches'
    },
    {
      id: 'DEST002',
      name: 'Kerala Backwaters',
      country: 'India',
      region: 'South India',
      visibility: 'Public',
      popularityScore: 88,
      lastUpdated: '2024-05-25',
      category: 'Nature',
      slug: 'kerala-backwaters'
    },
    {
      id: 'DEST003',
      name: 'Rajasthan Desert',
      country: 'India',
      region: 'North India',
      visibility: 'Private',
      popularityScore: 72,
      lastUpdated: '2024-05-30',
      category: 'Culture',
      slug: 'rajasthan-desert'
    }
  ];

  const getVisibilityBadge = (visibility: string) => {
    return visibility === 'Public' 
      ? <Badge className="bg-green-100 text-green-800">Public</Badge>
      : <Badge className="bg-gray-100 text-gray-800">Private</Badge>;
  };

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVisibility = visibilityFilter === 'all' || destination.visibility.toLowerCase() === visibilityFilter;
    return matchesSearch && matchesVisibility;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Admin
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Manage Destinations</h1>
                <p className="text-sm text-gray-600">Add, edit, and organize travel destinations</p>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Destination
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create New Destination</DialogTitle>
                  <DialogDescription>Add a new travel destination with rich metadata</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Name</label>
                      <Input placeholder="Destination name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Slug</label>
                      <Input placeholder="destination-slug" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium">Country</label>
                      <Input placeholder="India" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">City</label>
                      <Input placeholder="City name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Region</label>
                      <Input placeholder="North India" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Category</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beach">Beach</SelectItem>
                          <SelectItem value="culture">Culture</SelectItem>
                          <SelectItem value="nature">Nature</SelectItem>
                          <SelectItem value="adventure">Adventure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Season</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Best season" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="winter">Winter</SelectItem>
                          <SelectItem value="summer">Summer</SelectItem>
                          <SelectItem value="monsoon">Monsoon</SelectItem>
                          <SelectItem value="all-year">All Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Save as Draft</Button>
                  <Button>Publish Now</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Destinations</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">247</div>
              <p className="text-xs text-muted-foreground">+12 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Published</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">198</div>
              <p className="text-xs text-muted-foreground">80% of total</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Drafts</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">49</div>
              <p className="text-xs text-muted-foreground">Pending review</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Popularity</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">82%</div>
              <p className="text-xs text-muted-foreground">+5% this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Search & Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 items-end">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={visibilityFilter} onValueChange={setVisibilityFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by visibility" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Visibility</SelectItem>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Destinations Table */}
        <Card>
          <CardHeader>
            <CardTitle>Destinations ({filteredDestinations.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>Visibility</TableHead>
                    <TableHead>Popularity Score</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDestinations.map((destination) => (
                    <TableRow key={destination.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{destination.name}</div>
                          <div className="text-sm text-gray-500">{destination.category}</div>
                        </div>
                      </TableCell>
                      <TableCell>{destination.country}</TableCell>
                      <TableCell>{destination.region}</TableCell>
                      <TableCell>{getVisibilityBadge(destination.visibility)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${destination.popularityScore}%` }}
                            ></div>
                          </div>
                          <span className="text-sm">{destination.popularityScore}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">{destination.lastUpdated}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <EyeIcon className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                          <Link to={`/admin/trips?destination=${destination.slug}`}>
                            <Button size="sm" variant="outline">
                              Related Trips
                            </Button>
                          </Link>
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

export default AdminContentDestinations;
