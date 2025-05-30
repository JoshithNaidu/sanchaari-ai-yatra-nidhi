
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Shield, Trash2, Download, AlertTriangle } from 'lucide-react';

const AdminSettingsPrivacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Data Privacy Settings</h1>
              <p className="text-sm text-gray-600">Manage data protection and compliance settings</p>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/admin">
                <Button variant="outline" size="sm">Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Data Retention */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Data Retention Settings
            </CardTitle>
            <CardDescription>Configure how long data is stored in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Chat History</div>
                  <div className="text-sm text-gray-600">Retain user chat conversations</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm">2 years</span>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Booking Records</div>
                  <div className="text-sm text-gray-600">Transaction and booking data</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm">7 years</span>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">User Feedback</div>
                  <div className="text-sm text-gray-600">Reviews and feedback data</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm">5 years</span>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right to Erasure */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trash2 className="h-5 w-5" />
              Right to Erasure (GDPR)
            </CardTitle>
            <CardDescription>Handle user data deletion requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Auto-approve deletion requests</div>
                  <div className="text-sm text-gray-600">Automatically process data deletion within 30 days</div>
                </div>
                <Switch />
              </div>
              <div className="p-4 border border-orange-200 rounded-lg bg-orange-50">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-orange-900">Data Deletion Request</div>
                    <div className="text-sm text-orange-800">
                      User john.doe@example.com has requested account deletion. Review required.
                    </div>
                    <div className="mt-2 flex gap-2">
                      <Button size="sm" variant="outline">Review</Button>
                      <Button size="sm" variant="destructive">Process Deletion</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Access Logs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Data Access Logs
            </CardTitle>
            <CardDescription>Track who accessed sensitive user data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">User Profile Export</div>
                    <div className="text-sm text-gray-600">Exported by: admin@sanchaari.com</div>
                    <div className="text-xs text-gray-500">2024-05-22 14:30 IST</div>
                  </div>
                  <Button size="sm" variant="outline">View Details</Button>
                </div>
              </div>
              <div className="border rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">Booking Data Access</div>
                    <div className="text-sm text-gray-600">Accessed by: support@sanchaari.com</div>
                    <div className="text-xs text-gray-500">2024-05-22 12:15 IST</div>
                  </div>
                  <Button size="sm" variant="outline">View Details</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compliance Status */}
        <Card>
          <CardHeader>
            <CardTitle>Compliance Status</CardTitle>
            <CardDescription>Current compliance with data protection regulations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium">GDPR Compliance</span>
                </div>
                <div className="text-sm text-gray-600">All requirements met</div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium">CCPA Compliance</span>
                </div>
                <div className="text-sm text-gray-600">All requirements met</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSettingsPrivacy;
