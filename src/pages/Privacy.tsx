
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield, Lock, Eye, Users, Mail } from 'lucide-react';
import Header from '@/components/Header';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: May 30, 2025</p>
        </div>

        <div className="space-y-6">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-600" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                At Sanchaari, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, store, and protect your data when you use our travel platform.
              </p>
            </CardContent>
          </Card>

          {/* What We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-emerald-600" />
                What Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                <ul className="text-gray-700 space-y-1 list-disc list-inside">
                  <li>Name, email address, phone number</li>
                  <li>Date of birth, gender, travel preferences</li>
                  <li>Government ID details for bookings</li>
                  <li>Payment information (processed securely)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Usage Information</h4>
                <ul className="text-gray-700 space-y-1 list-disc list-inside">
                  <li>Search queries and booking history</li>
                  <li>Device information and IP address</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and time spent on our platform</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Why We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-600" />
                Why We Collect This Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>To provide and improve our travel booking services</li>
                <li>To process bookings and communicate about your trips</li>
                <li>To personalize your experience and provide recommendations</li>
                <li>To prevent fraud and ensure platform security</li>
                <li>To comply with legal and regulatory requirements</li>
                <li>To send important updates about your bookings</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Storage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-emerald-600" />
                Data Storage and Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Storage Duration</h4>
                <ul className="text-gray-700 space-y-1 list-disc list-inside">
                  <li>Account information: Retained while your account is active</li>
                  <li>Booking records: Kept for 7 years for tax and legal compliance</li>
                  <li>Marketing preferences: Until you withdraw consent</li>
                  <li>Usage data: Anonymized after 2 years</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Security Measures</h4>
                <ul className="text-gray-700 space-y-1 list-disc list-inside">
                  <li>256-bit SSL encryption for all data transmission</li>
                  <li>PCI DSS compliant payment processing</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and employee training on data protection</li>
                  <li>Secure data centers with 24/7 monitoring</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardHeader>
              <CardTitle>Who We Share Information With</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li><strong>Service Providers:</strong> Airlines, hotels, and activity providers for bookings</li>
                <li><strong>Payment Processors:</strong> Secure payment gateway providers</li>
                <li><strong>Technology Partners:</strong> Analytics and marketing platforms (anonymized data)</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In case of merger or acquisition (with notice)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Age Restrictions</h4>
                <p className="text-gray-700 mb-3">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Parental Consent</h4>
                <ul className="text-gray-700 space-y-1 list-disc list-inside">
                  <li>Users aged 13-18 require parental consent for account creation</li>
                  <li>Parents can request access to or deletion of their child's data</li>
                  <li>We provide special protections for minors' personal information</li>
                  <li>Educational content is provided about online safety for young travelers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">If You Believe We Have Child Data</h4>
                <p className="text-gray-700">
                  If you believe we have collected personal information from a child under 13, 
                  please contact us immediately at <a href="mailto:privacy@sanchaari.com" className="text-emerald-600 hover:underline">privacy@sanchaari.com</a> 
                  and we will delete such information promptly.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Types of Cookies We Use</h4>
                <ul className="text-gray-700 space-y-2 list-disc list-inside">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality (login, cart)</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver personalized advertisements</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cookie Management</h4>
                <ul className="text-gray-700 space-y-1 list-disc list-inside">
                  <li>You can control cookies through your browser settings</li>
                  <li>Use our Cookie Preference Center to manage consent</li>
                  <li>Some features may not work if cookies are disabled</li>
                  <li>We respect "Do Not Track" browser signals</li>
                </ul>
              </div>
              <p className="text-gray-700">
                For detailed information about our cookie practices, please visit our 
                <a href="/cookies" className="text-emerald-600 hover:underline ml-1">Cookie Policy</a>.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle>Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete information</li>
                <li><strong>Erasure:</strong> Request deletion of your data (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Restriction:</strong> Limit how we process your information</li>
                <li><strong>Objection:</strong> Opt out of marketing communications and profiling</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-emerald-600" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or want to exercise your rights, contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Data Protection Officer:</strong> privacy@sanchaari.com</p>
                <p><strong>Address:</strong> Sanchaari Technologies Pvt Ltd, Bangalore, India</p>
                <p><strong>Phone:</strong> +91-1800-XXX-XXXX</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
