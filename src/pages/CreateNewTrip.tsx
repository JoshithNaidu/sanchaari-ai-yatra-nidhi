
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { CalendarIcon, MapPin, Users, DollarSign } from 'lucide-react';
import { format } from 'date-fns';

const CreateNewTrip = () => {
  const navigate = useNavigate();
  const [tripName, setTripName] = useState('');
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [destination, setDestination] = useState('');
  const [travelerType, setTravelerType] = useState<string>('');
  const [budget, setBudget] = useState([50000]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showPreferences, setShowPreferences] = useState(false);

  const travelerTypes = ['Solo', 'Couple', 'Family', 'Group'];
  const experienceTags = ['Adventure', 'Cultural', 'Relaxation', 'Food & Wine', 'Wildlife', 'Beach', 'Mountains', 'City Break'];

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a random trip ID for demo
    const tripId = Math.random().toString(36).substr(2, 9);
    navigate(`/trips/${tripId}`);
  };

  const isFormValid = tripName && startDate && endDate && destination && travelerType;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Trip</h1>
          <p className="text-gray-600">Tell us about your travel preferences and we'll create a personalized itinerary</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Trip Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Trip Name */}
              <div className="space-y-2">
                <Label htmlFor="tripName">Trip Name *</Label>
                <Input
                  id="tripName"
                  placeholder="My Trip to ____"
                  value={tripName}
                  onChange={(e) => setTripName(e.target.value)}
                  required
                />
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>End Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <Label htmlFor="destination">Destination *</Label>
                <Input
                  id="destination"
                  placeholder="Where would you like to go?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </div>

              {/* Traveler Type */}
              <div className="space-y-3">
                <Label className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Traveler Type *
                </Label>
                <div className="flex flex-wrap gap-2">
                  {travelerTypes.map((type) => (
                    <Button
                      key={type}
                      type="button"
                      variant={travelerType === type ? "default" : "outline"}
                      onClick={() => setTravelerType(type)}
                      className="h-9"
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="space-y-3">
                <Label className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Budget (INR)
                </Label>
                <div className="px-4">
                  <Slider
                    value={budget}
                    onValueChange={setBudget}
                    max={500000}
                    min={10000}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>₹10,000</span>
                    <span className="font-medium">₹{budget[0].toLocaleString()}</span>
                    <span>₹5,00,000+</span>
                  </div>
                </div>
              </div>

              {/* Experience Tags */}
              <div className="space-y-3">
                <Label>Experience Preferences</Label>
                <div className="flex flex-wrap gap-2">
                  {experienceTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className="cursor-pointer hover:bg-blue-100"
                      onClick={() => handleTagToggle(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Preferences Toggle */}
              <div className="space-y-3">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setShowPreferences(!showPreferences)}
                  className="p-0 h-auto font-normal text-blue-600 hover:text-blue-700"
                >
                  {showPreferences ? 'Hide' : 'Show'} Additional Preferences
                </Button>
                
                {showPreferences && (
                  <Card className="border-blue-100 bg-blue-50/50">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Dietary Requirements</Label>
                          <Input placeholder="e.g., Vegetarian, Vegan" />
                        </div>
                        <div className="space-y-2">
                          <Label>Accessibility Needs</Label>
                          <Input placeholder="Any special requirements" />
                        </div>
                        <div className="space-y-2">
                          <Label>Climate Preference</Label>
                          <Input placeholder="e.g., Warm, Cool, Moderate" />
                        </div>
                        <div className="space-y-2">
                          <Label>Language Preference</Label>
                          <Input placeholder="Preferred language for guides" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-6">
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-8"
                  disabled={!isFormValid}
                >
                  Generate My Itinerary
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default CreateNewTrip;
