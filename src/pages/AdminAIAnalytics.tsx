
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { 
  Brain, MessageSquare, TrendingUp, Users, Clock, 
  BarChart3, Zap, CheckCircle, AlertTriangle
} from 'lucide-react';

const AdminAIAnalytics = () => {
  const { user } = useCentralizedAuth();
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const aiMetrics = {
    totalSessions: 15420,
    successfulResolutions: 12336,
    handoffRate: 8.2,
    avgResponseTime: 1.4,
    userSatisfaction: 4.3,
    topQueries: [
      { query: 'Best places to visit in Kerala', count: 1250 },
      { query: 'Budget hotels in Goa', count: 980 },
      { query: 'Travel itinerary for Rajasthan', count: 876 },
      { query: 'Monsoon travel destinations', count: 743 },
      { query: 'Adventure activities in Himachal', count: 652 }
    ],
    modelPerformance: {
      accuracy: 94.2,
      confidence: 87.5,
      speed: 92.1
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AI Analytics</h1>
              <p className="text-sm text-gray-600">Monitor AI assistant performance and insights</p>
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
              <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{aiMetrics.totalSessions.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{((aiMetrics.successfulResolutions / aiMetrics.totalSessions) * 100).toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">+3.2% improvement</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{aiMetrics.avgResponseTime}s</div>
              <p className="text-xs text-muted-foreground">-0.3s faster</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Handoff Rate</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{aiMetrics.handoffRate}%</div>
              <p className="text-xs text-muted-foreground">-1.5% reduction</p>
            </CardContent>
          </Card>
        </div>

        {/* Model Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Model Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Accuracy</span>
                  <span className="text-sm">{aiMetrics.modelPerformance.accuracy}%</span>
                </div>
                <Progress value={aiMetrics.modelPerformance.accuracy} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Confidence</span>
                  <span className="text-sm">{aiMetrics.modelPerformance.confidence}%</span>
                </div>
                <Progress value={aiMetrics.modelPerformance.confidence} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Speed</span>
                  <span className="text-sm">{aiMetrics.modelPerformance.speed}%</span>
                </div>
                <Progress value={aiMetrics.modelPerformance.speed} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Queries */}
        <Card>
          <CardHeader>
            <CardTitle>Top User Queries</CardTitle>
            <CardDescription>Most frequently asked questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiMetrics.topQueries.map((query, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-medium">{query.query}</div>
                    <div className="text-xs text-gray-500">{query.count} queries</div>
                  </div>
                  <Button size="sm" variant="outline">
                    <BarChart3 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link to="/admin/ai/models">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <Brain className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <h3 className="font-medium">AI Models</h3>
                <p className="text-xs text-gray-600">Manage AI models</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/admin/ai/flows">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <Zap className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-medium">Conversation Flows</h3>
                <p className="text-xs text-gray-600">Design chat flows</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/admin/ai/handoffs">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                <h3 className="font-medium">Human Handoffs</h3>
                <p className="text-xs text-gray-600">Manage escalations</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/admin/ai/training-data">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <BarChart3 className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <h3 className="font-medium">Training Data</h3>
                <p className="text-xs text-gray-600">Improve responses</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminAIAnalytics;
