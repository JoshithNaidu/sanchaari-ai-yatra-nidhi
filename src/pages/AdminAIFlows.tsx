
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { Zap, Play, Pause, Edit, Copy, Trash2, Plus } from 'lucide-react';

const AdminAIFlows = () => {
  const [flows, setFlows] = useState([
    {
      id: 'flow-1',
      name: 'Welcome & Onboarding',
      description: 'Initial user greeting and preference collection',
      status: 'active',
      triggers: ['new_user', 'first_chat'],
      steps: 5,
      successRate: 94.2,
      lastModified: '2024-05-20'
    },
    {
      id: 'flow-2',
      name: 'Destination Discovery',
      description: 'Help users find their perfect travel destination',
      status: 'active',
      triggers: ['destination_query', 'travel_planning'],
      steps: 8,
      successRate: 87.8,
      lastModified: '2024-05-18'
    },
    {
      id: 'flow-3',
      name: 'Booking Assistance',
      description: 'Guide users through the booking process',
      status: 'draft',
      triggers: ['booking_intent', 'price_inquiry'],
      steps: 12,
      successRate: 0,
      lastModified: '2024-05-15'
    },
    {
      id: 'flow-4',
      name: 'Support Escalation',
      description: 'Handle complex queries and escalate to human agents',
      status: 'active',
      triggers: ['complex_issue', 'escalation_request'],
      steps: 4,
      successRate: 96.5,
      lastModified: '2024-05-22'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Conversation Flows</h1>
              <p className="text-sm text-gray-600">Design and manage AI conversation flows</p>
            </div>
            <div className="flex items-center gap-4">
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Create Flow
              </Button>
              <Link to="/admin/ai/analytics">
                <Button variant="outline" size="sm">Back to AI Analytics</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Flows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {flows.map((flow) => (
            <Card key={flow.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-blue-600" />
                    <div>
                      <CardTitle className="text-lg">{flow.name}</CardTitle>
                      <CardDescription>{flow.description}</CardDescription>
                    </div>
                  </div>
                  <Badge className={getStatusColor(flow.status)}>
                    {flow.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-lg font-bold">{flow.steps}</div>
                      <div className="text-sm text-gray-600">Steps</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">
                        {flow.successRate > 0 ? `${flow.successRate}%` : 'N/A'}
                      </div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium mb-2">Triggers:</div>
                    <div className="flex flex-wrap gap-1">
                      {flow.triggers.map((trigger, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {trigger}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-gray-500">
                    Last modified: {flow.lastModified}
                  </div>

                  <div className="flex justify-between pt-2">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button size="sm" variant={flow.status === 'active' ? 'outline' : 'default'}>
                      {flow.status === 'active' ? (
                        <>
                          <Pause className="h-4 w-4 mr-2" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Activate
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Flow Templates */}
        <Card>
          <CardHeader>
            <CardTitle>Flow Templates</CardTitle>
            <CardDescription>Pre-built conversation flow templates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Zap className="h-6 w-6" />
                <span>Customer Support</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Zap className="h-6 w-6" />
                <span>Lead Qualification</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Zap className="h-6 w-6" />
                <span>Feedback Collection</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAIFlows;
