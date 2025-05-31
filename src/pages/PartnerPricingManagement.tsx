
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, Calendar, ArrowLeft, Edit, Settings } from 'lucide-react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import Header from '@/components/Header';

const PartnerPricingManagement = () => {
  const { user } = useCentralizedAuth();

  const pricingRules = [
    {
      id: 1,
      name: "Peak Season",
      period: "Dec 15 - Jan 15",
      multiplier: "1.5x",
      status: "Active",
      type: "Seasonal"
    },
    {
      id: 2,
      name: "Weekend Premium",
      period: "Fri-Sun",
      multiplier: "1.3x",
      status: "Active", 
      type: "Weekly"
    },
    {
      id: 3,
      name: "Last Minute",
      period: "Within 48hrs",
      multiplier: "0.8x",
      status: "Paused",
      type: "Dynamic"
    }
  ];

  const roomTypes = [
    {
      name: "Deluxe Room",
      basePrice: "₹3,500",
      currentPrice: "₹4,200",
      occupancy: "85%"
    },
    {
      name: "Suite",
      basePrice: "₹6,000", 
      currentPrice: "₹7,200",
      occupancy: "70%"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/partner">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Pricing Management</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Daily Rate</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹4,850</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue per Room</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹4,125</div>
              <p className="text-xs text-muted-foreground">
                85% occupancy rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Rules</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">
                1 seasonal, 1 weekly
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Pricing Rules</CardTitle>
              <CardDescription>Manage your dynamic pricing strategies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pricingRules.map((rule) => (
                  <div key={rule.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{rule.name}</h4>
                      <p className="text-sm text-gray-600">{rule.period}</p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">{rule.type}</Badge>
                        <Badge variant={rule.status === 'Active' ? 'default' : 'secondary'} className="text-xs">
                          {rule.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-lg">{rule.multiplier}</div>
                      <Button size="sm" variant="outline">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Room Type Pricing</CardTitle>
              <CardDescription>Current pricing for each room category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {roomTypes.map((room, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{room.name}</h4>
                      <p className="text-sm text-gray-600">Base: {room.basePrice}</p>
                      <p className="text-xs text-gray-500">Occupancy: {room.occupancy}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-green-600">{room.currentPrice}</div>
                      <p className="text-xs text-gray-500">per night</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PartnerPricingManagement;
