
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { Brain, Settings, Play, Pause, BarChart3, Download } from 'lucide-react';

const AdminAIModels = () => {
  const [models, setModels] = useState([
    {
      id: 'model-1',
      name: 'Travel Assistant GPT-4',
      version: 'v2.1.3',
      status: 'active',
      accuracy: 94.2,
      lastTrained: '2024-05-20',
      requests: 15420,
      type: 'conversation'
    },
    {
      id: 'model-2',
      name: 'Destination Recommender',
      version: 'v1.8.7',
      status: 'active',
      accuracy: 87.5,
      lastTrained: '2024-05-18',
      requests: 8930,
      type: 'recommendation'
    },
    {
      id: 'model-3',
      name: 'Sentiment Analyzer',
      version: 'v1.2.1',
      status: 'inactive',
      accuracy: 91.3,
      lastTrained: '2024-05-15',
      requests: 3420,
      type: 'analysis'
    }
  ]);

  const handleToggleModel = (modelId: string) => {
    setModels(models.map(model => 
      model.id === modelId 
        ? { ...model, status: model.status === 'active' ? 'inactive' : 'active' }
        : model
    ));
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'conversation': return 'bg-blue-100 text-blue-800';
      case 'recommendation': return 'bg-purple-100 text-purple-800';
      case 'analysis': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AI Models</h1>
              <p className="text-sm text-gray-600">Manage AI models and their configurations</p>
            </div>
            <div className="flex items-center gap-4">
              <Button size="sm">Deploy New Model</Button>
              <Link to="/admin/ai/analytics">
                <Button variant="outline" size="sm">Back to AI Analytics</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Models Grid */}
        <div className="grid grid-cols-1 gap-6">
          {models.map((model) => (
            <Card key={model.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Brain className="h-6 w-6 text-blue-600" />
                    <div>
                      <CardTitle className="text-lg">{model.name}</CardTitle>
                      <CardDescription>Version {model.version}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className={getStatusColor(model.status)}>
                      {model.status}
                    </Badge>
                    <Badge className={getTypeColor(model.type)}>
                      {model.type}
                    </Badge>
                    <Switch 
                      checked={model.status === 'active'}
                      onCheckedChange={() => handleToggleModel(model.id)}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-green-600">{model.accuracy}%</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{model.requests.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Total Requests</div>
                  </div>
                  <div>
                    <div className="text-lg font-medium">{model.lastTrained}</div>
                    <div className="text-sm text-gray-600">Last Trained</div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      Configure
                    </Button>
                    <Button size="sm" variant="outline">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Analytics
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Model Management Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Model Management</CardTitle>
            <CardDescription>Quick actions for model management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Brain className="h-6 w-6" />
                <span>Train New Model</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Download className="h-6 w-6" />
                <span>Import Model</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <BarChart3 className="h-6 w-6" />
                <span>Performance Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAIModels;
