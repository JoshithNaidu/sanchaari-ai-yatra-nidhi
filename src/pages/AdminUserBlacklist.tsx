
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea'; 
import { 
  ArrowLeft, 
  Search, 
  Download, 
  UserX,
  UserCheck,
  AlertTriangle,
  Eye,
  Clock,
  Calendar,
  Shield,
  User
} from 'lucide-react';

const AdminUserBlacklist = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [unbanUserId, setUnbanUserId] = useState<string | null>(null);

  // Mock blacklisted users data
  const blacklistedUsers = [
    {
      id: 'USR004',
      name: 'Sneha Singh',
      email: 'sneha.singh@email.com',
      phone: '+91 65432 10987',
      banDate: '2024-05-15',
      bannedBy: 'Admin User',
      adminId: 'ADM001',
      reason: 'Multiple fraudulent payment attempts',
      attemptedLogins: 3,
      lastAttempt: '2024-05-20'
    },
    {
      id: 'USR012',
      name: 'Mohan Reddy',
      email: 'mohan.reddy@email.com',
      phone: '+91 54321 09876',
      banDate: '2024-04-22',
      bannedBy: 'System',
      adminId: 'SYSTEM',
      reason: 'Automated fraud detection: suspicious account activity',
      attemptedLogins: 5,
      lastAttempt: '2024-05-25'
    },
    {
      id: 'USR023',
      name: 'Rahul Khanna',
      email: 'rahul.khanna@email.com',
      phone: '+91 43210 98765',
      banDate: '2024-05-10',
      bannedBy: 'Admin User',
      adminId: 'ADM002',
      reason: 'Violation of terms of service - abusive behavior',
      attemptedLogins: 0,
      lastAttempt: null
    }
  ];

  const filteredUsers = blacklistedUsers.filter(user => {
    return user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
           user.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
           user.reason.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleUnban = () => {
    // In a real implementation, this would update the database
    // For now just close the dialog
    setShowDialog(false);
    setUnbanUserId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin/users/list" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Users
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Blacklisted Users</h1>
                <p className="text-sm text-gray-600">Manage banned or blacklisted user accounts</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export List
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Security notice */}
        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <span className="font-medium">Security Notice:</span> Unbanning a user will restore their account access. This action is logged for audit purposes.
          </AlertDescription>
        </Alert>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, ID, or ban reason..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Blacklisted Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Blacklisted Users ({filteredUsers.length})</CardTitle>
            <CardDescription>
              Users who have been banned from accessing the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Ban Date</TableHead>
                    <TableHead>Banned By</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Login Attempts</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-gray-500">{user.id}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm">{user.email}</div>
                          <div className="text-sm text-gray-500">{user.phone}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-3 w-3 text-gray-500" />
                          {user.banDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm">
                          <User className="h-3 w-3 text-gray-500" />
                          {user.bannedBy}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs truncate text-sm" title={user.reason}>
                          {user.reason}
                        </div>
                      </TableCell>
                      <TableCell>
                        {user.attemptedLogins > 0 ? (
                          <div className="flex items-center space-x-1">
                            <Badge className="bg-yellow-100 text-yellow-800">{user.attemptedLogins}</Badge>
                            <div className="text-xs text-gray-500">
                              {user.lastAttempt && (
                                <div className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {user.lastAttempt}
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
                          <span className="text-xs text-gray-500">None</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-green-600"
                            onClick={() => {
                              setUnbanUserId(user.id);
                              setShowDialog(true);
                            }}
                          >
                            <UserCheck className="h-3 w-3 mr-1" />
                            Unban
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredUsers.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                <UserX className="h-10 w-10 mx-auto mb-2 opacity-30" />
                <p>No blacklisted users match your search criteria</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Unban Confirmation Dialog */}
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                Confirm User Unban
              </DialogTitle>
              <DialogDescription>
                Are you sure you want to unban this user? They will regain access to their account.
              </DialogDescription>
            </DialogHeader>
            
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="text-sm font-medium mb-1">Please provide a reason for unbanning:</p>
              <Textarea placeholder="Enter reason for unbanning..." className="h-20" />
            </div>

            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-800">
                This action will be logged and audited. The user will be notified.
              </AlertDescription>
            </Alert>

            <DialogFooter>
              <Button variant="outline" onClick={() => setShowDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleUnban} className="bg-green-600 hover:bg-green-700">
                <UserCheck className="h-4 w-4 mr-2" />
                Confirm Unban
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminUserBlacklist;
