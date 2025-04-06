
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DestinationCardProps {
  id: number;
  name: string;
  image: string;
  location: string;
  description: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  id,
  name,
  image,
  location,
  description
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <img 
        src={image} 
        alt={name} 
        className="w-full destination-image"
      />
      <div className="p-5">
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1 text-tourOrange" />
          <span className="text-sm">{location}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link to={`/destinations/${id}`}>
          <Button className="w-full bg-tourGreen hover:bg-tourGreen/90 text-white">
            Explore Tour
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
