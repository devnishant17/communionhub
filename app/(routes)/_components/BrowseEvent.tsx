import React from 'react'

function BrowsePropertise() {
  return (
    <div className="w-auto lg:mx-8  mx-4 mt-22 px-4 sm:px-6 lg:px-8 bg-[#1cb2f6]">
    <div className="relative rounded-xl h-[427px]">
      {/* Overlay
{/* <div className="w-[90%] lg:w-[100%] max-w-[1206px] h-[395px] absolute bg-black/10 rounded-xl ml-6 top-[12px] lg:left-[15px] left-[-5px]" /> */}

      <div className="absolute inset-0 bg-black/10 rounded-xl mt-4 mb-4"></div>

      {/* Title Section */}
      <div className="absolute top-[10%] left-[10%] lg:left-[60px] text-white text-[38px] font-bold font-montserrat leading-[52px]">
        Discover <br /> More Communities
      </div>

      {/* Subtext */}
      <div className="absolute top-[50%] lg:top-[40%] left-[10%] lg:left-[67px] text-white text-base font-medium font-montserrat lg:leading-[52px]">
        Explore Communion by their categories/types...
      </div>

      {/* Button */}
      <div className="absolute top-[293px] lg:top-[263px] left-[10%] lg:left-[66px] w-[220px] h-[60px] bg-[#484848] rounded-[30px] flex items-center justify-center">
        <a
          href="/Events"
          className="text-white text-[15px] font-bold font-montserrat"
        >
          Create a Community
        </a>
      </div>
    </div>
  </div>  )
}

export default BrowsePropertise