
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Upload, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PartnerContactSupport = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    subject: '',
    category: '',
    message: '',
    priority: 'medium'
  });

  const supportTickets = [
    {
      id: 'TICK-001',
      subject: 'Payment not received for booking #12345',
      category: 'Payments',
      status: 'open',
      priority: 'high',
      created: '2024-01-20',
      lastUpdate: '2024-01-21',
      estimatedResponse: '4 hours'
    },
    {
      id: 'TICK-002',
      subject: 'Help with API integration',
      category: 'Technical',
      status: 'in_progress',
      priority: 'medium',
      created: '2024-01-18',
      lastUpdate: '2024-01-19',
      estimatedResponse: '24 hours'
    },
    {
      id: 'TICK-003',
      subject: 'Update business information',
      category: 'Account',
      status: 'resolved',
      priority: 'low',
      created: '2024-01-15',
      lastUpdate: '2024-01-16',
      estimatedResponse: 'Resolved'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support ticket created",
      description: "Your support request has been submitted. We'll get back to you within 24 hours.",
    });
    setFormData({
      subject: '',
      category: '',
      message: '',
      priority: 'medium'
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open': return <AlertCircle className="h-4 w-4 text-blue-600" />;
      case 'in_progress': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'resolved': return <CheckCircle className="h-4 w-4 text-green-600" />;
      default: return <MessageSquare className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-800';
      case 'in_progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Contact Support</h1>
              <p className="text-gray-600">Get help with your partner account and services</p>
            </div>
            <div className="text-sm text-gray-600">
              <p>Average response time: <span className="font-medium text-blue-600">4 hours</span></p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Support Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Submit Support Request
              </CardTitle>
              <CardDescription>
                Describe your issue and we'll get back to you quickly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief description of your issue"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="account">Account Issues</SelectItem>
                        <SelectItem value="bookings">Booking Problems</SelectItem>
                        <SelectItem value="payments">Payment Issues</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="listings">Listing Management</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="priority">Priority</Label>
                    <Select
                      value={formData.priority}
                      onValueChange={(value) => setFormData({ ...formData, priority: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please provide detailed information about your issue..."
                    rows={5}
                    required
                  />
                </div>

                <div>
                  <Label>Attachments (Optional)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      Drop files here or click to upload
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Supported: JPG, PNG, PDF, DOC (max 10MB)
                    </p>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Submit Support Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Support Information */}
          <div className="space-y-6">
            {/* Contact Options */}
            <Card>
              <CardHeader>
                <CardTitle>Other Ways to Get Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-1">Live Chat</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Chat with our support team in real-time
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-green-600">● Available now</span>
                    <Button variant="outline" size="sm">Start Chat</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-1">Phone Support</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Call us directly for urgent issues
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono">+91-800-123-4567</span>
                    <span className="text-xs text-gray-500">Mon-Fri 9AM-6PM</span>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-1">Email Support</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Send us an email for non-urgent matters
                  </p>
                  <span className="text-sm font-mono">partners@sanchaari.com</span>
                </div>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card>
              <CardHeader>
                <CardTitle>Response Time Expectations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Urgent Issues</span>
                    <span className="font-medium">Within 1 hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>High Priority</span>
                    <span className="font-medium">Within 4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Medium Priority</span>
                    <span className="font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Low Priority</span>
                    <span className="font-medium">Within 48 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Tickets History */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Your Support Tickets</CardTitle>
            <CardDescription>Track the status of your support requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {supportTickets.map((ticket) => (
                <div key={ticket.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(ticket.status)}
                      <div>
                        <h3 className="font-medium">{ticket.subject}</h3>
                        <p className="text-sm text-gray-600">Ticket #{ticket.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(ticket.priority)}>
                        {ticket.priority}
                      </Badge>
                      <Badge className={getStatusColor(ticket.status)}>
                        {ticket.status.replace('_', ' ')}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Created:</span> {ticket.created}
                    </div>
                    <div>
                      <span className="font-medium">Last Update:</span> {ticket.lastUpdate}
                    </div>
                    <div>
                      <span className="font-medium">Category:</span> {ticket.category}
                    </div>
                    <div>
                      <span className="font-medium">Est. Response:</span> {ticket.estimatedResponse}
                    </div>
                  </div>
                  
                  <div className="mt-3 flex gap-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="ghost" size="sm">Add Comment</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartnerContactSupport;
