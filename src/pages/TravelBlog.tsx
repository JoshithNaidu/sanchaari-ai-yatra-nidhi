
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Clock, Search, Share2, Heart, MessageCircle, Calendar, User } from 'lucide-react';

const TravelBlog = () => {
  const { slug } = useParams();
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      slug: 'monsoon-magic-western-ghats',
      title: 'Monsoon Magic: Trekking Through the Western Ghats',
      excerpt: 'Discover the ethereal beauty of the Western Ghats during monsoon season. From misty mountains to cascading waterfalls...',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
      author: 'Priya Sharma',
      publishDate: '2024-06-15',
      readingTime: '8 min read',
      tags: ['Adventure', 'Monsoon', 'Trekking'],
      featured: true
    },
    {
      id: 2,
      slug: 'rajasthan-heritage-walk',
      title: 'A Heritage Walk Through Rajasthan\'s Royal Cities',
      excerpt: 'Step into the pages of history as we explore the magnificent palaces and forts of Rajasthan...',
      thumbnail: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
      author: 'Raj Patel',
      publishDate: '2024-06-12',
      readingTime: '12 min read',
      tags: ['Heritage', 'Culture', 'Rajasthan'],
      featured: false
    },
    {
      id: 3,
      slug: 'goa-beyond-beaches',
      title: 'Goa Beyond Beaches: Hidden Cultural Gems',
      excerpt: 'While beaches are Goa\'s main attraction, the state harbors rich Portuguese heritage and local traditions...',
      thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&q=80',
      author: 'Maria D\'Souza',
      publishDate: '2024-06-10',
      readingTime: '6 min read',
      tags: ['Culture', 'Hidden Gems', 'Goa'],
      featured: false
    }
  ];

  const categories = ['All', 'Adventure', 'Culture', 'Food', 'Budget Travel', 'Solo Travel', 'Group Travel'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  // If viewing individual post
  if (slug) {
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) return <div>Post not found</div>;

    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Header Image */}
          <div className="h-96 rounded-lg overflow-hidden mb-8">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${post.thumbnail})` }}
            />
          </div>

          {/* Article Meta */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="lead text-xl text-gray-700 mb-6">{post.excerpt}</p>
            
            <h2>The Journey Begins</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            <h2>Hidden Treasures</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
            <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 my-6">
              "Travel is the only thing you buy that makes you richer." - Anonymous
            </blockquote>
            
            <h2>Travel Tips</h2>
            <ul>
              <li>Pack light and carry essentials only</li>
              <li>Research local customs and traditions</li>
              <li>Book accommodations in advance during peak season</li>
              <li>Keep emergency contacts handy</li>
            </ul>
          </div>

          {/* Social Share */}
          <div className="flex items-center justify-between py-6 border-t border-b border-gray-200 mb-8">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                Comment
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Share:</span>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Inspired to Visit?</h3>
            <p className="text-gray-600 mb-6">Chat with Sanchaari to plan a similar trip tailored to your preferences</p>
            <Button size="lg">
              <Link to="/chat">Plan My Trip</Link>
            </Button>
          </div>
        </article>

        <Footer />
      </div>
    );
  }

  // Blog homepage
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Travel Blog</h1>
          <p className="text-xl text-gray-600">Stories, tips, and inspiration for your next adventure</p>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Story</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${featuredPost.thumbnail})` }}
                  />
                </div>
                <CardContent className="md:w-1/2 p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span>{featuredPost.author}</span>
                    <span>{featuredPost.readingTime}</span>
                    <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                  </div>
                  <Button>
                    <Link to={`/blog/${featuredPost.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </section>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Article Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {regularPosts.map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.thumbnail})` }} />
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <h3 className="font-bold text-lg mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{post.author}</span>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                    <Button size="sm">
                      <Link to={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Popular Tags */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Adventure', 'Culture', 'Food', 'Budget Travel', 'Solo Travel', 'Monsoon', 'Heritage'].map(tag => (
                      <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-blue-50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map(post => (
                      <div key={post.id} className="flex gap-3">
                        <div className="w-16 h-16 bg-cover bg-center rounded" style={{ backgroundImage: `url(${post.thumbnail})` }} />
                        <div className="flex-1">
                          <Link to={`/blog/${post.slug}`} className="font-medium hover:text-blue-600 line-clamp-2 text-sm">
                            {post.title}
                          </Link>
                          <p className="text-xs text-gray-500 mt-1">{post.readingTime}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TravelBlog;
