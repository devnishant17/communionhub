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
  car: "/static/electric-car.png",
  pet: "/static/pawprint.png",
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
        <div className="absolute bottom-2 left-2 text-sm font-bold font-montserrat text-[#ef0d0d]">
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
      title: "Well Communication",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      details: ["3", "1", "2", "0"],
      imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Blue  Modern",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      details: ["3", "1", "2", "0"],
      imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Beach House party",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      details: ["3", "1", "2", "0"],
      imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Country Boys ",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      details: ["3", "1", "2", "0"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1681487469745-91d1d8a5836b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Large communication",
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
