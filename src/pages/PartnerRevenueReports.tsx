
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DollarSign, TrendingUp, Download, Filter } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const PartnerRevenueReports = () => {
  const [timeframe, setTimeframe] = useState('last_30_days');
  const [region, setRegion] = useState('all');

  const revenueData = [
    { month: 'Jan', gross: 25000, net: 21250, tax: 2250, commission: 1500 },
    { month: 'Feb', gross: 32000, net: 27200, tax: 2880, commission: 1920 },
    { month: 'Mar', gross: 28000, net: 23800, tax: 2520, commission: 1680 },
    { month: 'Apr', gross: 35000, net: 29750, tax: 3150, commission: 2100 },
    { month: 'May', gross: 42000, net: 35700, tax: 3780, commission: 2520 },
    { month: 'Jun', gross: 38000, net: 32300, tax: 3420, commission: 2280 },
  ];

  const listingRevenueData = [
    { name: 'Luxury Suite', value: 45000, color: '#3b82f6' },
    { name: 'Adventure Tour', value: 32000, color: '#10b981' },
    { name: 'Standard Room', value: 28000, color: '#f59e0b' },
    { name: 'City Tour', value: 18000, color: '#ef4444' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Revenue Reports</h1>
              <p className="text-gray-600">Track your financial performance and earnings</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2,10,000</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +18% from last month
                </span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Payout</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹1,78,500</div>
              <p className="text-xs text-muted-foreground">
                After taxes and commissions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Booking Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹4,375</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +5% from last month
                </span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Commission Rate</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6%</div>
              <p className="text-xs text-muted-foreground">Platform commission</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Select value={timeframe} onValueChange={setTimeframe}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last_7_days">Last 7 Days</SelectItem>
                    <SelectItem value="last_30_days">Last 30 Days</SelectItem>
                    <SelectItem value="last_90_days">Last 90 Days</SelectItem>
                    <SelectItem value="last_year">Last Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={region} onValueChange={setRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="north">North India</SelectItem>
                    <SelectItem value="south">South India</SelectItem>
                    <SelectItem value="west">West India</SelectItem>
                    <SelectItem value="east">East India</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="w-full">
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Breakdown</CardTitle>
              <CardDescription>Gross vs Net revenue over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, '']} />
                  <Bar dataKey="gross" fill="#3b82f6" name="Gross Revenue" />
                  <Bar dataKey="net" fill="#10b981" name="Net Revenue" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue by Listing</CardTitle>
              <CardDescription>Performance of different offerings</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={listingRevenueData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {listingRevenueData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Breakdown Details</CardTitle>
            <CardDescription>Monthly commission and tax breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Month</th>
                    <th className="text-right p-3">Gross Revenue</th>
                    <th className="text-right p-3">Platform Commission</th>
                    <th className="text-right p-3">Tax</th>
                    <th className="text-right p-3">Net Payout</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueData.map((row) => (
                    <tr key={row.month} className="border-b">
                      <td className="p-3 font-medium">{row.month}</td>
                      <td className="p-3 text-right">₹{row.gross.toLocaleString()}</td>
                      <td className="p-3 text-right text-red-600">₹{row.commission.toLocaleString()}</td>
                      <td className="p-3 text-right text-orange-600">₹{row.tax.toLocaleString()}</td>
                      <td className="p-3 text-right font-medium text-green-600">₹{row.net.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartnerRevenueReports;
