
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CreditCard, Smartphone, Plus, Trash2, Star, Shield, Lock } from 'lucide-react';
import Header from '@/components/Header';

const PaymentMethods = () => {
  const [savedCards, setSavedCards] = useState([
    {
      id: 1,
      type: 'visa',
      lastFour: '4242',
      expiry: '12/25',
      isDefault: true,
      holderName: 'John Doe'
    },
    {
      id: 2,
      type: 'mastercard',
      lastFour: '8888',
      expiry: '09/26',
      isDefault: false,
      holderName: 'John Doe'
    }
  ]);

  const [upiMethods, setUpiMethods] = useState([
    { id: 1, provider: 'Google Pay', upiId: 'john@gpay', isConnected: true },
    { id: 2, provider: 'PhonePe', upiId: 'john@phonepe', isConnected: true },
    { id: 3, provider: 'Paytm', upiId: '', isConnected: false },
  ]);

  const handleRemoveCard = (id: number) => {
    setSavedCards(prev => prev.filter(card => card.id !== id));
  };

  const handleSetDefault = (id: number) => {
    setSavedCards(prev => 
      prev.map(card => ({ ...card, isDefault: card.id === id }))
    );
  };

  const getCardIcon = (type: string) => {
    switch (type) {
      case 'visa':
        return '💳';
      case 'mastercard':
        return '💳';
      default:
        return '💳';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Methods</h1>
          <p className="text-gray-600">Securely manage your payment instruments for quick bookings</p>
        </div>

        <div className="space-y-8">
          {/* Security Info */}
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold text-green-900">Your payments are secure</h3>
                  <p className="text-sm text-green-700">We use industry-standard encryption and never store your full card details. All transactions are PCI DSS compliant.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Saved Cards */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Saved Cards
              </CardTitle>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add New Card
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Card</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                      <Input placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                        <Input placeholder="MM/YY" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <Input placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                      <Input placeholder="John Doe" />
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1">Add Card</Button>
                      <Button variant="outline" className="flex-1">Cancel</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {savedCards.map((card) => (
                  <div key={card.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-2xl">
                        {getCardIcon(card.type)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">•••• •••• •••• {card.lastFour}</span>
                          {card.isDefault && (
                            <Badge variant="default" className="text-xs">
                              <Star className="h-3 w-3 mr-1" />
                              Default
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">
                          {card.holderName} • Expires {card.expiry}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {!card.isDefault && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleSetDefault(card.id)}
                        >
                          Set Default
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveCard(card.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                {savedCards.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <CreditCard className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p>No saved cards yet</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* UPI & Digital Wallets */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                UPI & Digital Wallets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upiMethods.map((method) => (
                  <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Smartphone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">{method.provider}</div>
                        <div className="text-sm text-gray-600">
                          {method.isConnected ? method.upiId : 'Not connected'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {method.isConnected ? (
                        <>
                          <Badge variant="secondary" className="text-green-600">Connected</Badge>
                          <Button variant="outline" size="sm" className="text-red-600">
                            Remove
                          </Button>
                        </>
                      ) : (
                        <Button size="sm">Connect</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Security Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Security Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">256-bit SSL Encryption</h4>
                  <p className="text-sm text-gray-600">All data is encrypted in transit</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">PCI DSS Compliant</h4>
                  <p className="text-sm text-gray-600">Meets industry security standards</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Tokenized Storage</h4>
                  <p className="text-sm text-gray-600">Card details are never stored directly</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
