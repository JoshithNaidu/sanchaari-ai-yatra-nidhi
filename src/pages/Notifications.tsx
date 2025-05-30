
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Bell, Mail, MessageSquare, Gift, Calendar, Users, Trash2, Check } from 'lucide-react';
import Header from '@/components/Header';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'reminder',
      icon: Calendar,
      title: 'Trip Reminder',
      message: 'Your Goa trip starts in 3 days! Check your itinerary.',
      timestamp: '2 hours ago',
      read: false,
      tripId: 'trip123'
    },
    {
      id: 2,
      type: 'group',
      icon: Users,
      title: 'Group Update',
      message: 'Sarah added a new activity to your Kerala trip.',
      timestamp: '1 day ago',
      read: false,
      tripId: 'trip456'
    },
    {
      id: 3,
      type: 'promotion',
      icon: Gift,
      title: 'Special Offer',
      message: '20% off on hotel bookings this weekend!',
      timestamp: '2 days ago',
      read: true,
      tripId: null
    }
  ]);

  const [preferences, setPreferences] = useState({
    email: true,
    sms: false,
    inApp: true,
    promotions: true,
    reminders: true,
    groupUpdates: true,
    tripChanges: true
  });

  const handleMarkAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const handleDeleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
            <p className="text-gray-600">Stay updated with your trips and account activity</p>
          </div>
          {unreadCount > 0 && (
            <Badge variant="default" className="px-3 py-1">
              {unreadCount} unread
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Notification Feed */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Recent Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => {
                    const IconComponent = notification.icon;
                    return (
                      <div
                        key={notification.id}
                        className={`p-4 rounded-lg border transition-colors ${
                          notification.read ? 'bg-white' : 'bg-blue-50 border-blue-200'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-full ${
                            notification.type === 'reminder' ? 'bg-orange-100 text-orange-600' :
                            notification.type === 'group' ? 'bg-blue-100 text-blue-600' :
                            'bg-green-100 text-green-600'
                          }`}>
                            <IconComponent className="h-4 w-4" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium text-gray-900">{notification.title}</h4>
                              <span className="text-xs text-gray-500">{notification.timestamp}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                            
                            <div className="flex items-center gap-2">
                              {!notification.read && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleMarkAsRead(notification.id)}
                                  className="h-7 px-2 text-xs"
                                >
                                  <Check className="h-3 w-3 mr-1" />
                                  Mark as read
                                </Button>
                              )}
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleDeleteNotification(notification.id)}
                                className="h-7 px-2 text-xs text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {notifications.length === 0 && (
                  <div className="text-center py-8">
                    <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
                    <p className="text-gray-600">You're all caught up!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Preferences Panel */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Delivery Methods */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Delivery Methods</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">Email</span>
                      </div>
                      <Switch
                        checked={preferences.email}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, email: checked }))
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">SMS</span>
                      </div>
                      <Switch
                        checked={preferences.sms}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, sms: checked }))
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">In-app</span>
                      </div>
                      <Switch
                        checked={preferences.inApp}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, inApp: checked }))
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Promotions</span>
                      <Switch
                        checked={preferences.promotions}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, promotions: checked }))
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Reminders</span>
                      <Switch
                        checked={preferences.reminders}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, reminders: checked }))
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Group Updates</span>
                      <Switch
                        checked={preferences.groupUpdates}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, groupUpdates: checked }))
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Trip Changes</span>
                      <Switch
                        checked={preferences.tripChanges}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, tripChanges: checked }))
                        }
                      />
                    </div>
                  </div>
                </div>

                <Button className="w-full">Save Preferences</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
