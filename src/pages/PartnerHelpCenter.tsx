
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  ArrowLeft, 
  Search,
  MessageCircle,
  BookOpen,
  CreditCard,
  Home,
  Settings,
  Code,
  HelpCircle
} from 'lucide-react';

const PartnerHelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 'payments',
      name: 'Payments & Payouts',
      icon: CreditCard,
      description: 'Questions about earnings, payouts, and payment methods',
      articles: 12,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 'bookings',
      name: 'Booking Management',
      icon: BookOpen,
      description: 'Managing reservations, cancellations, and guest communications',
      articles: 18,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'listings',
      name: 'Listing Management',
      icon: Home,
      description: 'Creating, updating, and optimizing your property listings',
      articles: 15,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 'api',
      name: 'API Integration',
      icon: Code,
      description: 'Technical documentation and integration guides',
      articles: 8,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 'account',
      name: 'Account & Profile',
      icon: Settings,
      description: 'Profile settings, verification, and account management',
      articles: 10,
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  const popularFAQs = [
    {
      question: 'How do I receive my payout payments?',
      answer: 'Payouts are processed automatically every week on Mondays. You can set up your preferred payment method (bank transfer, UPI, or wallet) in the Payouts section of your dashboard.',
      category: 'payments'
    },
    {
      question: 'What is the commission rate charged by Sanchaari?',
      answer: 'Sanchaari charges a 10% commission on confirmed bookings. This covers payment processing, customer support, marketing, and platform maintenance.',
      category: 'payments'
    },
    {
      question: 'How can I modify booking availability for my property?',
      answer: 'Go to Inventory > Availability in your partner dashboard. You can update rates, availability status, and minimum stay requirements for any date range.',
      category: 'bookings'
    },
    {
      question: 'What should I do if a guest cancels their booking?',
      answer: 'Cancellations are handled automatically based on your cancellation policy. You will receive a notification and the calendar will be updated. Refunds are processed according to the policy terms.',
      category: 'bookings'
    },
    {
      question: 'How do I improve my listing visibility?',
      answer: 'Ensure your listing has high-quality photos, complete descriptions, competitive pricing, and maintain good guest reviews. Properties with higher ratings and faster response times get better visibility.',
      category: 'listings'
    },
    {
      question: 'What documents are required for partner verification?',
      answer: 'You need to upload PAN card (mandatory), GST certificate (if applicable), bank proof, and trade license or MSME certificate. All documents should be clear and valid.',
      category: 'account'
    }
  ];

  const filteredFAQs = searchQuery 
    ? popularFAQs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : popularFAQs;

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
              <h1 className="text-2xl font-bold text-gray-900">Partner Help Center</h1>
            </div>
            <Link to="/partner/help/contact">
              <Button>
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">How can we help you?</h2>
              <p className="text-gray-600">Search our help articles or browse by category</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-3 text-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categories Grid */}
        {!searchQuery && (
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Browse by Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <Card key={category.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${category.color}`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{category.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                        <Badge variant="secondary" className="text-xs">
                          {category.articles} articles
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>
              {searchQuery ? `Search Results (${filteredFAQs.length})` : 'Frequently Asked Questions'}
            </CardTitle>
            <CardDescription>
              {searchQuery ? 'Here are the articles matching your search' : 'Quick answers to common partner questions'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-7">
                        <p className="text-gray-700 mb-3">{faq.answer}</p>
                        <Badge variant="outline" className="text-xs">
                          {categories.find(cat => cat.id === faq.category)?.name}
                        </Badge>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-8">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any articles matching "{searchQuery}"
                </p>
                <Button variant="outline" onClick={() => setSearchQuery('')}>
                  Clear search
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-medium mb-2">Didn't find what you're looking for?</h3>
            <p className="text-gray-600 mb-4">
              Our support team is here to help you with any questions or issues.
            </p>
            <Link to="/partner/help/contact">
              <Button>
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Support Team
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartnerHelpCenter;
