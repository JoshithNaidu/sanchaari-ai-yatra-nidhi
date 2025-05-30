
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowLeft, 
  Star, 
  MessageSquare, 
  TrendingUp,
  ThumbsUp,
  ThumbsDown,
  AlertTriangle,
  Reply,
  Flag
} from 'lucide-react';

const CustomerFeedbackReports = () => {
  const [ratingFilter, setRatingFilter] = useState('all');
  const [sentimentFilter, setSentimentFilter] = useState('all');
  const [expandedReview, setExpandedReview] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  // Mock data
  const mockReviews = [
    {
      id: '1',
      guest: 'John Smith',
      listing: 'Mountain Villa',
      date: '2024-06-01',
      rating: 5,
      sentiment: 'positive',
      snippet: 'Amazing place with beautiful views...',
      fullText: 'Amazing place with beautiful views. The host was very responsive and the property was exactly as described. Would definitely stay again!',
      tags: ['views', 'responsive host', 'accurate description']
    },
    {
      id: '2',
      guest: 'Sarah Johnson',
      listing: 'Beach House',
      date: '2024-06-02',
      rating: 2,
      sentiment: 'negative',
      snippet: 'WiFi issues and bathroom problems...',
      fullText: 'WiFi was constantly dropping and the bathroom had some cleanliness issues. The location was good but these basic amenities need attention.',
      tags: ['wifi', 'bathroom', 'cleanliness', 'location']
    },
    {
      id: '3',
      guest: 'Mike Davis',
      listing: 'City Apartment',
      date: '2024-06-03',
      rating: 4,
      sentiment: 'positive',
      snippet: 'Great location, easy check-in process...',
      fullText: 'Great location with easy check-in process. The apartment was clean and well-equipped. Only minor issue was some noise from the street.',
      tags: ['location', 'check-in', 'clean', 'noise']
    }
  ];

  const sentimentData = {
    positive: 65,
    neutral: 25,
    negative: 10
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'bg-green-100 text-green-800';
      case 'negative': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/partner/dashboard" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Customer Feedback & Ratings</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Summary Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Overall Rating</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">4.2</p>
                    <div className="flex">{renderStars(4)}</div>
                  </div>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">NPS Score</p>
                  <p className="text-2xl font-bold">72</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-xs text-green-600 mt-2">+8 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Reviews</p>
                  <p className="text-2xl font-bold">234</p>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-xs text-green-600 mt-2">+15 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Response Rate</p>
                  <p className="text-2xl font-bold">89%</p>
                </div>
                <Reply className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-xs text-green-600 mt-2">+5% improvement</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Sentiment Analytics */}
          <Card>
            <CardHeader>
              <CardTitle>Review Sentiment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Positive</span>
                  </div>
                  <span className="font-medium">{sentimentData.positive}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: `${sentimentData.positive}%`}}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-gray-400"></div>
                    <span className="text-sm">Neutral</span>
                  </div>
                  <span className="font-medium">{sentimentData.neutral}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-400 h-2 rounded-full" style={{width: `${sentimentData.neutral}%`}}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsDown className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Negative</span>
                  </div>
                  <span className="font-medium">{sentimentData.negative}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{width: `${sentimentData.negative}%`}}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tag Cloud */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Common Keywords</CardTitle>
              <CardDescription>Auto-extracted from reviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['wifi', 'bathroom', 'check-in', 'location', 'views', 'cleanliness', 'responsive host', 'noise', 'accurate description'].map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4 Stars</SelectItem>
                  <SelectItem value="3">3 Stars</SelectItem>
                  <SelectItem value="2">2 Stars</SelectItem>
                  <SelectItem value="1">1 Star</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sentimentFilter} onValueChange={setSentimentFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by sentiment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sentiments</SelectItem>
                  <SelectItem value="positive">Positive</SelectItem>
                  <SelectItem value="neutral">Neutral</SelectItem>
                  <SelectItem value="negative">Negative</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Reviews Table */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Reviews</CardTitle>
            <CardDescription>Click on rows to expand and respond</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Guest</TableHead>
                  <TableHead>Listing</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Sentiment</TableHead>
                  <TableHead>Review</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockReviews.map((review) => (
                  <React.Fragment key={review.id}>
                    <TableRow 
                      className="cursor-pointer hover:bg-gray-50"
                      onClick={() => setExpandedReview(expandedReview === review.id ? null : review.id)}
                    >
                      <TableCell>{review.guest}</TableCell>
                      <TableCell>{review.listing}</TableCell>
                      <TableCell>{review.date}</TableCell>
                      <TableCell>
                        <div className="flex">{renderStars(review.rating)}</div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getSentimentColor(review.sentiment)}>
                          {review.sentiment}
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{review.snippet}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Reply className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Flag className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    
                    {expandedReview === review.id && (
                      <TableRow>
                        <TableCell colSpan={7} className="bg-gray-50">
                          <div className="p-4 space-y-4">
                            <div>
                              <h4 className="font-medium mb-2">Full Review:</h4>
                              <p className="text-gray-700">{review.fullText}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-medium mb-2">Keywords:</h4>
                              <div className="flex flex-wrap gap-1">
                                {review.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-medium mb-2">Reply to Review:</h4>
                              <Textarea 
                                placeholder="Write your response..."
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                className="mb-2"
                              />
                              <div className="flex gap-2">
                                <Button size="sm">Send Reply</Button>
                                <Button size="sm" variant="outline">Mark Resolved</Button>
                                <Button size="sm" variant="outline">
                                  <AlertTriangle className="h-3 w-3 mr-1" />
                                  Report Abuse
                                </Button>
                              </div>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomerFeedbackReports;
