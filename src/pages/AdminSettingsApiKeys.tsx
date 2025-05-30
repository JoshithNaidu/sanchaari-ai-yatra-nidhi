
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  ArrowLeft, Plus, Copy, Eye, EyeOff, MoreVertical,
  Key, Shield, Calendar, Activity
} from 'lucide-react';

const AdminSettingsApiKeys = () => {
  const [showKey, setShowKey] = useState<{[key: string]: boolean}>({});

  const apiKeys = [
    {
      id: 'api_key_1',
      label: 'Main Production API',
      keyId: 'pk_live_51H***************',
      status: 'Active',
      scope: 'Read/Write',
      createdDate: '2024-01-15',
      lastUsed: '2024-05-29',
      expiryDate: null
    },
    {
      id: 'api_key_2',
      label: 'Analytics Integration',
      keyId: 'pk_test_51H***************',
      status: 'Active',
      scope: 'Read Only',
      createdDate: '2024-03-10',
      lastUsed: '2024-05-28',
      expiryDate: '2024-12-31'
    },
    {
      id: 'api_key_3',
      label: 'Legacy Mobile App',
      keyId: 'pk_live_41G***************',
      status: 'Revoked',
      scope: 'Admin',
      createdDate: '2023-11-20',
      lastUsed: '2024-04-15',
      expiryDate: null
    }
  ];

  const toggleKeyVisibility = (keyId: string) => {
    setShowKey(prev => ({
      ...prev,
      [keyId]: !prev[keyId]
    }));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active': return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'Revoked': return <Badge className="bg-red-100 text-red-800">Revoked</Badge>;
      case 'Expired': return <Badge className="bg-gray-100 text-gray-800">Expired</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getScopeBadge = (scope: string) => {
    switch (scope) {
      case 'Read Only': return <Badge variant="outline" className="text-blue-600">Read Only</Badge>;
      case 'Read/Write': return <Badge variant="outline" className="text-orange-600">Read/Write</Badge>;
      case 'Admin': return <Badge variant="outline" className="text-red-600">Admin</Badge>;
      default: return <Badge variant="outline">{scope}</Badge>;
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
                <h1 className="text-2xl font-bold text-gray-900">API Key Management</h1>
                <p className="text-sm text-gray-600">Generate and manage internal and third-party API keys</p>
              </div>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Generate New Key
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Keys</CardTitle>
              <Key className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 active, 1 revoked</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Keys</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Currently in use</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">Within 30 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">API Calls Today</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5K</div>
              <p className="text-xs text-muted-foreground">+8% from yesterday</p>
            </CardContent>
          </Card>
        </div>

        {/* API Keys Table */}
        <Card>
          <CardHeader>
            <CardTitle>API Keys</CardTitle>
            <CardDescription>Manage your API keys and their permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Label</TableHead>
                    <TableHead>Key ID</TableHead>
                    <TableHead>Scope</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Last Used</TableHead>
                    <TableHead>Expires</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {apiKeys.map((key) => (
                    <TableRow key={key.id} className={key.status === 'Revoked' ? 'opacity-50' : ''}>
                      <TableCell className="font-medium">{key.label}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                            {showKey[key.id] ? 'pk_live_51H7ABCDEFGHIJKLMNOP...' : key.keyId}
                          </code>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => toggleKeyVisibility(key.id)}
                          >
                            {showKey[key.id] ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>{getScopeBadge(key.scope)}</TableCell>
                      <TableCell>{getStatusBadge(key.status)}</TableCell>
                      <TableCell>{key.createdDate}</TableCell>
                      <TableCell>{key.lastUsed}</TableCell>
                      <TableCell>{key.expiryDate || 'Never'}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            View Logs
                          </Button>
                          {key.status === 'Active' && (
                            <Button size="sm" variant="outline">
                              Revoke
                            </Button>
                          )}
                          <Button size="sm" variant="ghost">
                            <MoreVertical className="h-3 w-3" />
                          </Button>
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

export default AdminSettingsApiKeys;
