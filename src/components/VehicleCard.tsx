
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, Fuel, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VehicleCardProps {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  passengers: number;
  luggage: number;
  transmission: string;
  fuelEfficiency: string;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  id,
  name,
  image,
  category,
  price,
  passengers,
  luggage,
  transmission,
  fuelEfficiency
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden tour-card transition-all duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-tourOrange text-white text-xs font-semibold px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-tourBlue">${price}<span className="text-sm font-normal text-gray-600">/day</span></span>
          <div className="flex items-center text-gray-600">
            <Car className="h-4 w-4 mr-1" />
            <span className="text-sm">{transmission}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-2 text-tourBlue" />
            <span>{passengers} Passengers</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Briefcase className="h-4 w-4 mr-2 text-tourBlue" />
            <span>{luggage} Luggage</span>
          </div>
          <div className="flex items-center text-gray-600 col-span-2">
            <Fuel className="h-4 w-4 mr-2 text-tourBlue" />
            <span>{fuelEfficiency}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button className="flex-1 bg-tourBlue hover:bg-tourBlue/90 text-white">
            Book Now
          </Button>
          <Link to={`/vehicles/${id}`} className="flex-1">
            <Button variant="outline" className="w-full border-tourBlue text-tourBlue hover:bg-tourBlue/10">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
