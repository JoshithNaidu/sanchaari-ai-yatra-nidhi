
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Download, 
  DollarSign,
  TrendingUp,
  Receipt,
  FileText,
  Wallet,
  CreditCard
} from 'lucide-react';

const RevenueReports = () => {
  const [viewType, setViewType] = useState('gross');
  const [paymentMode, setPaymentMode] = useState('all');

  // Mock data
  const mockRevenue = [
    { date: '2024-06-01', listing: 'Mountain Villa', bookingId: 'BK001', earnings: 15000, fee: 1500, net: 13500, paymentMode: 'UPI', status: 'Paid' },
    { date: '2024-06-02', listing: 'Beach House', bookingId: 'BK002', earnings: 25000, fee: 2500, net: 22500, paymentMode: 'Bank', status: 'Paid' },
    { date: '2024-06-03', listing: 'City Apartment', bookingId: 'BK003', earnings: 8000, fee: 800, net: 7200, paymentMode: 'Wallet', status: 'Pending' },
  ];

  const taxSummary = {
    tdsDeducted: 12500,
    gstApplied: 8900,
    refundAdjustments: 2300
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/partner/dashboard" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Revenue Reports</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Statement
              </Button>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Generate Invoice
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold">₹4,85,000</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-xs text-green-600 flex items-center mt-2">
                <TrendingUp className="h-3 w-3 mr-1" />
                +18% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Net Earnings</p>
                  <p className="text-2xl font-bold">₹4,36,500</p>
                </div>
                <Wallet className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-xs text-gray-600 mt-2">After fees & taxes</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Platform Fees</p>
                  <p className="text-2xl font-bold">₹48,500</p>
                </div>
                <Receipt className="h-8 w-8 text-orange-600" />
              </div>
              <p className="text-xs text-gray-600 mt-2">10% commission</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Payouts</p>
                  <p className="text-2xl font-bold">₹12,300</p>
                </div>
                <CreditCard className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-xs text-gray-600 mt-2">3 transactions</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Monthly Revenue Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue Trend</CardTitle>
              <CardDescription>Click on bars to drill down by listing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Bar Chart: Monthly Revenue</p>
              </div>
              <div className="flex justify-center mt-4">
                <Select value={viewType} onValueChange={setViewType}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gross">Gross Revenue</SelectItem>
                    <SelectItem value="net">Net Revenue</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Cumulative Earnings */}
          <Card>
            <CardHeader>
              <CardTitle>Cumulative Earnings</CardTitle>
              <CardDescription>Filter by payment mode</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Line Chart: Cumulative Earnings</p>
              </div>
              <div className="flex justify-center mt-4">
                <Select value={paymentMode} onValueChange={setPaymentMode}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Payment Modes</SelectItem>
                    <SelectItem value="wallet">Wallet</SelectItem>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                    <SelectItem value="upi">UPI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tax Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Tax Summary</CardTitle>
            <CardDescription>Current financial year breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-gray-600">TDS Deducted</p>
                <p className="text-xl font-bold text-red-600">₹{taxSummary.tdsDeducted.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">GST Applied</p>
                <p className="text-xl font-bold text-blue-600">₹{taxSummary.gstApplied.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-gray-600">Refund Adjustments</p>
                <p className="text-xl font-bold text-orange-600">₹{taxSummary.refundAdjustments.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Table */}
        <Card>
          <CardHeader>
            <CardTitle>Transaction Details</CardTitle>
            <CardDescription>Complete revenue breakdown with download options</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Listing</TableHead>
                  <TableHead>Booking ID</TableHead>
                  <TableHead>Earnings</TableHead>
                  <TableHead>Platform Fee</TableHead>
                  <TableHead>Net Amount</TableHead>
                  <TableHead>Payment Mode</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockRevenue.map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.listing}</TableCell>
                    <TableCell className="font-mono text-sm">{transaction.bookingId}</TableCell>
                    <TableCell>₹{transaction.earnings.toLocaleString()}</TableCell>
                    <TableCell>₹{transaction.fee.toLocaleString()}</TableCell>
                    <TableCell className="font-medium">₹{transaction.net.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{transaction.paymentMode}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        className={transaction.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {/* Export Options */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <p className="text-sm text-gray-500">Showing 3 of 3 transactions</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-3 w-3 mr-1" />
                  CSV
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-3 w-3 mr-1" />
                  PDF Statement
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="h-3 w-3 mr-1" />
                  GSTR Invoice
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RevenueReports;
