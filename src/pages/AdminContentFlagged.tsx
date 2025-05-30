
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  ArrowLeft, Search, Filter, Eye, Flag, AlertTriangle, 
  Clock, CheckCircle, X, User
} from 'lucide-react';

const AdminContentFlagged = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ageFilter, setAgeFilter] = useState('all');

  const flaggedContent = [
    {
      id: 'FLAG001',
      source: 'Review',
      content: 'This place was terrible, waste of money and time...',
      flagCount: 5,
      type: 'Spam',
      severity: 'High',
      timestamp: '2024-05-30 14:30',
      user: 'anonymous_user_123',
      reportedBy: ['user1', 'user2', 'user3']
    },
    {
      id: 'FLAG002',
      source: 'Chat Comment',
      content: 'Hey everyone, check out this amazing deal on my website...',
      flagCount: 3,
      type: 'Promotional Spam',
      severity: 'Medium',
      timestamp: '2024-05-30 12:15',
      user: 'spammer_account',
      reportedBy: ['user4', 'user5']
    },
    {
      id: 'FLAG003',
      source: 'Blog Comment',
      content: 'This article is completely wrong and misleading...',
      flagCount: 2,
      type: 'Misinformation',
      severity: 'Low',
      timestamp: '2024-05-29 16:45',
      user: 'travel_critic_99',
      reportedBy: ['user6']
    },
    {
      id: 'FLAG004',
      source: 'Trip Review',
      content: 'Inappropriate content with offensive language...',
      flagCount: 8,
      type: 'Inappropriate',
      severity: 'High',
      timestamp: '2024-05-29 09:20',
      user: 'problematic_user',
      reportedBy: ['user7', 'user8', 'user9', 'user10']
    }
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'High': return <Badge className="bg-red-100 text-red-800">High</Badge>;
      case 'Medium': return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>;
      case 'Low': return <Badge className="bg-blue-100 text-blue-800">Low</Badge>;
      default: return <Badge variant="outline">{severity}</Badge>;
    }
  };

  const getSourceBadge = (source: string) => {
    const colors = {
      'Review': 'bg-green-50 text-green-700',
      'Chat Comment': 'bg-blue-50 text-blue-700',
      'Blog Comment': 'bg-purple-50 text-purple-700',
      'Trip Review': 'bg-orange-50 text-orange-700'
    };
    return <Badge variant="outline" className={colors[source] || 'bg-gray-50 text-gray-700'}>{source}</Badge>;
  };

  const filteredContent = flaggedContent.filter(item => {
    const matchesSearch = item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.user.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesAge = true;
    if (ageFilter !== 'all') {
      const itemDate = new Date(item.timestamp);
      const now = new Date();
      const diffTime = now.getTime() - itemDate.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (ageFilter === '24h' && diffDays > 1) matchesAge = false;
      if (ageFilter === '7d' && diffDays > 7) matchesAge = false;
      if (ageFilter === '30d' && diffDays > 30) matchesAge = false;
    }
    
    return matchesSearch && matchesAge;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/admin" className="flex items-center text-gray-600 hover:text-blue-600">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Admin
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Flagged Content Review</h1>
              <p className="text-sm text-gray-600">Central inbox for all content flagged by users</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Flagged</CardTitle>
              <Flag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">+12 this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Severity</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Needs immediate attention</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">Awaiting action</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resolved Today</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">Actions taken</p>
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
                  placeholder="Search flagged content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={ageFilter} onValueChange={setAgeFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by age" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="24h">Last 24 Hours</SelectItem>
                  <SelectItem value="7d">Last 7 Days</SelectItem>
                  <SelectItem value="30d">Last 30 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Flagged Content Table */}
        <Card>
          <CardHeader>
            <CardTitle>Flagged Content ({filteredContent.length})</CardTitle>
            <CardDescription>Content reported by users requiring moderation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Source</TableHead>
                    <TableHead>Content</TableHead>
                    <TableHead>Flag Count</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContent.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{getSourceBadge(item.source)}</TableCell>
                      <TableCell className="max-w-xs">
                        <div className="truncate text-sm">{item.content}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Flag className="h-3 w-3 text-red-600" />
                          <span className="font-medium">{item.flagCount}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{item.type}</Badge>
                      </TableCell>
                      <TableCell>{getSeverityBadge(item.severity)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span className="text-sm">{item.user}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">{item.timestamp}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3 mr-1" />
                            Review
                          </Button>
                          <Button size="sm" variant="outline">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Dismiss
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                            <X className="h-3 w-3 mr-1" />
                            Take Action
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

export default AdminContentFlagged;
