
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  ArrowLeft, 
  Download, 
  Calendar as CalendarIcon,
  BarChart3,
  TrendingUp,
  Filter
} from 'lucide-react';
import { format } from 'date-fns';

const BookingVolumeReports = () => {
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: new Date(),
    to: new Date()
  });
  const [selectedListing, setSelectedListing] = useState('all');
  const [bookingType, setBookingType] = useState('all');

  // Mock data
  const mockBookings = [
    { date: '2024-06-01', listing: 'Mountain Villa', occupancy: 80, bookings: 4, avgStay: 3.2, cancellation: 5 },
    { date: '2024-06-02', listing: 'Beach House', occupancy: 95, bookings: 6, avgStay: 2.8, cancellation: 0 },
    { date: '2024-06-03', listing: 'City Apartment', occupancy: 60, bookings: 2, avgStay: 4.1, cancellation: 10 },
  ];

  const mockListings = ['All Listings', 'Mountain Villa', 'Beach House', 'City Apartment'];

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
              <h1 className="text-2xl font-bold text-gray-900">Booking Volume Reports</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Date Range */}
              <div>
                <Label>Date Range</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateRange.from ? (
                        dateRange.to ? (
                          <>
                            {format(dateRange.from, "LLL dd, y")} -{" "}
                            {format(dateRange.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(dateRange.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="range"
                      selected={dateRange}
                      onSelect={setDateRange}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Listing Filter */}
              <div>
                <Label>Listing</Label>
                <Select value={selectedListing} onValueChange={setSelectedListing}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select listing" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockListings.map((listing) => (
                      <SelectItem key={listing} value={listing.toLowerCase().replace(' ', '-')}>
                        {listing}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Booking Type */}
              <div>
                <Label>Booking Type</Label>
                <Select value={bookingType} onValueChange={setBookingType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Bookings</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Quick Presets */}
              <div>
                <Label>Quick Presets</Label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Today</Button>
                  <Button variant="outline" size="sm">7 Days</Button>
                  <Button variant="outline" size="sm">MTD</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                  <p className="text-2xl font-bold">142</p>
                </div>
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-xs text-green-600 flex items-center mt-2">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Occupancy</p>
                  <p className="text-2xl font-bold">78%</p>
                </div>
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-xs text-green-600 flex items-center mt-2">
                <TrendingUp className="h-3 w-3 mr-1" />
                +5% from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Stay Length</p>
                  <p className="text-2xl font-bold">3.2 days</p>
                </div>
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-xs text-red-600 flex items-center mt-2">
                <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
                -2% from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Cancellation Rate</p>
                  <p className="text-2xl font-bold">8.5%</p>
                </div>
                <BarChart3 className="h-8 w-8 text-red-600" />
              </div>
              <p className="text-xs text-green-600 flex items-center mt-2">
                <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
                -3% from last period
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Line Chart Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Daily Bookings Trend</CardTitle>
              <CardDescription>Click on peaks to see booking details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Line Chart: Daily Bookings</p>
              </div>
            </CardContent>
          </Card>

          {/* Heatmap Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Occupancy Heatmap</CardTitle>
              <CardDescription>Hover for booking density details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Calendar Heatmap: Occupancy %</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Booking Data</CardTitle>
            <CardDescription>Showing 25 entries per page</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Listing</TableHead>
                  <TableHead>Occupancy %</TableHead>
                  <TableHead>No. of Bookings</TableHead>
                  <TableHead>Avg Length of Stay</TableHead>
                  <TableHead>Cancellation %</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockBookings.map((booking, index) => (
                  <TableRow key={index}>
                    <TableCell>{booking.date}</TableCell>
                    <TableCell>{booking.listing}</TableCell>
                    <TableCell>{booking.occupancy}%</TableCell>
                    <TableCell>{booking.bookings}</TableCell>
                    <TableCell>{booking.avgStay} days</TableCell>
                    <TableCell>{booking.cancellation}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-gray-500">Showing 1-3 of 3 entries</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm" disabled>Next</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingVolumeReports;
