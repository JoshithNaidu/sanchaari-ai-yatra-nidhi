
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { Database, Upload, Download, RefreshCw, BarChart3 } from 'lucide-react';

const AdminAITrainingData = () => {
  const [datasets, setDatasets] = useState([
    {
      id: 'DS001',
      name: 'Customer Conversations',
      type: 'conversations',
      size: '2.5 GB',
      records: 125000,
      status: 'active',
      lastUpdated: '2024-05-20',
      quality: 94.2
    },
    {
      id: 'DS002',
      name: 'Destination Information',
      type: 'knowledge',
      size: '850 MB',
      records: 45000,
      status: 'active',
      lastUpdated: '2024-05-18',
      quality: 96.8
    },
    {
      id: 'DS003',
      name: 'Booking Patterns',
      type: 'analytics',
      size: '1.2 GB',
      records: 78000,
      status: 'processing',
      lastUpdated: '2024-05-22',
      quality: 89.5
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'conversations': return 'bg-purple-100 text-purple-800';
      case 'knowledge': return 'bg-blue-100 text-blue-800';
      case 'analytics': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Training Data</h1>
              <p className="text-sm text-gray-600">Manage AI training datasets and quality</p>
            </div>
            <div className="flex items-center gap-4">
              <Button size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload Dataset
              </Button>
              <Link to="/admin/ai/analytics">
                <Button variant="outline" size="sm">Back to AI Analytics</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Training Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Records</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">248K</div>
              <p className="text-xs text-muted-foreground">+15% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Data Quality</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">93.5%</div>
              <p className="text-xs text-muted-foreground">+2.1% improvement</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.6 GB</div>
              <p className="text-xs text-muted-foreground">68% of quota</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Training</CardTitle>
              <RefreshCw className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2 days</div>
              <p className="text-xs text-muted-foreground">ago</p>
            </CardContent>
          </Card>
        </div>

        {/* Datasets */}
        <Card>
          <CardHeader>
            <CardTitle>Training Datasets</CardTitle>
            <CardDescription>Manage AI training data sources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {datasets.map((dataset) => (
                <div key={dataset.id} className="border rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-gray-400" />
                        <span className="font-medium">{dataset.name}</span>
                      </div>
                      <div className="text-sm text-gray-600">{dataset.id}</div>
                    </div>
                    <div>
                      <Badge className={getTypeColor(dataset.type)}>
                        {dataset.type}
                      </Badge>
                    </div>
                    <div>
                      <div className="text-sm font-medium">{dataset.size}</div>
                      <div className="text-xs text-gray-600">{dataset.records.toLocaleString()} records</div>
                    </div>
                    <div>
                      <Badge className={getStatusColor(dataset.status)}>
                        {dataset.status}
                      </Badge>
                      <div className="text-xs text-gray-500 mt-1">
                        Updated: {dataset.lastUpdated}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <BarChart3 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Data Quality</span>
                      <span>{dataset.quality}%</span>
                    </div>
                    <Progress value={dataset.quality} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Processing */}
        <Card>
          <CardHeader>
            <CardTitle>Data Processing</CardTitle>
            <CardDescription>Tools for data preparation and quality improvement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <RefreshCw className="h-6 w-6" />
                <span>Retrain Models</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <BarChart3 className="h-6 w-6" />
                <span>Quality Analysis</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Database className="h-6 w-6" />
                <span>Data Export</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAITrainingData;
