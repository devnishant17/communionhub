import React from 'react'
import { FaGooglePlay, FaApple } from "react-icons/fa";


function Mobile() {
  return (
    <div className="w-full relative mx-auto mt-12 px-4 sm:px-6 lg:px-8">
    {/* Background Section */}
    <div className="w-full mx-auto h-auto sm:h-[400px] bg-[#43feb6] rounded-xl relative flex flex-col sm:flex-row items-center sm:items-start py-8 sm:py-0">
      {/* Text Section */}
      <div className="flex flex-col items-center lg:mt-12 sm:items-start sm:ml-8 sm:mt-8 lg:ml-16">
        {/* Download App Text */}
        <div className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold font-montserrat text-center sm:text-left leading-[1.2]">
          Download Our <br /> Mobile App
        </div>

        {/* Subtext */}
        <div className="text-black text-sm sm:text-base font-semibold font-montserrat mt-4 text-center sm:text-left">
          Available for free on these platforms
        </div>

        {/* Buttons */}
        <div className="flex mt-6 space-x-4">
          {/* Play Store Button */}
          <div className="flex items-center bg-white rounded-md shadow-md px-4 py-2">
            <FaGooglePlay />
            <span className="ml-2 text-sm sm:text-base font-semibold text-black">
              PlayStore
            </span>
          </div>

          {/* Apple Store Button */}
          <div className="flex items-center bg-white rounded-md shadow-md px-4 py-2">
          <FaApple />
            <span className="ml-2 text-sm sm:text-base font-semibold text-black">
              AppleStore
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="hidden sm:block lg:mt-12 sm:mt-8 sm:absolute sm:right-8 lg:right-16">
        <img
          src="/static/icomoon-free_mobile.png" // Replace with actual image URL
          alt="Mobile App Preview"
          className=""
        />
      </div>
    </div>
  </div>  )
}

export default Mobile