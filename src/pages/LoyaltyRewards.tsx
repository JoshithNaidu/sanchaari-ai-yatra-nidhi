import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Star, Gift, Users, Share2, Trophy, Crown, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';

const LoyaltyRewards = () => {
  const { toast } = useToast();
  const [currentPoints, setCurrentPoints] = useState(2450);
  const nextTierPoints = 5000;
  const progressPercentage = (currentPoints / nextTierPoints) * 100;

  const rewardsHistory = [
    { type: 'earned', description: 'Goa trip booking', points: 500, date: '2024-03-15' },
    { type: 'earned', description: 'Friend referral - John Doe', points: 250, date: '2024-03-10' },
    { type: 'redeemed', description: 'Hotel discount used', points: -200, date: '2024-03-08' },
    { type: 'earned', description: 'Kerala trip completion', points: 300, date: '2024-02-28' },
  ];

  const availableRewards = [
    { title: '10% Hotel Discount', points: 500, description: 'Valid on bookings above ₹5,000' },
    { title: 'Airport Lounge Access', points: 1000, description: 'Single-use pass for domestic flights' },
    { title: 'Free Activity Booking', points: 1500, description: 'Up to ₹2,000 value' },
    { title: 'Upgrade to Premium Trip', points: 2000, description: 'One-time upgrade on your next booking' },
  ];

  const handleShareWithFriends = () => {
    const referralCode = 'TRAVEL2024';
    const shareText = `Join me on this amazing travel platform! Use my referral code ${referralCode} and get 250 bonus points. Start planning your dream trip today!`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Join Our Travel Platform',
        text: shareText,
        url: window.location.origin
      });
    } else {
      navigator.clipboard.writeText(shareText);
      toast({
        title: "Referral Link Copied",
        description: "Your referral message has been copied to clipboard!",
      });
    }
  };

  const handleRedeemReward = (reward: any) => {
    if (currentPoints >= reward.points) {
      setCurrentPoints(prev => prev - reward.points);
      toast({
        title: "Reward Redeemed!",
        description: `${reward.title} has been added to your account.`,
      });
    } else {
      toast({
        title: "Insufficient Points",
        description: `You need ${reward.points - currentPoints} more points to redeem this reward.`,
        variant: "destructive"
      });
    }
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText('TRAVEL2024');
    toast({
      title: "Code Copied",
      description: "Referral code copied to clipboard!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Loyalty & Rewards</h1>
          <p className="text-gray-600">Earn points with every trip and unlock exclusive benefits</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Points & Tier Status */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-yellow-600" />
                  Your Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Explorer</h3>
                  <p className="text-gray-600">Current Tier</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Points to Nomad Tier</span>
                    <span className="text-sm font-bold text-blue-600">{nextTierPoints - currentPoints} points needed</span>
                  </div>
                  
                  <Progress value={progressPercentage} className="h-3" />
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{currentPoints} points</span>
                    <span>{nextTierPoints} points</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{currentPoints}</div>
                    <div className="text-sm text-gray-600">Total Points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">4</div>
                    <div className="text-sm text-gray-600">Trips Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">2</div>
                    <div className="text-sm text-gray-600">Friends Referred</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rewards History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  Points History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rewardsHistory.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          item.type === 'earned' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                        }`}>
                          {item.type === 'earned' ? '+' : '-'}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{item.description}</div>
                          <div className="text-sm text-gray-600">{item.date}</div>
                        </div>
                      </div>
                      <div className={`font-bold ${
                        item.type === 'earned' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.type === 'earned' ? '+' : ''}{item.points} pts
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Referral Program */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Refer Friends
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="font-bold text-blue-600 text-lg">Earn 250 Points</div>
                  <div className="text-sm text-gray-600">for each successful referral</div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Referral Code</label>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-gray-100 px-3 py-2 rounded border font-mono text-sm">
                      TRAVEL2024
                    </div>
                    <Button size="sm" variant="outline" onClick={copyReferralCode}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button className="w-full gap-2" onClick={handleShareWithFriends}>
                  <Share2 className="h-4 w-4" />
                  Share with Friends
                </Button>
              </CardContent>
            </Card>

            {/* Available Rewards */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-green-600" />
                  Redeem Points
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: '10% Hotel Discount', points: 500, description: 'Valid on bookings above ₹5,000' },
                  { title: 'Airport Lounge Access', points: 1000, description: 'Single-use pass for domestic flights' },
                  { title: 'Free Activity Booking', points: 1500, description: 'Up to ₹2,000 value' },
                  { title: 'Upgrade to Premium Trip', points: 2000, description: 'One-time upgrade on your next booking' },
                ].map((reward, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">{reward.title}</h4>
                      <Badge variant="secondary">{reward.points} pts</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                    <Button 
                      size="sm" 
                      className="w-full" 
                      disabled={currentPoints < reward.points}
                      variant={currentPoints >= reward.points ? "default" : "outline"}
                      onClick={() => handleRedeemReward(reward)}
                    >
                      {currentPoints >= reward.points ? "Redeem" : "Not enough points"}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyRewards;
