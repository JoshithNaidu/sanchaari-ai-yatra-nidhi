
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  ArrowLeft, 
  Send,
  Search,
  MoreHorizontal,
  Phone,
  Video,
  Info,
  Flag,
  AlertTriangle,
  CheckCheck,
  Clock
} from 'lucide-react';

const PartnerMessages = () => {
  const [selectedConversation, setSelectedConversation] = useState('1');
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const conversations = [
    {
      id: '1',
      guestName: 'Priya Sharma',
      guestAvatar: '/placeholder.svg',
      lastMessage: 'Thank you for the quick response!',
      timestamp: '2 min ago',
      unread: 0,
      bookingId: 'BK001',
      listingName: 'Mountain Villa',
      status: 'active'
    },
    {
      id: '2',
      guestName: 'Raj Kumar',
      guestAvatar: '/placeholder.svg',
      lastMessage: 'What time is the check-in?',
      timestamp: '1 hour ago',
      unread: 2,
      bookingId: 'BK002',
      listingName: 'Beach House',
      status: 'active'
    },
    {
      id: '3',
      guestName: 'Support Team',
      guestAvatar: '/placeholder.svg',
      lastMessage: 'Your payout has been processed',
      timestamp: '3 hours ago',
      unread: 0,
      bookingId: null,
      listingName: null,
      status: 'support'
    }
  ];

  const messages = {
    '1': [
      {
        id: '1',
        sender: 'guest',
        content: 'Hi! I have a booking for this weekend. Could you please confirm the check-in instructions?',
        timestamp: '10:30 AM',
        status: 'read'
      },
      {
        id: '2',
        sender: 'partner',
        content: 'Hello Priya! Yes, your booking is confirmed. Check-in is at 3 PM. I\'ll send you the detailed instructions shortly.',
        timestamp: '10:35 AM',
        status: 'read'
      },
      {
        id: '3',
        sender: 'guest',
        content: 'Perfect! Also, is parking available at the property?',
        timestamp: '10:40 AM',
        status: 'read'
      },
      {
        id: '4',
        sender: 'partner',
        content: 'Yes, we have free parking available. You can park right in front of the villa.',
        timestamp: '10:45 AM',
        status: 'delivered'
      },
      {
        id: '5',
        sender: 'guest',
        content: 'Thank you for the quick response!',
        timestamp: '10:50 AM',
        status: 'read'
      }
    ],
    '2': [
      {
        id: '1',
        sender: 'guest',
        content: 'What time is the check-in?',
        timestamp: '2:30 PM',
        status: 'delivered'
      }
    ]
  };

  const currentConversation = conversations.find(conv => conv.id === selectedConversation);
  const currentMessages = messages[selectedConversation] || [];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Add message logic here
      setMessageText('');
    }
  };

  const getMessageStatusIcon = (status: string) => {
    switch (status) {
      case 'read': return <CheckCheck className="h-3 w-3 text-blue-600" />;
      case 'delivered': return <CheckCheck className="h-3 w-3 text-gray-400" />;
      case 'sent': return <Clock className="h-3 w-3 text-gray-400" />;
      default: return null;
    }
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
              <h1 className="text-2xl font-bold text-gray-900">Message Center</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <Card className="lg:col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Conversations</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-96 overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                      selectedConversation === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={conversation.guestAvatar} />
                          <AvatarFallback>
                            {conversation.guestName.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.status === 'support' && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                            <Info className="h-2 w-2 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium truncate">{conversation.guestName}</h4>
                          {conversation.unread > 0 && (
                            <Badge className="bg-red-500 text-white text-xs px-1.5 py-0.5">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                          {conversation.bookingId && (
                            <span className="text-xs text-blue-600">#{conversation.bookingId}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2">
            {currentConversation ? (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={currentConversation.guestAvatar} />
                        <AvatarFallback>
                          {currentConversation.guestName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{currentConversation.guestName}</h3>
                        {currentConversation.listingName && (
                          <p className="text-sm text-gray-600">{currentConversation.listingName}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 p-4 max-h-96 overflow-y-auto">
                  <div className="space-y-4">
                    {currentMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'partner' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.sender === 'partner'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <div className={`flex items-center gap-1 mt-1 ${
                            message.sender === 'partner' ? 'justify-end' : 'justify-start'
                          }`}>
                            <span className={`text-xs ${
                              message.sender === 'partner' ? 'text-blue-100' : 'text-gray-500'
                            }`}>
                              {message.timestamp}
                            </span>
                            {message.sender === 'partner' && getMessageStatusIcon(message.status)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Message Input */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <CardContent className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                  <p className="text-gray-600">Choose a conversation from the left to start messaging</p>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Conversation Details */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Conversation Details</CardTitle>
            </CardHeader>
            <CardContent>
              {currentConversation ? (
                <div className="space-y-4">
                  {/* Guest Info */}
                  <div>
                    <h4 className="font-medium mb-2">Guest Information</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-600">Name:</span> {currentConversation.guestName}</p>
                      {currentConversation.bookingId && (
                        <p><span className="text-gray-600">Booking ID:</span> {currentConversation.bookingId}</p>
                      )}
                      {currentConversation.listingName && (
                        <p><span className="text-gray-600">Property:</span> {currentConversation.listingName}</p>
                      )}
                    </div>
                  </div>

                  {/* Booking Summary */}
                  {currentConversation.bookingId && (
                    <div>
                      <h4 className="font-medium mb-2">Booking Summary</h4>
                      <div className="bg-gray-50 p-3 rounded-lg text-sm space-y-1">
                        <p><span className="text-gray-600">Check-in:</span> June 8, 2024</p>
                        <p><span className="text-gray-600">Check-out:</span> June 10, 2024</p>
                        <p><span className="text-gray-600">Guests:</span> 2 Adults</p>
                        <p><span className="text-gray-600">Total:</span> ₹15,000</p>
                      </div>
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div>
                    <h4 className="font-medium mb-2">Quick Actions</h4>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        <Flag className="h-3 w-3 mr-2" />
                        Report Issue
                      </Button>
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        <AlertTriangle className="h-3 w-3 mr-2" />
                        Escalate to Admin
                      </Button>
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        Archive Conversation
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  Select a conversation to view details
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PartnerMessages;
