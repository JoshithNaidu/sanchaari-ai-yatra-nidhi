
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  ArrowLeft, 
  Download, 
  Upload, 
  DollarSign,
  Settings,
  Save
} from 'lucide-react';

const PartnerAvailability = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState({
    baseRate: 5000,
    specialRate: 0,
    minStay: 1,
    maxStay: 7,
    available: true
  });

  const rateRules = {
    defaultRate: 5000,
    weekendUplift: 20,
    highSeasonRate: 7500
  };

  // Mock calendar data
  const calendarData = [
    { date: '2024-06-01', available: true, rate: 5000, booked: false },
    { date: '2024-06-02', available: true, rate: 6000, booked: true },
    { date: '2024-06-03', available: false, rate: 0, booked: false },
    // Add more dates as needed
  ];

  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const dayData = calendarData.find(d => d.date === date.toISOString().split('T')[0]) || {
        date: date.toISOString().split('T')[0],
        available: true,
        rate: rateRules.defaultRate,
        booked: false
      };
      
      days.push({
        date: date,
        ...dayData
      });
    }
    return days;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setShowEditModal(true);
  };

  const handleSaveChanges = () => {
    // Save logic here
    setShowEditModal(false);
    console.log('Saving changes for date:', selectedDate, editData);
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
              <h1 className="text-2xl font-bold text-gray-900">Availability & Pricing</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Template
              </Button>
              <Button variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Bulk Upload
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Calendar View */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Calendar View
                </CardTitle>
                <CardDescription>
                  Click on dates to update availability and pricing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="p-2 text-center font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-2">
                  {generateCalendarDays().map((day, index) => (
                    <div
                      key={index}
                      onClick={() => handleDateClick(day.date)}
                      className={`
                        p-3 rounded-lg cursor-pointer border transition-all
                        ${day.booked 
                          ? 'bg-red-100 border-red-200 text-red-800' 
                          : day.available 
                            ? 'bg-green-50 border-green-200 hover:bg-green-100' 
                            : 'bg-gray-100 border-gray-200 text-gray-400'
                        }
                      `}
                    >
                      <div className="text-sm font-medium">
                        {day.date.getDate()}
                      </div>
                      {day.available && !day.booked && (
                        <div className="text-xs text-gray-600 mt-1">
                          ₹{day.rate}
                        </div>
                      )}
                      {day.booked && (
                        <div className="text-xs mt-1">Booked</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center gap-6 mt-6 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-100 border border-green-200 rounded"></div>
                    <span className="text-sm">Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-100 border border-red-200 rounded"></div>
                    <span className="text-sm">Booked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-100 border border-gray-200 rounded"></div>
                    <span className="text-sm">Unavailable</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rate Rules Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Rate Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="defaultRate">Default Rate (₹)</Label>
                  <Input
                    id="defaultRate"
                    type="number"
                    value={rateRules.defaultRate}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="weekendUplift">Weekend Uplift (%)</Label>
                  <Input
                    id="weekendUplift"
                    type="number"
                    value={rateRules.weekendUplift}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="highSeasonRate">High Season Rate (₹)</Label>
                  <Input
                    id="highSeasonRate"
                    type="number"
                    value={rateRules.highSeasonRate}
                    className="mt-1"
                  />
                </div>
                
                <Button className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  Save Rules
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bulk Upload</CardTitle>
                <CardDescription>Upload CSV for bulk pricing updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Template
                </Button>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    Drag & drop CSV file or click to browse
                  </p>
                  <input type="file" accept=".csv" className="hidden" />
                </div>
                
                <Button className="w-full" disabled>
                  Upload & Preview
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Edit Modal */}
        {showEditModal && selectedDate && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-4">
              <CardHeader>
                <CardTitle>Edit Availability & Pricing</CardTitle>
                <CardDescription>
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="available">Available</Label>
                  <Switch
                    id="available"
                    checked={editData.available}
                    onCheckedChange={(checked) => setEditData({...editData, available: checked})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="baseRate">Base Rate (₹)</Label>
                  <Input
                    id="baseRate"
                    type="number"
                    value={editData.baseRate}
                    onChange={(e) => setEditData({...editData, baseRate: parseInt(e.target.value)})}
                    disabled={!editData.available}
                  />
                </div>
                
                <div>
                  <Label htmlFor="specialRate">Special Rate (₹)</Label>
                  <Input
                    id="specialRate"
                    type="number"
                    value={editData.specialRate}
                    onChange={(e) => setEditData({...editData, specialRate: parseInt(e.target.value)})}
                    placeholder="Leave 0 for base rate"
                    disabled={!editData.available}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="minStay">Min Stay</Label>
                    <Input
                      id="minStay"
                      type="number"
                      value={editData.minStay}
                      onChange={(e) => setEditData({...editData, minStay: parseInt(e.target.value)})}
                      disabled={!editData.available}
                    />
                  </div>
                  <div>
                    <Label htmlFor="maxStay">Max Stay</Label>
                    <Input
                      id="maxStay"
                      type="number"
                      value={editData.maxStay}
                      onChange={(e) => setEditData({...editData, maxStay: parseInt(e.target.value)})}
                      disabled={!editData.available}
                    />
                  </div>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button onClick={handleSaveChanges} className="flex-1">
                    Save Changes
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowEditModal(false)}
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

export default PartnerAvailability;
