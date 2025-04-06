
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, Car, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Car className="h-6 w-6 text-tourBlue" />
            <span className="text-xl font-bold text-tourBlue">TourWheels</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-tourBlue font-medium">Home</Link>
            <Link to="/vehicles" className="text-gray-700 hover:text-tourBlue font-medium">Vehicles</Link>
            <Link to="/destinations" className="text-gray-700 hover:text-tourBlue font-medium">Destinations</Link>
            <Link to="/about" className="text-gray-700 hover:text-tourBlue font-medium">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-tourBlue font-medium">Contact</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center gap-2 text-tourBlue">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <Button className="bg-tourOrange hover:bg-tourOrange/90 text-white">Book Now</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-tourBlue font-medium py-2 px-3 hover:bg-gray-100 rounded-md">Home</Link>
              <Link to="/vehicles" className="text-gray-700 hover:text-tourBlue font-medium py-2 px-3 hover:bg-gray-100 rounded-md">Vehicles</Link>
              <Link to="/destinations" className="text-gray-700 hover:text-tourBlue font-medium py-2 px-3 hover:bg-gray-100 rounded-md">Destinations</Link>
              <Link to="/about" className="text-gray-700 hover:text-tourBlue font-medium py-2 px-3 hover:bg-gray-100 rounded-md">About Us</Link>
              <Link to="/contact" className="text-gray-700 hover:text-tourBlue font-medium py-2 px-3 hover:bg-gray-100 rounded-md">Contact</Link>
              <div className="flex items-center gap-2 text-tourBlue py-2 px-3">
                <Phone className="h-4 w-4" />
                <span className="font-medium">+1 (555) 123-4567</span>
              </div>
              <Button className="bg-tourOrange hover:bg-tourOrange/90 text-white mt-2">Book Now</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
