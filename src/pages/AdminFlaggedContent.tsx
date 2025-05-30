
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  X,
  Eye,
  MessageSquare,
  Clock,
  User,
  Flag
} from 'lucide-react';

const AdminFlaggedContent = () => {
  const [selectedPriority, setSelectedPriority] = useState('all');

  const flaggedItems = [
    {
      id: "FLAG001",
      itemId: "UGC001",
      sourceType: "Review",
      flagReason: "Inappropriate Language",
      reportedBy: "User123",
      reportCount: 3,
      moderatorStatus: "Under Review",
      resolutionAction: null,
      adminId: "ADMIN001",
      timestamp: "2024-05-30 14:30:00",
      aiClassification: "Abuse",
      contentPreview: "This place was absolutely terrible and the staff were complete idiots...",
      priority: "High"
    },
    {
      id: "FLAG002",
      itemId: "UGC002",
      sourceType: "Trip Story",
      flagReason: "Spam/Promotional",
      reportedBy: "User456",
      reportCount: 1,
      moderatorStatus: "Escalated",
      resolutionAction: null,
      adminId: "ADMIN002",
      timestamp: "2024-05-30 12:15:00",
      aiClassification: "Spam",
      contentPreview: "Check out my amazing travel blog at www.example.com for more tips...",
      priority: "Medium"
    },
    {
      id: "FLAG003",
      itemId: "UGC003",
      sourceType: "Review",
      flagReason: "Fake Review",
      reportedBy: "Partner789",
      reportCount: 2,
      moderatorStatus: "Resolved",
      resolutionAction: "Removed",
      adminId: "ADMIN001",
      timestamp: "2024-05-29 18:45:00",
      aiClassification: "Fraud",
      contentPreview: "Amazing stay! Everything was perfect! 5 stars! Highly recommend!",
      priority: "High"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Review': return 'bg-yellow-100 text-yellow-800';
      case 'Escalated': return 'bg-red-100 text-red-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case 'Abuse': return 'bg-red-100 text-red-800';
      case 'Spam': return 'bg-orange-100 text-orange-800';
      case 'Fraud': return 'bg-purple-100 text-purple-800';
      case 'NSFW': return 'bg-pink-100 text-pink-800';
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
              <h1 className="text-2xl font-bold text-gray-900">Flagged Content Review</h1>
            </div>
            <div className="flex items-center gap-4">
              <select 
                className="border rounded px-3 py-1 text-sm"
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
              >
                <option value="all">All Priority</option>
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
              </select>
              <Link to="/admin/logout">
                <Button variant="destructive" size="sm">Logout</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Flagged Content Table */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Content Review Queue</CardTitle>
                <CardDescription>Triage escalated content for review, removal, or compliance evaluation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Content & Flag Details</TableHead>
                        <TableHead>AI Classification</TableHead>
                        <TableHead>Reports & Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {flaggedItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">{item.sourceType}</Badge>
                                <span className="text-xs text-gray-500">#{item.itemId}</span>
                              </div>
                              <p className="text-sm text-gray-600 line-clamp-2">
                                {item.contentPreview}
                              </p>
                              <div className="flex items-center gap-1">
                                <Flag className="h-3 w-3 text-red-500" />
                                <span className="text-xs text-gray-500">
                                  Reason: {item.flagReason}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500">{item.timestamp}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <Badge className={getClassificationColor(item.aiClassification)}>
                                {item.aiClassification}
                              </Badge>
                              <p className="text-xs text-gray-500">
                                Reported by: {item.reportedBy}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-1">
                                <AlertTriangle className="h-3 w-3 text-orange-500" />
                                <span className="text-xs font-medium">{item.reportCount} reports</span>
                              </div>
                              <Badge className={getPriorityColor(item.priority)}>
                                {item.priority}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <Badge className={getStatusColor(item.moderatorStatus)}>
                                {item.moderatorStatus}
                              </Badge>
                              {item.resolutionAction && (
                                <p className="text-xs text-gray-500">
                                  Action: {item.resolutionAction}
                                </p>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                <CheckCircle className="h-3 w-3 text-green-600" />
                              </Button>
                              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                <X className="h-3 w-3 text-red-600" />
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

          {/* Review Tools Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Review Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Mark Resolved
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <X className="h-4 w-4" />
                    Remove Content
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Escalate
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Contact User
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium mb-3">Resolution Form</h4>
                  <div className="space-y-3">
                    <select className="w-full border rounded px-3 py-2 text-sm">
                      <option>Select Action</option>
                      <option>Approve Content</option>
                      <option>Remove Content</option>
                      <option>Warn User</option>
                      <option>Suspend User</option>
                    </select>
                    <textarea 
                      className="w-full border rounded px-3 py-2 text-sm"
                      placeholder="Resolution comments..."
                      rows={3}
                    />
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" />
                      Notify user of decision
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Queue Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">12</div>
                    <div className="text-xs text-gray-500">High Priority</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">8</div>
                    <div className="text-xs text-gray-500">Medium Priority</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">5</div>
                    <div className="text-xs text-gray-500">Low Priority</div>
                  </div>
                  <div className="text-center pt-2 border-t">
                    <div className="text-sm font-medium">Avg Resolution Time</div>
                    <div className="text-lg font-bold text-blue-600">18 min</div>
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

export default AdminFlaggedContent;
