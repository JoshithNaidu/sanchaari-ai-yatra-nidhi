
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
  Clock,
  User,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Settings,
  Download
} from 'lucide-react';

const AdminAIHandoffs = () => {
  const [selectedQueue, setSelectedQueue] = useState('all');

  const handoffQueue = [
    {
      id: "HO001",
      topic: "Payment Failed",
      userID: "USR12345",
      waitTime: "12m 30s",
      assignedAgent: "Sarah Kumar",
      team: "Billing",
      status: "Active",
      priority: "High",
      startTime: "14:25:00"
    },
    {
      id: "HO002", 
      topic: "Booking Cancellation",
      userID: "USR67890",
      waitTime: "8m 15s",
      assignedAgent: "Raj Patel",
      team: "Support",
      status: "Active",
      priority: "Medium",
      startTime: "14:35:00"
    },
    {
      id: "HO003",
      topic: "Refund Status",
      userID: "USR11111",
      waitTime: "45m 20s",
      assignedAgent: "Unassigned",
      team: "Billing",
      status: "Escalated",
      priority: "High",
      startTime: "13:58:00"
    }
  ];

  const routingRules = [
    {
      condition: "payment failed",
      team: "Billing",
      sla: "15 minutes",
      active: true
    },
    {
      condition: "booking issues",
      team: "Support",
      sla: "30 minutes", 
      active: true
    },
    {
      condition: "refund request",
      team: "Billing",
      sla: "60 minutes",
      active: true
    }
  ];

  const analytics = {
    medianResponseTime: "18m 45s",
    resolutionRatio: "94.2%",
    firstContactResolution: "87.5%",
    activeHandoffs: 3,
    todayHandoffs: 47,
    escalatedTickets: 1
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-blue-100 text-blue-800';
      case 'Escalated': return 'bg-red-100 text-red-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
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
              <Link to="/admin/dashboard" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Human Handoff Management</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export Analytics
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
        
        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Handoffs</p>
                  <p className="text-2xl font-bold text-blue-600">{analytics.activeHandoffs}</p>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Today's Handoffs</p>
                  <p className="text-2xl font-bold text-purple-600">{analytics.todayHandoffs}</p>
                </div>
                <RefreshCw className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Median Response</p>
                  <p className="text-2xl font-bold text-green-600">{analytics.medianResponseTime}</p>
                </div>
                <Clock className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Resolution Rate</p>
                  <p className="text-2xl font-bold text-blue-600">{analytics.resolutionRatio}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">First Contact</p>
                  <p className="text-2xl font-bold text-green-600">{analytics.firstContactResolution}</p>
                </div>
                <User className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Escalated</p>
                  <p className="text-2xl font-bold text-red-600">{analytics.escalatedTickets}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Live Handoff Queue */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Live Handoff Queue</CardTitle>
                <CardDescription>Real-time monitoring of bot escalations to human agents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Topic</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Wait Time</TableHead>
                        <TableHead>Agent</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {handoffQueue.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{item.topic}</p>
                              <p className="text-xs text-gray-500">{item.id}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="text-sm">{item.userID}</p>
                              <p className="text-xs text-gray-500">Started: {item.startTime}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={item.waitTime.includes('45m') ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}>
                              {item.waitTime}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="text-sm font-medium">{item.assignedAgent}</p>
                              <p className="text-xs text-gray-500">{item.team} Team</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(item.status)}>
                              {item.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">View</Button>
                              <Button variant="outline" size="sm">Reassign</Button>
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

          {/* Routing Rules */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Routing Rules</CardTitle>
                <CardDescription>Configure automatic agent assignment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {routingRules.map((rule, index) => (
                    <div key={index} className="border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">"{rule.condition}"</span>
                        <Badge variant={rule.active ? "default" : "secondary"}>
                          {rule.active ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <p>→ {rule.team} Team</p>
                        <p>SLA: {rule.sla}</p>
                      </div>
                    </div>
                  ))}
                  <Button size="sm" className="w-full">
                    <Settings className="h-3 w-3 mr-1" />
                    Edit Rules
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>SLA Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">15min SLA</span>
                    <Badge className="bg-green-100 text-green-800">2 tickets</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">30min SLA</span>
                    <Badge className="bg-yellow-100 text-yellow-800">1 ticket</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">60min+ Breach</span>
                    <Badge className="bg-red-100 text-red-800">1 ticket</Badge>
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

export default AdminAIHandoffs;
