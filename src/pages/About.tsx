
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 flex-grow">
        <h1 className="text-3xl font-bold text-tourBlue mb-8">About Us</h1>
        <p className="text-gray-600 mb-6">This page is under construction. Check back soon to learn more about our company!</p>
        <Button className="bg-tourBlue hover:bg-tourBlue/90" onClick={() => window.history.back()}>
          Go Back
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
