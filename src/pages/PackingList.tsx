
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Plus, Trash2, User, Printer, Share } from 'lucide-react';

const PackingList = () => {
  const { tripId } = useParams();
  const [newItem, setNewItem] = useState('');
  const [isGroupTrip] = useState(true);

  const categories = [
    {
      name: 'Clothing',
      items: [
        { id: '1', name: 'T-shirts (3-4)', packed: true, assignedTo: 'John', smart: true },
        { id: '2', name: 'Jeans (2 pairs)', packed: false, assignedTo: 'John', smart: true },
        { id: '3', name: 'Light jacket', packed: false, assignedTo: 'Jane', smart: true },
        { id: '4', name: 'Comfortable walking shoes', packed: true, assignedTo: 'Both', smart: true },
        { id: '5', name: 'Dress clothes for dinner', packed: false, assignedTo: 'Jane', smart: true }
      ]
    },
    {
      name: 'Toiletries',
      items: [
        { id: '6', name: 'Toothbrush & toothpaste', packed: true, assignedTo: 'Both', smart: true },
        { id: '7', name: 'Shampoo & conditioner', packed: false, assignedTo: 'Jane', smart: true },
        { id: '8', name: 'Sunscreen SPF 30+', packed: false, assignedTo: 'Both', smart: true },
        { id: '9', name: 'Personal medications', packed: false, assignedTo: 'Both', smart: false }
      ]
    },
    {
      name: 'Documents',
      items: [
        { id: '10', name: 'Passport', packed: true, assignedTo: 'Both', smart: true },
        { id: '11', name: 'Flight tickets (printed)', packed: false, assignedTo: 'John', smart: true },
        { id: '12', name: 'Hotel confirmations', packed: false, assignedTo: 'John', smart: true },
        { id: '13', name: 'Travel insurance', packed: false, assignedTo: 'Both', smart: true }
      ]
    },
    {
      name: 'Electronics',
      items: [
        { id: '14', name: 'Phone charger', packed: false, assignedTo: 'Both', smart: true },
        { id: '15', name: 'Camera', packed: false, assignedTo: 'Jane', smart: false },
        { id: '16', name: 'Power bank', packed: false, assignedTo: 'John', smart: false },
        { id: '17', name: 'Universal adapter', packed: false, assignedTo: 'John', smart: true }
      ]
    },
    {
      name: 'Miscellaneous',
      items: [
        { id: '18', name: 'Umbrella', packed: false, assignedTo: 'Both', smart: true },
        { id: '19', name: 'Day backpack', packed: false, assignedTo: 'Both', smart: false },
        { id: '20', name: 'Snacks for flight', packed: false, assignedTo: 'Jane', smart: false }
      ]
    }
  ];

  const [packingItems, setPackingItems] = useState(categories);

  const toggleItemPacked = (categoryIndex: number, itemId: string) => {
    setPackingItems(prev => 
      prev.map((category, idx) => 
        idx === categoryIndex 
          ? {
              ...category,
              items: category.items.map(item => 
                item.id === itemId ? { ...item, packed: !item.packed } : item
              )
            }
          : category
      )
    );
  };

  const addCustomItem = (categoryIndex: number) => {
    if (newItem.trim()) {
      const newItemObj = {
        id: Date.now().toString(),
        name: newItem,
        packed: false,
        assignedTo: 'Unassigned',
        smart: false
      };
      
      setPackingItems(prev => 
        prev.map((category, idx) => 
          idx === categoryIndex 
            ? { ...category, items: [...category.items, newItemObj] }
            : category
        )
      );
      setNewItem('');
    }
  };

  const getTotalStats = () => {
    const allItems = packingItems.flatMap(cat => cat.items);
    const packed = allItems.filter(item => item.packed).length;
    const total = allItems.length;
    return { packed, total, percentage: Math.round((packed / total) * 100) };
  };

  const stats = getTotalStats();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to={`/trips/${tripId}`}>
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Itinerary
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Packing List</h1>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button variant="outline" size="sm">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Packing Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl font-bold">
                {stats.packed}/{stats.total} items packed
              </div>
              <div className="text-lg font-semibold text-blue-600">
                {stats.percentage}% complete
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-300" 
                style={{ width: `${stats.percentage}%` }}
              ></div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Smart recommendations are based on your destination (Paris), weather forecast, and planned activities.
            </div>
          </CardContent>
        </Card>

        {/* Packing Categories */}
        <div className="space-y-6">
          {packingItems.map((category, categoryIndex) => (
            <Card key={category.name}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <div className="text-sm text-gray-600">
                    {category.items.filter(item => item.packed).length}/{category.items.length} packed
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                      <Checkbox
                        checked={item.packed}
                        onCheckedChange={() => toggleItemPacked(categoryIndex, item.id)}
                      />
                      <div className="flex-1">
                        <div className={`font-medium ${item.packed ? 'line-through text-gray-500' : ''}`}>
                          {item.name}
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          {item.smart && (
                            <Badge variant="outline" className="text-xs">
                              Smart Recommendation
                            </Badge>
                          )}
                          {isGroupTrip && (
                            <div className="flex items-center text-xs text-gray-600">
                              <User className="h-3 w-3 mr-1" />
                              {item.assignedTo}
                            </div>
                          )}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                  
                  {/* Add Custom Item */}
                  <div className="flex space-x-2 pt-2 border-t">
                    <Input
                      placeholder={`Add item to ${category.name.toLowerCase()}...`}
                      value={newItem}
                      onChange={(e) => setNewItem(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addCustomItem(categoryIndex)}
                      className="flex-1"
                    />
                    <Button 
                      size="sm" 
                      onClick={() => addCustomItem(categoryIndex)}
                      disabled={!newItem.trim()}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="font-semibold">Quick Actions</h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline">Mark All Clothing as Packed</Button>
                <Button variant="outline">Add Weather-Based Items</Button>
                <Button variant="outline">Generate Travel Document Checklist</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PackingList;
