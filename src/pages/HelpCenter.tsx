
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, ChevronDown, ChevronUp, BookOpen, CreditCard, Users, Shield, FileText, MessageCircle } from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    {
      icon: BookOpen,
      title: 'Booking Issues',
      description: 'Help with reservations, modifications, and cancellations',
      articles: 12
    },
    {
      icon: CreditCard,
      title: 'Payment',
      description: 'Payment methods, refunds, and billing questions',
      articles: 8
    },
    {
      icon: Users,
      title: 'Group Planning',
      description: 'Collaborative trip planning and group bookings',
      articles: 6
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Travel safety guidelines and emergency contacts',
      articles: 10
    },
    {
      icon: FileText,
      title: 'Policies',
      description: 'Terms of service, privacy policy, and guidelines',
      articles: 5
    }
  ];

  const popularFAQs = [
    {
      id: 1,
      question: 'How do I cancel or modify my booking?',
      answer: 'You can cancel or modify your booking by logging into your account and visiting the "My Trips" section. Click on the specific trip you want to modify and select the appropriate option. Please note that cancellation and modification policies vary by service provider and may incur fees.',
      helpful: { yes: 45, no: 3 }
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, UPI payments, net banking, and digital wallets like Paytm, PhonePe, and Google Pay. All transactions are secured with 256-bit SSL encryption.',
      helpful: { yes: 38, no: 2 }
    },
    {
      id: 3,
      question: 'How does the AI trip planner work?',
      answer: 'Our AI trip planner uses advanced algorithms to understand your preferences, budget, and travel dates. Simply chat with our AI assistant, tell it about your dream trip, and it will create a personalized itinerary including flights, hotels, activities, and local experiences.',
      helpful: { yes: 52, no: 1 }
    },
    {
      id: 4,
      question: 'Is my personal information secure?',
      answer: 'Yes, we take data security very seriously. All personal information is encrypted and stored securely. We never share your data with third parties without your explicit consent. Our platform is compliant with data protection regulations.',
      helpful: { yes: 41, no: 0 }
    },
    {
      id: 5,
      question: 'How do I invite others to collaborate on trip planning?',
      answer: 'In your trip dashboard, click on "Collaborate" and enter the email addresses of people you want to invite. They will receive an invitation link to join your trip planning. Collaborators can suggest activities, vote on options, and help make decisions together.',
      helpful: { yes: 29, no: 4 }
    }
  ];

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const markHelpful = (faqId: number, helpful: boolean) => {
    // In a real app, this would update the database
    console.log(`FAQ ${faqId} marked as ${helpful ? 'helpful' : 'not helpful'}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
          <p className="text-xl text-gray-600 mb-8">Find answers to common questions or get in touch with our support team</p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search for help articles, FAQs, or guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-lg"
            />
          </div>
        </div>

        {/* Category Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">{category.title}</h3>
                      <p className="text-sm text-gray-600 font-normal">{category.articles} articles</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {popularFAQs.map((faq) => (
              <Card key={faq.id}>
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedFAQ === faq.id && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 mb-4">{faq.answer}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">Was this helpful?</span>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => markHelpful(faq.id, true)}
                            className="text-green-600 hover:text-green-700"
                          >
                            👍 Yes ({faq.helpful.yes})
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => markHelpful(faq.id, false)}
                            className="text-red-600 hover:text-red-700"
                          >
                            👎 No ({faq.helpful.no})
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Support Contact */}
        <section className="text-center bg-blue-50 rounded-lg p-8">
          <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-gray-600 mb-6">Can't find what you're looking for? Our support team is here to help you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Link to="/help/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link to="/chat">Chat with AI Assistant</Link>
            </Button>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            <p>📧 Average response time: 2-4 hours</p>
            <p>🕒 Support hours: 9 AM - 9 PM IST, Mon-Sun</p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HelpCenter;
