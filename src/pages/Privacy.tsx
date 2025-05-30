
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Shield, Mail, Download, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: '📋' },
    { id: 'collection', title: 'What We Collect', icon: '📊' },
    { id: 'usage', title: 'How We Use Data', icon: '🔄' },
    { id: 'sharing', title: 'Data Sharing', icon: '🤝' },
    { id: 'storage', title: 'Data Storage', icon: '🗄️' },
    { id: 'rights', title: 'Your Rights', icon: '⚖️' },
    { id: 'children', title: 'Children\'s Privacy', icon: '👶' },
    { id: 'cookies', title: 'Cookies', icon: '🍪' },
    { id: 'contact', title: 'Contact Us', icon: '📞' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is fundamental to us. This policy explains how Sanchaari collects, 
            uses, and protects your personal information.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: December 29, 2024</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-sm">Table of Contents</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        activeSection === section.id 
                          ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {section.icon} {section.title}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-8">
                {activeSection === 'overview' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Privacy Policy Overview</h2>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold mb-3">Quick Summary</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• We collect data to provide and improve our travel services</li>
                        <li>• We never sell your personal information</li>
                        <li>• You have control over your data and can request deletion</li>
                        <li>• We use industry-standard security measures</li>
                        <li>• This policy complies with GDPR and India's DPDP Act</li>
                      </ul>
                    </div>
                    <p className="text-gray-700">
                      Sanchaari Technologies Private Limited ("Sanchaari," "we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our services.
                    </p>
                  </div>
                )}

                {activeSection === 'collection' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">What Information We Collect</h2>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Personal Information</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Name, email address, and phone number</li>
                        <li>• Government ID details for verification</li>
                        <li>• Travel preferences and history</li>
                        <li>• Payment information (stored securely)</li>
                        <li>• Profile photos and user-generated content</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Technical Information</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• IP address and browser information</li>
                        <li>• Device type, operating system</li>
                        <li>• Cookies and tracking technologies</li>
                        <li>• Usage patterns and analytics data</li>
                        <li>• Location data (with permission)</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeSection === 'usage' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">How We Use Your Data</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Service Provision</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Process bookings and payments</li>
                          <li>• Provide customer support</li>
                          <li>• Send booking confirmations</li>
                          <li>• Enable trip planning features</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Personalization</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Customize recommendations</li>
                          <li>• Remember preferences</li>
                          <li>• Improve AI assistance</li>
                          <li>• Enhance user experience</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'sharing' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">When We Share Your Data</h2>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Service Partners</h3>
                      <p className="text-gray-700">
                        We share necessary information with hotels, airlines, and activity providers to fulfill your bookings. 
                        This includes your name, contact details, and booking preferences.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Legal Requirements</h3>
                      <p className="text-gray-700">
                        We may disclose your information when required by law, to protect our rights, 
                        or to comply with legal processes and government requests.
                      </p>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">We Never:</h4>
                      <ul className="space-y-1 text-red-700 text-sm">
                        <li>• Sell your personal information</li>
                        <li>• Share data with advertisers</li>
                        <li>• Use your data for unrelated marketing</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeSection === 'rights' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Your Rights</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Download className="h-5 w-5" />
                            Access & Export
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-700 mb-3">
                            Request a copy of all data we have about you
                          </p>
                          <Button size="sm" variant="outline">Request Data Export</Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Trash2 className="h-5 w-5" />
                            Delete Account
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-700 mb-3">
                            Request deletion of your account and data
                          </p>
                          <Button size="sm" variant="outline">Request Deletion</Button>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Additional Rights</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Rectification:</strong> Correct inaccurate personal data</li>
                        <li>• <strong>Restrict Processing:</strong> Limit how we use your data</li>
                        <li>• <strong>Data Portability:</strong> Transfer your data to another service</li>
                        <li>• <strong>Object:</strong> Opt out of certain data processing</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeSection === 'contact' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Contact Our Data Protection Team</h2>
                    
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold mb-4">Data Protection Officer</h3>
                      <div className="space-y-2">
                        <p className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <a href="mailto:dpo@sanchaari.com" className="text-blue-600 hover:underline">
                            dpo@sanchaari.com
                          </a>
                        </p>
                        <p className="text-sm text-gray-700">
                          Response time: Within 72 hours for data protection queries
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button asChild>
                        <Link to="/help/contact">General Support</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/cookies">Cookie Policy</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
