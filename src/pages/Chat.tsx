
import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, ArrowLeft, MapPin, Clock, DollarSign, MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  suggestions?: string[];
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI travel assistant. I can help you plan your perfect trip to India. Where would you like to go?",
      isUser: false,
      timestamp: new Date(),
      suggestions: ["Plan a trip to Kerala", "Show me Rajasthan packages", "Budget trip to Goa", "Adventure in Himachal"]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showItinerary, setShowItinerary] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
        suggestions: ["Add accommodation", "Show activities", "Check weather", "View budget"]
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      setShowItinerary(true);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes('kerala')) {
      return "Kerala is a fantastic choice! Known as 'God's Own Country', it offers backwaters, hill stations, and beautiful beaches. I can help you plan a 7-day itinerary. What's your budget and preferred travel dates?";
    } else if (lowerInput.includes('rajasthan')) {
      return "Rajasthan is perfect for experiencing royal heritage! I recommend visiting Jaipur, Udaipur, and Jodhpur. Would you like a cultural tour focusing on palaces and forts, or are you interested in desert experiences too?";
    } else if (lowerInput.includes('goa')) {
      return "Goa is ideal for beaches and relaxation! I can suggest both North Goa for nightlife and South Goa for peaceful beaches. How many days are you planning to stay?";
    } else {
      return "That sounds interesting! Let me help you create a personalized itinerary. Could you tell me more about your travel preferences, budget, and group size?";
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-xl font-semibold text-blue-900">AI Travel Assistant</h1>
                <p className="text-sm text-gray-600">Plan your perfect trip with AI</p>
              </div>
            </div>
            <Button variant="outline" className="text-blue-600 border-blue-600">
              <MessageSquare className="h-4 w-4 mr-2" />
              Talk to Human
            </Button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  message.isUser 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-2 ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                  
                  {/* AI Response Feedback */}
                  {!message.isUser && (
                    <div className="flex items-center space-x-2 mt-2">
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <ThumbsUp className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <ThumbsDown className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                  
                  {/* Suggestions */}
                  {message.suggestions && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {message.suggestions.map((suggestion, index) => (
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
                  )}
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
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex space-x-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask me anything about your trip..."
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
        </div>

        {/* Itinerary Preview Sidebar */}
        {showItinerary && (
          <div className="w-80 bg-white border-l border-gray-200 p-4 overflow-y-auto">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Trip Preview</h3>
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Kerala, India</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">7 Days, 6 Nights</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">₹45,000 - ₹65,000</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold mb-2">Day-wise Highlights</h4>
                    <div className="space-y-2 text-xs text-gray-600">
                      <div>Day 1: Arrival in Kochi</div>
                      <div>Day 2-3: Munnar Hill Station</div>
                      <div>Day 4-5: Alleppey Backwaters</div>
                      <div>Day 6-7: Kovalam Beach</div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    View Full Itinerary
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 p-4 text-center text-xs text-gray-500">
        <p>AI-generated recommendations. Please verify details before booking. 
        <a href="/privacy" className="text-blue-600 hover:underline ml-1">Privacy Policy</a> | 
        <a href="/terms" className="text-blue-600 hover:underline ml-1">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default Chat;
