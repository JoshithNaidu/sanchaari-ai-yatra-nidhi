
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
  CheckCircle,
  X,
  Flag,
  Eye,
  User,
  MessageSquare,
  Star,
  Image,
  AlertTriangle,
  Clock
} from 'lucide-react';

const AdminUGC = () => {
  const [filterStatus, setFilterStatus] = useState('pending');

  const ugcItems = [
    {
      id: "UGC001",
      type: "Review",
      contentPreview: "Amazing stay at this heritage hotel. The staff was incredibly helpful and the location was perfect for exploring the old city...",
      author: "TravelLover123",
      authorProfile: "Verified • 15 trips",
      destinationId: "DEST001",
      listingTitle: "Heritage Palace Hotel, Jaipur",
      mediaCount: 3,
      wordCount: 145,
      aiToxicityScore: 0.05,
      flagCount: 0,
      rating: 5,
      submittedAt: "2024-05-30 14:30:00",
      moderationStatus: "Pending"
    },
    {
      id: "UGC002",
      type: "Experience",
      contentPreview: "Worst service ever! They charged extra for everything and the room was dirty. Avoid this place at all costs...",
      author: "AngryCust99",
      authorProfile: "New User • 1 trip",
      destinationId: "DEST002",
      listingTitle: "Budget Inn, Delhi",
      mediaCount: 1,
      wordCount: 89,
      aiToxicityScore: 0.75,
      flagCount: 2,
      rating: 1,
      submittedAt: "2024-05-30 12:15:00",
      moderationStatus: "Flagged"
    },
    {
      id: "UGC003",
      type: "Trip Story",
      contentPreview: "Our 7-day Kerala backwater journey was absolutely magical. Started from Alleppey and ended in Kumarakom...",
      author: "FamilyTraveler",
      authorProfile: "Verified • 8 trips",
      destinationId: "DEST003",
      listingTitle: "Kerala Backwaters Package",
      mediaCount: 12,
      wordCount: 1200,
      aiToxicityScore: 0.02,
      flagCount: 0,
      rating: 5,
      submittedAt: "2024-05-29 18:45:00",
      moderationStatus: "Approved"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Flagged': return 'bg-red-100 text-red-800';
      case 'Rejected': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getToxicityColor = (score: number) => {
    if (score < 0.2) return 'text-green-600';
    if (score < 0.5) return 'text-yellow-600';
    return 'text-red-600';
  };

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
              <h1 className="text-2xl font-bold text-gray-900">User-Generated Content Moderation</h1>
            </div>
            <div className="flex items-center gap-4">
              <select 
                className="border rounded px-3 py-1 text-sm"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Content</option>
                <option value="pending">Pending Review</option>
                <option value="flagged">Flagged</option>
                <option value="approved">Approved</option>
              </select>
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
          
          {/* UGC Moderation Table */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Content Moderation Queue</CardTitle>
                <CardDescription>Review and moderate user-generated reviews, experiences, and trip stories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Content</TableHead>
                        <TableHead>Author & Listing</TableHead>
                        <TableHead>Moderation Data</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {ugcItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">{item.type}</Badge>
                                {item.mediaCount > 0 && (
                                  <div className="flex items-center gap-1">
                                    <Image className="h-3 w-3" />
                                    <span className="text-xs">{item.mediaCount}</span>
                                  </div>
                                )}
                                {item.rating && (
                                  <div className="flex items-center gap-1">
                                    <Star className="h-3 w-3 text-yellow-500" />
                                    <span className="text-xs">{item.rating}/5</span>
                                  </div>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 line-clamp-2">
                                {item.contentPreview}
                              </p>
                              <p className="text-xs text-gray-500">{item.wordCount} words</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                <span className="text-sm font-medium">{item.author}</span>
                              </div>
                              <p className="text-xs text-gray-500">{item.authorProfile}</p>
                              <p className="text-xs font-medium">{item.listingTitle}</p>
                              <p className="text-xs text-gray-500">{item.submittedAt}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-1">
                                <span className="text-xs">AI Score:</span>
                                <span className={`text-xs font-medium ${getToxicityColor(item.aiToxicityScore)}`}>
                                  {(item.aiToxicityScore * 100).toFixed(1)}%
                                </span>
                              </div>
                              {item.flagCount > 0 && (
                                <div className="flex items-center gap-1">
                                  <Flag className="h-3 w-3 text-red-500" />
                                  <span className="text-xs text-red-600">{item.flagCount} flags</span>
                                </div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(item.moderationStatus)}>
                              {item.moderationStatus}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                <CheckCircle className="h-3 w-3 text-green-600" />
                              </Button>
                              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                <X className="h-3 w-3 text-red-600" />
                              </Button>
                              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                <Eye className="h-3 w-3" />
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

          {/* Moderation Tools Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Moderation Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Bulk Approve
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <X className="h-4 w-4" />
                    Bulk Reject
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Flag className="h-4 w-4" />
                    Flag for Review
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Send Message
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium mb-3">Queue Stats</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Pending Review</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Flagged Items</span>
                      <span className="font-medium text-red-600">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Auto-Approved</span>
                      <span className="font-medium text-green-600">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span>This Week</span>
                      <span className="font-medium">188</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>AI Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-3 w-3 text-yellow-500" />
                    <span>3 items need human review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-blue-500" />
                    <span>Avg review time: 2.5 min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>95.2% accuracy this week</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUGC;
