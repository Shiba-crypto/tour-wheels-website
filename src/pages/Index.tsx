
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import VehicleCard from '@/components/VehicleCard';
import DestinationCard from '@/components/DestinationCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Shield, Timer, CreditCard, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Vehicle data
  const vehicles = [
    {
      id: 1,
      name: 'Economy Compact',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80',
      category: 'ECONOMY',
      price: 35,
      passengers: 4,
      luggage: 2,
      transmission: 'Automatic',
      fuelEfficiency: '35 mpg'
    },
    {
      id: 2,
      name: 'SUV Family Cruiser',
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80',
      category: 'SUV',
      price: 65,
      passengers: 7,
      luggage: 4,
      transmission: 'Automatic',
      fuelEfficiency: '28 mpg'
    },
    {
      id: 3,
      name: 'Luxury Sedan',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80',
      category: 'LUXURY',
      price: 85,
      passengers: 5,
      luggage: 3,
      transmission: 'Automatic',
      fuelEfficiency: '32 mpg'
    }
  ];

  // Destination data
  const destinations = [
    {
      id: 1,
      name: 'Mountain Adventure',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80',
      location: 'Rocky Mountains',
      description: 'Experience the majestic beauty of the Rocky Mountains with breathtaking views and exciting hiking trails.'
    },
    {
      id: 2,
      name: 'Coastal Getaway',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80',
      location: 'Pacific Coast',
      description: 'Drive along the stunning Pacific Coast, visiting charming beach towns and witnessing spectacular ocean vistas.'
    },
    {
      id: 3,
      name: 'Historic Route',
      image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80',
      location: 'East Coast',
      description: 'Explore the rich history and culture of America\'s East Coast, from colonial landmarks to modern cities.'
    },
    {
      id: 4,
      name: 'Wine Country Tour',
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80',
      location: 'Napa Valley',
      description: 'Indulge in a luxurious tour of wine country, with tastings at premier vineyards and scenic countryside drives.'
    }
  ];

  // Testimonial data
  const testimonials = [
    {
      name: 'John Smith',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      comment: 'Our family trip to the mountains was perfect! The SUV from TourWheels was spacious, comfortable, and handled the mountain roads with ease.',
      location: 'Denver, CO'
    },
    {
      name: 'Sarah Johnson',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      comment: 'The luxury sedan we rented for our wine country tour was amazing! Clean, elegant, and the perfect complement to our vacation.',
      location: 'San Francisco, CA'
    },
    {
      name: 'Mike Thompson',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      rating: 4,
      comment: 'Great service and reasonable prices. The economy car was perfect for our coastal drive. Will definitely rent from TourWheels again!',
      location: 'Seattle, WA'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-image relative min-h-[600px] flex items-center">
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore the World on Your Terms</h1>
              <p className="text-xl mb-8">Discover the freedom of the open road with our touring-focused rental vehicles. Perfect for your next adventure.</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-tourOrange hover:bg-tourOrange/90 text-white">
                  Book a Vehicle
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  View Tour Packages
                </Button>
              </div>
            </div>
            
            <div className="lg:max-w-md">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tourBlue mb-4">Why Choose TourWheels</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in providing vehicles that make your touring experience comfortable, reliable, and unforgettable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-tourGreen/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-tourGreen" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Safety First</h3>
              <p className="text-gray-600">
                All our vehicles undergo rigorous safety inspections and maintenance checks.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-tourBlue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Timer className="h-8 w-8 text-tourBlue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Roadside assistance and customer support available around the clock.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-tourOrange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-tourOrange" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No Hidden Fees</h3>
              <p className="text-gray-600">
                Transparent pricing with no unexpected charges or hidden fees.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Multiple Locations</h3>
              <p className="text-gray-600">
                Convenient pickup and drop-off at multiple locations nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vehicles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-tourBlue mb-2">Featured Touring Vehicles</h2>
              <p className="text-gray-600">
                Specially selected vehicles for comfortable and memorable touring experiences.
              </p>
            </div>
            <Link to="/vehicles" className="hidden md:flex items-center text-tourBlue hover:text-tourBlue/80 font-medium">
              <span>View all vehicles</span>
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/vehicles">
              <Button variant="outline" className="border-tourBlue text-tourBlue hover:bg-tourBlue/10">
                View All Vehicles
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Destinations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-tourBlue mb-2">Popular Tour Destinations</h2>
              <p className="text-gray-600">
                Discover amazing touring routes and destinations for your next adventure.
              </p>
            </div>
            <Link to="/destinations" className="hidden md:flex items-center text-tourBlue hover:text-tourBlue/80 font-medium">
              <span>Explore all destinations</span>
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map(destination => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/destinations">
              <Button variant="outline" className="border-tourBlue text-tourBlue hover:bg-tourBlue/10">
                Explore All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tourBlue mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from travelers who have experienced the TourWheels difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-tourBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your perfect touring vehicle today and embark on the adventure of a lifetime.
          </p>
          <Button size="lg" className="bg-tourOrange hover:bg-tourOrange/90 text-white px-8">
            Book Now
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
