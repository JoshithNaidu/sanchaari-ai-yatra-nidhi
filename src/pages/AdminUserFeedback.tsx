
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  MessageSquare, 
  Clock,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Eye,
  Send
} from 'lucide-react';

const AdminUserFeedback = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  // Mock ticket data
  const tickets = [
    {
      id: 'TKT001',
      userId: 'USR001',
      userName: 'Rajesh Kumar',
      subject: 'Payment issue with booking',
      category: 'Payment',
      priority: 'high',
      status: 'open',
      createdDate: '2024-05-25',
      lastReply: '2024-05-26',
      description: 'Having trouble with payment processing for my Goa trip booking. Payment failed multiple times.',
      responses: 2
    },
    {
      id: 'TKT002',
      userId: 'USR002',
      userName: 'Priya Sharma',
      subject: 'Request for itinerary change',
      category: 'Booking',
      priority: 'medium',
      status: 'in_progress',
      createdDate: '2024-05-20',
      lastReply: '2024-05-24',
      description: 'Need to change travel dates due to personal emergency. Please help with rescheduling.',
      responses: 5
    },
    {
      id: 'TKT003',
      userId: 'USR003',
      userName: 'Amit Patel',
      subject: 'App crashing during trip planning',
      category: 'Technical',
      priority: 'high',
      status: 'open',
      createdDate: '2024-05-28',
      lastReply: '2024-05-28',
      description: 'The mobile app keeps crashing when I try to add activities to my itinerary.',
      responses: 1
    },
    {
      id: 'TKT004',
      userId: 'USR001',
      userName: 'Rajesh Kumar',
      subject: 'Great experience with Kerala trip',
      category: 'Feedback',
      priority: 'low',
      status: 'closed',
      createdDate: '2024-04-15',
      lastReply: '2024-04-16',
      description: 'Just wanted to share positive feedback about our recent Kerala trip. Everything was perfect!',
      responses: 3
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge className="bg-red-100 text-red-800"><AlertTriangle className="h-3 w-3 mr-1" />Open</Badge>;
      case 'in_progress':
        return <Badge className="bg-yellow-100 text-yellow-800"><Clock className="h-3 w-3 mr-1" />In Progress</Badge>;
      case 'closed':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Closed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800">High</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>;
      case 'low':
        return <Badge className="bg-green-100 text-green-800">Low</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ticket.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ticket.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || ticket.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin/users/list" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Users
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Support Tickets & Feedback</h1>
                <p className="text-sm text-gray-600">Manage user support requests and feedback</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Tickets</p>
                  <p className="text-2xl font-bold">{tickets.length}</p>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Open Tickets</p>
                  <p className="text-2xl font-bold">{tickets.filter(t => t.status === 'open').length}</p>
                </div>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">In Progress</p>
                  <p className="text-2xl font-bold">{tickets.filter(t => t.status === 'in_progress').length}</p>
                </div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Closed</p>
                  <p className="text-2xl font-bold">{tickets.filter(t => t.status === 'closed').length}</p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Search & Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by ticket ID, subject, or user..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tickets List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Support Tickets ({filteredTickets.length})</CardTitle>
                <CardDescription>
                  All user support requests and feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ticket</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTickets.map((ticket) => (
                        <TableRow 
                          key={ticket.id} 
                          className={`cursor-pointer hover:bg-gray-50 ${selectedTicket === ticket.id ? 'bg-blue-50' : ''}`}
                          onClick={() => setSelectedTicket(ticket.id)}
                        >
                          <TableCell>
                            <div>
                              <div className="font-medium line-clamp-1">{ticket.subject}</div>
                              <div className="text-xs text-gray-500">{ticket.id}</div>
                              <div className="text-xs text-gray-400">{ticket.category}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <div className="text-sm">{ticket.userName}</div>
                              <div className="text-xs text-gray-500">{ticket.userId}</div>
                            </div>
                          </TableCell>
                          <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                          <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                          <TableCell>
                            <div className="text-sm">{ticket.createdDate}</div>
                            <div className="text-xs text-gray-500">{ticket.responses} replies</div>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3 mr-1" />
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ticket Details */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Ticket Details</CardTitle>
                <CardDescription>
                  {selectedTicket ? `Viewing ticket ${selectedTicket}` : 'Select a ticket to view details'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedTicket ? (
                  <div className="space-y-4">
                    {/* Selected ticket details */}
                    {(() => {
                      const ticket = tickets.find(t => t.id === selectedTicket);
                      if (!ticket) return null;
                      return (
                        <>
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold">{ticket.subject}</h3>
                            {getStatusBadge(ticket.status)}
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg border text-gray-700">
                            <p className="text-sm">{ticket.description}</p>
                            <div className="text-xs text-gray-500 mt-2">
                              Submitted by: {ticket.userName} • {ticket.createdDate}
                            </div>
                          </div>
                          <div className="border-t pt-4">
                            <h4 className="font-medium mb-3">Quick Response</h4>
                            <Textarea 
                              placeholder="Type your reply here..."
                              className="min-h-20 mb-4"
                            />
                            <div className="flex items-center justify-between">
                              <div>
                                <Select defaultValue="templates">
                                  <SelectTrigger className="w-48">
                                    <SelectValue placeholder="Response Templates" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="templates">Response Templates</SelectItem>
                                    <SelectItem value="payment">Payment Issue</SelectItem>
                                    <SelectItem value="booking">Booking Change</SelectItem>
                                    <SelectItem value="general">General Thanks</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-x-2">
                                <Button variant="outline">
                                  <Clock className="h-3 w-3 mr-1" />
                                  Mark In Progress
                                </Button>
                                <Button>
                                  <Send className="h-3 w-3 mr-1" />
                                  Reply
                                </Button>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    <MessageSquare className="h-10 w-10 mx-auto mb-2 opacity-30" />
                    <p>Select a ticket from the list to view details</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserFeedback;
