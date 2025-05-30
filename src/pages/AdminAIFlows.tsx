
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft,
  GitBranch,
  Play,
  Pause,
  Copy,
  Archive,
  Eye,
  Settings,
  Plus,
  Save,
  RotateCcw
} from 'lucide-react';

const AdminAIFlows = () => {
  const [selectedFlow, setSelectedFlow] = useState(null);

  const flows = [
    {
      id: "FLOW001",
      name: "Hotel Booking Flow",
      version: "v2.3",
      status: "Live",
      language: ["EN", "HI"],
      nodes: 12,
      lastModified: "2024-05-28 15:30:00",
      editor: "AI Team Lead",
      environment: "Production"
    },
    {
      id: "FLOW002",
      name: "Payment Support Flow",
      version: "v1.8",
      status: "Staging",
      language: ["EN"],
      nodes: 8,
      lastModified: "2024-05-30 10:15:00",
      editor: "Support Manager",
      environment: "Staging"
    },
    {
      id: "FLOW003",
      name: "Destination Discovery",
      version: "v3.1",
      status: "Draft",
      language: ["EN", "HI", "BN"],
      nodes: 15,
      lastModified: "2024-05-30 14:20:00",
      editor: "ML Engineer",
      environment: "Development"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800';
      case 'Staging': return 'bg-yellow-100 text-yellow-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
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
              <h1 className="text-2xl font-bold text-gray-900">Conversational Flow Editor</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Flow
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Flow List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Conversation Flows</CardTitle>
                <CardDescription>Visual no-code environment for modifying chatbot logic trees</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {flows.map((flow) => (
                    <div key={flow.id} className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                         onClick={() => setSelectedFlow(flow)}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold">{flow.name}</h3>
                            <Badge className={getStatusColor(flow.status)}>
                              {flow.status}
                            </Badge>
                            <Badge variant="outline">{flow.version}</Badge>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>Environment: {flow.environment}</p>
                            <p>Nodes: {flow.nodes} | Languages: {flow.language.join(', ')}</p>
                            <p>Last modified: {flow.lastModified} by {flow.editor}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-3 w-3 mr-1" />
                            Preview
                          </Button>
                          <Button variant="outline" size="sm">
                            <Settings className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Flow Details/Editor */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Flow Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full gap-2">
                    <Play className="h-4 w-4" />
                    Deploy to Staging
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Copy className="h-4 w-4" />
                    Clone Flow
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <GitBranch className="h-4 w-4" />
                    Version History
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Save className="h-4 w-4" />
                    Export Flow
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Archive className="h-4 w-4" />
                    Archive
                  </Button>
                </div>

                {selectedFlow && (
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-medium mb-3">Flow Validation</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>No broken links</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>No infinite loops</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>All intents connected</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Preview Simulator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <textarea 
                    className="w-full border rounded p-2 text-sm"
                    placeholder="Enter mock user text..."
                    rows={3}
                  />
                  <Button size="sm" className="w-full">Test Response</Button>
                  <div className="bg-gray-50 border rounded p-3 text-sm">
                    <p className="text-gray-600">Bot response will appear here...</p>
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

export default AdminAIFlows;
