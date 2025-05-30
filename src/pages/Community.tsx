
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Heart, MessageCircle, Share2, Plus, Flag, Send } from 'lucide-react';

const Community = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('featured');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const stories = [
    {
      id: 1,
      slug: 'backpacking-through-himalayas',
      title: 'Solo Backpacking Through the Himalayas: A Life-Changing Journey',
      excerpt: 'Three weeks, 200km of trekking, and countless memories. Here\'s how I discovered myself in the mountains...',
      author: {
        name: 'Arjun Mehta',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
        verified: true
      },
      heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
      tags: ['#Backpacking', '#Solo Travel', '#Himalayas', '#Adventure'],
      publishDate: '2024-06-15',
      likes: 245,
      comments: 38,
      featured: true,
      content: `The crisp mountain air hit my face as I stepped off the bus in Manali. Three weeks of solo backpacking through the Himalayas lay ahead of me, and I had no idea how much this journey would change my perspective on life.

**Day 1-3: Acclimatization in Manali**

The first few days were spent getting used to the altitude and preparing for the trek ahead. I visited the local markets, tried authentic Himachali cuisine, and met fellow travelers at the hostel.

**The Trek Begins**

Starting from Kasol, the trail wound through dense forests of deodar and pine. Each day brought new challenges - river crossings, steep ascents, and unpredictable weather. But with each step, I felt more connected to nature and to myself.

**Moments of Reflection**

Sitting by a glacial lake at 4,200 meters, surrounded by snow-capped peaks, I realized how small our daily worries really are. The mountains taught me patience, resilience, and the beauty of simplicity.

**The People I Met**

From local shepherds sharing stories over evening tea to fellow trekkers from around the world, every interaction enriched my understanding of human connection across cultures.

**Lessons Learned**

This journey taught me that solo travel isn't about being alone - it's about being comfortable with yourself and open to the world around you. The mountains stripped away all pretenses and showed me who I really am.

If you're considering a solo adventure, don't let fear hold you back. The mountains are calling, and they have so much to teach us.`
    },
    {
      id: 2,
      slug: 'family-trip-kerala-backwaters',
      title: 'Our First Family Trip to Kerala Backwaters',
      excerpt: 'Planning a trip with kids can be challenging, but Kerala\'s backwaters offered the perfect blend of relaxation and adventure...',
      author: {
        name: 'Priya Singh',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5e5?auto=format&fit=crop&w=100&q=80',
        verified: false
      },
      heroImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80',
      tags: ['#Family Travel', '#Kerala', '#Backwaters', '#Kids'],
      publishDate: '2024-06-12',
      likes: 189,
      comments: 24,
      featured: false
    },
    {
      id: 3,
      slug: 'budget-rajasthan-guide',
      title: 'Exploring Rajasthan on a Shoestring Budget',
      excerpt: 'You don\'t need deep pockets to experience the royal grandeur of Rajasthan. Here\'s how I did it for under ₹15,000...',
      author: {
        name: 'Karan Gupta',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
        verified: true
      },
      heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
      tags: ['#Budget Travel', '#Rajasthan', '#Tips', '#Backpacking'],
      publishDate: '2024-06-10',
      likes: 312,
      comments: 56,
      featured: false
    }
  ];

  // If viewing individual story
  if (slug) {
    const story = stories.find(s => s.slug === slug);
    if (!story) return <div>Story not found</div>;

    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Hero Image */}
          <div className="h-96 rounded-lg overflow-hidden mb-8">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${story.heroImage})` }}
            />
          </div>

          {/* Story Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <Avatar>
                <AvatarImage src={story.author.avatar} />
                <AvatarFallback>{story.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{story.author.name}</h4>
                  {story.author.verified && (
                    <Badge variant="secondary" className="text-xs">Verified</Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  {new Date(story.publishDate).toLocaleDateString()}
                </p>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4">{story.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {story.tags.map(tag => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                <span>{story.likes}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <span>{story.comments}</span>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Story Content */}
          <div className="prose prose-lg max-w-none mb-8">
            {story.content?.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h3 key={index} className="text-xl font-bold mt-8 mb-4">{paragraph.slice(2, -2)}</h3>;
              }
              return <p key={index} className="mb-4">{paragraph}</p>;
            })}
          </div>

          {/* Comments Section */}
          <div className="border-t pt-8">
            <h3 className="text-xl font-bold mb-6">Comments ({story.comments})</h3>
            
            {/* Add Comment */}
            <div className="mb-8">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarFallback>YU</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea placeholder="Share your thoughts..." className="mb-3" />
                  <Button size="sm">
                    <Send className="h-4 w-4 mr-2" />
                    Post Comment
                  </Button>
                </div>
              </div>
            </div>

            {/* Sample Comments */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">Sarah Ahmed</span>
                    <span className="text-sm text-gray-600">2 hours ago</span>
                  </div>
                  <p className="text-gray-700 mb-2">Amazing story! I'm planning a similar trip next month. Any specific gear recommendations for the weather?</p>
                  <div className="flex items-center gap-4 text-sm">
                    <Button variant="ghost" size="sm">
                      <Heart className="h-4 w-4 mr-1" />
                      12
                    </Button>
                    <Button variant="ghost" size="sm">Reply</Button>
                    <Button variant="ghost" size="sm">
                      <Flag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    );
  }

  // Community homepage
  const featuredStories = stories.filter(story => story.featured);
  const regularStories = stories.filter(story => !story.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Travel Community</h1>
          <p className="text-xl text-gray-600">Share your adventures, discover hidden gems, and connect with fellow travelers</p>
        </div>

        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant={activeTab === 'featured' ? 'default' : 'outline'}
              onClick={() => setActiveTab('featured')}
            >
              Featured
            </Button>
            <Button
              variant={activeTab === 'latest' ? 'default' : 'outline'}
              onClick={() => setActiveTab('latest')}
            >
              Latest
            </Button>
            <Button
              variant={activeTab === 'following' ? 'default' : 'outline'}
              onClick={() => setActiveTab('following')}
            >
              Following
            </Button>
          </div>
          <Button onClick={() => setShowCreateModal(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Share Your Story
          </Button>
        </div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === 'featured' ? featuredStories : stories).map(story => (
            <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${story.heroImage})` }} />
              <CardContent className="p-6">
                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src={story.author.avatar} />
                    <AvatarFallback>{story.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">{story.author.name}</span>
                      {story.author.verified && (
                        <Badge variant="secondary" className="text-xs">Verified</Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-600">
                      {new Date(story.publishDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-bold text-lg mb-3 line-clamp-2">{story.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{story.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {story.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>

                {/* Engagement */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{story.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{story.comments}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Link to={`/community/${story.slug}`}>Read Story</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Create Story Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Share Your Travel Story</h2>
                <Button variant="ghost" onClick={() => setShowCreateModal(false)}>✕</Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Story Title</label>
                  <Input placeholder="Give your story a compelling title..." />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Cover Image</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <p className="text-gray-600">Click to upload or drag and drop</p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Your Story</label>
                  <Textarea 
                    placeholder="Tell us about your adventure..." 
                    className="min-h-[200px]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Tags</label>
                  <Input placeholder="#adventure #solo #mountains" />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button className="flex-1">Preview & Post</Button>
                  <Button variant="outline">Save Draft</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Community;
