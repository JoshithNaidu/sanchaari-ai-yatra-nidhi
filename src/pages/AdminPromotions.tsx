
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
  Target,
  Calendar,
  BarChart3,
  Image,
  Play,
  Pause,
  Copy,
  TrendingUp
} from 'lucide-react';

const AdminPromotions = () => {
  const [activeTab, setActiveTab] = useState('campaigns');

  const campaigns = [
    {
      id: "PROMO001",
      title: "Summer Escape 2024",
      shortTitle: "Summer Sale",
      description: "Get 25% off on hill station bookings",
      status: "Active",
      deviceTarget: "Both",
      languages: ["EN", "HI"],
      startDate: "2024-05-01",
      endDate: "2024-06-30",
      impressions: 125000,
      clicks: 8500,
      ctr: 6.8,
      bookings: 145
    },
    {
      id: "PROMO002",
      title: "Monsoon Special",
      shortTitle: "Monsoon Deals",
      description: "Waterproof adventures at unbeatable prices",
      status: "Scheduled",
      deviceTarget: "Mobile",
      languages: ["EN", "HI", "BN"],
      startDate: "2024-06-15",
      endDate: "2024-08-31",
      impressions: 0,
      clicks: 0,
      ctr: 0,
      bookings: 0
    },
    {
      id: "PROMO003",
      title: "Weekend Getaway Flash Sale",
      shortTitle: "Flash Sale",
      description: "48-hour exclusive deals on nearby destinations",
      status: "Ended",
      deviceTarget: "Desktop",
      languages: ["EN"],
      startDate: "2024-04-15",
      endDate: "2024-04-17",
      impressions: 45000,
      clicks: 3200,
      ctr: 7.1,
      bookings: 89
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      case 'Ended': return 'bg-gray-100 text-gray-800';
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
              <h1 className="text-2xl font-bold text-gray-900">Manage Promotional Content</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Campaign
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
          
          {/* Campaigns Table */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Promotional Campaigns</CardTitle>
                <CardDescription>Manage cross-platform campaigns and promotional content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Campaign</TableHead>
                        <TableHead>Target & Duration</TableHead>
                        <TableHead>Performance</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {campaigns.map((campaign) => (
                        <TableRow key={campaign.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{campaign.title}</p>
                              <p className="text-xs text-gray-500">{campaign.description}</p>
                              <div className="flex gap-1 mt-1">
                                {campaign.languages.map((lang, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {lang}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-1">
                                <Target className="h-3 w-3" />
                                <span className="text-xs">{campaign.deviceTarget}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                <span className="text-xs">{campaign.startDate} to {campaign.endDate}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1 text-xs">
                              <div className="flex justify-between">
                                <span>Impressions:</span>
                                <span className="font-medium">{campaign.impressions.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>CTR:</span>
                                <span className="font-medium">{campaign.ctr}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Bookings:</span>
                                <span className="font-medium">{campaign.bookings}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(campaign.status)}>
                              {campaign.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Edit className="h-3 w-3 mr-1" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                <BarChart3 className="h-3 w-3 mr-1" />
                                Analytics
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

          {/* Campaign Tools Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Campaign Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full gap-2">
                    <Image className="h-4 w-4" />
                    Upload Creative
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Target className="h-4 w-4" />
                    Audience Builder
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Calendar className="h-4 w-4" />
                    Schedule Campaign
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Copy className="h-4 w-4" />
                    A/B Test Setup
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium mb-3">Creative Formats</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Desktop Banner</span>
                      <span className="text-gray-500">1920x720</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mobile Banner</span>
                      <span className="text-gray-500">1080x1080</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Video (max)</span>
                      <span className="text-gray-500">15s, 10MB</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Performance Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">170K</div>
                    <div className="text-xs text-gray-500">Total Impressions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">6.9%</div>
                    <div className="text-xs text-gray-500">Average CTR</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">234</div>
                    <div className="text-xs text-gray-500">Assisted Bookings</div>
                  </div>
                  <Button size="sm" className="w-full">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    View Full Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPromotions;
