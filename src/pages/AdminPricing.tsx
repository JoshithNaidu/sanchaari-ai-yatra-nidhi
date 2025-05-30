
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  ArrowLeft,
  Edit,
  Save,
  Download,
  Percent,
  TrendingUp,
  Calendar,
  AlertTriangle
} from 'lucide-react';

const AdminPricing = () => {
  const [editingRate, setEditingRate] = useState<string | null>(null);
  const [newRate, setNewRate] = useState('');

  const pricingData = [
    {
      id: "HOTEL",
      type: "Hotel",
      currentRate: "12%",
      minRate: "8%",
      maxRate: "18%",
      lastUpdated: "2024-05-15",
      updatedBy: "admin@sanchaari.com"
    },
    {
      id: "HOMESTAY",
      type: "Homestay",
      currentRate: "15%",
      minRate: "10%",
      maxRate: "20%",
      lastUpdated: "2024-05-20",
      updatedBy: "ops@sanchaari.com"
    },
    {
      id: "PACKAGE",
      type: "Package Tour",
      currentRate: "10%",
      minRate: "7%",
      maxRate: "15%",
      lastUpdated: "2024-05-25",
      updatedBy: "admin@sanchaari.com"
    },
    {
      id: "EXPERIENCE",
      type: "Experience",
      currentRate: "20%",
      minRate: "15%",
      maxRate: "25%",
      lastUpdated: "2024-05-10",
      updatedBy: "pricing@sanchaari.com"
    },
    {
      id: "VEHICLE",
      type: "Vehicle Rental",
      currentRate: "8%",
      minRate: "5%",
      maxRate: "12%",
      lastUpdated: "2024-05-28",
      updatedBy: "admin@sanchaari.com"
    }
  ];

  const overrideRules = [
    {
      id: "OR001",
      name: "Northeast India Promotion",
      type: "Destination",
      target: "Assam, Meghalaya, Nagaland",
      adjustment: "-10%",
      effectiveFrom: "2024-06-01",
      effectiveTo: "2024-08-31",
      status: "Active"
    },
    {
      id: "OR002",
      name: "Premium Partner Boost",
      type: "Partner",
      target: "Heritage Hotels Group",
      adjustment: "+5%",
      effectiveFrom: "2024-05-15",
      effectiveTo: "2024-12-31",
      status: "Active"
    },
    {
      id: "OR003",
      name: "Summer Sale",
      type: "Category",
      target: "Beach Resorts",
      adjustment: "-15%",
      effectiveFrom: "2024-04-01",
      effectiveTo: "2024-06-30",
      status: "Expired"
    }
  ];

  const auditLogs = [
    {
      id: "AL001",
      timestamp: "2024-05-30 14:30:00",
      admin: "admin@sanchaari.com",
      action: "Rate Change",
      details: "Hotel commission: 10% → 12%",
      reason: "Market adjustment"
    },
    {
      id: "AL002",
      timestamp: "2024-05-29 16:45:00",
      admin: "ops@sanchaari.com",
      action: "Override Created",
      details: "Created Northeast India promotion rule",
      reason: "Regional marketing campaign"
    },
    {
      id: "AL003",
      timestamp: "2024-05-28 11:20:00",
      admin: "pricing@sanchaari.com",
      action: "Rate Change",
      details: "Experience commission: 18% → 20%",
      reason: "Competitive analysis update"
    }
  ];

  const handleEditRate = (id: string, currentRate: string) => {
    setEditingRate(id);
    setNewRate(currentRate.replace('%', ''));
  };

  const handleSaveRate = () => {
    // Here you would typically make an API call to save the new rate
    console.log(`Saving new rate: ${newRate}% for ${editingRate}`);
    setEditingRate(null);
    setNewRate('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Expired': return 'bg-red-100 text-red-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin/dashboard" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Pricing & Commission Management</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export Audit
              </Button>
              <Link to="/admin/logout">
                <Button variant="destructive" size="sm">Logout</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Commission</p>
                  <p className="text-2xl font-bold text-blue-600">13.8%</p>
                </div>
                <Percent className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Revenue Impact</p>
                  <p className="text-2xl font-bold text-green-600">+2.3%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Overrides</p>
                  <p className="text-2xl font-bold text-purple-600">2</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Last Updated</p>
                  <p className="text-2xl font-bold text-gray-600">2d ago</p>
                </div>
                <Calendar className="h-8 w-8 text-gray-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Commission Rates */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Commission Rates by Listing Type</CardTitle>
            <CardDescription>Manage platform commission rates for different service categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Listing Type</TableHead>
                    <TableHead>Current Rate</TableHead>
                    <TableHead>Min Rate</TableHead>
                    <TableHead>Max Rate</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Updated By</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.type}</TableCell>
                      <TableCell>
                        {editingRate === item.id ? (
                          <div className="flex items-center gap-2">
                            <Input
                              type="number"
                              value={newRate}
                              onChange={(e) => setNewRate(e.target.value)}
                              className="w-20"
                              min={parseInt(item.minRate)}
                              max={parseInt(item.maxRate)}
                            />
                            <span>%</span>
                          </div>
                        ) : (
                          <span className="font-semibold text-blue-600">{item.currentRate}</span>
                        )}
                      </TableCell>
                      <TableCell className="text-green-600">{item.minRate}</TableCell>
                      <TableCell className="text-red-600">{item.maxRate}</TableCell>
                      <TableCell>{item.lastUpdated}</TableCell>
                      <TableCell className="text-sm text-gray-600">{item.updatedBy}</TableCell>
                      <TableCell>
                        {editingRate === item.id ? (
                          <div className="flex gap-2">
                            <Button size="sm" onClick={handleSaveRate}>
                              <Save className="h-3 w-3 mr-1" />
                              Save
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => setEditingRate(null)}>
                              Cancel
                            </Button>
                          </div>
                        ) : (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleEditRate(item.id, item.currentRate)}
                          >
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Override Rules */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Override Rules</CardTitle>
                <CardDescription>Custom pricing rules for specific partners, destinations, or categories</CardDescription>
              </div>
              <Button className="gap-2">
                <Edit className="h-4 w-4" />
                Create Override
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rule Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Target</TableHead>
                    <TableHead>Adjustment</TableHead>
                    <TableHead>Effective Period</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {overrideRules.map((rule) => (
                    <TableRow key={rule.id}>
                      <TableCell className="font-medium">{rule.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{rule.type}</Badge>
                      </TableCell>
                      <TableCell>{rule.target}</TableCell>
                      <TableCell>
                        <span className={`font-semibold ${rule.adjustment.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {rule.adjustment}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>{rule.effectiveFrom}</p>
                          <p className="text-gray-500">to {rule.effectiveTo}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(rule.status)}>
                          {rule.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
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

        {/* Audit Trail */}
        <Card>
          <CardHeader>
            <CardTitle>Audit Trail</CardTitle>
            <CardDescription>History of all pricing and commission changes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Admin</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>Reason</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {auditLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-mono text-sm">{log.timestamp}</TableCell>
                      <TableCell>{log.admin}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{log.action}</Badge>
                      </TableCell>
                      <TableCell>{log.details}</TableCell>
                      <TableCell className="text-sm text-gray-600">{log.reason}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPricing;
