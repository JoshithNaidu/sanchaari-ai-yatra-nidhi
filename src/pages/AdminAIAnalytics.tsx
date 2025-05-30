
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
  Download,
  TrendingUp,
  TrendingDown,
  MessageSquare,
  Brain,
  Users,
  Clock,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const AdminAIAnalytics = () => {
  const [timeRange, setTimeRange] = useState('7days');

  const sessionMetrics = {
    totalSessions: 15420,
    understood: 13876,
    handled: 12234,
    handoffs: 1186,
    conversionRate: 89.9
  };

  const topIntents = [
    { intent: "book_hotel", count: 3420, confidence: 95.2, dropoff: 2.1 },
    { intent: "search_flights", count: 2890, confidence: 93.8, dropoff: 3.4 },
    { intent: "package_inquiry", count: 2156, confidence: 91.5, dropoff: 4.2 },
    { intent: "cancellation_help", count: 1876, confidence: 88.7, dropoff: 12.3 },
    { intent: "payment_issue", count: 1456, confidence: 85.4, dropoff: 18.9 }
  ];

  const modelPerformance = [
    {
      version: "v2.3.1",
      language: "EN",
      accuracy: 94.2,
      responseTime: "850ms",
      handoffRate: 7.8,
      status: "Live"
    },
    {
      version: "v2.3.1",
      language: "HI",
      accuracy: 89.6,
      responseTime: "920ms",
      handoffRate: 12.4,
      status: "Live"
    },
    {
      version: "v2.2.8",
      language: "EN",
      accuracy: 91.8,
      responseTime: "780ms",
      handoffRate: 9.2,
      status: "Archived"
    }
  ];

  const userComplaints = [
    { topic: "Bot didn't understand request", count: 234, trend: "up" },
    { topic: "Repeated questions", count: 189, trend: "down" },
    { topic: "Incorrect information provided", count: 156, trend: "up" },
    { topic: "Long response time", count: 98, trend: "down" },
    { topic: "Cannot reach human agent", count: 87, trend: "up" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800';
      case 'Archived': return 'bg-gray-100 text-gray-800';
      case 'Testing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? 
      <TrendingUp className="h-4 w-4 text-red-600" /> : 
      <TrendingDown className="h-4 w-4 text-green-600" />;
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
              <h1 className="text-2xl font-bold text-gray-900">AI Analytics</h1>
            </div>
            <div className="flex items-center gap-4">
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 border rounded-md bg-white"
              >
                <option value="24h">Last 24 Hours</option>
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
              </select>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export Report
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
        {/* Session Funnel Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Sessions Started</p>
                  <p className="text-2xl font-bold text-blue-600">{sessionMetrics.totalSessions.toLocaleString()}</p>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Understood</p>
                  <p className="text-2xl font-bold text-green-600">{sessionMetrics.understood.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">{((sessionMetrics.understood/sessionMetrics.totalSessions)*100).toFixed(1)}%</p>
                </div>
                <Brain className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Handled</p>
                  <p className="text-2xl font-bold text-purple-600">{sessionMetrics.handled.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">{((sessionMetrics.handled/sessionMetrics.totalSessions)*100).toFixed(1)}%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Handoffs</p>
                  <p className="text-2xl font-bold text-orange-600">{sessionMetrics.handoffs.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">{((sessionMetrics.handoffs/sessionMetrics.totalSessions)*100).toFixed(1)}%</p>
                </div>
                <Users className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Success Rate</p>
                  <p className="text-2xl font-bold text-green-600">{sessionMetrics.conversionRate}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Intent Performance */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Top Intents Performance</CardTitle>
            <CardDescription>Most triggered intents with confidence scores and drop-off rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Intent</TableHead>
                    <TableHead>Trigger Count</TableHead>
                    <TableHead>Avg Confidence</TableHead>
                    <TableHead>Drop-off Rate</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topIntents.map((intent, index) => (
                    <TableRow key={intent.intent}>
                      <TableCell className="font-medium">{intent.intent.replace('_', ' ').toUpperCase()}</TableCell>
                      <TableCell>{intent.count.toLocaleString()}</TableCell>
                      <TableCell>
                        <span className={`font-semibold ${
                          intent.confidence > 90 ? 'text-green-600' : 
                          intent.confidence > 80 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {intent.confidence}%
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`font-semibold ${
                          intent.dropoff < 5 ? 'text-green-600' : 
                          intent.dropoff < 10 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {intent.dropoff}%
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge className={intent.confidence > 85 && intent.dropoff < 10 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {intent.confidence > 85 && intent.dropoff < 10 ? 'Good' : 'Needs Review'}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Model Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Model Performance</CardTitle>
              <CardDescription>Performance metrics across different model versions and languages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Version</TableHead>
                      <TableHead>Language</TableHead>
                      <TableHead>Accuracy</TableHead>
                      <TableHead>Response Time</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {modelPerformance.map((model, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-mono text-sm">{model.version}</TableCell>
                        <TableCell>{model.language}</TableCell>
                        <TableCell>
                          <span className={`font-semibold ${
                            model.accuracy > 90 ? 'text-green-600' : 
                            model.accuracy > 80 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {model.accuracy}%
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-gray-400" />
                            {model.responseTime}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(model.status)}>
                            {model.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* User Complaints */}
          <Card>
            <CardHeader>
              <CardTitle>Top User Complaints</CardTitle>
              <CardDescription>Common issues derived from handoffs and feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userComplaints.map((complaint, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="font-medium">{complaint.topic}</p>
                        <p className="text-sm text-gray-600">{complaint.count} occurrences</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getTrendIcon(complaint.trend)}
                      <span className={`text-sm font-medium ${
                        complaint.trend === 'up' ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {complaint.trend === 'up' ? 'Increasing' : 'Decreasing'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Items */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended Actions</CardTitle>
            <CardDescription>AI-generated recommendations to improve chatbot performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-800">Review Hindi Model Performance</p>
                  <p className="text-sm text-yellow-700">Hindi model accuracy (89.6%) is below target. Consider retraining with additional data.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <Brain className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-800">Update Cancellation Flow</p>
                  <p className="text-sm text-blue-700">High drop-off rate (12.3%) for cancellation help. Review and optimize conversation flow.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-green-800">Model v2.3.1 Performing Well</p>
                  <p className="text-sm text-green-700">English model showing excellent performance. Consider promoting to all regions.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAIAnalytics;
