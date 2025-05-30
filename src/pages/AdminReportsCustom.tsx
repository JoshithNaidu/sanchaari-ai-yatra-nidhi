
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Plus, BarChart3, Download, Edit } from 'lucide-react';

const AdminReportsCustom = () => {
  const customReports = [
    {
      id: 'CR001',
      name: 'Monthly Revenue by Region',
      description: 'Revenue breakdown by geographical regions',
      lastRun: '2024-05-22',
      schedule: 'Monthly'
    },
    {
      id: 'CR002',
      name: 'Customer Satisfaction Trends',
      description: 'NPS and satisfaction scores over time',
      lastRun: '2024-05-20',
      schedule: 'Weekly'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Custom Reports</h1>
              <p className="text-sm text-gray-600">Create and manage custom analytics reports</p>
            </div>
            <div className="flex items-center gap-4">
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Create Report
              </Button>
              <Link to="/admin/reports/overview">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Reports
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Custom Reports List */}
        <Card>
          <CardHeader>
            <CardTitle>Your Custom Reports</CardTitle>
            <CardDescription>Manage and run your custom analytics reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {customReports.map((report) => (
                <div key={report.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{report.name}</h3>
                      <p className="text-sm text-gray-600">{report.description}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Last run: {report.lastRun} • Schedule: {report.schedule}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <BarChart3 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Report Builder */}
        <Card>
          <CardHeader>
            <CardTitle>Report Builder</CardTitle>
            <CardDescription>Create new custom reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-gray-500">
              Report builder interface would be implemented here
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminReportsCustom;
