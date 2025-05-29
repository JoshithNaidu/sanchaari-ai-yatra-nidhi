
import React from 'react';
import { Button } from '@/components/ui/button';
import { Building, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnerCTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Are you a homestay owner, travel operator, or local guide?
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Join our platform and connect with travelers looking for authentic, local experiences across India.
          </p>
        </div>

        {/* Partner Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="h-8 w-8 text-blue-300" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Homestay Owners</h3>
            <p className="text-blue-200 text-sm">Share your home and culture</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-300" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Travel Operators</h3>
            <p className="text-blue-200 text-sm">Grow your business reach</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-blue-300" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Local Guides</h3>
            <p className="text-blue-200 text-sm">Share your local expertise</p>
          </div>
        </div>

        <Link to="/partner/signup">
          <Button 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg"
          >
            Join as a Partner
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PartnerCTASection;
