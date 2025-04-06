
import React from 'react';
import { Car, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-tourBlue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="h-6 w-6" />
              <span className="text-xl font-bold">TourWheels</span>
            </div>
            <p className="text-gray-300 mb-6">
              Making your touring dreams come true with reliable, comfortable, and affordable rental cars.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-tourOrange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-tourOrange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-tourOrange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/vehicles" className="text-gray-300 hover:text-white transition-colors">Vehicles</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mountain Trails</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Coastal Routes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">National Parks</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Historic Towns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wine Country</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-tourOrange shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Tour Street, Adventure City, AC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-tourOrange shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-tourOrange shrink-0" />
                <span className="text-gray-300">info@tourwheels.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TourWheels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
