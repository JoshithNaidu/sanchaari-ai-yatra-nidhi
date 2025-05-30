
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Plus, Search, Star, Paperclip, Send, Filter } from 'lucide-react';

const PartnerMessages = () => {
  const [selectedConversation, setSelectedConversation] = useState('1');
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const conversations = [
    {
      id: '1',
      name: 'John Smith',
      type: 'traveler',
      subject: 'Booking inquiry for Luxury Suite',
      lastMessage: 'Is the suite available for next weekend?',
      timestamp: '2 hours ago',
      unread: true,
      isStarred: false
    },
    {
      id: '2',
      name: 'Support Team',
      type: 'admin',
      subject: 'Account verification update',
      lastMessage: 'Your documents have been approved.',
      timestamp: '1 day ago',
      unread: false,
      isStarred: true
    },
    {
      id: '3',
      name: 'Sarah Johnson',
      type: 'traveler',
      subject: 'Special dietary requirements',
      lastMessage: 'Can you accommodate gluten-free meals?',
      timestamp: '2 days ago',
      unread: false,
      isStarred: false
    },
    {
      id: '4',
      name: 'Admin Team',
      type: 'admin',
      subject: 'Policy updates',
      lastMessage: 'New cancellation policy has been implemented.',
      timestamp: '3 days ago',
      unread: false,
      isStarred: false
    }
  ];

  const messages = [
    {
      id: '1',
      sender: 'John Smith',
      content: 'Hi! I\'m interested in booking your Luxury Suite for next weekend (Jan 27-28). Is it available?',
      timestamp: '10:30 AM',
      isOwn: false
    },
    {
      id: '2',
      sender: 'You',
      content: 'Hello John! Yes, the Luxury Suite is available for those dates. The rate would be ₹8,500 per night including breakfast.',
      timestamp: '10:45 AM',
      isOwn: true
    },
    {
      id: '3',
      sender: 'John Smith',
      content: 'That sounds perfect! What amenities are included with the suite?',
      timestamp: '11:00 AM',
      isOwn: false
    },
    {
      id: '4',
      sender: 'You',
      content: 'The suite includes: King-size bed, private balcony with city view, marble bathroom with jacuzzi, complimentary WiFi, mini-bar, and 24/7 room service.',
      timestamp: '11:15 AM',
      isOwn: true
    },
    {
      id: '5',
      sender: 'John Smith',
      content: 'Excellent! How do I proceed with the booking?',
      timestamp: '11:30 AM',
      isOwn: false
    }
  ];

  const selectedConv = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'admin': return 'bg-blue-100 text-blue-800';
      case 'traveler': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Message Center</h1>
              <p className="text-gray-600">Communicate with travelers and platform administrators</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              New Message
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Conversations
                </div>
                <Button variant="ghost" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </CardTitle>
              <CardDescription>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[500px] overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                      selectedConversation === conversation.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                    }`}
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{conversation.name}</span>
                        {conversation.isStarred && (
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getTypeColor(conversation.type)}>
                          {conversation.type}
                        </Badge>
                        {conversation.unread && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                      </div>
                    </div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">
                      {conversation.subject}
                    </h4>
                    <p className="text-sm text-gray-600 truncate mb-2">
                      {conversation.lastMessage}
                    </p>
                    <p className="text-xs text-gray-500">{conversation.timestamp}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Message Thread */}
          <Card className="lg:col-span-2">
            {selectedConv ? (
              <>
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {selectedConv.name}
                        <Badge className={getTypeColor(selectedConv.type)}>
                          {selectedConv.type}
                        </Badge>
                      </CardTitle>
                      <CardDescription>{selectedConv.subject}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Star className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        Archive
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex flex-col h-[400px]">
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            message.isOwn
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          {!message.isOwn && (
                            <p className="text-xs font-medium mb-1 opacity-70">
                              {message.sender}
                            </p>
                          )}
                          <p className="text-sm">{message.content}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.isOwn ? 'text-blue-100' : 'text-gray-500'
                            }`}
                          >
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="border-t p-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Paperclip className="h-4 w-4" />
                      </Button>
                      <Textarea
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-1 min-h-[40px] max-h-[120px]"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="flex items-center justify-center h-[400px]">
                <div className="text-center text-gray-500">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Select a conversation to view messages</p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PartnerMessages;
