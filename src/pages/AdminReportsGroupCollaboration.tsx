
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, Users, MessageSquare, Calendar, TrendingUp, 
  TrendingDown, UserPlus, Activity, Share2, CheckCircle
} from 'lucide-react';

const AdminReportsGroupCollaboration = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const groupStats = {
    totalGroups: 1234,
    activeGroups: 892,
    avgGroupSize: 4.2,
    collaborationRate: 78.5,
    completionRate: 85.2,
    avgPlanningTime: '6.5 days'
  };

  const groupActivityData = [
    { activity: 'Group Created', count: 156, trend: '+12%' },
    { activity: 'Member Invited', count: 642, trend: '+8%' },
    { activity: 'Collaborative Edit', count: 1283, trend: '+15%' },
    { activity: 'Vote Cast', count: 487, trend: '+22%' },
    { activity: 'Trip Finalized', count: 94, trend: '+18%' }
  ];

  const popularGroupSizes = [
    { size: '2 members', percentage: 35.2, count: 434 },
    { size: '3-4 members', percentage: 42.8, count: 528 },
    { size: '5-6 members', percentage: 15.6, count: 192 },
    { size: '7+ members', percentage: 6.4, count: 79 }
  ];

  const collaborationFeatures = [
    { feature: 'Shared Itinerary', usage: 94.2, satisfaction: 4.7 },
    { feature: 'Group Chat', usage: 87.3, satisfaction: 4.5 },
    { feature: 'Budget Splitting', usage: 76.8, satisfaction: 4.3 },
    { feature: 'Voting System', usage: 68.9, satisfaction: 4.1 },
    { feature: 'Shared Documents', usage: 52.4, satisfaction: 3.9 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin/reports" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Group Collaboration Analytics</h1>
                <p className="text-sm text-gray-600">Insights into group trip planning and collaboration</p>
              </div>
            </div>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">7 Days</SelectItem>
                <SelectItem value="30d">30 Days</SelectItem>
                <SelectItem value="90d">90 Days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Groups</p>
                  <p className="text-2xl font-bold">{groupStats.totalGroups}</p>
                  <div className="flex items-center gap-1 text-green-600 text-xs">
                    <TrendingUp className="h-3 w-3" />
                    +12.5%
                  </div>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Groups</p>
                  <p className="text-2xl font-bold">{groupStats.activeGroups}</p>
                  <div className="flex items-center gap-1 text-green-600 text-xs">
                    <TrendingUp className="h-3 w-3" />
                    +8.2%
                  </div>
                </div>
                <Activity className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completion Rate</p>
                  <p className="text-2xl font-bold">{groupStats.completionRate}%</p>
                  <div className="flex items-center gap-1 text-green-600 text-xs">
                    <TrendingUp className="h-3 w-3" />
                    +5.1%
                  </div>
                </div>
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Group Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Group Activities</CardTitle>
              <CardDescription>Popular collaboration actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {groupActivityData.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{activity.activity}</div>
                      <div className="text-sm text-gray-600">{activity.count} actions</div>
                    </div>
                    <div className={`text-sm font-medium ${activity.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {activity.trend}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Group Sizes */}
          <Card>
            <CardHeader>
              <CardTitle>Popular Group Sizes</CardTitle>
              <CardDescription>Distribution of group sizes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularGroupSizes.map((size, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{size.size}</span>
                      <span className="text-gray-600">{size.count} groups ({size.percentage}%)</span>
                    </div>
                    <Progress value={size.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Usage */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Collaboration Features</CardTitle>
            <CardDescription>Usage and satisfaction rates for collaborative features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {collaborationFeatures.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{feature.feature}</span>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">{feature.usage}% usage</Badge>
                      <Badge variant="outline">{feature.satisfaction}/5 satisfaction</Badge>
                    </div>
                  </div>
                  <Progress value={feature.usage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Avg Group Size</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{groupStats.avgGroupSize}</div>
              <p className="text-sm text-gray-600">members per group</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Collaboration Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{groupStats.collaborationRate}%</div>
              <p className="text-sm text-gray-600">groups actively collaborating</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Avg Planning Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{groupStats.avgPlanningTime}</div>
              <p className="text-sm text-gray-600">from start to finalization</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminReportsGroupCollaboration;
