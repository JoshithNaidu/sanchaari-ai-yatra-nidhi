
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MessageSquare, TrendingUp, Download } from 'lucide-react';

const PartnerCustomerFeedbackReports = () => {
  const [filter, setFilter] = useState('all');

  const feedbackData = [
    {
      id: 1,
      traveler: 'John Smith',
      date: '2024-01-15',
      rating: 5,
      comment: 'Amazing experience! The service was top-notch and the location was perfect.',
      listing: 'Luxury Suite',
      sentiment: 'positive'
    },
    {
      id: 2,
      traveler: 'Sarah Johnson',
      date: '2024-01-14',
      rating: 4,
      comment: 'Good value for money, but the check-in process could be improved.',
      listing: 'Adventure Tour',
      sentiment: 'neutral'
    },
    {
      id: 3,
      traveler: 'Mike Wilson',
      date: '2024-01-13',
      rating: 2,
      comment: 'Room was not as described and the WiFi was very slow.',
      listing: 'Standard Room',
      sentiment: 'negative'
    }
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'bg-green-100 text-green-800';
      case 'neutral': return 'bg-yellow-100 text-yellow-800';
      case 'negative': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Customer Feedback & Ratings</h1>
              <p className="text-gray-600">Monitor your service quality and customer satisfaction</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Export Feedback
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold flex items-center gap-2">
                4.2
                <div className="flex">
                  {renderStars(4)}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +0.3 from last month
                </span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">+12 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">NPS Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">+65</div>
              <p className="text-xs text-muted-foreground">Excellent score</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">Within 24 hours</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                onClick={() => setFilter('all')}
                size="sm"
              >
                All Reviews
              </Button>
              <Button
                variant={filter === 'positive' ? 'default' : 'outline'}
                onClick={() => setFilter('positive')}
                size="sm"
              >
                Positive
              </Button>
              <Button
                variant={filter === 'neutral' ? 'default' : 'outline'}
                onClick={() => setFilter('neutral')}
                size="sm"
              >
                Neutral
              </Button>
              <Button
                variant={filter === 'negative' ? 'default' : 'outline'}
                onClick={() => setFilter('negative')}
                size="sm"
              >
                Negative
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Feedback Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Feedback</CardTitle>
            <CardDescription>Latest customer reviews and ratings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {feedbackData.map((feedback) => (
                <div key={feedback.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="font-medium">{feedback.traveler}</div>
                      <div className="flex">{renderStars(feedback.rating)}</div>
                      <Badge className={getSentimentColor(feedback.sentiment)}>
                        {feedback.sentiment}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500">{feedback.date}</div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{feedback.listing}</div>
                  <div className="text-gray-800">{feedback.comment}</div>
                  <div className="mt-3 flex gap-2">
                    <Button variant="outline" size="sm">
                      Respond
                    </Button>
                    <Button variant="ghost" size="sm">
                      Mark as Addressed
                    </Button>
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

export default PartnerCustomerFeedbackReports;
