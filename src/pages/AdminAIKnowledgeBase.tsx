
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import { Book, Search, Plus, Edit, Trash2, FileText } from 'lucide-react';

const AdminAIKnowledgeBase = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const knowledgeArticles = [
    {
      id: 'KB001',
      title: 'India Travel Destinations Guide',
      category: 'Travel Information',
      status: 'published',
      lastUpdated: '2024-05-20',
      views: 1250,
      accuracy: 96.5
    },
    {
      id: 'KB002',
      title: 'Booking Process FAQ',
      category: 'Customer Support',
      status: 'published',
      lastUpdated: '2024-05-18',
      views: 890,
      accuracy: 94.2
    },
    {
      id: 'KB003',
      title: 'Payment Methods and Policies',
      category: 'Billing',
      status: 'draft',
      lastUpdated: '2024-05-15',
      views: 0,
      accuracy: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Knowledge Base</h1>
              <p className="text-sm text-gray-600">Manage AI knowledge articles and information</p>
            </div>
            <div className="flex items-center gap-4">
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Article
              </Button>
              <Link to="/admin/ai/analytics">
                <Button variant="outline" size="sm">Back to AI Analytics</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search knowledge base..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Knowledge Articles */}
        <Card>
          <CardHeader>
            <CardTitle>Knowledge Articles</CardTitle>
            <CardDescription>Manage AI training content and information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {knowledgeArticles.map((article) => (
                <div key={article.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-gray-400" />
                        <span className="font-medium">{article.title}</span>
                      </div>
                      <div className="text-sm text-gray-600">{article.id}</div>
                    </div>
                    <div>
                      <Badge variant="outline">{article.category}</Badge>
                    </div>
                    <div>
                      <Badge className={getStatusColor(article.status)}>
                        {article.status}
                      </Badge>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium">{article.views}</div>
                      <div className="text-xs text-gray-600">views</div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Last updated: {article.lastUpdated} • Accuracy: {article.accuracy > 0 ? `${article.accuracy}%` : 'N/A'}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
            <CardDescription>Organize knowledge base content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Travel Information</div>
                    <div className="text-sm text-gray-600">45 articles</div>
                  </div>
                  <Button size="sm" variant="outline">Manage</Button>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Customer Support</div>
                    <div className="text-sm text-gray-600">32 articles</div>
                  </div>
                  <Button size="sm" variant="outline">Manage</Button>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Billing</div>
                    <div className="text-sm text-gray-600">18 articles</div>
                  </div>
                  <Button size="sm" variant="outline">Manage</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAIKnowledgeBase;
