
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, ExternalLink, Briefcase, Code, Palette, BarChart3 } from 'lucide-react';

const Careers = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    team: 'all',
    location: 'all',
    type: 'all'
  });

  const filters = {
    team: [
      { value: 'all', label: 'All Teams' },
      { value: 'engineering', label: 'Engineering' },
      { value: 'product', label: 'Product' },
      { value: 'design', label: 'Design' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'operations', label: 'Operations' }
    ],
    location: [
      { value: 'all', label: 'All Locations' },
      { value: 'bangalore', label: 'Bangalore' },
      { value: 'mumbai', label: 'Mumbai' },
      { value: 'remote', label: 'Remote' },
      { value: 'hybrid', label: 'Hybrid' }
    ],
    type: [
      { value: 'all', label: 'All Types' },
      { value: 'full-time', label: 'Full-time' },
      { value: 'contract', label: 'Contract' },
      { value: 'intern', label: 'Internship' }
    ]
  };

  const jobs = [
    {
      id: 1,
      title: 'Senior Full-Stack Engineer',
      team: 'engineering',
      location: 'bangalore',
      type: 'full-time',
      summary: 'Build scalable travel platforms using React, Node.js, and AI/ML technologies',
      requirements: ['5+ years experience', 'React/Node.js expertise', 'Travel domain preferred'],
      remote: false,
      icon: Code
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      team: 'engineering',
      location: 'hybrid',
      type: 'full-time',
      summary: 'Develop recommendation systems and AI-powered trip planning algorithms',
      requirements: ['Python/PyTorch', 'NLP experience', 'Recommendation systems'],
      remote: true,
      icon: Code
    },
    {
      id: 3,
      title: 'Senior Product Manager',
      team: 'product',
      location: 'bangalore',
      type: 'full-time',
      summary: 'Lead product strategy for our AI travel companion and booking platform',
      requirements: ['5+ years PM experience', 'Travel/consumer apps', 'Data-driven approach'],
      remote: false,
      icon: Briefcase
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      team: 'design',
      location: 'remote',
      type: 'full-time',
      summary: 'Design intuitive travel experiences that delight millions of users',
      requirements: ['3+ years design experience', 'Figma expertise', 'Mobile-first design'],
      remote: true,
      icon: Palette
    },
    {
      id: 5,
      title: 'Growth Marketing Manager',
      team: 'marketing',
      location: 'mumbai',
      type: 'full-time',
      summary: 'Drive user acquisition and engagement through performance marketing',
      requirements: ['Digital marketing', 'Analytics tools', 'Travel industry experience'],
      remote: false,
      icon: BarChart3
    },
    {
      id: 6,
      title: 'Product Design Intern',
      team: 'design',
      location: 'hybrid',
      type: 'intern',
      summary: '6-month internship working on user research and interface design',
      requirements: ['Design portfolio', 'Figma skills', 'Fresh graduate or final year'],
      remote: true,
      icon: Palette
    }
  ];

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const filteredJobs = jobs.filter(job => {
    return (selectedFilters.team === 'all' || job.team === selectedFilters.team) &&
           (selectedFilters.location === 'all' || job.location === selectedFilters.location) &&
           (selectedFilters.type === 'all' || job.type === selectedFilters.type);
  });

  const perks = [
    { title: 'Competitive Salary', description: 'Market-leading compensation with equity' },
    { title: 'Health & Wellness', description: 'Complete medical insurance for you and family' },
    { title: 'Learning Budget', description: '₹50,000 annual budget for courses and conferences' },
    { title: 'Travel Allowance', description: '₹1L annual credit to explore India' },
    { title: 'Flexible Work', description: 'Hybrid model with work-from-home flexibility' },
    { title: 'Team Retreats', description: 'Quarterly team trips across incredible India' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Join Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Help us build the future of travel in India. We're looking for passionate people 
            who want to make travel accessible, delightful, and meaningful for millions of Indians.
          </p>
          <Button size="lg" asChild>
            <a href="https://linkedin.com/company/sanchaari" target="_blank" rel="noopener noreferrer">
              Follow Us on LinkedIn
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(filters).map(([category, options]) => (
                <div key={category}>
                  <label className="block text-sm font-medium mb-2 capitalize">{category}</label>
                  <select
                    value={selectedFilters[category as keyof typeof selectedFilters]}
                    onChange={(e) => handleFilterChange(category, e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {options.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Job Listings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Open Positions ({filteredJobs.length})
          </h2>
          
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <job.icon className="h-6 w-6 text-blue-600" />
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{job.summary}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location.charAt(0).toUpperCase() + job.location.slice(1)}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {job.team.charAt(0).toUpperCase() + job.team.slice(1)}
                        </Badge>
                        {job.remote && (
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            Remote OK
                          </Badge>
                        )}
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Key Requirements:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index}>• {req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Button className="ml-6">
                      Apply Now
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No positions match your current filters.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSelectedFilters({team: 'all', location: 'all', type: 'all'})}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Perks & Benefits */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Why Join Sanchaari?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, index) => (
                <div key={index} className="text-center p-4">
                  <h3 className="font-semibold text-lg mb-2">{perk.title}</h3>
                  <p className="text-gray-600">{perk.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Application Process */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Our Hiring Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Application</h4>
                <p className="text-sm text-gray-600">Submit your resume and portfolio</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Screening</h4>
                <p className="text-sm text-gray-600">Brief chat with our talent team</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Technical</h4>
                <p className="text-sm text-gray-600">Role-specific assessment or case study</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2">Final Round</h4>
                <p className="text-sm text-gray-600">Meet the team and leadership</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center bg-blue-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Perfect Role?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always interested in meeting talented people. Send us your resume!
          </p>
          <Button size="lg" asChild>
            <a href="mailto:careers@sanchaari.com">
              Send us your Resume
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
