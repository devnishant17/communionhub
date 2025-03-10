"use client";

import React from "react";

interface CardProps {
  title: string;
  priceRange: string;
  address: string;
  details: string[];
  imageUrl: string;
}

const icons = {
  bed: "/static/bed.png",
  vector: "/static/Vector.png",
  car: "/static/car-icon.png",
  pet: "/static/pet-icon.png",
};

const Card: React.FC<CardProps> = ({ title, priceRange, address, details, imageUrl }) => {
  const iconKeys = Object.keys(icons) as (keyof typeof icons)[];

  return (
    <div className="w-full max-w-[382px] p-4 relative">
      {/* Image Section */}
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px]">
        <img
          src={imageUrl}
          alt={title}
          width={382}
          height={340}
          className="w-full h-full object-cover rounded-xl"
          
        />
        {/* Price at the Bottom of Image */}
        <div className="absolute bottom-2 left-2 text-sm font-medium font-montserrat text-[#9a9a9a]">
          {priceRange}
        </div>
      </div>

      {/* Title */}
      <div className="mt-4 text-lg sm:text-xl font-bold text-[#484848]">{title}</div>

      {/* Address */}
      <div className="text-sm font-medium text-[#9a9a9a]">{address}</div>

      {/* Details */}
      <div className="flex mt-4 space-x-4 sm:space-x-6 text-[#484848]">
        {details.map((detail, index) => (
          <div key={index} className="flex items-center text-sm sm:text-base font-semibold space-x-2">
            {iconKeys[index] && <img src={icons[iconKeys[index]]} alt="icon" width={24} height={24} />}
            <span>{detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CollectionCard: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: "Well Furnished Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      details: ["3", "1", "2", "0"],
      imageUrl: "https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Blue Door Villa Modern",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      details: ["3", "1", "2", "0"],
      imageUrl: "https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Beach House Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      details: ["3", "1", "2", "0"],
      imageUrl: "https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Country Boys Hostel",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      details: ["3", "1", "2", "0"],
      imageUrl: "https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Large Family Flat on Rent",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      details: ["3", "1", "2", "0"],
      imageUrl: "https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Beach House Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      details: ["3", "1", "2", "0"],
      imageUrl: "https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#484848]">CHOOSE A COLLECTION</h2>
      <div className="w-[100px] sm:w-[140px] h-1.5 bg-[#484848] rounded-[3px] mt-2"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CollectionCard;
