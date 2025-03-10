"use client";
import React, { useState, useEffect } from "react";

const images = [
  "BannerImg_1.jpg",
  "BannerImg_2.jpg",
  "BannerImg_3.jpg",
  "BannerImg_4.jpg",
];

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="absolute top-0 left-0 w-full h-[60vh] overflow-hidden bg-black z-[-1]">
      <div
        className="flex h-full transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <img
              src={`static/${src}`}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        ))}
      </div>
      
        
    </div>
  );
};

export default Carousal;
