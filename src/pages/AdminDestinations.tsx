
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  ArrowLeft,
  Plus,
  Edit,
  Eye,
  Globe,
  MapPin,
  Star,
  Archive,
  Upload,
  Save,
  Settings
} from 'lucide-react';

const AdminDestinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
      id: "DEST001",
      name: "Goa",
      region: "Western India",
      country: "India",
      languages: ["EN", "HI", "KN"],
      tags: ["Beach", "Nightlife", "Portuguese Heritage"],
      active: true,
      featured: true,
      lastEdited: "2024-05-28 14:30:00",
      editor: "Content Manager"
    },
    {
      id: "DEST002",
      name: "Manali",
      region: "Northern India",
      country: "India",
      languages: ["EN", "HI"],
      tags: ["Mountains", "Adventure", "Snow"],
      active: true,
      featured: false,
      lastEdited: "2024-05-29 10:15:00",
      editor: "Travel Writer"
    },
    {
      id: "DEST003",
      name: "Kerala Backwaters",
      region: "Southern India",
      country: "India",
      languages: ["EN", "HI", "ML"],
      tags: ["Backwaters", "Ayurveda", "Nature"],
      active: false,
      featured: false,
      lastEdited: "2024-05-30 16:45:00",
      editor: "Content Strategist"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin/dashboard" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Manage Destinations</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Destination
              </Button>
              <Link to="/admin/logout">
                <Button variant="destructive" size="sm">Logout</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Destinations Table */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Destination Content Management</CardTitle>
                <CardDescription>Edit and manage travel guide content for all destinations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Destination</TableHead>
                        <TableHead>Region</TableHead>
                        <TableHead>Languages</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Modified</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {destinations.map((dest) => (
                        <TableRow key={dest.id}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-gray-500" />
                              <div>
                                <p className="font-medium">{dest.name}</p>
                                <p className="text-xs text-gray-500">{dest.id}</p>
                              </div>
                              {dest.featured && <Star className="h-4 w-4 text-yellow-500" />}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="text-sm">{dest.region}</p>
                              <p className="text-xs text-gray-500">{dest.country}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              {dest.languages.map((lang, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {lang}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <Badge className={dest.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                                {dest.active ? 'Active' : 'Inactive'}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="text-xs">{dest.lastEdited}</p>
                              <p className="text-xs text-gray-500">by {dest.editor}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Edit className="h-3 w-3 mr-1" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                <Eye className="h-3 w-3 mr-1" />
                                Preview
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

          {/* Content Editor Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Content Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full gap-2">
                    <Edit className="h-4 w-4" />
                    Edit Content
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Upload className="h-4 w-4" />
                    Upload Media
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Globe className="h-4 w-4" />
                    SEO Settings
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Archive className="h-4 w-4" />
                    Archive
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium mb-3">Content Sections</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Overview</span>
                      <Badge variant="outline">Complete</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Things to Do</span>
                      <Badge variant="outline">Complete</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Food & Culture</span>
                      <Badge className="bg-yellow-100 text-yellow-800">Draft</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Transport</span>
                      <Badge variant="outline">Complete</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Approval Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Content Complete</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">SEO Optimized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Pending Review</span>
                  </div>
                  <Button size="sm" className="w-full mt-4">
                    <Save className="h-3 w-3 mr-1" />
                    Publish Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDestinations;
