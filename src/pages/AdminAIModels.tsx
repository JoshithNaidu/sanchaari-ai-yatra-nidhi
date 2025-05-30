
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
  Play,
  Archive,
  Copy,
  Download,
  Upload,
  Brain,
  Clock,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const AdminAIModels = () => {
  const [selectedEnvironment, setSelectedEnvironment] = useState('live');

  const models = [
    {
      id: "model_001",
      name: "Sanchaari Bot v2.3.1",
      version: "2.3.1",
      language: "EN",
      trainingSize: "125K conversations",
      accuracy: 94.2,
      handoffRate: 7.8,
      responseTime: 850,
      status: "Live",
      deployedDate: "2024-05-25",
      deployedBy: "ai-team@sanchaari.com",
      environment: "Production"
    },
    {
      id: "model_002",
      name: "Sanchaari Bot v2.3.1-HI",
      version: "2.3.1",
      language: "HI",
      trainingSize: "89K conversations",
      accuracy: 89.6,
      handoffRate: 12.4,
      responseTime: 920,
      status: "Live",
      deployedDate: "2024-05-25",
      deployedBy: "ai-team@sanchaari.com",
      environment: "Production"
    },
    {
      id: "model_003",
      name: "Sanchaari Bot v2.4.0-Beta",
      version: "2.4.0",
      language: "EN",
      trainingSize: "150K conversations",
      accuracy: 96.1,
      handoffRate: 6.2,
      responseTime: 780,
      status: "Testing",
      deployedDate: "2024-05-28",
      deployedBy: "ai-team@sanchaari.com",
      environment: "Staging"
    },
    {
      id: "model_004",
      name: "Sanchaari Bot v2.2.8",
      version: "2.2.8",
      language: "EN",
      trainingSize: "98K conversations",
      accuracy: 91.8,
      handoffRate: 9.2,
      responseTime: 780,
      status: "Archived",
      deployedDate: "2024-05-15",
      deployedBy: "ai-team@sanchaari.com",
      environment: "None"
    }
  ];

  const deploymentHistory = [
    {
      id: "dep_001",
      timestamp: "2024-05-28 16:30:00",
      action: "Deploy",
      model: "v2.4.0-Beta",
      environment: "Staging",
      admin: "ai-team@sanchaari.com",
      status: "Success"
    },
    {
      id: "dep_002",
      timestamp: "2024-05-25 14:15:00",
      action: "Deploy",
      model: "v2.3.1",
      environment: "Production",
      admin: "ai-team@sanchaari.com",
      status: "Success"
    },
    {
      id: "dep_003",
      timestamp: "2024-05-24 11:45:00",
      action: "Rollback",
      model: "v2.3.0 → v2.2.8",
      environment: "Production",
      admin: "ops@sanchaari.com",
      status: "Success"
    },
    {
      id: "dep_004",
      timestamp: "2024-05-23 09:20:00",
      action: "Archive",
      model: "v2.1.5",
      environment: "None",
      admin: "ai-team@sanchaari.com",
      status: "Success"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800';
      case 'Testing': return 'bg-blue-100 text-blue-800';
      case 'Archived': return 'bg-gray-100 text-gray-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'Deploy': return <Play className="h-4 w-4 text-blue-600" />;
      case 'Rollback': return <ArrowLeft className="h-4 w-4 text-yellow-600" />;
      case 'Archive': return <Archive className="h-4 w-4 text-gray-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getPerformanceColor = (value: number, type: 'accuracy' | 'handoff' | 'response') => {
    switch (type) {
      case 'accuracy':
        return value > 90 ? 'text-green-600' : value > 85 ? 'text-yellow-600' : 'text-red-600';
      case 'handoff':
        return value < 8 ? 'text-green-600' : value < 12 ? 'text-yellow-600' : 'text-red-600';
      case 'response':
        return value < 1000 ? 'text-green-600' : value < 1500 ? 'text-yellow-600' : 'text-red-600';
      default:
        return 'text-gray-600';
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
              <h1 className="text-2xl font-bold text-gray-900">AI Model Management</h1>
            </div>
            <div className="flex items-center gap-4">
              <select 
                value={selectedEnvironment}
                onChange={(e) => setSelectedEnvironment(e.target.value)}
                className="px-3 py-2 border rounded-md bg-white"
              >
                <option value="all">All Environments</option>
                <option value="live">Live Models</option>
                <option value="staging">Staging</option>
                <option value="archived">Archived</option>
              </select>
              <Button variant="outline" size="sm" className="gap-2">
                <Upload className="h-4 w-4" />
                Upload Model
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
        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Models</p>
                  <p className="text-2xl font-bold text-blue-600">2</p>
                </div>
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Accuracy</p>
                  <p className="text-2xl font-bold text-green-600">91.9%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Handoff Rate</p>
                  <p className="text-2xl font-bold text-yellow-600">10.1%</p>
                </div>
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Deployments Today</p>
                  <p className="text-2xl font-bold text-purple-600">3</p>
                </div>
                <Play className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Model Comparison */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Model Performance Comparison</CardTitle>
            <CardDescription>Compare accuracy, response times, and handoff rates across different model versions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Model Name</TableHead>
                    <TableHead>Version</TableHead>
                    <TableHead>Language</TableHead>
                    <TableHead>Training Size</TableHead>
                    <TableHead>Accuracy</TableHead>
                    <TableHead>Handoff Rate</TableHead>
                    <TableHead>Response Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {models.map((model) => (
                    <TableRow key={model.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{model.name}</p>
                          <p className="text-xs text-gray-500">Deployed: {model.deployedDate}</p>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm">{model.version}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{model.language}</Badge>
                      </TableCell>
                      <TableCell className="text-sm">{model.trainingSize}</TableCell>
                      <TableCell>
                        <span className={`font-semibold ${getPerformanceColor(model.accuracy, 'accuracy')}`}>
                          {model.accuracy}%
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`font-semibold ${getPerformanceColor(model.handoffRate, 'handoff')}`}>
                          {model.handoffRate}%
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`font-semibold ${getPerformanceColor(model.responseTime, 'response')}`}>
                          {model.responseTime}ms
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(model.status)}>
                          {model.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {model.status === 'Testing' && (
                            <Button variant="outline" size="sm">
                              <Play className="h-3 w-3 mr-1" />
                              Deploy
                            </Button>
                          )}
                          {model.status === 'Live' && (
                            <Button variant="outline" size="sm">
                              <Copy className="h-3 w-3 mr-1" />
                              Clone
                            </Button>
                          )}
                          {model.status === 'Archived' && (
                            <Button variant="outline" size="sm">
                              <Archive className="h-3 w-3 mr-1" />
                              Restore
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

        {/* Deployment History */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Deployment History</CardTitle>
            <CardDescription>Recent model deployments, rollbacks, and archival actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Model</TableHead>
                    <TableHead>Environment</TableHead>
                    <TableHead>Deployed By</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deploymentHistory.map((deployment) => (
                    <TableRow key={deployment.id}>
                      <TableCell className="font-mono text-sm">{deployment.timestamp}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getActionIcon(deployment.action)}
                          <span>{deployment.action}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{deployment.model}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{deployment.environment}</Badge>
                      </TableCell>
                      <TableCell className="text-sm">{deployment.admin}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(deployment.status)}>
                          {deployment.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common model management tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h3 className="font-medium">Deploy to Production</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Promote the staging model (v2.4.0-Beta) to production environment.
                </p>
                <Button className="w-full" size="sm">
                  <Play className="h-4 w-4 mr-2" />
                  Deploy v2.4.0-Beta
                </Button>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Copy className="h-6 w-6 text-blue-600" />
                  <h3 className="font-medium">Clone Model</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Create a copy of the current live model for development.
                </p>
                <Button variant="outline" className="w-full" size="sm">
                  <Copy className="h-4 w-4 mr-2" />
                  Clone v2.3.1
                </Button>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  <h3 className="font-medium">Emergency Rollback</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Quickly rollback to the previous stable version if needed.
                </p>
                <Button variant="outline" className="w-full" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Rollback to v2.2.8
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAIModels;
