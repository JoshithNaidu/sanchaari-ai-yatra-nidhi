
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
  Plus,
  Edit,
  Eye,
  Archive,
  Flag,
  Search,
  Filter,
  Upload,
  Download,
  BarChart3,
  AlertCircle
} from 'lucide-react';

const AdminAIKnowledgeBase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [workflowFilter, setWorkflowFilter] = useState('all');

  const knowledgeArticles = [
    {
      id: "KB001",
      title: "How to cancel a booking",
      category: "Booking Management",
      status: "Live",
      workflow: "Approved",
      relevanceScore: 95,
      views: 1250,
      ctaClickRate: "18.5%",
      aiTriggerFreq: 89,
      lastUpdated: "2024-05-25",
      author: "Support Team",
      fallbackRate: "12%"
    },
    {
      id: "KB002", 
      title: "Payment failure troubleshooting",
      category: "Payment Issues",
      status: "Live",
      workflow: "Approved",
      relevanceScore: 92,
      views: 890,
      ctaClickRate: "22.1%",
      aiTriggerFreq: 156,
      lastUpdated: "2024-05-28",
      author: "Billing Team",
      fallbackRate: "8%"
    },
    {
      id: "KB003",
      title: "Destination guide: Goa beaches",
      category: "Travel Guides",
      status: "Review",
      workflow: "Draft",
      relevanceScore: 88,
      views: 450,
      ctaClickRate: "15.2%",
      aiTriggerFreq: 34,
      lastUpdated: "2024-05-30",
      author: "Content Team",
      fallbackRate: "35%"
    },
    {
      id: "KB004",
      title: "Partner commission structure",
      category: "Partner Support", 
      status: "Flagged",
      workflow: "Review",
      relevanceScore: 76,
      views: 123,
      ctaClickRate: "9.8%",
      aiTriggerFreq: 12,
      lastUpdated: "2024-05-20",
      author: "Partner Team",
      fallbackRate: "45%"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800';
      case 'Review': return 'bg-yellow-100 text-yellow-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      case 'Flagged': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getWorkflowColor = (workflow: string) => {
    switch (workflow) {
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Review': return 'bg-yellow-100 text-yellow-800';
      case 'Draft': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const categories = [
    { name: 'All', count: 4 },
    { name: 'Booking Management', count: 1 },
    { name: 'Payment Issues', count: 1 },
    { name: 'Travel Guides', count: 1 },
    { name: 'Partner Support', count: 1 }
  ];

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
              <h1 className="text-2xl font-bold text-gray-900">Knowledge Base Management</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Upload className="h-4 w-4" />
                Import Articles
              </Button>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Article
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
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Articles</p>
                  <p className="text-2xl font-bold text-blue-600">247</p>
                </div>
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Live Articles</p>
                  <p className="text-2xl font-bold text-green-600">198</p>
                </div>
                <Eye className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Review</p>
                  <p className="text-2xl font-bold text-yellow-600">31</p>
                </div>
                <Flag className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Needs Update</p>
                  <p className="text-2xl font-bold text-red-600">18</p>
                </div>
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Categories Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name.toLowerCase())}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        selectedCategory === category.name.toLowerCase() 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <Badge variant="outline">{category.count}</Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Workflow Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {['All', 'Draft', 'Review', 'Approved'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setWorkflowFilter(status.toLowerCase())}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        workflowFilter === status.toLowerCase() 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Articles Table */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Knowledge Articles</CardTitle>
                    <CardDescription>Maintain accurate answer base for chatbot and help center</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Search className="h-4 w-4 mr-1" />
                      Search
                    </Button>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-1" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Article</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Performance</TableHead>
                        <TableHead>Usage Stats</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {knowledgeArticles.map((article) => (
                        <TableRow key={article.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{article.title}</p>
                              <p className="text-xs text-gray-500">{article.id} • Updated {article.lastUpdated}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{article.category}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <Badge className={getStatusColor(article.status)}>
                                {article.status}
                              </Badge>
                              <Badge className={getWorkflowColor(article.workflow)}>
                                {article.workflow}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm space-y-1">
                              <p>Score: {article.relevanceScore}%</p>
                              <p className={`text-xs ${parseFloat(article.fallbackRate) > 30 ? 'text-red-600' : 'text-green-600'}`}>
                                Fallback: {article.fallbackRate}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm space-y-1">
                              <p>Views: {article.views}</p>
                              <p>CTR: {article.ctaClickRate}</p>
                              <p>AI Triggers: {article.aiTriggerFreq}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button variant="outline" size="sm">
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="h-3 w-3" />
                              </Button>
                              {parseFloat(article.fallbackRate) > 30 && (
                                <Button variant="outline" size="sm" className="text-yellow-600">
                                  <Flag className="h-3 w-3" />
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="flex justify-between items-center mt-6 pt-6 border-t">
                  <div className="text-sm text-gray-600">
                    Showing 4 of 247 articles
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Previous</Button>
                    <Button variant="outline" size="sm">Next</Button>
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

export default AdminAIKnowledgeBase;
