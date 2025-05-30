
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Globe, Award, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'AI-Powered Launch',
      description: 'Launched Sanchaari with cutting-edge AI trip planning technology'
    },
    {
      year: '2023',
      title: 'Founding Vision',
      description: 'Started with a mission to make incredible India accessible to every traveler'
    },
    {
      year: '2023',
      title: 'Research & Development',
      description: 'Extensive research into Indian travel patterns and user preferences'
    }
  ];

  const team = [
    {
      name: 'Arjun Patel',
      role: 'Co-Founder & CEO',
      bio: 'Former McKinsey consultant with 8+ years in travel tech. Passionate about democratizing travel in India.',
      linkedin: '#'
    },
    {
      name: 'Priya Sharma',
      role: 'Co-Founder & CTO',
      bio: 'Ex-Google engineer specializing in AI/ML. Led recommendation systems for 100M+ users.',
      linkedin: '#'
    },
    {
      name: 'Karan Singh',
      role: 'Head of Product',
      bio: 'Former product lead at Airbnb. Expert in building delightful user experiences for travel.',
      linkedin: '#'
    },
    {
      name: 'Sneha Reddy',
      role: 'Head of Operations',
      bio: '10+ years in hospitality and travel operations. Ensures seamless service delivery.',
      linkedin: '#'
    }
  ];

  const pressLogos = [
    'Economic Times', 'YourStory', 'Inc42', 'LiveMint', 'Business Standard'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Reimagining Travel for Every Indian</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Sanchaari combines the power of artificial intelligence with deep local expertise 
            to create personalized travel experiences that celebrate the incredible diversity of India.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/careers">We're Hiring</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/help/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-500" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                To make travel planning effortless and accessible for every Indian, 
                whether you're exploring your home state or venturing across the country. 
                We believe everyone deserves to experience the magic of incredible India.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-blue-500" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                To become the most trusted AI-powered travel companion for Indian travelers, 
                fostering cultural exchange, supporting local communities, and creating 
                unforgettable memories across our diverse nation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Timeline */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Our Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-semibold">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-200 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate travelers and technologists working to transform how India travels
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6 text-yellow-500" />
              Our Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-50 p-6 rounded-lg mb-4">
                  <Users className="h-12 w-12 text-blue-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Community First</h3>
                <p className="text-gray-600">
                  We prioritize authentic local experiences and support community-based tourism
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-50 p-6 rounded-lg mb-4">
                  <Heart className="h-12 w-12 text-green-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Thoughtful Innovation</h3>
                <p className="text-gray-600">
                  Technology should enhance human connection, not replace it
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-50 p-6 rounded-lg mb-4">
                  <Globe className="h-12 w-12 text-purple-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Cultural Respect</h3>
                <p className="text-gray-600">
                  Celebrating diversity while promoting responsible and sustainable travel
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Press Mentions */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>In the News</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">Featured in leading publications for our innovative approach to travel technology:</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              {pressLogos.map((logo, index) => (
                <div key={index} className="text-gray-500 font-semibold text-lg">
                  {logo}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center bg-blue-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for passionate people who want to revolutionize travel in India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/careers">
                View Open Positions
                <ExternalLink className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/help/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
