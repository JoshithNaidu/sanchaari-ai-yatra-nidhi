
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Cookie, Settings, Shield, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cookies = () => {
  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    analytics: true,
    marketing: false,
    functional: true
  });

  const handlePreferenceChange = (category: string, enabled: boolean) => {
    if (category !== 'necessary') { // Necessary cookies can't be disabled
      setPreferences(prev => ({
        ...prev,
        [category]: enabled
      }));
    }
  };

  const savePreferences = () => {
    // In a real app, this would save to localStorage and update consent
    console.log('Saving cookie preferences:', preferences);
    alert('Cookie preferences saved successfully!');
  };

  const cookieCategories = [
    {
      id: 'necessary',
      title: 'Strictly Necessary Cookies',
      description: 'Essential for the website to function properly. Cannot be disabled.',
      icon: Shield,
      required: true,
      examples: ['Session management', 'Security tokens', 'Login state']
    },
    {
      id: 'functional',
      title: 'Functional Cookies',
      description: 'Enhance your experience by remembering your preferences.',
      icon: Settings,
      required: false,
      examples: ['Language preferences', 'Currency selection', 'Search filters']
    },
    {
      id: 'analytics',
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors use our website.',
      icon: BarChart3,
      required: false,
      examples: ['Google Analytics', 'Page views', 'User journeys']
    },
    {
      id: 'marketing',
      title: 'Marketing Cookies',
      description: 'Used to deliver personalized ads and measure campaign effectiveness.',
      icon: Cookie,
      required: false,
      examples: ['Facebook Pixel', 'Google Ads', 'Retargeting']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Cookie className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-600">
            Learn about how we use cookies and manage your preferences
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: December 29, 2024</p>
        </div>

        {/* What are Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What are Cookies?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              keeping you logged in, and analyzing how you use our platform.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Session Cookies</h4>
                <p className="text-blue-700 text-sm">
                  Temporary cookies that expire when you close your browser
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Persistent Cookies</h4>
                <p className="text-green-700 text-sm">
                  Remain on your device for a set period or until manually deleted
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cookie Categories & Preferences */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Manage Your Cookie Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {cookieCategories.map((category) => (
                <div key={category.id} className="border rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <category.icon className="h-6 w-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-lg">{category.title}</h3>
                        <p className="text-gray-600 text-sm">{category.description}</p>
                      </div>
                    </div>
                    <Switch
                      checked={preferences[category.id as keyof typeof preferences]}
                      onCheckedChange={(checked) => handlePreferenceChange(category.id, checked)}
                      disabled={category.required}
                    />
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium text-sm mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example, index) => (
                        <span key={index} className="bg-white px-2 py-1 rounded text-xs text-gray-600">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {category.required && (
                    <p className="text-amber-600 text-xs mt-2">
                      ⚠️ Required for basic website functionality
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <Button onClick={savePreferences} className="flex-1">
                Save Preferences
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setPreferences({necessary: true, analytics: false, marketing: false, functional: false})}
              >
                Accept Only Necessary
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Third-Party Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              We use trusted third-party services that may set their own cookies:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <h4 className="font-semibold">Analytics Providers</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Google Analytics:</strong> Website usage analysis</li>
                  <li>• <strong>Hotjar:</strong> User behavior insights</li>
                  <li>• <strong>Mixpanel:</strong> Feature usage tracking</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Service Providers</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Payment Gateways:</strong> Secure transaction processing</li>
                  <li>• <strong>CDN Services:</strong> Faster content delivery</li>
                  <li>• <strong>Chat Support:</strong> Customer assistance tools</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Browser Controls */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Browser Cookie Controls</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              You can also manage cookies directly through your browser settings:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Chrome</h4>
                <p className="text-gray-600">Settings → Privacy and Security → Cookies</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Firefox</h4>
                <p className="text-gray-600">Options → Privacy & Security → Cookies</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Safari</h4>
                <p className="text-gray-600">Preferences → Privacy → Cookies</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Edge</h4>
                <p className="text-gray-600">Settings → Cookies and Site Permissions</p>
              </div>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg mt-4">
              <p className="text-amber-800 text-sm">
                <strong>Note:</strong> Disabling certain cookies may affect website functionality 
                and your user experience.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact & Links */}
        <Card>
          <CardHeader>
            <CardTitle>Need More Information?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              For questions about our cookie practices or to exercise your data rights:
            </p>
            <div className="flex gap-4">
              <Button asChild variant="outline">
                <Link to="/privacy">Privacy Policy</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/help/contact">Contact Support</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Cookies;
