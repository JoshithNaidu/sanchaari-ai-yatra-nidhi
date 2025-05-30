
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  User,
  Calendar,
  MessageSquare,
  Filter,
  Plus,
  Eye,
  UserCheck,
  Briefcase,
  Shield
} from 'lucide-react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { useWorkflow } from '@/contexts/WorkflowContext';

const WorkflowDashboard = () => {
  const { user, hasPermission } = useCentralizedAuth();
  const { 
    workflows, 
    myWorkflows, 
    pendingApprovals, 
    isLoading, 
    getWorkflowStats,
    approveWorkflow,
    rejectWorkflow,
    requestChanges
  } = useWorkflow();
  
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedTab, setSelectedTab] = useState('overview');

  const stats = getWorkflowStats();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'under_review': return <AlertCircle className="h-4 w-4 text-blue-500" />;
      case 'approved': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'rejected': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'requires_changes': return <AlertCircle className="h-4 w-4 text-orange-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'under_review': return 'bg-blue-100 text-blue-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'requires_changes': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUserTypeIcon = (userType: string) => {
    switch (userType) {
      case 'admin': return <Shield className="h-4 w-4 text-purple-500" />;
      case 'partner': return <Briefcase className="h-4 w-4 text-blue-500" />;
      case 'traveler': return <User className="h-4 w-4 text-green-500" />;
      default: return <User className="h-4 w-4 text-gray-500" />;
    }
  };

  const handleQuickAction = async (workflowId: string, action: 'approve' | 'reject' | 'request_changes') => {
    try {
      let result;
      switch (action) {
        case 'approve':
          result = await approveWorkflow(workflowId, 'Quick approval from dashboard');
          break;
        case 'reject':
          result = await rejectWorkflow(workflowId, 'Rejected from dashboard');
          break;
        case 'request_changes':
          result = await requestChanges(workflowId, 'Please review and update');
          break;
      }
      console.log(result.message);
    } catch (error) {
      console.error('Action failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading workflows...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">Workflow Dashboard</h1>
              <Badge className="bg-blue-100 text-blue-800">
                {user?.userType === 'admin' ? 'Admin View' : 
                 user?.userType === 'partner' ? 'Partner View' : 'User View'}
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Submission
              </Button>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-2xl font-bold">{stats.total}</p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
                </div>
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Approved</p>
                  <p className="text-2xl font-bold text-green-600">{stats.approved}</p>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Rejected</p>
                  <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
                </div>
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <XCircle className="h-5 w-5 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">My Submissions</p>
                  <p className="text-2xl font-bold">{stats.mySubmissions}</p>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <User className="h-5 w-5 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">My Reviews</p>
                  <p className="text-2xl font-bold">{stats.myApprovals}</p>
                </div>
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <UserCheck className="h-5 w-5 text-indigo-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Workflow Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">All Workflows</TabsTrigger>
            <TabsTrigger value="pending">Pending Approval</TabsTrigger>
            <TabsTrigger value="my-submissions">My Submissions</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* All Workflows Tab */}
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>All Workflows</CardTitle>
                <CardDescription>Overview of all workflow submissions across the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type & Title</TableHead>
                        <TableHead>Submitter</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Assigned To</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {workflows.slice(0, 10).map((workflow) => (
                        <TableRow key={workflow.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{workflow.title}</p>
                              <p className="text-sm text-gray-500 capitalize">{workflow.type}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {getUserTypeIcon(workflow.submittedBy.type)}
                              <div>
                                <p className="text-sm font-medium">{workflow.submittedBy.name}</p>
                                <p className="text-xs text-gray-500 capitalize">{workflow.submittedBy.type}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {getStatusIcon(workflow.status)}
                              <Badge className={getStatusColor(workflow.status)}>
                                {workflow.status.replace('_', ' ')}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getPriorityColor(workflow.priority)}>
                              {workflow.priority}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {workflow.assignedTo ? (
                              <div className="text-sm">
                                <p className="font-medium">{workflow.assignedTo.name}</p>
                                <p className="text-gray-500">{workflow.assignedTo.role}</p>
                              </div>
                            ) : (
                              <span className="text-gray-400">Unassigned</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Calendar className="h-3 w-3" />
                              {new Date(workflow.updatedAt).toLocaleDateString()}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-3 w-3 mr-1" />
                                View
                              </Button>
                              {hasPermission('workflow_management') && (
                                <Button 
                                  size="sm" 
                                  onClick={() => handleQuickAction(workflow.id, 'approve')}
                                  disabled={workflow.status === 'approved'}
                                >
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Approve
                                </Button>
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

          {/* Pending Approval Tab */}
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Approvals</CardTitle>
                <CardDescription>Workflows requiring your review and approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingApprovals.length === 0 ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                      <p className="text-gray-600">No pending approvals</p>
                    </div>
                  ) : (
                    pendingApprovals.map((workflow) => (
                      <div key={workflow.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={getPriorityColor(workflow.priority)}>
                                {workflow.priority}
                              </Badge>
                              <Badge variant="outline" className="capitalize">
                                {workflow.type}
                              </Badge>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{workflow.title}</h3>
                            <p className="text-gray-600 mb-3">{workflow.description}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                {getUserTypeIcon(workflow.submittedBy.type)}
                                <span>{workflow.submittedBy.name}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                <span>{new Date(workflow.createdAt).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare className="h-3 w-3" />
                                <span>{workflow.comments.length} comments</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleQuickAction(workflow.id, 'request_changes')}
                            >
                              Request Changes
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleQuickAction(workflow.id, 'reject')}
                            >
                              Reject
                            </Button>
                            <Button 
                              size="sm"
                              onClick={() => handleQuickAction(workflow.id, 'approve')}
                            >
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Submissions Tab */}
          <TabsContent value="my-submissions">
            <Card>
              <CardHeader>
                <CardTitle>My Submissions</CardTitle>
                <CardDescription>Track the status of your workflow submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myWorkflows.length === 0 ? (
                    <div className="text-center py-8">
                      <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No submissions yet</p>
                      <Button className="mt-4">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Your First Submission
                      </Button>
                    </div>
                  ) : (
                    myWorkflows.map((workflow) => (
                      <div key={workflow.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {getStatusIcon(workflow.status)}
                              <Badge className={getStatusColor(workflow.status)}>
                                {workflow.status.replace('_', ' ')}
                              </Badge>
                              <Badge variant="outline" className="capitalize">
                                {workflow.type}
                              </Badge>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{workflow.title}</h3>
                            <p className="text-gray-600 mb-3">{workflow.description}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                <span>Submitted {new Date(workflow.createdAt).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare className="h-3 w-3" />
                                <span>{workflow.comments.length} comments</span>
                              </div>
                              {workflow.assignedTo && (
                                <div className="flex items-center gap-1">
                                  <UserCheck className="h-3 w-3" />
                                  <span>Assigned to {workflow.assignedTo.name}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3 mr-1" />
                              View Details
                            </Button>
                            {workflow.status === 'requires_changes' && (
                              <Button size="sm">
                                Update Submission
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Workflow Types Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {['flight', 'hotel', 'activity', 'package'].map((type) => {
                      const count = workflows.filter(w => w.type === type).length;
                      const percentage = workflows.length > 0 ? (count / workflows.length) * 100 : 0;
                      return (
                        <div key={type} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="capitalize">{type}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full" 
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600">{count}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Average Processing Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">2.5</div>
                      <div className="text-sm text-gray-600">days average</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Fastest</span>
                        <span>4 hours</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Slowest</span>
                        <span>7 days</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WorkflowDashboard;
