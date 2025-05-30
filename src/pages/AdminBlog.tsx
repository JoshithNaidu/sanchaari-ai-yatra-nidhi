
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
  Calendar,
  BarChart3,
  FileText,
  Settings,
  Clock,
  Users
} from 'lucide-react';

const AdminBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: "BLOG001",
      title: "Top 10 Hidden Gems in Rajasthan",
      slug: "hidden-gems-rajasthan",
      author: "Travel Writer",
      category: "Destination Guide",
      wordCount: 2150,
      status: "Published",
      views: 12500,
      engagementScore: 8.5,
      publishDate: "2024-05-25",
      lastModified: "2024-05-28 14:30:00"
    },
    {
      id: "BLOG002",
      title: "Budget Travel Tips for Northeast India",
      slug: "budget-travel-northeast-india",
      author: "Budget Expert",
      category: "Travel Tips",
      wordCount: 1800,
      status: "Draft",
      views: 0,
      engagementScore: 0,
      publishDate: null,
      lastModified: "2024-05-30 10:15:00"
    },
    {
      id: "BLOG003",
      title: "Monsoon Travel Safety Guide",
      slug: "monsoon-travel-safety",
      author: "Safety Expert",
      category: "Safety",
      wordCount: 1200,
      status: "Review",
      views: 0,
      engagementScore: 0,
      publishDate: "2024-06-01",
      lastModified: "2024-05-29 16:45:00"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      case 'Review': return 'bg-yellow-100 text-yellow-800';
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
              <h1 className="text-2xl font-bold text-gray-900">Manage Blog & Articles</h1>
            </div>
            <div className="flex items-center gap-4">
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Blog Posts Table */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Blog Content Management</CardTitle>
                <CardDescription>Create and manage editorial blog posts, travel tips, and campaign stories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Article</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Performance</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {blogPosts.map((post) => (
                        <TableRow key={post.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{post.title}</p>
                              <p className="text-xs text-gray-500">/{post.slug}</p>
                              <p className="text-xs text-gray-500">{post.wordCount} words</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{post.category}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                <span className="text-xs">{post.views.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <BarChart3 className="h-3 w-3" />
                                <span className="text-xs">{post.engagementScore}/10</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(post.status)}>
                              {post.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="text-sm">{post.author}</p>
                              <p className="text-xs text-gray-500">{post.lastModified}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Edit className="h-3 w-3 mr-1" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                <Eye className="h-3 w-3 mr-1" />
                                Preview
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

          {/* Editor Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Content Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full gap-2">
                    <FileText className="h-4 w-4" />
                    Rich Text Editor
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Settings className="h-4 w-4" />
                    SEO & Meta
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Calendar className="h-4 w-4" />
                    Schedule Post
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Analytics
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium mb-3">Publishing Stats</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Published</span>
                      <span className="font-medium">45</span>
                    </div>
                    <div className="flex justify-between">
                      <span>In Review</span>
                      <span className="font-medium">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Drafts</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Scheduled</span>
                      <span className="font-medium">3</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-gray-500" />
                    <span>Article published 2h ago</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3 w-3 text-gray-500" />
                    <span>5 new comments pending</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-3 w-3 text-gray-500" />
                    <span>Weekly report ready</span>
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

export default AdminBlog;
