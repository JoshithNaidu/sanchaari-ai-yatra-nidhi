
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  ArrowLeft, Search, Filter, Eye, ThumbsUp, ThumbsDown, 
  Flag, MessageSquare, Image, Star, Calendar 
} from 'lucide-react';

const AdminUGC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContent, setSelectedContent] = useState<any>(null);

  const reviews = [
    {
      id: 'REV001',
      userName: 'Priya Sharma',
      destination: 'Goa',
      rating: 5,
      title: 'Amazing beach vacation!',
      content: 'Had the most wonderful time at the beaches. The hotel was fantastic and the service was top-notch.',
      date: '2024-05-25',
      status: 'Published',
      likes: 24,
      reports: 0,
      verified: true
    },
    {
      id: 'REV002',
      userName: 'Rahul Kumar',
      destination: 'Shimla',
      rating: 4,
      title: 'Great mountain getaway',
      content: 'Beautiful views and cool weather. Some issues with the hotel but overall a good experience.',
      date: '2024-05-24',
      status: 'Pending',
      likes: 8,
      reports: 1,
      verified: false
    },
    {
      id: 'REV003',
      userName: 'Anonymous User',
      destination: 'Delhi',
      rating: 1,
      title: 'Terrible experience',
      content: 'This place was awful. Rude staff, dirty rooms, and overpriced everything. Complete waste of money.',
      date: '2024-05-23',
      status: 'Flagged',
      likes: 2,
      reports: 5,
      verified: false
    }
  ];

  const photos = [
    {
      id: 'PHT001',
      userName: 'Amit Patel',
      destination: 'Kerala',
      caption: 'Sunset at Varkala Beach',
      date: '2024-05-26',
      status: 'Published',
      likes: 45,
      reports: 0,
      imageUrl: '/api/placeholder/300/200'
    },
    {
      id: 'PHT002',
      userName: 'Sneha Singh',
      destination: 'Rajasthan',
      caption: 'Majestic Jaipur Palace',
      date: '2024-05-25',
      status: 'Pending',
      likes: 12,
      reports: 0,
      imageUrl: '/api/placeholder/300/200'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Flagged': return 'bg-red-100 text-red-800';
      case 'Rejected': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

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
                <h1 className="text-2xl font-bold text-gray-900">User Generated Content</h1>
                <p className="text-sm text-gray-600">Moderate reviews, photos, and user content</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">+23 this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Photos Uploaded</CardTitle>
              <Image className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,456</div>
              <p className="text-xs text-muted-foreground">+89 this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">67</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Flagged Content</CardTitle>
              <Flag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Needs moderation</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="reviews" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="reviews">Reviews & Ratings</TabsTrigger>
            <TabsTrigger value="photos">Travel Photos</TabsTrigger>
            <TabsTrigger value="flagged">Flagged Content</TabsTrigger>
          </TabsList>

          <TabsContent value="reviews" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Search & Filters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search reviews..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <select className="p-2 border rounded">
                    <option>All Status</option>
                    <option>Published</option>
                    <option>Pending</option>
                    <option>Flagged</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Reviews Table */}
            <Card>
              <CardHeader>
                <CardTitle>User Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Destination</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Review</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Engagement</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reviews.map((review) => (
                        <TableRow key={review.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{review.userName}</div>
                              {review.verified && (
                                <Badge variant="outline" className="text-xs">Verified</Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>{review.destination}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              {renderStars(review.rating)}
                              <span className="ml-1 text-sm">{review.rating}</span>
                            </div>
                          </TableCell>
                          <TableCell className="max-w-xs">
                            <div>
                              <div className="font-medium text-sm">{review.title}</div>
                              <div className="text-xs text-gray-500 truncate">{review.content}</div>
                            </div>
                          </TableCell>
                          <TableCell className="text-sm">{review.date}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(review.status)}>
                              {review.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div className="flex items-center gap-1">
                                <ThumbsUp className="h-3 w-3" />
                                {review.likes}
                              </div>
                              {review.reports > 0 && (
                                <div className="flex items-center gap-1 text-red-600">
                                  <Flag className="h-3 w-3" />
                                  {review.reports}
                                </div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline" onClick={() => setSelectedContent(review)}>
                                    <Eye className="h-3 w-3 mr-1" />
                                    View
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle>Review Details</DialogTitle>
                                  </DialogHeader>
                                  {selectedContent && (
                                    <div className="space-y-4">
                                      <div className="flex items-center gap-2">
                                        {renderStars(selectedContent.rating)}
                                        <span className="font-medium">{selectedContent.rating}/5</span>
                                      </div>
                                      <h3 className="font-semibold">{selectedContent.title}</h3>
                                      <p className="text-gray-700">{selectedContent.content}</p>
                                      <div className="flex justify-between text-sm text-gray-500">
                                        <span>By {selectedContent.userName}</span>
                                        <span>{selectedContent.date}</span>
                                      </div>
                                    </div>
                                  )}
                                  <DialogFooter>
                                    <Button variant="outline">
                                      <ThumbsDown className="h-4 w-4 mr-2" />
                                      Reject
                                    </Button>
                                    <Button>
                                      <ThumbsUp className="h-4 w-4 mr-2" />
                                      Approve
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                              {review.status === 'Pending' && (
                                <>
                                  <Button size="sm" variant="outline">Approve</Button>
                                  <Button size="sm" variant="outline">Reject</Button>
                                </>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="photos" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Travel Photos</CardTitle>
                <CardDescription>User-uploaded travel photos and content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photos.map((photo) => (
                    <Card key={photo.id}>
                      <CardHeader className="p-0">
                        <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                          <Image className="h-12 w-12 text-gray-400" />
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-sm">{photo.caption}</h3>
                            <Badge className={getStatusColor(photo.status)} size="sm">
                              {photo.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-500">By {photo.userName}</p>
                          <p className="text-xs text-gray-500">{photo.destination} • {photo.date}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-xs">
                              <ThumbsUp className="h-3 w-3" />
                              {photo.likes}
                            </div>
                            <div className="flex gap-1">
                              <Button size="sm" variant="outline">Approve</Button>
                              <Button size="sm" variant="outline">Reject</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="flagged" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-red-600" />
                  Flagged Content
                </CardTitle>
                <CardDescription>Content that has been reported by users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reviews.filter(r => r.status === 'Flagged').map((review) => (
                    <div key={review.id} className="border border-red-200 rounded-lg p-4 bg-red-50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{review.title}</h3>
                          <p className="text-sm text-gray-600">By {review.userName} • {review.destination}</p>
                        </div>
                        <Badge className="bg-red-100 text-red-800">
                          {review.reports} reports
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{review.content}</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3 mr-1" />
                          Review Details
                        </Button>
                        <Button size="sm" variant="outline">
                          Keep Published
                        </Button>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          Remove Content
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminUGC;
