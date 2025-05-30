
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Scale, AlertTriangle, CreditCard, Shield } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Scale className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Legal terms and conditions governing your use of Sanchaari platform
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: December 29, 2024</p>
        </div>

        {/* Quick Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Important Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-amber-50 p-4 rounded-lg">
              <p className="text-sm text-amber-800">
                By using Sanchaari, you agree to these terms. Key points: You must be 18+ to book, 
                cancellation policies apply, we facilitate bookings but don't control external services, 
                and disputes are resolved through Indian courts in Bangalore jurisdiction.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Terms Sections */}
        <Card>
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="definitions" className="border-b">
                <AccordionTrigger className="px-6">1. Definitions</AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <p><strong>"Platform"</strong> refers to Sanchaari website, mobile applications, and related services.</p>
                    <p><strong>"User"</strong> means any person accessing or using our Platform.</p>
                    <p><strong>"Booking"</strong> means any reservation or purchase made through our Platform.</p>
                    <p><strong>"Service Providers"</strong> include hotels, airlines, activity operators, and other travel suppliers.</p>
                    <p><strong>"Content"</strong> includes all information, data, text, photos, and materials on our Platform.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="eligibility" className="border-b">
                <AccordionTrigger className="px-6">2. User Eligibility & Responsibilities</AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Eligibility Requirements:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Must be 18 years or older to make bookings</li>
                      <li>• Must provide accurate and complete information</li>
                      <li>• Must have legal authority to enter into binding contracts</li>
                      <li>• Must comply with all applicable laws and regulations</li>
                    </ul>
                    
                    <h4 className="font-semibold">User Responsibilities:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Maintain account security and confidentiality</li>
                      <li>• Provide valid contact information and payment details</li>
                      <li>• Respect community guidelines and other users</li>
                      <li>• Report any suspicious or fraudulent activity</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="booking" className="border-b">
                <AccordionTrigger className="px-6">3. Booking Process & Confirmation</AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Booking Flow:</h4>
                      <ol className="space-y-1 text-blue-700 text-sm">
                        <li>1. Search and select services</li>
                        <li>2. Review booking details and pricing</li>
                        <li>3. Complete payment process</li>
                        <li>4. Receive confirmation email</li>
                        <li>5. Service provider processes your booking</li>
                      </ol>
                    </div>
                    
                    <p className="text-gray-700">
                      <strong>Important:</strong> Booking confirmation from Sanchaari does not guarantee service availability. 
                      Final confirmation depends on the service provider's acceptance. If a booking is rejected, 
                      you will receive a full refund within 5-7 business days.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment" className="border-b">
                <AccordionTrigger className="px-6 flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  4. Payment Terms & Conditions
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Accepted Payment Methods:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Credit/Debit Cards (Visa, MasterCard, American Express)</li>
                      <li>• UPI payments (GPay, PhonePe, Paytm)</li>
                      <li>• Net Banking</li>
                      <li>• Digital Wallets</li>
                    </ul>
                    
                    <h4 className="font-semibold">Payment Security:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• All transactions are secured with 256-bit SSL encryption</li>
                      <li>• We are PCI DSS Level 1 compliant</li>
                      <li>• Payment data is tokenized and never stored in plain text</li>
                      <li>• Real-time fraud monitoring protects against unauthorized use</li>
                    </ul>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-800 text-sm">
                        <strong>Refund Processing:</strong> Refunds are processed to the original payment method 
                        within 5-7 business days, subject to service provider policies.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cancellation" className="border-b">
                <AccordionTrigger className="px-6">5. Cancellation & Refund Policies</AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">Non-Refundable</h4>
                        <ul className="space-y-1 text-red-700 text-sm">
                          <li>• Promotional/discounted bookings</li>
                          <li>• Same-day cancellations</li>
                          <li>• No-show bookings</li>
                          <li>• Festival/peak season bookings</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Refundable</h4>
                        <ul className="space-y-1 text-green-700 text-sm">
                          <li>• 48+ hours advance cancellation</li>
                          <li>• Service provider cancellations</li>
                          <li>• Force majeure events</li>
                          <li>• Platform technical errors</li>
                        </ul>
                      </div>
                    </div>
                    
                    <p className="text-gray-700">
                      Specific cancellation terms vary by service provider and are clearly displayed during booking. 
                      Please review cancellation policies before confirming your reservation.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="liability" className="border-b">
                <AccordionTrigger className="px-6 flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  6. Limitation of Liability
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-800 mb-2">Platform Role:</h4>
                      <p className="text-amber-700 text-sm">
                        Sanchaari acts as an intermediary connecting users with service providers. 
                        We facilitate bookings but do not directly provide travel services 
                        (flights, hotels, activities).
                      </p>
                    </div>
                    
                    <h4 className="font-semibold">Liability Limitations:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• We are not responsible for service provider failures or quality issues</li>
                      <li>• Weather, natural disasters, or government restrictions are beyond our control</li>
                      <li>• Maximum liability limited to the booking value</li>
                      <li>• We maintain travel insurance partnerships for additional protection</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="termination" className="border-b">
                <AccordionTrigger className="px-6">7. Account Termination</AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Grounds for Termination:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Violation of these terms or community guidelines</li>
                      <li>• Fraudulent activity or payment disputes</li>
                      <li>• Abuse of platform features or other users</li>
                      <li>• Providing false information during registration</li>
                    </ul>
                    
                    <p className="text-gray-700">
                      Upon termination, your access to the platform will be suspended, but existing 
                      bookings will remain valid. You may request account reactivation after 
                      resolving any outstanding issues.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="governing">
                <AccordionTrigger className="px-6">8. Governing Law & Dispute Resolution</AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Jurisdiction:</h4>
                    <p className="text-gray-700">
                      These terms are governed by the laws of India. Any disputes will be subject 
                      to the exclusive jurisdiction of courts in Bangalore, Karnataka.
                    </p>
                    
                    <h4 className="font-semibold">Dispute Resolution Process:</h4>
                    <ol className="space-y-2 text-gray-700">
                      <li>1. <strong>Direct Resolution:</strong> Contact our support team first</li>
                      <li>2. <strong>Mediation:</strong> Use our grievance redressal mechanism</li>
                      <li>3. <strong>Legal Action:</strong> Courts in Bangalore, Karnataka</li>
                    </ol>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800 text-sm">
                        <strong>Consumer Rights:</strong> These terms do not limit your statutory rights 
                        under Indian consumer protection laws.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Questions About These Terms?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact our legal team:
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> legal@sanchaari.com</p>
              <p><strong>Address:</strong> Sanchaari Technologies Pvt Ltd, Bangalore, Karnataka, India</p>
              <p><strong>Response Time:</strong> Within 5 business days</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
