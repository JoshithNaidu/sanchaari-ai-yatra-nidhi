
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, ArrowDown, Users, MousePointer, 
  ShoppingCart, CreditCard, AlertTriangle, Plus
} from 'lucide-react';

const AdminReportsFunnel = () => {
  const [selectedFunnel, setSelectedFunnel] = useState('default');
  const [dateRange, setDateRange] = useState('30d');

  const defaultFunnel = [
    { 
      step: 'Entry', 
      count: 15420, 
      percentage: 100, 
      dropOffRate: 0,
      icon: Users,
      color: 'bg-blue-500'
    },
    { 
      step: 'Chat Start', 
      count: 12890, 
      percentage: 83.6, 
      dropOffRate: 16.4,
      icon: MousePointer,
      color: 'bg-green-500'
    },
    { 
      step: 'Preference Submission', 
      count: 8450, 
      percentage: 54.8, 
      dropOffRate: 34.4,
      icon: Users,
      color: 'bg-yellow-500'
    },
    { 
      step: 'Plan Generation', 
      count: 6780, 
      percentage: 44.0, 
      dropOffRate: 19.8,
      icon: ShoppingCart,
      color: 'bg-orange-500'
    },
    { 
      step: 'Booking', 
      count: 2340, 
      percentage: 15.2, 
      dropOffRate: 65.5,
      icon: CreditCard,
      color: 'bg-red-500'
    }
  ];

  const funnelTemplates = [
    { id: 'default', name: 'Default Conversion Funnel' },
    { id: 'booking', name: 'Booking Flow Funnel' },
    { id: 'signup', name: 'User Registration Funnel' },
    { id: 'engagement', name: 'User Engagement Funnel' }
  ];

  const dropOffReasons = [
    { reason: 'Form abandonment', percentage: 35.2 },
    { reason: 'Long response time', percentage: 28.1 },
    { reason: 'Price concerns', percentage: 18.7 },
    { reason: 'Missing information', percentage: 12.4 },
    { reason: 'Technical issues', percentage: 5.6 }
  ];

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
                <h1 className="text-2xl font-bold text-gray-900">Conversion Funnel Analytics</h1>
                <p className="text-sm text-gray-600">Track user drop-off rates between major milestones</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={selectedFunnel} onValueChange={setSelectedFunnel}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {funnelTemplates.map((template) => (
                    <SelectItem key={template.id} value={template.id}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Custom Funnel
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Funnel Visualization */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Conversion Funnel Visualization</CardTitle>
            <CardDescription>Step-by-step user progression through the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {defaultFunnel.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.step} className="relative">
                    {/* Step Container */}
                    <div className="flex items-center gap-6">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      
                      {/* Step Info */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{step.step}</h3>
                            <p className="text-sm text-gray-600">{step.count.toLocaleString()} users</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">{step.percentage}%</div>
                            {step.dropOffRate > 0 && (
                              <div className="text-sm text-red-600 flex items-center">
                                <ArrowDown className="h-3 w-3 mr-1" />
                                {step.dropOffRate}% drop-off
                              </div>
                            )}
                          </div>
                        </div>
                        <Progress value={step.percentage} className="h-3" />
                      </div>
                    </div>

                    {/* Drop-off Alert */}
                    {step.dropOffRate > 30 && (
                      <div className="mt-2 ml-18 p-2 bg-red-50 border border-red-200 rounded flex items-center text-sm text-red-700">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        High drop-off rate detected - requires attention
                      </div>
                    )}

                    {/* Connector Arrow */}
                    {index < defaultFunnel.length - 1 && (
                      <div className="flex justify-center mt-4 mb-2">
                        <ArrowDown className="h-6 w-6 text-gray-400" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Drop-off Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Drop-off Reasons Analysis</CardTitle>
              <CardDescription>Top reasons users leave the funnel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dropOffReasons.map((reason, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium">{reason.reason}</div>
                      <Progress value={reason.percentage} className="h-2 mt-1" />
                    </div>
                    <div className="ml-4 font-semibold text-sm">
                      {reason.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Funnel Performance Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Summary</CardTitle>
              <CardDescription>Key metrics for this funnel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Overall Conversion Rate</span>
                  <span className="text-xl font-bold text-green-600">15.2%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Average Time to Convert</span>
                  <span className="text-xl font-bold">3.2 days</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Biggest Drop-off Step</span>
                  <span className="text-xl font-bold text-red-600">Plan → Booking</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Revenue per Visitor</span>
                  <span className="text-xl font-bold">₹342</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminReportsFunnel;
