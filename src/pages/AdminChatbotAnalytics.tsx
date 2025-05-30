
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MessageSquare, TrendingUp, TrendingDown, Clock, Users, BarChart3, AlertTriangle } from 'lucide-react';

const AdminChatbotAnalytics = () => {
  const [timeRange, setTimeRange] = useState('today');

  // Mock analytics data
  const chatbotMetrics = {
    totalConversations: 2847,
    averageSessionTime: '4m 32s',
    completionRate: 78.5,
    satisfactionRating: 4.2,
    dropOffRate: 21.5,
    handoffToHuman: 8.3,
    responseTime: '1.2s',
    activeUsers: 156
  };

  const conversationTopics = [
    { topic: 'Trip Planning', count: 892, percentage: 31.3 },
    { topic: 'Destination Info', count: 654, percentage: 23.0 },
    { topic: 'Booking Help', count: 487, percentage: 17.1 },
    { topic: 'General Questions', count: 432, percentage: 15.2 },
    { topic: 'Technical Support', count: 382, percentage: 13.4 }
  ];

  const performanceIssues = [
    {
      issue: 'High drop-off rate on destination queries',
      severity: 'high',
      affected: '15% of conversations',
      recommendation: 'Improve destination knowledge base'
    },
    {
      issue: 'Slow response time during peak hours',
      severity: 'medium',
      affected: '8% of conversations',
      recommendation: 'Scale chatbot infrastructure'
    },
    {
      issue: 'User confusion with booking flow',
      severity: 'medium',
      affected: '12% of conversations',
      recommendation: 'Simplify booking conversation flow'
    }
  ];

  const feedbackData = [
    { rating: 5, count: 347, percentage: 45.2 },
    { rating: 4, count: 201, percentage: 26.2 },
    { rating: 3, count: 112, percentage: 14.6 },
    { rating: 2, count: 68, percentage: 8.9 },
    { rating: 1, count: 39, percentage: 5.1 }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'low': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Chatbot Analytics</h1>
                <p className="text-sm text-gray-600">AI performance insights and conversation analytics</p>
              </div>
            </div>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">Quarter</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Conversations</p>
                  <p className="text-2xl font-bold">{chatbotMetrics.totalConversations.toLocaleString()}</p>
                  <div className="flex items-center gap-1 text-green-600 text-xs">
                    <TrendingUp className="h-3 w-3" />
                    +12.5%
                  </div>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completion Rate</p>
                  <p className="text-2xl font-bold">{chatbotMetrics.completionRate}%</p>
                  <div className="flex items-center gap-1 text-red-600 text-xs">
                    <TrendingDown className="h-3 w-3" />
                    -3.2%
                  </div>
                </div>
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Response Time</p>
                  <p className="text-2xl font-bold">{chatbotMetrics.responseTime}</p>
                  <div className="flex items-center gap-1 text-green-600 text-xs">
                    <TrendingUp className="h-3 w-3" />
                    -15ms
                  </div>
                </div>
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Satisfaction Rating</p>
                  <p className="text-2xl font-bold">{chatbotMetrics.satisfactionRating}/5</p>
                  <div className="flex items-center gap-1 text-green-600 text-xs">
                    <TrendingUp className="h-3 w-3" />
                    +0.3
                  </div>
                </div>
                <Users className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Conversation Topics */}
          <Card>
            <CardHeader>
              <CardTitle>Popular Conversation Topics</CardTitle>
              <CardDescription>Most discussed topics in conversations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {conversationTopics.map((topic, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{topic.topic}</span>
                      <span className="text-gray-600">{topic.count} ({topic.percentage}%)</span>
                    </div>
                    <Progress value={topic.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* User Satisfaction */}
          <Card>
            <CardHeader>
              <CardTitle>User Feedback Distribution</CardTitle>
              <CardDescription>Breakdown of user satisfaction ratings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {feedbackData.map((feedback, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{feedback.rating} Stars</span>
                      <div className="flex">
                        {Array.from({ length: feedback.rating }).map((_, i) => (
                          <div key={i} className="w-3 h-3 bg-yellow-400 rounded-sm mr-0.5"></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${feedback.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16">{feedback.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Issues */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Performance Issues & Recommendations
            </CardTitle>
            <CardDescription>Identified issues and improvement suggestions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {performanceIssues.map((issue, index) => (
                <div key={index} className={`p-4 rounded-lg border ${getSeverityColor(issue.severity)}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium">{issue.issue}</h4>
                        <Badge className={getSeverityColor(issue.severity)}>
                          {issue.severity.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-sm mb-2">Impact: {issue.affected}</p>
                      <p className="text-sm font-medium">Recommendation: {issue.recommendation}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Address Issue
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Session Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{chatbotMetrics.averageSessionTime}</div>
              <p className="text-sm text-gray-600">Average conversation length</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Drop-off Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{chatbotMetrics.dropOffRate}%</div>
              <p className="text-sm text-gray-600">Users leaving mid-conversation</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Human Handoff</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{chatbotMetrics.handoffToHuman}%</div>
              <p className="text-sm text-gray-600">Escalated to human agents</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminChatbotAnalytics;
