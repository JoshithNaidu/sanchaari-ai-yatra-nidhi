
import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleSocialClick = (platform: string) => {
    const urls = {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      youtube: 'https://youtube.com'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <footer className="bg-brand-deep-blue text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/94fa41ec-96bd-400a-8fc5-4c52f8f19917.png" 
                alt="Sanchaari Logo" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-brand-sky-blue/70 mb-4">
              Your AI-powered companion for exploring the incredible diversity of India.
            </p>
            <div className="flex space-x-4">
              <Instagram 
                className="h-5 w-5 text-brand-sky-blue/70 hover:text-brand-accent-aqua cursor-pointer transition-colors" 
                onClick={() => handleSocialClick('instagram')}
              />
              <Linkedin 
                className="h-5 w-5 text-brand-sky-blue/70 hover:text-brand-accent-aqua cursor-pointer transition-colors" 
                onClick={() => handleSocialClick('linkedin')}
              />
              <Youtube 
                className="h-5 w-5 text-brand-sky-blue/70 hover:text-brand-accent-aqua cursor-pointer transition-colors" 
                onClick={() => handleSocialClick('youtube')}
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-brand-sky-blue/70">
              <li><Link to="/about" className="hover:text-brand-accent-aqua transition-colors">About</Link></li>
              <li><Link to="/careers" className="hover:text-brand-accent-aqua transition-colors">Careers</Link></li>
              <li><Link to="/help/contact" className="hover:text-brand-accent-aqua transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-brand-sky-blue/70">
              <li><Link to="/privacy" className="hover:text-brand-accent-aqua transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-accent-aqua transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-brand-accent-aqua transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Support & Community */}
          <div>
            <h3 className="font-semibold mb-4">Support & Community</h3>
            <ul className="space-y-2 text-brand-sky-blue/70">
              <li><Link to="/help/center" className="hover:text-brand-accent-aqua transition-colors">Help Center</Link></li>
              <li><Link to="/help/grievance" className="hover:text-brand-accent-aqua transition-colors">Grievance</Link></li>
              <li><Link to="/blog" className="hover:text-brand-accent-aqua transition-colors">Blog</Link></li>
              <li><Link to="/community" className="hover:text-brand-accent-aqua transition-colors">Forum</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-sky-blue/30 mt-8 pt-8 text-center text-brand-sky-blue/70">
          <p>&copy; 2024 Sanchaari. All rights reserved. Made with ❤️ for incredible India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
