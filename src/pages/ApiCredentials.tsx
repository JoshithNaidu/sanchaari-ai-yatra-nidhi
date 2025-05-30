
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  Copy, 
  RefreshCw,
  Eye,
  EyeOff,
  Shield,
  ExternalLink,
  Activity
} from 'lucide-react';

const ApiCredentials = () => {
  const { toast } = useToast();
  const [showSecret, setShowSecret] = useState(false);
  const [environment, setEnvironment] = useState<'sandbox' | 'live'>('sandbox');
  
  const credentials = {
    clientId: 'pk_live_51234567890abcdef',
    clientSecret: 'sk_live_abcdef1234567890',
    webhookUrl: 'https://your-domain.com/webhook'
  };

  const auditLogs = [
    { timestamp: '2024-06-03 14:30:15', method: 'POST', endpoint: '/api/bookings', ip: '192.168.1.100', status: 200 },
    { timestamp: '2024-06-03 14:25:42', method: 'GET', endpoint: '/api/listings', ip: '192.168.1.100', status: 200 },
    { timestamp: '2024-06-03 14:20:18', method: 'PUT', endpoint: '/api/availability', ip: '192.168.1.100', status: 201 },
    { timestamp: '2024-06-03 14:15:33', method: 'GET', endpoint: '/api/bookings/123', ip: '192.168.1.100', status: 200 },
    { timestamp: '2024-06-03 14:10:55', method: 'POST', endpoint: '/api/auth/token', ip: '192.168.1.100', status: 200 },
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
      duration: 2000
    });
  };

  const regenerateKey = () => {
    toast({
      title: "Key Regenerated",
      description: "New API credentials have been generated. Update your integrations.",
      duration: 5000
    });
  };

  const maskedSecret = '••••••••••••••••••••••••••••••••';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/partner/dashboard" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">API Credentials</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Developer Docs
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* API Credentials */}
          <div className="lg:col-span-2 space-y-6">
            {/* Environment Toggle */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  API Environment
                </CardTitle>
                <CardDescription>Switch between sandbox and live environments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button 
                    variant={environment === 'sandbox' ? 'default' : 'outline'}
                    onClick={() => setEnvironment('sandbox')}
                  >
                    Sandbox
                  </Button>
                  <Button 
                    variant={environment === 'live' ? 'default' : 'outline'}
                    onClick={() => setEnvironment('live')}
                  >
                    Live
                  </Button>
                </div>
                <div className="mt-4">
                  <Badge className={environment === 'live' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                    {environment === 'live' ? 'LIVE ENVIRONMENT' : 'SANDBOX ENVIRONMENT'}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* API Keys */}
            <Card>
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
                <CardDescription>
                  Use these credentials to integrate with Sanchaari APIs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="clientId">Client ID</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      id="clientId"
                      value={credentials.clientId}
                      readOnly
                      className="font-mono text-sm"
                    />
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => copyToClipboard(credentials.clientId, 'Client ID')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="clientSecret">Client Secret</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      id="clientSecret"
                      value={showSecret ? credentials.clientSecret : maskedSecret}
                      readOnly
                      className="font-mono text-sm"
                      type={showSecret ? 'text' : 'password'}
                    />
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => setShowSecret(!showSecret)}
                    >
                      {showSecret ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => copyToClipboard(credentials.clientSecret, 'Client Secret')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-red-600 mt-1">
                    Keep this secret secure and never expose it in client-side code
                  </p>
                </div>

                <div>
                  <Label htmlFor="webhookUrl">Webhook URL</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      id="webhookUrl"
                      value={credentials.webhookUrl}
                      placeholder="https://your-domain.com/webhook"
                      className="font-mono text-sm"
                    />
                    <Button variant="outline" size="icon">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    Optional: Receive real-time notifications about booking events
                  </p>
                </div>

                <div className="flex gap-2 pt-4 border-t">
                  <Button variant="destructive" onClick={regenerateKey}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Regenerate Keys
                  </Button>
                  <Button variant="outline">
                    Save Webhook URL
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* API Usage Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  API Usage Statistics
                </CardTitle>
                <CardDescription>Current month usage and limits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">API Calls</p>
                    <p className="text-xl font-bold text-blue-600">1,247</p>
                    <p className="text-xs text-gray-500">of 10,000 limit</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600">Success Rate</p>
                    <p className="text-xl font-bold text-green-600">99.2%</p>
                    <p className="text-xs text-gray-500">last 30 days</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-600">Avg Response</p>
                    <p className="text-xl font-bold text-purple-600">142ms</p>
                    <p className="text-xs text-gray-500">response time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Security Info */}
            <Card>
              <CardHeader>
                <CardTitle>Security Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm">Last Key Rotation</h4>
                  <p className="text-sm text-gray-600">March 15, 2024</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Last API Call</h4>
                  <p className="text-sm text-gray-600">June 3, 2024 2:30 PM</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Last IP Address</h4>
                  <p className="text-sm text-gray-600 font-mono">192.168.1.100</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  API Documentation
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Code Examples
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  SDKs & Libraries
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  API Status Page
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* API Audit Logs */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent API Activity</CardTitle>
            <CardDescription>Last 10 API requests</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Endpoint</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditLogs.map((log, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-mono text-xs">{log.timestamp}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {log.method}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{log.endpoint}</TableCell>
                    <TableCell className="font-mono text-sm">{log.ip}</TableCell>
                    <TableCell>
                      <Badge className={log.status === 200 || log.status === 201 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                        {log.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApiCredentials;
