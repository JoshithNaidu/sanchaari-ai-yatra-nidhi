
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
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Clock,
  Activity,
  Wifi,
  WifiOff,
  Download
} from 'lucide-react';

const AdminIntegrations = () => {
  const [autoRefresh, setAutoRefresh] = useState(true);

  const integrations = [
    {
      id: "INT001",
      supplierName: "MakeMyTrip",
      method: "REST API",
      status: "Online",
      lastSync: "2024-05-30 14:30:00",
      errorRate: "0.5%",
      listingsUpdated: 1250,
      slaStatus: "green",
      avgDelay: "45s"
    },
    {
      id: "INT002",
      supplierName: "Booking.com",
      method: "XML Feed",
      status: "Warning",
      lastSync: "2024-05-30 14:25:00",
      errorRate: "2.1%",
      listingsUpdated: 890,
      slaStatus: "yellow",
      avgDelay: "8m 30s"
    },
    {
      id: "INT003",
      supplierName: "Airbnb Connect",
      method: "REST API",
      status: "Online",
      lastSync: "2024-05-30 14:32:00",
      errorRate: "0.8%",
      listingsUpdated: 2150,
      slaStatus: "green",
      avgDelay: "1m 15s"
    },
    {
      id: "INT004",
      supplierName: "OYO Rooms",
      method: "GraphQL",
      status: "Offline",
      lastSync: "2024-05-30 13:45:00",
      errorRate: "15.3%",
      listingsUpdated: 0,
      slaStatus: "red",
      avgDelay: "N/A"
    },
    {
      id: "INT005",
      supplierName: "TravelGuru",
      method: "Email Parser",
      status: "Online",
      lastSync: "2024-05-30 14:28:00",
      errorRate: "3.2%",
      listingsUpdated: 350,
      slaStatus: "yellow",
      avgDelay: "12m 45s"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Online': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Warning': return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case 'Offline': return <WifiOff className="h-4 w-4 text-red-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Online': return 'bg-green-100 text-green-800';
      case 'Warning': return 'bg-yellow-100 text-yellow-800';
      case 'Offline': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSlaColor = (slaStatus: string) => {
    switch (slaStatus) {
      case 'green': return 'bg-green-500';
      case 'yellow': return 'bg-yellow-500';
      case 'red': return 'bg-red-500';
      default: return 'bg-gray-500';
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
              <h1 className="text-2xl font-bold text-gray-900">Integration Status</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Wifi className={`h-4 w-4 ${autoRefresh ? 'text-green-600' : 'text-gray-400'}`} />
                <span className="text-sm text-gray-600">Auto-refresh: {autoRefresh ? 'ON' : 'OFF'}</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setAutoRefresh(!autoRefresh)}
                >
                  {autoRefresh ? 'Disable' : 'Enable'}
                </Button>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export Logs
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
        {/* Health Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Integrations</p>
                  <p className="text-2xl font-bold text-green-600">4/5</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Sync Rate</p>
                  <p className="text-2xl font-bold text-blue-600">96.8%</p>
                </div>
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Listings Updated</p>
                  <p className="text-2xl font-bold text-purple-600">4,640</p>
                </div>
                <RefreshCw className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Error Rate</p>
                  <p className="text-2xl font-bold text-yellow-600">2.1%</p>
                </div>
                <AlertCircle className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Integration Status Table */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Supplier Integration Monitoring</CardTitle>
            <CardDescription>Real-time status and performance metrics for all third-party integrations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Sync</TableHead>
                    <TableHead>Error Rate</TableHead>
                    <TableHead>Listings Updated</TableHead>
                    <TableHead>SLA</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {integrations.map((integration) => (
                    <TableRow key={integration.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{integration.supplierName}</p>
                          <p className="text-xs text-gray-500">{integration.id}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{integration.method}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(integration.status)}
                          <Badge className={getStatusColor(integration.status)}>
                            {integration.status}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>{integration.lastSync.split(' ')[1]}</p>
                          <p className="text-gray-500">{integration.lastSync.split(' ')[0]}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`font-medium ${
                          parseFloat(integration.errorRate) > 5 ? 'text-red-600' : 
                          parseFloat(integration.errorRate) > 2 ? 'text-yellow-600' : 'text-green-600'
                        }`}>
                          {integration.errorRate}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p className="font-medium">{integration.listingsUpdated.toLocaleString()}</p>
                          <p className="text-gray-500">Last hour</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${getSlaColor(integration.slaStatus)}`}></div>
                          <span className="text-sm">{integration.avgDelay}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <RefreshCw className="h-3 w-3 mr-1" />
                            Sync
                          </Button>
                          <Button variant="outline" size="sm">
                            Logs
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Quick Actions */}
            <div className="flex justify-between items-center mt-6 pt-6 border-t">
              <div className="text-sm text-gray-600">
                Last updated: {new Date().toLocaleString()}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Sync All</Button>
                <Button variant="outline" size="sm">Health Check</Button>
                <Button variant="outline" size="sm">View All Logs</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminIntegrations;
