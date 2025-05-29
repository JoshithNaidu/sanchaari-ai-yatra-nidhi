
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Check } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Newsletter signup:', email);
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-r from-blue-600 to-blue-800 border-0 text-white">
          <CardContent className="p-8 md:p-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Weekly Travel Ideas & Deals
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and discover amazing destinations, exclusive deals, and travel tips curated just for you.
              </p>

              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 h-12 bg-white/90 border-white/20 text-gray-900 placeholder:text-gray-500"
                    />
                    <Button 
                      type="submit"
                      className="h-12 px-8 bg-white text-blue-600 hover:bg-blue-50 font-semibold"
                    >
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-sm text-blue-200 mt-4">
                    We respect your privacy. No spam, unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Thank you for subscribing!</h3>
                  <p className="text-blue-200">
                    You'll receive our weekly travel newsletter with amazing destinations and exclusive deals.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSignup;
