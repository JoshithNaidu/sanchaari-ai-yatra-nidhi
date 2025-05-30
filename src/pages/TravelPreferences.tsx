
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';
import { Save, MapPin, Wallet, Globe, Thermometer, Activity } from 'lucide-react';
import Header from '@/components/Header';

const TravelPreferences = () => {
  const { toast } = useToast();
  const [preferences, setPreferences] = useState({
    travelStyles: [],
    budgetRange: [50000],
    accessibility: [],
    climate: '',
    languages: [],
    activityIntensity: ''
  });

  const travelStyles = [
    'Adventure', 'Wellness', 'Heritage', 'Nature', 'Spiritual', 'Cultural', 'Luxury', 'Budget', 'Beach', 'Mountain'
  ];

  const accessibilityOptions = [
    'Wheelchair Access', 'Visual Assistance', 'Hearing Assistance', 'Dietary Restrictions', 'Medical Facilities'
  ];

  const languages = [
    'English', 'Hindi', 'Tamil', 'Telugu', 'Bengali', 'Marathi', 'Gujarati', 'Kannada', 'Malayalam', 'Punjabi'
  ];

  const handleSave = () => {
    toast({
      title: "Preferences saved",
      description: "Your travel preferences have been updated successfully."
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Travel Preferences</h1>
          <p className="text-gray-600">Customize your travel experience to get personalized recommendations</p>
        </div>

        <div className="space-y-6">
          {/* Travel Style */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                Travel Style
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {travelStyles.map((style) => (
                  <div key={style} className="flex items-center space-x-2">
                    <Checkbox id={style} />
                    <label htmlFor={style} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {style}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Budget Preference */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-green-600" />
                Budget Preference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="px-3">
                  <Slider
                    value={preferences.budgetRange}
                    onValueChange={(value) => setPreferences(prev => ({ ...prev, budgetRange: value }))}
                    max={500000}
                    min={5000}
                    step={5000}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>₹5,000</span>
                  <span className="font-medium">₹{preferences.budgetRange[0].toLocaleString()}</span>
                  <span>₹5,00,000</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Climate Preference */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-orange-600" />
                  Climate Preference
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={preferences.climate} onValueChange={(value) => setPreferences(prev => ({ ...prev, climate: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select climate preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="warm">Warm Weather</SelectItem>
                    <SelectItem value="cold">Cold Weather</SelectItem>
                    <SelectItem value="moderate">Moderate Climate</SelectItem>
                    <SelectItem value="any">Any Climate</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Activity Intensity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-purple-600" />
                  Activity Intensity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={preferences.activityIntensity} onValueChange={(value) => setPreferences(prev => ({ ...prev, activityIntensity: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relaxed">Relaxed</SelectItem>
                    <SelectItem value="balanced">Balanced</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>

          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-indigo-600" />
                Language Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {languages.map((language) => (
                  <div key={language} className="flex items-center space-x-2">
                    <Checkbox id={language} />
                    <label htmlFor={language} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {language}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Accessibility */}
          <Card>
            <CardHeader>
              <CardTitle>Accessibility Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {accessibilityOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox id={option} />
                    <label htmlFor={option} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button onClick={handleSave} className="gap-2 px-8">
              <Save className="h-4 w-4" />
              Save Preferences
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPreferences;
