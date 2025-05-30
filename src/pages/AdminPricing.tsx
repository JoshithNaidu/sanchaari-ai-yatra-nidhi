
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, Settings, Save, Edit, Plus, TrendingUp, 
  Percent, DollarSign, Calculator, History 
} from 'lucide-react';

const AdminPricing = () => {
  const [editingCell, setEditingCell] = useState<string | null>(null);
  const [pricingData, setPricingData] = useState({
    flights: { baseRate: 5.0, markup: 8.5, commission: 12.0 },
    hotels: { baseRate: 7.5, markup: 10.0, commission: 15.0 },
    activities: { baseRate: 3.5, markup: 12.0, commission: 18.0 },
    packages: { baseRate: 6.0, markup: 15.0, commission: 20.0 }
  });

  const partners = [
    { id: 'PTR001', name: 'TravelCorp India', tier: 'Tier 1', commission: 15.0, deals: 234 },
    { id: 'PTR002', name: 'Mountain Adventures', tier: 'Tier 2', commission: 12.0, deals: 89 },
    { id: 'PTR003', name: 'City Hotels', tier: 'Tier 1', commission: 18.0, deals: 156 },
    { id: 'PTR004', name: 'Heritage Hotels', tier: 'Premium', commission: 22.0, deals: 67 }
  ];

  const pricingRules = [
    {
      id: 1,
      name: 'Peak Season Europe',
      condition: 'Destination: Europe AND Month: Jun-Aug',
      action: 'Increase markup by 5%',
      priority: 1,
      active: true
    },
    {
      id: 2,
      name: 'Low Inventory Boost',
      condition: 'Available rooms < 10',
      action: 'Increase markup by 3%',
      priority: 2,
      active: true
    },
    {
      id: 3,
      name: 'Last Minute Deals',
      condition: 'Booking within 7 days',
      action: 'Decrease markup by 2%',
      priority: 3,
      active: false
    }
  ];

  const handleCellEdit = (category: string, field: string, value: string) => {
    setPricingData(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [field]: parseFloat(value) || 0
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Admin
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Pricing & Commission Management</h1>
                <p className="text-sm text-gray-600">Configure markups and commission structures</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <History className="h-4 w-4 mr-2" />
                Version History
              </Button>
              <Button size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="markup" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="markup">Markup Editor</TabsTrigger>
            <TabsTrigger value="rules">Pricing Rules</TabsTrigger>
            <TabsTrigger value="partners">Partner Commission</TabsTrigger>
            <TabsTrigger value="simulation">Simulation</TabsTrigger>
          </TabsList>

          <TabsContent value="markup" className="space-y-6">
            {/* Revenue Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹12,45,680</div>
                  <p className="text-xs text-muted-foreground">+8.2% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Markup</CardTitle>
                  <Percent className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">11.4%</div>
                  <p className="text-xs text-muted-foreground">Across all categories</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Commission Paid</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹1,98,450</div>
                  <p className="text-xs text-muted-foreground">16.8% of total revenue</p>
                </CardContent>
              </Card>
            </div>

            {/* Markup Editor Table */}
            <Card>
              <CardHeader>
                <CardTitle>Category Markup Configuration</CardTitle>
                <CardDescription>Configure base rates, markups, and commission percentages by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Category</TableHead>
                        <TableHead>Base Rate (%)</TableHead>
                        <TableHead>Admin Markup (%)</TableHead>
                        <TableHead>Partner Commission (%)</TableHead>
                        <TableHead>Effective Rate (%)</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Object.entries(pricingData).map(([category, data]) => (
                        <TableRow key={category}>
                          <TableCell className="font-medium capitalize">{category}</TableCell>
                          <TableCell>
                            <Input
                              type="number"
                              step="0.1"
                              value={data.baseRate}
                              onChange={(e) => handleCellEdit(category, 'baseRate', e.target.value)}
                              className="w-20"
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              type="number"
                              step="0.1"
                              value={data.markup}
                              onChange={(e) => handleCellEdit(category, 'markup', e.target.value)}
                              className="w-20"
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              type="number"
                              step="0.1"
                              value={data.commission}
                              onChange={(e) => handleCellEdit(category, 'commission', e.target.value)}
                              className="w-20"
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            {(data.baseRate + data.markup).toFixed(1)}%
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline">
                              <Edit className="h-3 w-3 mr-1" />
                              Rules
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rules" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Dynamic Pricing Rules</CardTitle>
                    <CardDescription>Conditional markup adjustments based on various factors</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Rule
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pricingRules.map((rule) => (
                    <div key={rule.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{rule.name}</h3>
                        <div className="flex items-center gap-2">
                          <Badge variant={rule.active ? "default" : "secondary"}>
                            {rule.active ? "Active" : "Inactive"}
                          </Badge>
                          <span className="text-sm text-gray-500">Priority {rule.priority}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>If:</strong> {rule.condition}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Then:</strong> {rule.action}
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
                          {rule.active ? "Disable" : "Enable"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="partners" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Partner Commission Structure</CardTitle>
                <CardDescription>Manage commission rates for travel partners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Partner</TableHead>
                        <TableHead>Tier</TableHead>
                        <TableHead>Commission Rate</TableHead>
                        <TableHead>Active Deals</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {partners.map((partner) => (
                        <TableRow key={partner.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{partner.name}</div>
                              <div className="text-sm text-gray-500">{partner.id}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{partner.tier}</Badge>
                          </TableCell>
                          <TableCell className="font-medium">{partner.commission}%</TableCell>
                          <TableCell>{partner.deals}</TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline">
                              <Edit className="h-3 w-3 mr-1" />
                              Edit
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="simulation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Pricing Impact Simulation
                </CardTitle>
                <CardDescription>Preview how pricing changes will affect revenue and bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Simulation Parameters</h3>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <select className="w-full p-2 border rounded">
                        <option>Hotels</option>
                        <option>Flights</option>
                        <option>Activities</option>
                        <option>Packages</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Markup Change (%)</label>
                      <Input type="number" placeholder="+2.5" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Time Period</label>
                      <select className="w-full p-2 border rounded">
                        <option>Next 30 days</option>
                        <option>Next 90 days</option>
                        <option>Next 6 months</option>
                      </select>
                    </div>
                    <Button className="w-full">
                      <Calculator className="h-4 w-4 mr-2" />
                      Run Simulation
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-medium">Projected Impact</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Revenue Change</span>
                        <span className="font-medium text-green-600">+₹45,230</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Booking Volume Change</span>
                        <span className="font-medium text-red-600">-23 bookings</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Conversion Rate</span>
                        <span className="font-medium">-0.8%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Partner Commission</span>
                        <span className="font-medium">+₹6,785</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPricing;
