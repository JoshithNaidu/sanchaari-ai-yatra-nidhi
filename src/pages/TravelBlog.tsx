
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const TravelBlog = () => {
  const { slug } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      slug: 'kerala-backwaters-guide',
      title: 'Ultimate Guide to Kerala Backwaters: A Journey Through Paradise',
      excerpt: 'Discover the serene beauty of Kerala\'s backwaters with our comprehensive guide covering the best routes, houseboats, and hidden gems.',
      content: `Kerala's backwaters are a network of interconnected canals, rivers, lakes, and inlets that create one of the most enchanting landscapes in India. This comprehensive guide will take you through everything you need to know about exploring this paradise.

**Getting There**
The main hubs for backwater tourism are Alleppey (Alappuzha), Kumarakom, and Kollam. Alleppey is the most popular starting point, easily accessible from Kochi airport (about 85 km away).

**Best Time to Visit**
October to March is the ideal time when the weather is pleasant and humidity is low. Monsoons (June-September) can be beautiful but expect heavy rains.

**Houseboat Experience**
Staying overnight on a traditional houseboat is a must-do experience. These converted rice barges offer modern amenities while maintaining their rustic charm. Expect to pay ₹8,000-₹15,000 per night for a good quality houseboat.

**What to Expect**
- Traditional Kerala cuisine cooked fresh onboard
- Peaceful cruising through narrow canals
- Bird watching opportunities
- Village visits and local interactions
- Sunset views over the water

**Hidden Gems**
Beyond the popular routes, explore:
- Kumrakom Bird Sanctuary
- Pathiramanal Island
- Traditional coir-making villages
- Spice plantations in Thekkady

The backwaters offer a perfect blend of nature, culture, and relaxation that will leave you with memories to last a lifetime.`,
      author: {
        name: 'Arjun Mehta',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
      },
      category: 'destinations',
      publishDate: '2024-06-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 2,
      slug: 'rajasthan-budget-travel',
      title: 'Exploring Rajasthan on a Budget: Royal Experiences for Less',
      excerpt: 'Experience the grandeur of Rajasthan without breaking the bank. Here\'s how to explore palaces, forts, and culture on a shoestring budget.',
      content: `Rajasthan, the land of maharajas and magnificent palaces, can be explored on a budget without compromising on the experience. Here's your complete guide to budget travel in Rajasthan.

**Transportation**
- Use state buses (RSRTC) for intercity travel - extremely affordable
- Book sleeper class trains well in advance
- Share taxis between cities can be cost-effective for groups
- Local buses and shared auto-rickshaws for city travel

**Accommodation**
- Government tourist hostels offer clean, safe stays for ₹500-800/night
- Heritage homestays provide authentic experiences
- Youth hostels in major cities
- Budget hotels near railway stations

**Food**
- Street food is delicious and cheap (₹50-100 per meal)
- Local dhabas serve authentic Rajasthani thalis
- Stay hydrated with fresh lassi and chaas
- Try local specialties like dal-baati-churma

**Must-Visit Places on Budget**
- Jaipur: Amber Fort, City Palace, Hawa Mahal
- Udaipur: City Palace, Saheliyon Ki Bari, Jagdish Temple
- Jodhpur: Mehrangarh Fort, Jaswant Thada
- Pushkar: Brahma Temple, Pushkar Lake
- Jaisalmer: Fort, Sam Sand Dunes

**Money-Saving Tips**
- Visit during off-season (April-June) for lower prices
- Buy composite tickets for multiple monuments
- Negotiate taxi fares beforehand
- Carry a water bottle to avoid buying expensive bottled water

With proper planning, you can experience Rajasthan's royal heritage for under ₹2,000 per day including accommodation, food, and sightseeing.`,
      author: {
        name: 'Priya Singh',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5e5?auto=format&fit=crop&w=100&q=80'
      },
      category: 'budget',
      publishDate: '2024-06-12',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 3,
      slug: 'himalayan-trekking-tips',
      title: 'Essential Tips for First-Time Himalayan Trekkers',
      excerpt: 'Planning your first Himalayan trek? Here are the essential tips, gear recommendations, and safety guidelines you need to know.',
      content: `Embarking on your first Himalayan trek is an exciting adventure that requires proper preparation. This comprehensive guide will help you prepare for the journey of a lifetime.

**Physical Preparation**
Start training at least 2-3 months before your trek:
- Build cardiovascular endurance with regular running or cycling
- Practice hiking with a loaded backpack
- Include strength training for legs and core
- Practice breathing exercises

**Essential Gear**
- Sturdy trekking boots (broken in before the trek)
- Layered clothing system (base layer, insulation, outer shell)
- Quality sleeping bag rated for expected temperatures
- Trekking poles for stability
- Headlamp with extra batteries
- First aid kit and personal medications

**Acclimatization**
- Ascend gradually (no more than 500m per day above 3000m)
- Stay hydrated and avoid alcohol
- Listen to your body and recognize altitude sickness symptoms
- Take rest days as planned in your itinerary

**Safety Guidelines**
- Trek with experienced guides
- Inform someone about your itinerary
- Carry emergency communication devices
- Have evacuation insurance
- Know when to turn back

**Popular Beginner Treks**
- Valley of Flowers (Uttarakhand) - 4 days
- Triund Trek (Himachal Pradesh) - 2 days
- Brahmatal Trek (Uttarakhand) - 6 days
- Kedarkantha (Uttarakhand) - 4 days

**Cultural Sensitivity**
- Respect local customs and traditions
- Ask permission before photographing people
- Support local economy by buying local products
- Leave no trace - pack out all trash

Remember, the mountains will always be there. Your safety is more important than reaching any summit. Take your time, enjoy the journey, and create memories that will last a lifetime.`,
      author: {
        name: 'Karan Gupta',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80'
      },
      category: 'adventure',
      publishDate: '2024-06-10',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'destinations', name: 'Destinations' },
    { id: 'budget', name: 'Budget Travel' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'culture', name: 'Culture' },
    { id: 'food', name: 'Food & Cuisine' }
  ];

  // If viewing individual blog post
  if (slug) {
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) {
      return (
        <div className="min-h-screen bg-white">
          <Header />
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
            <Link to="/blog">
              <Button>← Back to Blog</Button>
            </Link>
          </div>
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Back to blog */}
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            ← Back to Blog
          </Link>

          {/* Hero Image */}
          <div className="h-96 rounded-lg overflow-hidden mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Post Header */}
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 capitalize">
              {post.category}
            </Badge>
            
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h3 key={index} className="text-xl font-bold mt-8 mb-4">{paragraph.slice(2, -2)}</h3>;
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                return (
                  <ul key={index} className="list-disc pl-6 mb-4">
                    {items.map((item, i) => (
                      <li key={i}>{item.slice(2)}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={index} className="mb-4">{paragraph}</p>;
            })}
          </div>

          {/* Related Posts */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map(relatedPost => (
                <Card key={relatedPost.id} className="overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${relatedPost.image})` }} />
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">{relatedPost.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{relatedPost.excerpt}</p>
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <Button variant="outline" size="sm">Read More</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </article>

        <Footer />
      </div>
    );
  }

  // Blog homepage
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Travel Blog</h1>
          <p className="text-xl text-gray-600">Discover amazing destinations, travel tips, and insider guides</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            {blogPosts.filter(post => post.featured).map(post => (
              <Card key={post.id} className="overflow-hidden lg:flex">
                <div className="lg:w-1/2">
                  <div className="h-64 lg:h-full bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
                </div>
                <div className="lg:w-1/2">
                  <CardContent className="p-8">
                    <Badge variant="outline" className="mb-4">Featured</Badge>
                    <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    
                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={post.author.avatar} />
                          <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{post.author.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <Button className="inline-flex items-center gap-2">
                        Read Full Article
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.filter(post => !post.featured || selectedCategory !== 'all').map(post => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3 capitalize">
                  {post.category}
                </Badge>
                
                <h3 className="font-bold text-lg mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{post.author.name}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <Link to={`/blog/${post.slug}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No posts found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default TravelBlog;
