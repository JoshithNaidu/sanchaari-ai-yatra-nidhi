
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ArrowLeft, Plus, Edit, Eye, Calendar, Clock, 
  Target, TrendingUp, Zap, AlertTriangle
} from 'lucide-react';

const AdminContentPromotions = () => {
  const [activeTab, setActiveTab] = useState('active');

  const promotions = [
    {
      id: 'PROMO001',
      title: 'Summer Beach Sale',
      startDate: '2024-05-01',
      endDate: '2024-06-30',
      targetAudience: 'All Users',
      priority: 'High',
      status: 'Active',
      ctaText: 'Book Now',
      clicks: 1250,
      conversions: 89
    },
    {
      id: 'PROMO002',
      title: 'First-time User Discount',
      startDate: '2024-05-15',
      endDate: '2024-07-15',
      targetAudience: 'First-time Users',
      priority: 'Medium',
      status: 'Active',
      ctaText: 'Get 20% Off',
      clicks: 840,
      conversions: 124
    },
    {
      id: 'PROMO003',
      title: 'Winter Holiday Special',
      startDate: '2024-12-01',
      endDate: '2024-12-31',
      targetAudience: 'Returning Users',
      priority: 'High',
      status: 'Scheduled',
      ctaText: 'Book Holiday',
      clicks: 0,
      conversions: 0
    },
    {
      id: 'PROMO004',
      title: 'Weekend Getaway Offer',
      startDate: '2024-04-01',
      endDate: '2024-04-30',
      targetAudience: 'All Users',
      priority: 'Low',
      status: 'Expired',
      ctaText: 'Plan Weekend',
      clicks: 2840,
      conversions: 203
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active': return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'Scheduled': return <Badge className="bg-blue-100 text-blue-800">Scheduled</Badge>;
      case 'Expired': return <Badge className="bg-gray-100 text-gray-800">Expired</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High': return <Badge className="bg-red-100 text-red-800">High</Badge>;
      case 'Medium': return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>;
      case 'Low': return <Badge className="bg-blue-100 text-blue-800">Low</Badge>;
      default: return <Badge variant="outline">{priority}</Badge>;
    }
  };

  const filterPromotions = (status: string) => {
    if (status === 'active') return promotions.filter(p => p.status === 'Active');
    if (status === 'expired') return promotions.filter(p => p.status === 'Expired');
    return promotions;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Admin
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Manage Promotional Content</h1>
                <p className="text-sm text-gray-600">Control time-bound banners, offers, and CTAs</p>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Promotion
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create New Promotion</DialogTitle>
                  <DialogDescription>Set up a new promotional campaign with targeting options</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Title</label>
                    <Input placeholder="Promotion title" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Start Date</label>
                      <Input type="date" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">End Date</label>
                      <Input type="date" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Target Audience</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select audience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Users</SelectItem>
                          <SelectItem value="new">First-time Users</SelectItem>
                          <SelectItem value="returning">Returning Users</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Priority Level</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">CTA Button Text</label>
                    <Input placeholder="Book Now" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Landing URL</label>
                    <Input placeholder="/search/packages" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Save as Draft</Button>
                  <Button>Create Promotion</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Promotions</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">2 high priority</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.4K</div>
              <p className="text-xs text-muted-foreground">+18% this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversions</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.8K</div>
              <p className="text-xs text-muted-foreground">14.5% conversion rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Within 7 days</p>
            </CardContent>
          </Card>
        </div>

        {/* Promotions Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Active Promotions</TabsTrigger>
            <TabsTrigger value="all">All Promotions</TabsTrigger>
            <TabsTrigger value="expired">Expired</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Promotions</CardTitle>
                <CardDescription>Currently running promotional campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filterPromotions('active').map((promo) => (
                    <div key={promo.id} className="border rounded-lg p-4 bg-green-50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-4">
                          <h3 className="font-medium">{promo.title}</h3>
                          {getStatusBadge(promo.status)}
                          {getPriorityBadge(promo.priority)}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3 mr-1" />
                            Preview
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Duration:</span> {promo.startDate} to {promo.endDate}
                        </div>
                        <div>
                          <span className="font-medium">Target:</span> {promo.targetAudience}
                        </div>
                        <div>
                          <span className="font-medium">Clicks:</span> {promo.clicks.toLocaleString()}
                        </div>
                        <div>
                          <span className="font-medium">Conversions:</span> {promo.conversions}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="all" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Promotions</CardTitle>
                <CardDescription>Complete list of promotional campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {promotions.map((promo) => (
                    <div key={promo.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-4">
                          <h3 className="font-medium">{promo.title}</h3>
                          {getStatusBadge(promo.status)}
                          {getPriorityBadge(promo.priority)}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3 mr-1" />
                            Preview
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Duration:</span> {promo.startDate} to {promo.endDate}
                        </div>
                        <div>
                          <span className="font-medium">Target:</span> {promo.targetAudience}
                        </div>
                        <div>
                          <span className="font-medium">Clicks:</span> {promo.clicks.toLocaleString()}
                        </div>
                        <div>
                          <span className="font-medium">Conversions:</span> {promo.conversions}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="expired" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Expired Promotions</CardTitle>
                <CardDescription>Past promotional campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filterPromotions('expired').map((promo) => (
                    <div key={promo.id} className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-4">
                          <h3 className="font-medium text-gray-600">{promo.title}</h3>
                          {getStatusBadge(promo.status)}
                          {getPriorityBadge(promo.priority)}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3 mr-1" />
                            View Report
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Duration:</span> {promo.startDate} to {promo.endDate}
                        </div>
                        <div>
                          <span className="font-medium">Target:</span> {promo.targetAudience}
                        </div>
                        <div>
                          <span className="font-medium">Clicks:</span> {promo.clicks.toLocaleString()}
                        </div>
                        <div>
                          <span className="font-medium">Conversions:</span> {promo.conversions}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminContentPromotions;
