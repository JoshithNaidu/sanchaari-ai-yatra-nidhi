
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { 
  MessageSquare, TrendingUp, Users, Clock, 
  Bot, CheckCircle, AlertTriangle, BarChart3
} from 'lucide-react';

const AdminChatbotAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const chatbotMetrics = {
    totalConversations: 8420,
    successfulResolutions: 7156,
    handoffRate: 15.2,
    avgResponseTime: 1.2,
    userSatisfaction: 4.1,
    popularQueries: [
      { query: 'Hotel recommendations in Goa', count: 420 },
      { query: 'Flight booking assistance', count: 350 },
      { query: 'Best time to visit Kerala', count: 290 },
      { query: 'Budget travel tips', count: 245 },
      { query: 'Cancellation policy', count: 210 }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Chatbot Analytics</h1>
              <p className="text-sm text-gray-600">Monitor AI assistant performance and user interactions</p>
            </div>
            <div className="flex items-center gap-4">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
              <Link to="/admin">
                <Button variant="outline" size="sm">Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{chatbotMetrics.totalConversations.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+15% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{((chatbotMetrics.successfulResolutions / chatbotMetrics.totalConversations) * 100).toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">+2.5% improvement</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{chatbotMetrics.avgResponseTime}s</div>
              <p className="text-xs text-muted-foreground">-0.2s faster</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">User Satisfaction</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{chatbotMetrics.userSatisfaction}/5</div>
              <p className="text-xs text-muted-foreground">+0.3 from last week</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Bot Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Resolution Rate</span>
                  <span className="text-sm">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">User Engagement</span>
                  <span className="text-sm">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Handoff Rate</span>
                  <span className="text-sm">{chatbotMetrics.handoffRate}%</span>
                </div>
                <Progress value={chatbotMetrics.handoffRate} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Popular Queries */}
          <Card>
            <CardHeader>
              <CardTitle>Popular User Queries</CardTitle>
              <CardDescription>Most frequently asked questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {chatbotMetrics.popularQueries.map((query, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium">{query.query}</div>
                      <div className="text-xs text-gray-500">{query.count} times asked</div>
                    </div>
                    <Button size="sm" variant="outline">
                      <BarChart3 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Conversation Flow */}
          <Card>
            <CardHeader>
              <CardTitle>Conversation Flow</CardTitle>
              <CardDescription>User journey through chatbot interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium">Greeting & Welcome</div>
                    <div className="text-sm text-gray-600">95% completion rate</div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">95%</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium">Query Understanding</div>
                    <div className="text-sm text-gray-600">88% accuracy</div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">88%</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium">Solution Provided</div>
                    <div className="text-sm text-gray-600">82% success rate</div>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">82%</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium">User Satisfaction</div>
                    <div className="text-sm text-gray-600">4.1/5 average rating</div>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">4.1</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminChatbotAnalytics;
