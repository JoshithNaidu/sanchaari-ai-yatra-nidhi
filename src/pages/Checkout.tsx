
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Shield, CreditCard, Smartphone, Wallet, ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/Header';

const Checkout = () => {
  const navigate = useNavigate();
  const { bookingId } = useParams();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [promoCode, setPromoCode] = useState('');

  // Mock booking data based on bookingId
  const bookingData = {
    type: 'flight',
    title: 'IndiGo Flight 6E 2001',
    details: 'DEL → BOM • Jan 15, 2024 • 2 passengers',
    price: 9000,
    taxes: 1200,
    total: 10200
  };

  const handlePayment = () => {
    navigate(`/confirmation/${bookingId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Search
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Traveler Information */}
            <Card>
              <CardHeader>
                <CardTitle>Traveler Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter email" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter phone number" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" placeholder="Enter age" />
                  </div>
                  <div>
                    <Label htmlFor="document">Document Type</Label>
                    <select className="w-full border rounded px-3 py-2">
                      <option>Passport</option>
                      <option>Aadhaar Card</option>
                      <option>Driving License</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 border rounded-lg flex items-center gap-2 ${
                      paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <CreditCard className="h-5 w-5" />
                    Credit/Debit Card
                  </button>
                  
                  <button
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-4 border rounded-lg flex items-center gap-2 ${
                      paymentMethod === 'upi' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <Smartphone className="h-5 w-5" />
                    UPI
                  </button>
                  
                  <button
                    onClick={() => setPaymentMethod('wallet')}
                    className={`p-4 border rounded-lg flex items-center gap-2 ${
                      paymentMethod === 'wallet' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <Wallet className="h-5 w-5" />
                    Wallet
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input id="cardName" placeholder="Name on card" />
                    </div>
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <div>
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input id="upiId" placeholder="yourname@upi" />
                  </div>
                )}

                <div>
                  <Label htmlFor="promo">Promo Code (Optional)</Label>
                  <div className="flex gap-2">
                    <Input 
                      id="promo" 
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="rounded" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the Terms & Conditions and Privacy Policy
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">{bookingData.title}</h3>
                  <p className="text-sm text-gray-600">{bookingData.details}</p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Base Price</span>
                    <span>₹{bookingData.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Fees</span>
                    <span>₹{bookingData.taxes.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>₹{bookingData.total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4" />
                  <span>Your payment is secure and protected</span>
                </div>

                <Button 
                  onClick={handlePayment}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  size="lg"
                >
                  Pay & Confirm Booking
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium mb-2">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Our support team is available 24/7 to assist you.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
