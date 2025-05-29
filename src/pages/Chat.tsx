
import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Download, MessageSquare, ThumbsUp, ThumbsDown, Users, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  confidence?: 'high' | 'medium' | 'low';
}

interface TripContext {
  destination?: string;
  dates?: string;
  budget?: string;
  travelers?: number;
  status: 'planning' | 'finalizing' | 'booked';
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Sanchaari AI, your travel planning assistant. Tell me your travel goals and I'll help you create the perfect itinerary!",
      isUser: false,
      timestamp: new Date(),
      confidence: 'high'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [mode, setMode] = useState<'solo' | 'group'>('solo');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [tripContext, setTripContext] = useState<TripContext>({
    status: 'planning'
  });

  const suggestionChips = [
    "I'm planning a family trip",
    "Show me beach destinations",
    "What's the best place under ₹30,000?",
    "Weekend getaway ideas"
  ];

  const previousTrips = [
    { id: '1', destination: 'Kerala', dates: 'Dec 2024', status: 'completed' },
    { id: '2', destination: 'Rajasthan', dates: 'Mar 2025', status: 'upcoming' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string = inputText) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(text),
        isUser: false,
        timestamp: new Date(),
        confidence: 'high'
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      
      // Update trip context based on user input
      updateTripContext(text);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes('family')) {
      return "Great! Family trips are so special. How many family members will be traveling? And do you have any preferred destinations or activities in mind?";
    } else if (lowerInput.includes('beach')) {
      return "Beach destinations are perfect for relaxation! Are you looking for popular spots like Goa, or would you prefer offbeat coastal areas? What's your preferred travel period?";
    } else if (lowerInput.includes('budget') || lowerInput.includes('₹')) {
      return "I can definitely help you plan within your budget! Could you tell me your preferred destination and travel dates? This will help me suggest the best options.";
    } else {
      return "That sounds exciting! To create the perfect itinerary for you, could you share more details about your preferred destination, travel dates, and budget range?";
    }
  };

  const updateTripContext = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
    const newContext = { ...tripContext };
    
    if (lowerInput.includes('kerala')) newContext.destination = 'Kerala';
    if (lowerInput.includes('goa')) newContext.destination = 'Goa';
    if (lowerInput.includes('rajasthan')) newContext.destination = 'Rajasthan';
    if (lowerInput.includes('family')) newContext.travelers = 4;
    if (lowerInput.includes('₹')) {
      const budgetMatch = lowerInput.match(/₹([\d,]+)/);
      if (budgetMatch) newContext.budget = `₹${budgetMatch[1]}`;
    }
    
    setTripContext(newContext);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-8rem)]">
          
          {/* Left Sidebar - Trip Details */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">My Trip Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Status:</span>
                    <Badge variant={tripContext.status === 'planning' ? 'secondary' : 'default'}>
                      {tripContext.status}
                    </Badge>
                  </div>
                  {tripContext.destination && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Destination:</span>
                      <span className="text-sm">{tripContext.destination}</span>
                    </div>
                  )}
                  {tripContext.dates && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Dates:</span>
                      <span className="text-sm">{tripContext.dates}</span>
                    </div>
                  )}
                  {tripContext.budget && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Budget:</span>
                      <span className="text-sm">{tripContext.budget}</span>
                    </div>
                  )}
                </div>
                
                <Link to="/trips/new">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Add/Edit Trip Info
                  </Button>
                </Link>

                <div className="pt-4 border-t">
                  <h4 className="text-md font-semibold mb-3">Previous Trips</h4>
                  <div className="space-y-2">
                    {previousTrips.map((trip) => (
                      <Link key={trip.id} to={`/trips/${trip.id}`}>
                        <Card className="hover:shadow-md transition-shadow cursor-pointer">
                          <CardContent className="p-3">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-medium text-sm">{trip.destination}</p>
                                <p className="text-xs text-gray-600">{trip.dates}</p>
                              </div>
                              <Badge variant={trip.status === 'completed' ? 'secondary' : 'default'} className="text-xs">
                                {trip.status}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-2">
            <Card className="h-full flex flex-col">
              {/* Chat Header */}
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-blue-900">Sanchaari AI</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <div className="flex items-center space-x-2">
                        <span>Mode:</span>
                        <Button
                          variant={mode === 'solo' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setMode('solo')}
                          className="h-6 text-xs"
                        >
                          Solo
                        </Button>
                        <Button
                          variant={mode === 'group' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setMode('group')}
                          className="h-6 text-xs"
                        >
                          <Users className="h-3 w-3 mr-1" />
                          Group
                        </Button>
                      </div>
                      {mode === 'group' && (
                        <Button variant="outline" size="sm" className="h-6 text-xs">
                          <Plus className="h-3 w-3 mr-1" />
                          Invite Friends
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Human
                    </Button>
                  </div>
                </div>

                {/* Context Summary */}
                {(tripContext.destination || tripContext.budget || tripContext.dates) && (
                  <div className="flex items-center space-x-2 mt-3 pt-3 border-t">
                    <span className="text-sm font-medium text-blue-900">Trip Summary:</span>
                    {tripContext.destination && (
                      <Badge variant="secondary">{tripContext.destination}</Badge>
                    )}
                    {tripContext.budget && (
                      <Badge variant="secondary">{tripContext.budget}</Badge>
                    )}
                    {tripContext.dates && (
                      <Badge variant="secondary">{tripContext.dates}</Badge>
                    )}
                  </div>
                )}
              </CardHeader>

              {/* Messages Container */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                      message.isUser 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className={`text-xs ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                        
                        {!message.isUser && (
                          <div className="flex items-center space-x-1">
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <ThumbsUp className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <ThumbsDown className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 border border-gray-200 px-4 py-3 rounded-lg max-w-xs">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>

              {/* Suggestion Chips */}
              <div className="p-3 border-t">
                <div className="flex flex-wrap gap-2 mb-3">
                  {suggestionChips.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-7"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Tell me your travel goals..."
                    className="flex-1"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button variant="ghost" size="icon">
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button onClick={() => handleSendMessage()} className="bg-blue-600 hover:bg-blue-700">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Sidebar - Suggestions */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">Trip Suggestions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Flights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-600 mb-2">From Delhi to Kerala</p>
                    <p className="text-sm font-semibold">₹8,500 - ₹15,000</p>
                    <Link to="/search/flights">
                      <Button variant="outline" size="sm" className="w-full mt-2">
                        View Flights
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Hotels</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-600 mb-2">Top picks in Kerala</p>
                    <p className="text-sm font-semibold">₹2,000 - ₹8,000/night</p>
                    <Link to="/search/hotels">
                      <Button variant="outline" size="sm" className="w-full mt-2">
                        View Hotels
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Experiences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-600 mb-2">Backwater cruises, spice tours</p>
                    <p className="text-sm font-semibold">₹1,500 - ₹5,000</p>
                    <Link to="/search/activities">
                      <Button variant="outline" size="sm" className="w-full mt-2">
                        View Activities
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Estimated Total</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-bold text-green-600">₹25,000 - ₹45,000</p>
                    <p className="text-xs text-gray-600">For 2 people, 5 days</p>
                  </CardContent>
                </Card>

                <Link to="/trips/new">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Finalize My Itinerary
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
