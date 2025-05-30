
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { Users, MessageSquare, Clock, ArrowRight, User } from 'lucide-react';

const AdminAIHandoffs = () => {
  const [filter, setFilter] = useState('all');
  
  const handoffs = [
    {
      id: 'HO001',
      sessionId: 'CS-2024-001',
      customerName: 'John Doe',
      reason: 'Complex booking modification',
      priority: 'high',
      status: 'pending',
      timestamp: '2024-05-23 14:30',
      agent: null,
      waitTime: '5 min'
    },
    {
      id: 'HO002',
      sessionId: 'CS-2024-002',
      customerName: 'Jane Smith',
      reason: 'Payment dispute',
      priority: 'urgent',
      status: 'assigned',
      timestamp: '2024-05-23 14:25',
      agent: 'Sarah Wilson',
      waitTime: '2 min'
    },
    {
      id: 'HO003',
      sessionId: 'CS-2024-003',
      customerName: 'Mike Johnson',
      reason: 'Cancellation policy clarification',
      priority: 'medium',
      status: 'resolved',
      timestamp: '2024-05-23 14:15',
      agent: 'David Chen',
      waitTime: '8 min'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'assigned': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      case 'low': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Human Handoffs</h1>
              <p className="text-sm text-gray-600">Manage AI-to-human escalations</p>
            </div>
            <div className="flex items-center gap-4">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="assigned">Assigned</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
              <Link to="/admin/ai/analytics">
                <Button variant="outline" size="sm">Back to AI Analytics</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Handoffs</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {handoffs.filter(h => h.status === 'pending').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Wait Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2 min</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Today</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
            </CardContent>
          </Card>
        </div>

        {/* Handoffs List */}
        <Card>
          <CardHeader>
            <CardTitle>Active Handoffs</CardTitle>
            <CardDescription>Current AI-to-human escalations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {handoffs.map((handoff) => (
                <div key={handoff.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                    <div>
                      <div className="font-medium">{handoff.id}</div>
                      <div className="text-sm text-gray-600">{handoff.sessionId}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="font-medium">{handoff.customerName}</span>
                      </div>
                      <div className="text-sm text-gray-600">{handoff.timestamp}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">{handoff.reason}</div>
                      <div className="text-xs text-gray-500">Wait: {handoff.waitTime}</div>
                    </div>
                    <div>
                      <Badge className={getPriorityColor(handoff.priority)}>
                        {handoff.priority}
                      </Badge>
                    </div>
                    <div>
                      <Badge className={getStatusColor(handoff.status)}>
                        {handoff.status}
                      </Badge>
                      {handoff.agent && (
                        <div className="text-xs text-gray-600 mt-1">
                          Agent: {handoff.agent}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {handoff.status === 'pending' && (
                        <Button size="sm">Assign</Button>
                      )}
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Handoff Rules */}
        <Card>
          <CardHeader>
            <CardTitle>Handoff Rules</CardTitle>
            <CardDescription>Configure when AI should escalate to humans</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded">
                <div>
                  <div className="font-medium">Confidence threshold</div>
                  <div className="text-sm text-gray-600">Escalate when AI confidence &lt; 70%</div>
                </div>
                <Button size="sm" variant="outline">Edit</Button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded">
                <div>
                  <div className="font-medium">Keywords trigger</div>
                  <div className="text-sm text-gray-600">Escalate on "complaint", "refund", "legal"</div>
                </div>
                <Button size="sm" variant="outline">Edit</Button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded">
                <div>
                  <div className="font-medium">Response loops</div>
                  <div className="text-sm text-gray-600">Escalate after 3 failed resolution attempts</div>
                </div>
                <Button size="sm" variant="outline">Edit</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAIHandoffs;
