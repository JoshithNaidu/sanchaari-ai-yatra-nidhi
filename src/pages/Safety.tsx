
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Eye, Users, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Safety = () => {
  const safetyFeatures = [
    {
      icon: Shield,
      title: "User Verification",
      description: "Multi-layer KYC checks and fraud detection",
      details: "We verify all users through government ID validation, phone number verification, and behavioral analysis to ensure authentic bookings and safe community interactions."
    },
    {
      icon: Lock,
      title: "Payment Security",
      description: "PCI DSS compliant with 256-bit SSL encryption",
      details: "All payment data is encrypted using industry-standard SSL technology. We are PCI DSS Level 1 compliant and use tokenization to protect your financial information."
    },
    {
      icon: Eye,
      title: "Data Privacy Protocols",
      description: "Advanced access control and monitoring",
      details: "Your personal data is protected with enterprise-grade security measures, including role-based access controls, audit trails, and continuous monitoring systems."
    },
    {
      icon: Users,
      title: "Community Conduct",
      description: "Anti-abuse guidelines and transparent ratings",
      details: "Our community guidelines ensure respectful interactions. We use verified ratings, content moderation, and have zero tolerance for harassment or fraudulent activities."
    },
    {
      icon: Phone,
      title: "Crisis Support",
      description: "24/7 emergency assistance and travel insurance",
      details: "Round-the-clock support through chat escalation, emergency contact system, and comprehensive travel insurance coverage for unexpected situations."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Banner */}
        <div className="text-center mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Your Safety is Our Priority</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Travel with confidence knowing that Sanchaari employs industry-leading security measures, 
            transparent practices, and comprehensive support to protect every aspect of your journey.
          </p>
        </div>

        {/* Safety Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {safetyFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-sm text-gray-600 font-normal">{feature.description}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{feature.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Safety Sections */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Comprehensive Safety Standards</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="verification">
                <AccordionTrigger>Identity & Account Verification</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Multi-Step Verification Process:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Government ID verification (Aadhaar, PAN, Passport)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Mobile number OTP verification
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Email address confirmation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Behavioral pattern analysis
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment">
                <AccordionTrigger>Payment Security & Fraud Prevention</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Security Certifications:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• PCI DSS Level 1 Compliance</li>
                      <li>• 256-bit SSL/TLS encryption for all transactions</li>
                      <li>• Tokenization of sensitive payment data</li>
                      <li>• Real-time fraud monitoring and detection</li>
                      <li>• Secure payment gateway partnerships with leading providers</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="privacy">
                <AccordionTrigger>Data Privacy & Protection</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Privacy Safeguards:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• GDPR and India DPDP Act compliance</li>
                      <li>• Role-based access controls</li>
                      <li>• Data encryption at rest and in transit</li>
                      <li>• Regular security audits and penetration testing</li>
                      <li>• Transparent data usage policies</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support">
                <AccordionTrigger>Emergency Support & Assistance</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold">24/7 Support Services:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Instant chat escalation to human agents</li>
                      <li>• Emergency hotline: 1800-XXX-XXXX</li>
                      <li>• Travel insurance partnerships</li>
                      <li>• Local emergency contact assistance</li>
                      <li>• Medical emergency coordination</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Trust Badges & Certifications */}
        <div className="bg-gray-50 rounded-lg p-8 text-center mb-12">
          <h3 className="text-2xl font-bold mb-6">Trusted by Travelers Across India</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-sm font-semibold">PCI DSS<br />Certified</div>
            <div className="text-sm font-semibold">ISO 27001<br />Compliant</div>
            <div className="text-sm font-semibold">GDPR<br />Compliant</div>
            <div className="text-sm font-semibold">SSL<br />Secured</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Learn More About Our Policies</h3>
          <p className="text-gray-600 mb-8">
            Get detailed information about how we protect your data and ensure platform security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/privacy">Read Privacy Policy</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/terms">View Terms of Service</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Safety;
