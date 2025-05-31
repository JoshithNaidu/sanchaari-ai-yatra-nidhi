
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign, 
  Share, 
  Edit, 
  Plus,
  Clock,
  Utensils,
  Camera,
  Bed,
  Plane
} from 'lucide-react';

const ItineraryDetails = () => {
  const { tripId } = useParams();
  const [viewMode, setViewMode] = useState<'timeline' | 'table'>('timeline');
  const { toast } = useToast();

  // Mock data - in real app, this would be fetched based on tripId
  const trip = {
    id: tripId,
    name: 'My Trip to Paris',
    destination: 'Paris, France',
    startDate: '2024-06-15',
    endDate: '2024-06-22',
    budget: 120000,
    travelerType: 'Couple',
    status: 'Planning'
  };

  const [itinerary, setItinerary] = useState([
    {
      day: 1,
      date: '2024-06-15',
      location: 'Paris',
      activities: [
        { time: '09:00', title: 'Arrive at Charles de Gaulle Airport', type: 'transport', icon: Plane },
        { time: '11:00', title: 'Check-in at Hotel Le Marais', type: 'accommodation', icon: Bed },
        { time: '13:00', title: 'Lunch at Café de Flore', type: 'meal', icon: Utensils },
        { time: '15:00', title: 'Explore Latin Quarter', type: 'activity', icon: Camera },
        { time: '19:00', title: 'Dinner at Le Comptoir du Relais', type: 'meal', icon: Utensils }
      ]
    },
    {
      day: 2,
      date: '2024-06-16',
      location: 'Paris',
      activities: [
        { time: '09:00', title: 'Visit Louvre Museum', type: 'activity', icon: Camera },
        { time: '13:00', title: 'Lunch at Museum Café', type: 'meal', icon: Utensils },
        { time: '15:00', title: 'Walk along Seine River', type: 'activity', icon: Camera },
        { time: '18:00', title: 'Visit Notre-Dame Cathedral', type: 'activity', icon: Camera },
        { time: '20:00', title: 'Dinner in Saint-Germain', type: 'meal', icon: Utensils }
      ]
    }
  ]);

  const handleQuickEdit = () => {
    toast({
      title: "Opening Quick Edit",
      description: "Trip details editor is loading...",
    });
  };

  const handleExportPDF = () => {
    toast({
      title: "Exporting PDF",
      description: "Your itinerary PDF is being generated...",
    });
  };

  const handleShareLink = () => {
    if (navigator.share) {
      navigator.share({
        title: trip.name,
        text: `Check out my trip itinerary for ${trip.destination}!`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Trip link copied to clipboard!",
      });
    }
  };

  const handleAddActivity = (dayIndex: number) => {
    const newActivity = {
      time: '10:00',
      title: 'New Activity',
      type: 'activity',
      icon: Camera
    };
    
    setItinerary(prev => 
      prev.map((day, index) => 
        index === dayIndex 
          ? { ...day, activities: [...day.activities, newActivity] }
          : day
      )
    );
    
    toast({
      title: "Activity Added",
      description: "New activity has been added to your itinerary.",
    });
  };

  const handleShareTrip = () => {
    if (navigator.share) {
      navigator.share({
        title: trip.name,
        text: `Join me on my trip to ${trip.destination}!`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Trip Shared",
        description: "Trip link copied to clipboard for sharing!",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link to="/trips/dashboard" className="hover:text-gray-700">Dashboard</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{trip.name}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{trip.name}</h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {trip.destination}
              </span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
              </span>
            </div>
          </div>
          <Link to={`/trips/${tripId}/collaborate`}>
            <Button className="bg-blue-600 hover:bg-blue-700 mt-4 lg:mt-0">
              <Users className="h-4 w-4 mr-2" />
              Collaborate
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Trip Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Destination</span>
                  <span className="text-sm font-medium">{trip.destination}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Duration</span>
                  <span className="text-sm font-medium">7 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Budget</span>
                  <span className="text-sm font-medium">₹{trip.budget.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Trip Type</span>
                  <Badge variant="outline">{trip.travelerType}</Badge>
                </div>
                <Separator />
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={handleQuickEdit}
                >
                  <Edit className="h-3 w-3 mr-2" />
                  Quick Edit
                </Button>
                <div className="space-y-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start p-2"
                    onClick={handleExportPDF}
                  >
                    Export PDF
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start p-2"
                    onClick={handleShareLink}
                  >
                    <Share className="h-3 w-3 mr-2" />
                    Share Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6">
            {/* View Switch */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Itinerary</h2>
              <div className="flex rounded-lg border">
                <Button
                  variant={viewMode === 'timeline' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('timeline')}
                  className="rounded-r-none"
                >
                  Timeline
                </Button>
                <Button
                  variant={viewMode === 'table' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('table')}
                  className="rounded-l-none"
                >
                  Table
                </Button>
              </div>
            </div>

            {/* Timeline View */}
            {viewMode === 'timeline' && (
              <div className="space-y-6">
                {itinerary.map((day, dayIndex) => (
                  <Card key={day.day}>
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="flex items-center justify-between">
                        <span>Day {day.day} - {new Date(day.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                        <span className="text-sm font-normal text-gray-600">{day.location}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        {day.activities.map((activity, index) => {
                          const IconComponent = activity.icon;
                          return (
                            <div key={index} className="flex items-start space-x-4">
                              <div className="flex-shrink-0 w-12 text-sm text-gray-600 font-medium">
                                {activity.time}
                              </div>
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                  <IconComponent className="h-4 w-4 text-blue-600" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900">{activity.title}</h4>
                                <p className="text-sm text-gray-600 capitalize">{activity.type}</p>
                              </div>
                            </div>
                          );
                        })}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full mt-4"
                          onClick={() => handleAddActivity(dayIndex)}
                        >
                          <Plus className="h-3 w-3 mr-2" />
                          Add Activity
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Budget Widget */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Budget Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">₹{trip.budget.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Total Budget</div>
                    <Link to={`/trips/${tripId}/budget`}>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Packing List */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Packing List</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-4">
                      Smart recommendations based on your trip
                    </div>
                    <Link to={`/trips/${tripId}/packing`}>
                      <Button variant="outline" size="sm" className="w-full">
                        View Packing List
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Share Button */}
              <Button 
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={handleShareTrip}
              >
                <Share className="h-4 w-4 mr-2" />
                Share Trip
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetails;
