
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  ArrowLeft, 
  Download, 
  DollarSign, 
  CreditCard, 
  Calendar,
  TrendingUp,
  Edit,
  Plus
} from 'lucide-react';

const PartnerPayouts = () => {
  const [showAddAccount, setShowAddAccount] = useState(false);

  const balanceSummary = {
    available: 25000,
    upcoming: 18500,
    lastPayout: 12000,
    avgPerBooking: 3500
  };

  const transactions = [
    {
      id: 'TXN001',
      date: '2024-05-25',
      amount: 12000,
      bookingRef: 'BK5489',
      status: 'sent',
      type: 'payout'
    },
    {
      id: 'TXN002',
      date: '2024-05-20',
      amount: 8500,
      bookingRef: 'BK5487',
      status: 'scheduled',
      type: 'payout'
    },
    {
      id: 'TXN003',
      date: '2024-05-18',
      amount: 15000,
      bookingRef: 'BK5485',
      status: 'sent',
      type: 'payout'
    },
    {
      id: 'TXN004',
      date: '2024-05-15',
      amount: 6000,
      bookingRef: 'BK5483',
      status: 'failed',
      type: 'payout'
    }
  ];

  const bankDetails = {
    accountHolder: 'John Doe',
    accountNumber: '****1234',
    bankName: 'State Bank of India',
    ifsc: 'SBIN0001234',
    upiId: 'john.doe@paytm'
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'sent':
        return <Badge className="bg-green-100 text-green-800">Sent</Badge>;
      case 'scheduled':
        return <Badge className="bg-blue-100 text-blue-800">Scheduled</Badge>;
      case 'failed':
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
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
              <h1 className="text-2xl font-bold text-gray-900">Payments & Payouts</h1>
            </div>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Balance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{balanceSummary.available.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Ready for withdrawal
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Payouts</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{balanceSummary.upcoming.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Next 7 days
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Payout</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{balanceSummary.lastPayout.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                May 25, 2024
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg per Booking</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{balanceSummary.avgPerBooking.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                This month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Transactions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>
                  All your payout transactions and earnings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Booking Ref</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="text-sm">
                          {new Date(transaction.date).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="font-medium">
                          ₹{transaction.amount.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <Link to={`/partner/bookings/${transaction.bookingRef}`} className="text-blue-600 hover:underline">
                            {transaction.bookingRef}
                          </Link>
                        </TableCell>
                        <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Bank Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Bank Account */}
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">Bank Account</h4>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-500">Account Holder:</span>
                      <span className="ml-2">{bankDetails.accountHolder}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Account Number:</span>
                      <span className="ml-2">{bankDetails.accountNumber}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Bank:</span>
                      <span className="ml-2">{bankDetails.bankName}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">IFSC:</span>
                      <span className="ml-2">{bankDetails.ifsc}</span>
                    </div>
                  </div>
                </div>

                {/* UPI */}
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">UPI ID</h4>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">UPI ID:</span>
                    <span className="ml-2">{bankDetails.upiId}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setShowAddAccount(true)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Reports</CardTitle>
                <CardDescription>Download detailed financial reports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  May 2024 Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  April 2024 Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  March 2024 Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Add Payment Method Modal */}
        {showAddAccount && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-4">
              <CardHeader>
                <CardTitle>Add Payment Method</CardTitle>
                <CardDescription>
                  Add a new bank account or UPI ID for payouts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="accountHolder">Account Holder Name</Label>
                  <Input id="accountHolder" placeholder="Enter account holder name" />
                </div>
                
                <div>
                  <Label htmlFor="accountNumber">Account Number</Label>
                  <Input id="accountNumber" placeholder="Enter account number" />
                </div>
                
                <div>
                  <Label htmlFor="ifsc">IFSC Code</Label>
                  <Input id="ifsc" placeholder="Enter IFSC code" />
                </div>
                
                <div>
                  <Label htmlFor="bankName">Bank Name</Label>
                  <Input id="bankName" placeholder="Enter bank name" />
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button className="flex-1">
                    Add Account
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowAddAccount(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerPayouts;
