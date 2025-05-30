
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, MessageSquare, Plus, Edit, Eye } from 'lucide-react';

const AdminSettingsNotifications = () => {
  const emailTemplates = [
    {
      id: 'ET001',
      name: 'Welcome Email',
      type: 'Email',
      triggers: ['user_registration'],
      lastEdited: '2024-05-20',
      status: 'active'
    },
    {
      id: 'ET002',
      name: 'Booking Confirmation',
      type: 'Email',
      triggers: ['booking_confirmed'],
      lastEdited: '2024-05-18',
      status: 'active'
    },
    {
      id: 'ET003',
      name: 'Password Reset',
      type: 'Email',
      triggers: ['password_reset_request'],
      lastEdited: '2024-05-15',
      status: 'active'
    },
    {
      id: 'ST001',
      name: 'Booking Reminder',
      type: 'SMS',
      triggers: ['booking_reminder_24h'],
      lastEdited: '2024-05-10',
      status: 'active'
    }
  ];

  const getTypeColor = (type: string) => {
    return type === 'Email' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Email & Notification Templates</h1>
              <p className="text-sm text-gray-600">Manage all templated communications</p>
            </div>
            <div className="flex items-center gap-4">
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Create Template
              </Button>
              <Link to="/admin">
                <Button variant="outline" size="sm">Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Templates List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Communication Templates
            </CardTitle>
            <CardDescription>Manage email and SMS templates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {emailTemplates.map((template) => (
                <div key={template.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium">{template.name}</h3>
                        <Badge className={getTypeColor(template.type)}>
                          {template.type}
                        </Badge>
                        <Badge className={getStatusColor(template.status)}>
                          {template.status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {template.triggers.map((trigger, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {trigger}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500">
                        Last edited: {template.lastEdited}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        Test Send
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Template Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Templates
              </CardTitle>
              <CardDescription>Manage email communications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Transactional</span>
                  <span className="text-sm text-gray-600">8 templates</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Marketing</span>
                  <span className="text-sm text-gray-600">5 templates</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Support</span>
                  <span className="text-sm text-gray-600">3 templates</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                SMS Templates
              </CardTitle>
              <CardDescription>Manage SMS communications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Booking Updates</span>
                  <span className="text-sm text-gray-600">4 templates</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Reminders</span>
                  <span className="text-sm text-gray-600">2 templates</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Alerts</span>
                  <span className="text-sm text-gray-600">3 templates</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Template Usage Statistics</CardTitle>
            <CardDescription>Most frequently used templates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Booking Confirmation Email</span>
                <span className="font-medium">2,847 sent this month</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Welcome Email</span>
                <span className="font-medium">1,293 sent this month</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Booking Reminder SMS</span>
                <span className="font-medium">987 sent this month</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSettingsNotifications;
