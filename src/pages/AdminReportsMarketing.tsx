
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  ArrowLeft, TrendingUp, Target, DollarSign, MousePointer, 
  Users, BarChart3, RefreshCw, Download
} from 'lucide-react';

const AdminReportsMarketing = () => {
  const [dateRange, setDateRange] = useState('30d');
  const [sortBy, setSortBy] = useState('roi');

  const marketingMetrics = [
    {
      title: 'Total Spend',
      value: '₹8,45,000',
      change: '+15.2%',
      icon: DollarSign,
      color: 'text-red-600'
    },
    {
      title: 'Total Conversions',
      value: '1,847',
      change: '+22.8%',
      icon: Target,
      color: 'text-green-600'
    },
    {
      title: 'Average CAC',
      value: '₹458',
      change: '-8.5%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Overall ROAS',
      value: '5.2x',
      change: '+12.3%',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ];

  const channels = [
    {
      channel: 'Google Ads',
      spend: '₹3,20,000',
      clicks: 8450,
      conversions: 678,
      ctr: '4.2%',
      conversionRate: '8.0%',
      cac: '₹472',
      roas: '6.8x',
      status: 'Active'
    },
    {
      channel: 'Facebook Ads',
      spend: '₹2,45,000',
      clicks: 6890,
      conversions: 456,
      ctr: '3.8%',
      conversionRate: '6.6%',
      cac: '₹537',
      roas: '4.9x',
      status: 'Active'
    },
    {
      channel: 'Email Marketing',
      spend: '₹45,000',
      clicks: 2340,
      conversions: 234,
      ctr: '12.5%',
      conversionRate: '10.0%',
      cac: '₹192',
      roas: '8.2x',
      status: 'Active'
    },
    {
      channel: 'WhatsApp Business',
      spend: '₹78,000',
      clicks: 1890,
      conversions: 189,
      ctr: '15.2%',
      conversionRate: '10.0%',
      cac: '₹413',
      roas: '5.4x',
      status: 'Active'
    },
    {
      channel: 'Organic Search',
      spend: '₹0',
      clicks: 12340,
      conversions: 890,
      ctr: '8.9%',
      conversionRate: '7.2%',
      cac: '₹0',
      roas: '∞',
      status: 'Optimizing'
    }
  ];

  const topCampaigns = [
    { name: 'Summer Beach Package', channel: 'Google Ads', spend: '₹85,000', conversions: 124, roas: '7.2x' },
    { name: 'Kerala Backwaters', channel: 'Facebook Ads', spend: '₹65,000', conversions: 89, roas: '5.8x' },
    { name: 'Weekend Getaway', channel: 'Email', spend: '₹12,000', conversions: 67, roas: '9.1x' },
    { name: 'Adventure Packages', channel: 'Google Ads', spend: '₹45,000', conversions: 45, roas: '4.9x' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active': return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'Optimizing': return <Badge className="bg-yellow-100 text-yellow-800">Optimizing</Badge>;
      case 'Paused': return <Badge className="bg-gray-100 text-gray-800">Paused</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin/reports/overview" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Reports
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Marketing Channel ROI</h1>
                <p className="text-sm text-gray-600">Track performance of paid and organic marketing initiatives</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">7 Days</SelectItem>
                  <SelectItem value="30d">30 Days</SelectItem>
                  <SelectItem value="90d">90 Days</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Marketing Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {marketingMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  <IconComponent className={`h-4 w-4 ${metric.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className={`text-xs ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change} from last period
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Channel Performance Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Channel Performance Trend</CardTitle>
              <CardDescription>ROAS and spend comparison over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Marketing performance chart would be displayed here</p>
                  <p className="text-sm text-gray-400">Integration with charting library needed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Campaigns */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Campaigns</CardTitle>
              <CardDescription>Best campaigns by ROAS</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCampaigns.map((campaign, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">{campaign.name}</div>
                      <div className="text-xs text-gray-500">{campaign.channel}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-sm">{campaign.roas}</div>
                      <div className="text-xs text-gray-500">{campaign.conversions} conv.</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Channel Performance Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Channel Performance Details</CardTitle>
                <CardDescription>Detailed metrics for all marketing channels</CardDescription>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="roi">Sort by ROI</SelectItem>
                  <SelectItem value="spend">Sort by Spend</SelectItem>
                  <SelectItem value="conversions">Sort by Conversions</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Channel</TableHead>
                    <TableHead>Spend</TableHead>
                    <TableHead>Clicks</TableHead>
                    <TableHead>CTR</TableHead>
                    <TableHead>Conversions</TableHead>
                    <TableHead>Conv. Rate</TableHead>
                    <TableHead>CAC</TableHead>
                    <TableHead>ROAS</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {channels.map((channel, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{channel.channel}</TableCell>
                      <TableCell>{channel.spend}</TableCell>
                      <TableCell>{channel.clicks.toLocaleString()}</TableCell>
                      <TableCell>{channel.ctr}</TableCell>
                      <TableCell>{channel.conversions}</TableCell>
                      <TableCell>{channel.conversionRate}</TableCell>
                      <TableCell>{channel.cac}</TableCell>
                      <TableCell>
                        <span className={channel.roas !== '∞' && parseFloat(channel.roas) > 5 ? 'text-green-600 font-medium' : ''}>
                          {channel.roas}
                        </span>
                      </TableCell>
                      <TableCell>{getStatusBadge(channel.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminReportsMarketing;
