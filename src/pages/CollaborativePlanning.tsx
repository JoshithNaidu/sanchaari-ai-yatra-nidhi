
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, UserPlus, ThumbsUp, MessageCircle, Send, Vote } from 'lucide-react';

const CollaborativePlanning = () => {
  const { tripId } = useParams();
  const [newMessage, setNewMessage] = useState('');

  const participants = [
    { id: '1', name: 'John Doe', role: 'Owner', avatar: 'JD' },
    { id: '2', name: 'Jane Smith', role: 'Editor', avatar: 'JS' },
    { id: '3', name: 'Mike Johnson', role: 'Viewer', avatar: 'MJ' }
  ];

  const discussions = [
    {
      id: '1',
      user: 'Jane Smith',
      avatar: 'JS',
      message: 'Should we add a visit to Montmartre on Day 2?',
      timestamp: '2 hours ago',
      context: 'Day 2 - Paris',
      reactions: { likes: 2, votes: 0 }
    },
    {
      id: '2',
      user: 'Mike Johnson',
      avatar: 'MJ',
      message: 'The budget looks a bit tight for the planned activities. Maybe we can find some free alternatives?',
      timestamp: '4 hours ago',
      context: 'Budget Discussion',
      reactions: { likes: 1, votes: 1 }
    }
  ];

  const suggestions = [
    {
      id: '1',
      type: 'Activity Addition',
      title: 'Add Seine River Cruise',
      proposedBy: 'Jane Smith',
      day: 'Day 2',
      time: '16:00',
      status: 'pending',
      votes: { yes: 1, no: 0, maybe: 1 }
    },
    {
      id: '2',
      type: 'Time Change',
      title: 'Move Louvre visit to morning',
      proposedBy: 'Mike Johnson',
      day: 'Day 2',
      time: '09:00',
      status: 'pending',
      votes: { yes: 2, no: 0, maybe: 0 }
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to={`/trips/${tripId}`}>
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Itinerary
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Collaborative Planning</h1>
          </div>
        </div>

        {/* Pending Changes Banner */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="font-medium text-orange-800">2 changes pending approval</span>
            </div>
            <div className="space-x-2">
              <Button size="sm" variant="outline">Review</Button>
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700">Approve All</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Participants */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Participants</CardTitle>
                  <Button size="sm" variant="outline">
                    <UserPlus className="h-3 w-3 mr-1" />
                    Invite
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {participants.map((participant) => (
                    <div key={participant.id} className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">{participant.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{participant.name}</div>
                        <Badge variant={participant.role === 'Owner' ? 'default' : 'outline'} className="text-xs">
                          {participant.role}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Discussion Thread */}
          <div className="lg:col-span-6">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Discussion Thread
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 space-y-4 overflow-y-auto mb-4">
                  {discussions.map((discussion) => (
                    <div key={discussion.id} className="border rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">{discussion.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-sm">{discussion.user}</span>
                            <span className="text-xs text-gray-500">{discussion.timestamp}</span>
                            {discussion.context && (
                              <Badge variant="outline" className="text-xs">{discussion.context}</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-700">{discussion.message}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <Button variant="ghost" size="sm" className="h-6 px-2">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              {discussion.reactions.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="h-6 px-2">
                              <Vote className="h-3 w-3 mr-1" />
                              Vote
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-2 mt-auto">
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Suggestions */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Suggested Edits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {suggestions.map((suggestion) => (
                    <div key={suggestion.id} className="border rounded-lg p-3">
                      <div className="mb-2">
                        <div className="text-sm font-medium">{suggestion.title}</div>
                        <div className="text-xs text-gray-500">
                          by {suggestion.proposedBy} • {suggestion.day} at {suggestion.time}
                        </div>
                        <Badge variant="outline" className="text-xs mt-1">
                          {suggestion.type}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                        <span>Yes: {suggestion.votes.yes}</span>
                        <span>No: {suggestion.votes.no}</span>
                        <span>Maybe: {suggestion.votes.maybe}</span>
                      </div>
                      
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline" className="h-6 text-xs flex-1">
                          Yes
                        </Button>
                        <Button size="sm" variant="outline" className="h-6 text-xs flex-1">
                          No
                        </Button>
                        <Button size="sm" variant="outline" className="h-6 text-xs flex-1">
                          Maybe
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborativePlanning;
