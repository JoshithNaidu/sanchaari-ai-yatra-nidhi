
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, BookOpen, Star, ThumbsUp, ThumbsDown } from 'lucide-react';

const PartnerHelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', count: 45 },
    { id: 'getting-started', name: 'Getting Started', count: 8 },
    { id: 'bookings', name: 'Bookings', count: 12 },
    { id: 'payments', name: 'Payments', count: 10 },
    { id: 'integrations', name: 'Integrations', count: 7 },
    { id: 'account', name: 'Account Management', count: 8 }
  ];

  const articles = [
    {
      id: 1,
      title: 'How to create your first listing',
      category: 'getting-started',
      readTime: '5 min read',
      helpful: 92,
      description: 'Step-by-step guide to creating and publishing your first property or service listing.',
      isPopular: true
    },
    {
      id: 2,
      title: 'Managing booking confirmations',
      category: 'bookings',
      readTime: '3 min read',
      helpful: 87,
      description: 'Learn how to efficiently handle booking requests and confirmations.',
      isPopular: true
    },
    {
      id: 3,
      title: 'Understanding payout schedules',
      category: 'payments',
      readTime: '4 min read',
      helpful: 95,
      description: 'Everything you need to know about when and how you get paid.',
      isPopular: false
    },
    {
      id: 4,
      title: 'Setting up API integration',
      category: 'integrations',
      readTime: '8 min read',
      helpful: 78,
      description: 'Technical guide for integrating your existing systems with our platform.',
      isPopular: false
    },
    {
      id: 5,
      title: 'Updating your availability calendar',
      category: 'bookings',
      readTime: '6 min read',
      helpful: 89,
      description: 'Keep your calendar up-to-date to avoid double bookings and maximize revenue.',
      isPopular: true
    },
    {
      id: 6,
      title: 'Tax and compliance requirements',
      category: 'account',
      readTime: '7 min read',
      helpful: 84,
      description: 'Important information about tax documentation and compliance.',
      isPopular: false
    }
  ];

  const trendingArticles = articles.filter(article => article.isPopular);
  const recentArticles = articles.slice(0, 3);

  const filteredArticles = articles.filter(article => 
    (selectedCategory === 'all' || article.category === selectedCategory) &&
    (searchQuery === '' || article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     article.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Help Center</h1>
              <p className="text-gray-600">Find answers and get support for your partner account</p>
            </div>
            <Button variant="outline">
              Contact Support
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'default' : 'ghost'}
                      className="w-full justify-between"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <span>{category.name}</span>
                      <span className="text-xs">{category.count}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Popular Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {trendingArticles.map((article) => (
                    <div key={article.id} className="text-sm">
                      <Button variant="link" className="h-auto p-0 text-left">
                        <div>
                          <div className="font-medium text-blue-600 hover:text-blue-700">
                            {article.title}
                          </div>
                          <div className="text-gray-500 flex items-center gap-1 mt-1">
                            <Star className="h-3 w-3" />
                            <span>{article.helpful}% helpful</span>
                          </div>
                        </div>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Recent Articles */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Recent Articles
                </CardTitle>
                <CardDescription>Latest updates and guides</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recentArticles.map((article) => (
                    <div key={article.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                      <h3 className="font-medium mb-2">{article.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{article.readTime}</span>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3" />
                          <span>{article.helpful}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* All Articles */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
                </CardTitle>
                <CardDescription>
                  {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredArticles.map((article) => (
                    <div key={article.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium text-lg">{article.title}</h3>
                        {article.isPopular && (
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{article.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <ThumbsUp className="h-3 w-3 text-green-600" />
                            <span>{article.helpful}% helpful</span>
                          </div>
                          <Button variant="outline" size="sm">
                            Read Article
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerHelpCenter;
