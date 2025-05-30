
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  Settings, 
  Edit,
  Save,
  Check,
  Database
} from 'lucide-react';

const AdminUserPreferences = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [editingId, setEditingId] = useState<string | null>(null);

  // Mock preference data
  const preferences = [
    {
      id: 'PREF001',
      userId: 'USR001',
      userName: 'Rajesh Kumar',
      category: 'Travel',
      preferenceName: 'Preferred Destinations',
      preferenceValue: 'Mountains, Beaches, Historical Sites',
      lastUpdated: '2024-03-15',
      systemImpact: 'Recommendations, Search Rankings'
    },
    {
      id: 'PREF002',
      userId: 'USR001',
      userName: 'Rajesh Kumar',
      category: 'Dietary',
      preferenceName: 'Food Preferences',
      preferenceValue: 'Vegetarian, No Nuts',
      lastUpdated: '2024-04-10',
      systemImpact: 'Hotel & Restaurant Suggestions'
    },
    {
      id: 'PREF003',
      userId: 'USR002',
      userName: 'Priya Sharma',
      category: 'Budget',
      preferenceName: 'Price Range',
      preferenceValue: '₹50,000 - ₹1,00,000',
      lastUpdated: '2024-05-01',
      systemImpact: 'Package Filters, Hotel Tier'
    },
    {
      id: 'PREF004',
      userId: 'USR002',
      userName: 'Priya Sharma',
      category: 'Accommodation',
      preferenceName: 'Stay Preferences',
      preferenceValue: 'Hotels, Resorts, 4+ Star',
      lastUpdated: '2024-04-22',
      systemImpact: 'Booking Recommendations'
    },
    {
      id: 'PREF005',
      userId: 'USR003',
      userName: 'Amit Patel',
      category: 'Travel',
      preferenceName: 'Activity Interests',
      preferenceValue: 'Adventure Sports, Hiking, Cultural Tours',
      lastUpdated: '2024-05-15',
      systemImpact: 'Activity Suggestions'
    }
  ];

  const [editValues, setEditValues] = useState<{[key: string]: string}>({});

  const categories = [...new Set(preferences.map(p => p.category))];

  const filteredPreferences = preferences.filter(pref => {
    const matchesSearch = pref.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pref.preferenceValue.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pref.preferenceName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || pref.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const startEditing = (pref: any) => {
    setEditingId(pref.id);
    setEditValues({
      ...editValues,
      [pref.id]: pref.preferenceValue
    });
  };

  const saveEdit = (prefId: string) => {
    // In a real implementation, this would update the database
    setEditingId(null);
  };

  const handleEditChange = (prefId: string, value: string) => {
    setEditValues({
      ...editValues,
      [prefId]: value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin/users/list" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Users
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">User Preference Management</h1>
                <p className="text-sm text-gray-600">View and adjust user preference data</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Database className="h-4 w-4 mr-2" />
              Sync with Recommender System
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Search and Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Search & Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by user, preference name, or value..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Preferences Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>User Preferences ({filteredPreferences.length})</CardTitle>
                <CardDescription>
                  View and edit user preference settings
                </CardDescription>
              </div>
              <div>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Manage Categories
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Preference</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>System Impact</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPreferences.map((pref) => (
                    <TableRow key={pref.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{pref.userName}</div>
                          <div className="text-xs text-gray-500">{pref.userId}</div>
                        </div>
                      </TableCell>
                      <TableCell>{pref.category}</TableCell>
                      <TableCell>{pref.preferenceName}</TableCell>
                      <TableCell>
                        {editingId === pref.id ? (
                          <Input
                            value={editValues[pref.id] || pref.preferenceValue}
                            onChange={(e) => handleEditChange(pref.id, e.target.value)}
                            className="h-8 w-full"
                          />
                        ) : (
                          <div className="text-sm">{pref.preferenceValue}</div>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{pref.lastUpdated}</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{pref.systemImpact}</div>
                      </TableCell>
                      <TableCell>
                        {editingId === pref.id ? (
                          <Button size="sm" variant="outline" onClick={() => saveEdit(pref.id)}>
                            <Save className="h-3 w-3 mr-1" />
                            Save
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" onClick={() => startEditing(pref)}>
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                        )}
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

export default AdminUserPreferences;
