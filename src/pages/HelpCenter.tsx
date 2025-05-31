
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, MessageCircle, Phone, Mail, ChevronRight, ArrowLeft } from 'lucide-react';

const HelpCenter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || null);
  const [selectedArticle, setSelectedArticle] = useState(searchParams.get('article') || null);

  const categories = [
    {
      id: 'booking',
      title: 'Booking & Reservations',
      description: 'Help with making, modifying, and canceling bookings',
      icon: '📅',
      articles: [
        {
          id: 'how-to-book',
          title: 'How to make a booking',
          content: `Making a booking on Sanchaari is simple and straightforward. Follow these steps:

**Step 1: Search for your destination**
- Enter your destination in the search bar
- Select your travel dates
- Choose the number of travelers

**Step 2: Browse options**
- Review available flights, hotels, and activities
- Use filters to narrow down your preferences
- Compare prices and amenities

**Step 3: Select and customize**
- Choose your preferred options
- Add any additional services
- Review your itinerary

**Step 4: Complete booking**
- Enter traveler details
- Choose payment method
- Confirm your booking

**Step 5: Confirmation**
- Receive booking confirmation via email
- Download your tickets and vouchers
- Add to your trip dashboard

Need help? Contact our support team 24/7 for assistance with your booking.`
        },
        {
          id: 'modify-booking',
          title: 'How to modify your booking',
          content: `You can modify most bookings up to 24 hours before your travel date. Here's how:

**Online Modifications:**
1. Log into your account
2. Go to "My Trips" dashboard
3. Select the booking you want to modify
4. Click "Modify Booking"
5. Make your changes and confirm

**What you can modify:**
- Travel dates (subject to availability)
- Number of travelers
- Room types or seat preferences
- Add-on services

**Modification fees:**
- Flight changes: ₹2,500 + fare difference
- Hotel changes: Free up to 48 hours before check-in
- Activity changes: Varies by provider

**Important notes:**
- Some bookings cannot be modified online
- Peak season changes may have restrictions
- Refund eligibility varies by booking type

For complex changes or assistance, contact our support team.`
        },
        {
          id: 'cancel-booking',
          title: 'Cancellation policy',
          content: `Our cancellation policies vary by booking type and provider. Here's what you need to know:

**Flight Cancellations:**
- More than 7 days: Full refund minus ₹2,500 fee
- 3-7 days: 50% refund
- Less than 3 days: No refund (except medical emergencies)

**Hotel Cancellations:**
- More than 48 hours: Full refund
- 24-48 hours: 50% refund
- Less than 24 hours: No refund

**Activity Cancellations:**
- More than 24 hours: Full refund
- Less than 24 hours: No refund

**How to cancel:**
1. Visit "My Trips" dashboard
2. Select the booking
3. Click "Cancel Booking"
4. Choose cancellation reason
5. Confirm cancellation

**Refund timeline:**
- Credit card: 5-7 business days
- Debit card: 7-14 business days
- Wallet: Instant refund

**Travel insurance:** Consider purchasing travel insurance for better protection against unforeseen circumstances.`
        }
      ]
    },
    {
      id: 'payment',
      title: 'Payment & Pricing',
      description: 'Information about payments, refunds, and pricing',
      icon: '💳',
      articles: [
        {
          id: 'payment-methods',
          title: 'Accepted payment methods',
          content: `We accept various payment methods to make your booking convenient:

**Credit Cards:**
- Visa, MasterCard, American Express
- International cards accepted
- EMI options available on select cards

**Debit Cards:**
- All major Indian banks
- Maestro and RuPay cards
- Net banking integration

**Digital Wallets:**
- Paytm, PhonePe, Google Pay
- Amazon Pay, Freecharge
- Instant payment confirmation

**Bank Transfers:**
- NEFT/RTGS for large bookings
- UPI payments
- Direct bank account transfers

**Other Options:**
- Buy now, pay later (BNPL)
- Corporate credit accounts
- Travel vouchers and gift cards

**Security Features:**
- 256-bit SSL encryption
- PCI DSS compliant
- 3D Secure authentication
- Fraud protection

**Payment Tips:**
- Use secured networks for payments
- Keep transaction receipts
- Enable SMS alerts for your cards
- Report unauthorized transactions immediately`
        },
        {
          id: 'refund-process',
          title: 'Refund process and timeline',
          content: `Understanding our refund process helps you know what to expect:

**Refund Eligibility:**
- Cancelled bookings as per policy
- Service failures or no-shows by providers
- Medical emergencies with documentation
- Force majeure events

**Refund Timeline:**
- Credit cards: 5-7 working days
- Debit cards: 7-14 working days
- Net banking: 7-10 working days
- Digital wallets: 1-3 working days

**Refund Process:**
1. Cancellation request submitted
2. Review and verification (24-48 hours)
3. Refund processed to original payment method
4. Confirmation email sent
5. Amount reflects in your account

**Partial Refunds:**
- Cancellation fees deducted
- Service charges applied
- Proportional refunds for partial cancellations

**What affects refund timeline:**
- Bank processing times
- Holiday periods
- International card transactions
- Payment method used

**Tracking Your Refund:**
- Check refund status in "My Account"
- Email notifications for status updates
- Customer support for tracking

**Need Help?** Contact our refunds team if you don't receive your refund within the expected timeline.`
        }
      ]
    },
    {
      id: 'travel-tips',
      title: 'Travel Tips & Guides',
      description: 'Essential travel information and destination guides',
      icon: '🗺️',
      articles: [
        {
          id: 'packing-checklist',
          title: 'Essential packing checklist',
          content: `Pack smart for your Indian adventure with this comprehensive checklist:

**Documents (Keep copies):**
- Valid ID proof (Passport for international flights)
- Travel tickets and confirmations
- Hotel booking vouchers
- Travel insurance documents
- Emergency contact numbers

**Clothing:**
- Comfortable walking shoes
- Appropriate attire for religious sites
- Light cotton clothes for summers
- Warm layers for hill stations
- Rain gear during monsoons

**Health & Hygiene:**
- Prescription medications
- First aid kit basics
- Hand sanitizer and tissues
- Sunscreen (SPF 30+)
- Insect repellent

**Electronics:**
- Phone charger and power bank
- Universal adapter (if international)
- Camera with extra batteries
- Headphones

**Money & Security:**
- Local currency (some ATMs may not work)
- Credit/debit cards
- Money belt or secure pouch
- Travel locks for luggage

**Climate-Specific Items:**
- **Summer:** Hat, sunglasses, cooling towels
- **Monsoon:** Waterproof bag covers
- **Winter:** Warm jacket, gloves, thermal wear

**Pro Tips:**
- Pack light - you can buy most things locally
- Leave space for souvenirs
- Carry a day pack for sightseeing
- Keep essentials in carry-on`
        },
        {
          id: 'cultural-etiquette',
          title: 'Cultural etiquette in India',
          content: `Respect local customs and traditions with these cultural guidelines:

**Religious Sites:**
- Remove shoes before entering temples
- Cover your head in gurudwaras and some mosques
- Dress modestly - cover shoulders and knees
- Don't touch religious statues or artifacts
- Photography may be restricted

**Greetings:**
- "Namaste" with palms together is universally respectful
- Handshakes are common in urban areas
- Avoid physical contact with opposite gender
- Touch elder's feet as a sign of respect

**Dining Etiquette:**
- Wash hands before and after meals
- Right hand for eating, left for cleaning
- Don't touch shared food with used utensils
- Finishing your plate shows appreciation
- Tipping 10% is standard in restaurants

**Social Interactions:**
- Use titles like "ji" to show respect
- Public displays of affection are discouraged
- Dress conservatively, especially in rural areas
- Be patient with different concepts of time

**Photography:**
- Always ask permission before photographing people
- Avoid taking pictures of military installations
- Some monuments charge photography fees
- Respect privacy in religious ceremonies

**Gift Giving:**
- Flowers, sweets, or fruits are appropriate
- Avoid leather products for Hindu families
- Use both hands when giving/receiving
- Gifts are usually opened later, not immediately

**Communication:**
- Speak slowly and clearly
- Hindi and English are widely understood
- Learn basic phrases in local language
- Be patient with language barriers`
        }
      ]
    },
    {
      id: 'account',
      title: 'Account Management',
      description: 'Managing your profile, preferences, and account settings',
      icon: '👤',
      articles: [
        {
          id: 'create-account',
          title: 'How to create an account',
          content: `Creating a Sanchaari account unlocks personalized travel experiences:

**Step 1: Registration**
- Click "Sign Up" on the homepage
- Enter your email address
- Create a strong password
- Agree to terms and conditions

**Step 2: Verification**
- Check your email for verification link
- Click the link to verify your account
- Your account is now active

**Step 3: Complete Your Profile**
- Add your full name and phone number
- Upload a profile picture (optional)
- Set your travel preferences
- Add emergency contact information

**Step 4: Personalization**
- Select favorite destinations
- Choose preferred travel style
- Set budget preferences
- Enable notifications

**Account Benefits:**
- Faster booking process
- Saved payment methods
- Travel history and preferences
- Exclusive member offers
- Trip planning tools
- 24/7 customer support

**Security Features:**
- Two-factor authentication
- Secure password requirements
- Login activity monitoring
- Account recovery options

**Profile Management:**
- Update personal information anytime
- Manage privacy settings
- Control notification preferences
- View booking history

**Troubleshooting:**
- Can't verify email? Check spam folder
- Forgot password? Use password reset
- Having issues? Contact support

Start your personalized travel journey today!`
        },
        {
          id: 'update-profile',
          title: 'Updating your profile information',
          content: `Keep your profile up-to-date for better travel experiences:

**Accessing Profile Settings:**
1. Log into your account
2. Click on your profile picture/name
3. Select "Profile Settings"
4. Make necessary changes
5. Save your updates

**Personal Information:**
- **Name:** Update legal name for accurate bookings
- **Email:** Primary contact for all communications
- **Phone:** For SMS alerts and emergency contact
- **Date of Birth:** Required for some bookings
- **Address:** For delivery of documents if needed

**Travel Preferences:**
- **Destination Interests:** Beach, mountains, cities, cultural sites
- **Travel Style:** Budget, luxury, adventure, family-friendly
- **Accommodation:** Hotels, hostels, homestays, resorts
- **Activity Preferences:** Sightseeing, adventure sports, food tours

**Communication Preferences:**
- **Email Notifications:** Booking confirmations, offers, updates
- **SMS Alerts:** Travel reminders, gate changes, delays
- **Marketing Communications:** Newsletters, promotional offers
- **Language Preference:** Hindi, English, regional languages

**Privacy Settings:**
- **Profile Visibility:** Public, friends only, private
- **Data Sharing:** Marketing partners, analytics
- **Location Services:** For personalized recommendations
- **Social Media Integration:** Facebook, Google accounts

**Security Settings:**
- **Password Change:** Regular updates recommended
- **Two-Factor Authentication:** Enhanced security
- **Login Alerts:** Notification of account access
- **Trusted Devices:** Manage known devices

**Important Notes:**
- Changes take effect immediately
- Some changes may require re-verification
- Profile completeness improves recommendations
- Contact support for major changes

Keep your profile updated for the best travel experience!`
        }
      ]
    }
  ];

  const handleSearch = () => {
    // Search functionality could be implemented here
    console.log('Searching for:', searchQuery);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedArticle(null);
    setSearchParams({ category: categoryId });
  };

  const handleArticleSelect = (articleId: string) => {
    setSelectedArticle(articleId);
    setSearchParams({ category: selectedCategory!, article: articleId });
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedArticle(null);
    setSearchParams({});
  };

  const handleBackToArticles = () => {
    setSelectedArticle(null);
    setSearchParams({ category: selectedCategory! });
  };

  const getCurrentCategory = () => categories.find(cat => cat.id === selectedCategory);
  const getCurrentArticle = () => {
    const category = getCurrentCategory();
    return category?.articles.find(article => article.id === selectedArticle);
  };

  // Render individual article
  if (selectedArticle) {
    const article = getCurrentArticle();
    const category = getCurrentCategory();
    
    if (!article || !category) {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Article not found</h1>
              <Button onClick={handleBackToCategories}>Back to Help Center</Button>
            </div>
          </div>
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Button variant="ghost" onClick={handleBackToArticles} className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {category.title}
          </Button>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="mb-6">
              <span className="text-blue-600 text-sm font-medium">{category.title}</span>
              <h1 className="text-3xl font-bold mt-2">{article.title}</h1>
            </div>

            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <h3 key={index} className="text-xl font-bold mt-8 mb-4">{paragraph.slice(2, -2)}</h3>;
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                  return (
                    <ul key={index} className="list-disc pl-6 mb-4">
                      {items.map((item, i) => (
                        <li key={i}>{item.slice(2)}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={index} className="mb-4">{paragraph}</p>;
              })}
            </div>

            <div className="mt-8 pt-6 border-t">
              <p className="text-gray-600 mb-4">Was this article helpful?</p>
              <div className="flex gap-4">
                <Button variant="outline">👍 Yes</Button>
                <Button variant="outline">👎 No</Button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Render category articles
  if (selectedCategory) {
    const category = getCurrentCategory();
    
    if (!category) {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Category not found</h1>
              <Button onClick={handleBackToCategories}>Back to Help Center</Button>
            </div>
          </div>
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Button variant="ghost" onClick={handleBackToCategories} className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Help Center
          </Button>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{category.title}</h1>
            <p className="text-gray-600">{category.description}</p>
          </div>

          <div className="grid gap-4">
            {category.articles.map(article => (
              <Card key={article.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleArticleSelect(article.id)}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{article.title}</h3>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Render main help center
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
          <p className="text-xl text-gray-600 mb-8">Find answers to your questions and get support</p>
          
          <div className="max-w-2xl mx-auto flex gap-2">
            <Input
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button onClick={handleSearch}>
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Browse by Category */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <Card key={category.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleCategorySelect(category.id)}>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm">{category.description}</p>
                  <div className="mt-4 text-center">
                    <span className="text-blue-600 text-sm font-medium">
                      {category.articles.length} articles →
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="faq-1">
                  <AccordionTrigger>How do I make a booking?</AccordionTrigger>
                  <AccordionContent>
                    You can make a booking by searching for your destination, selecting your preferences, and completing the payment process. Our step-by-step guide will walk you through the entire process.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                  <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
                  <AccordionContent>
                    Our cancellation policy varies by booking type. Generally, cancellations made more than 24-48 hours in advance are eligible for refunds. Check your specific booking terms for detailed information.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3">
                  <AccordionTrigger>How do I contact customer support?</AccordionTrigger>
                  <AccordionContent>
                    You can reach our 24/7 customer support team through live chat, phone, or email. Use the contact options below or visit our contact page for more details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-4">
                  <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we use industry-standard encryption and security measures to protect your payment information. All transactions are processed through secure, PCI-compliant payment gateways.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Contact Support */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Still need help?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-4">Get instant help from our support team</p>
                <Button className="w-full">Start Chat</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-600 text-sm mb-4">Call us 24/7 for immediate assistance</p>
                <Button variant="outline" className="w-full">1800-123-4567</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-4">Send us your questions anytime</p>
                <Button variant="outline" className="w-full">support@sanchaari.com</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HelpCenter;
