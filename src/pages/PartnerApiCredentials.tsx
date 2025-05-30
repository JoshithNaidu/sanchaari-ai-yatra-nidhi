
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Key, Plus, Copy, RotateCcw, Eye, EyeOff, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PartnerApiCredentials = () => {
  const { toast } = useToast();
  const [showApiKey, setShowApiKey] = useState<Record<string, boolean>>({});

  const apiKeys = [
    {
      id: '1',
      label: 'Production API Key',
      key: 'sk_live_51J3sFK2eZvKYlo2CByLpP2T...',
      accessLevel: 'Full Access',
      createdOn: '2024-01-15',
      status: 'active',
      lastUsed: '2 hours ago'
    },
    {
      id: '2',
      label: 'Development API Key',
      key: 'sk_test_51J3sFK2eZvKYlo2CBuRvP3X...',
      accessLevel: 'Read Only',
      createdOn: '2024-01-10',
      status: 'active',
      lastUsed: '1 day ago'
    },
    {
      id: '3',
      label: 'Backup API Key',
      key: 'sk_live_51J3sFK2eZvKYlo2CByLpP2Z...',
      accessLevel: 'Limited',
      createdOn: '2024-01-01',
      status: 'inactive',
      lastUsed: 'Never'
    }
  ];

  const handleCopyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    toast({
      title: "Copied!",
      description: "API key copied to clipboard.",
    });
  };

  const handleRegenerateKey = (keyId: string) => {
    toast({
      title: "Key Regenerated",
      description: "A new API key has been generated. Please update your applications.",
    });
  };

  const toggleKeyVisibility = (keyId: string) => {
    setShowApiKey(prev => ({
      ...prev,
      [keyId]: !prev[keyId]
    }));
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  const getAccessLevelColor = (level: string) => {
    switch (level) {
      case 'Full Access': return 'bg-red-100 text-red-800';
      case 'Read Only': return 'bg-blue-100 text-blue-800';
      case 'Limited': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">API Credentials</h1>
              <p className="text-gray-600">Manage your API keys for integration with partner tools</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Generate New Key
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* API Keys Table */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              API Keys
            </CardTitle>
            <CardDescription>Manage your API credentials and access levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {apiKeys.map((apiKey) => (
                <div key={apiKey.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-medium">{apiKey.label}</h3>
                      <Badge className={getStatusColor(apiKey.status)}>
                        {apiKey.status}
                      </Badge>
                      <Badge className={getAccessLevelColor(apiKey.accessLevel)}>
                        {apiKey.accessLevel}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleKeyVisibility(apiKey.id)}
                      >
                        {showApiKey[apiKey.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopyKey(apiKey.key)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRegenerateKey(apiKey.id)}
                      >
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded p-3 mb-3">
                    <Label className="text-xs text-gray-500">API Key</Label>
                    <div className="font-mono text-sm mt-1">
                      {showApiKey[apiKey.id] ? apiKey.key : '•'.repeat(40)}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Created:</span> {apiKey.createdOn}
                    </div>
                    <div>
                      <span className="font-medium">Last Used:</span> {apiKey.lastUsed}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Docs:</span>
                      <Button variant="link" size="sm" className="h-auto p-0">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* API Documentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Start Guide</CardTitle>
              <CardDescription>Get started with our API in minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">1. Authentication</h4>
                  <div className="bg-gray-50 rounded p-3 font-mono text-sm">
                    curl -H "Authorization: Bearer YOUR_API_KEY"
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">2. Make a Request</h4>
                  <div className="bg-gray-50 rounded p-3 font-mono text-sm">
                    GET https://api.sanchaari.com/v1/bookings
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Full Documentation
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Usage</CardTitle>
              <CardDescription>Monitor your API usage and limits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Requests this month</span>
                    <span className="text-sm font-medium">2,450 / 10,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '24.5%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Rate limit</span>
                    <span className="text-sm font-medium">100 req/min</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Detailed Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PartnerApiCredentials;
