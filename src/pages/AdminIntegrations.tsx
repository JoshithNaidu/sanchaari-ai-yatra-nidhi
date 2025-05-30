
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  ArrowLeft, Settings, TestTube, RefreshCw, AlertTriangle, 
  CheckCircle, Clock, Zap, Database, Shield 
} from 'lucide-react';

const AdminIntegrations = () => {
  const [selectedIntegration, setSelectedIntegration] = useState<any>(null);
  const [isEditingCredentials, setIsEditingCredentials] = useState(false);

  const integrations = [
    {
      id: 'makemytrip',
      name: 'MakeMyTrip',
      type: 'OTA',
      status: 'Connected',
      lastSync: '2024-05-30 14:30',
      requestsToday: 1250,
      errors: 2,
      quotaRemaining: '85%',
      healthScore: 98
    },
    {
      id: 'cleartrip',
      name: 'Cleartrip',
      type: 'Flights',
      status: 'Connected',
      lastSync: '2024-05-30 14:28',
      requestsToday: 845,
      errors: 0,
      quotaRemaining: '92%',
      healthScore: 100
    },
    {
      id: 'booking',
      name: 'Booking.com',
      type: 'Hotels',
      status: 'Warning',
      lastSync: '2024-05-30 12:15',
      requestsToday: 234,
      errors: 15,
      quotaRemaining: '78%',
      healthScore: 72
    },
    {
      id: 'airbnb',
      name: 'Airbnb',
      type: 'Hotels',
      status: 'Error',
      lastSync: '2024-05-30 09:45',
      requestsToday: 0,
      errors: 45,
      quotaRemaining: '0%',
      healthScore: 15
    },
    {
      id: 'getyourguide',
      name: 'GetYourGuide',
      type: 'Activities',
      status: 'Connected',
      lastSync: '2024-05-30 14:25',
      requestsToday: 567,
      errors: 1,
      quotaRemaining: '88%',
      healthScore: 95
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Connected': return 'bg-green-100 text-green-800';
      case 'Warning': return 'bg-yellow-100 text-yellow-800';
      case 'Error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Connected': return <CheckCircle className="h-4 w-4" />;
      case 'Warning': return <AlertTriangle className="h-4 w-4" />;
      case 'Error': return <AlertTriangle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Admin
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Integration Management</h1>
                <p className="text-sm text-gray-600">Monitor and manage third-party integrations</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Global Settings
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Integrations</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">3 active, 1 warning, 1 error</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Requests Today</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,896</div>
              <p className="text-xs text-muted-foreground">+15% from yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.1%</div>
              <p className="text-xs text-muted-foreground">63 errors total</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Health Score</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">76%</div>
              <p className="text-xs text-muted-foreground">Needs attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Integrations Table */}
        <Card>
          <CardHeader>
            <CardTitle>Integration Status</CardTitle>
            <CardDescription>Real-time status of all connected providers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Provider</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Sync</TableHead>
                    <TableHead>Requests Today</TableHead>
                    <TableHead>Errors</TableHead>
                    <TableHead>Health Score</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {integrations.map((integration) => (
                    <TableRow key={integration.id}>
                      <TableCell>
                        <div className="font-medium">{integration.name}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{integration.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(integration.status)}
                          <Badge className={getStatusColor(integration.status)}>
                            {integration.status}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-gray-500">
                        {integration.lastSync}
                      </TableCell>
                      <TableCell>{integration.requestsToday.toLocaleString()}</TableCell>
                      <TableCell>
                        <span className={integration.errors > 10 ? 'text-red-600 font-medium' : ''}>
                          {integration.errors}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className={
                            integration.healthScore >= 90 ? 'text-green-600' :
                            integration.healthScore >= 70 ? 'text-yellow-600' : 'text-red-600'
                          }>
                            {integration.healthScore}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <TestTube className="h-3 w-3 mr-1" />
                            Test
                          </Button>
                          <Button size="sm" variant="outline">
                            <RefreshCw className="h-3 w-3 mr-1" />
                            Sync
                          </Button>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="outline" onClick={() => setSelectedIntegration(integration)}>
                                <Settings className="h-3 w-3 mr-1" />
                                Config
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Configure {integration.name}</DialogTitle>
                                <DialogDescription>Update integration settings and credentials</DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <Label htmlFor="apiKey">API Key</Label>
                                  <Input id="apiKey" type="password" value="••••••••••••••••" />
                                </div>
                                <div>
                                  <Label htmlFor="endpoint">Endpoint URL</Label>
                                  <Input id="endpoint" value={`https://api.${integration.id}.com/v1`} />
                                </div>
                                <div>
                                  <Label htmlFor="quota">Daily Quota</Label>
                                  <Input id="quota" value="10000" />
                                </div>
                              </div>
                              <DialogFooter>
                                <Button variant="outline">Test Connection</Button>
                                <Button>Save Changes</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
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
    </div>
  );
};

export default AdminIntegrations;
