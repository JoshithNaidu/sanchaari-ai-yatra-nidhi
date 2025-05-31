
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare, Calendar, Share } from 'lucide-react';

const AdminReportsGroupCollaboration = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Group Collaboration Analytics</h1>
              <p className="text-xs lg:text-sm text-gray-600">Track group trip planning and collaboration metrics</p>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/admin/reports/overview">
                <Button variant="outline" size="sm" className="w-full sm:w-auto">Back to Reports</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4 lg:py-6 space-y-4 lg:space-y-6">
        {/* Collaboration Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Group Trips</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl lg:text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+18% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Group Size</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl lg:text-2xl font-bold">4.2</div>
              <p className="text-xs text-muted-foreground">people per trip</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Collaboration Rate</CardTitle>
              <Share className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl lg:text-2xl font-bold">67.8%</div>
              <p className="text-xs text-muted-foreground">active collaboration</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Messages Sent</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl lg:text-2xl font-bold">45.2K</div>
              <p className="text-xs text-muted-foreground">+25% increase</p>
            </CardContent>
          </Card>
        </div>

        {/* Feature Usage */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg lg:text-xl">Collaboration Feature Usage</CardTitle>
            <CardDescription>Most used collaboration features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm lg:text-base">Shared Itineraries</span>
                <span className="font-medium text-sm lg:text-base">89.3%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm lg:text-base">Group Chat</span>
                <span className="font-medium text-sm lg:text-base">76.8%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm lg:text-base">Voting on Activities</span>
                <span className="font-medium text-sm lg:text-base">64.2%</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm lg:text-base">Budget Sharing</span>
                <span className="font-medium text-sm lg:text-base">58.7%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminReportsGroupCollaboration;
