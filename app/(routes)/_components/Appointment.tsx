import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
function Discover() {
  return (
    <div
    className="relative mx-auto mt-12 px-4 sm:px-6 lg:px-8 max-w-screen-xl"
    style={{ marginTop: "50px" }}
  >
    <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Left Section: Text */}
      <div className="lg:w-[472px] space-y-4">
        <h2 className="text-[#484848] text-3xl sm:text-4xl font-bold font-montserrat leading-tight">
          Let's Discuss
        </h2>
        <div className="text-4xl font-extrabold bg-amber-50">
  <p className="text-transparent stroke-black stroke-[11px]">LET’S DISCUSS</p>
  <p className="text-black">YOUR NEXT PROJECT</p>
</div>
        <div className="w-[140px] h-1.5 bg-[#484848] rounded-[3px]"></div>
        <p className="text-[#9a9a9a] text-sm sm:text-base font-normal font-montserrat leading-relaxed">
          Your Next project
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {/* Ask A Question and List A Property on the same line */}
          <div className="flex gap-4 space-x-8">
            <button className="text-[#484848] text-sm font-bold font-montserrat">
              Why Join Us?
            </button>
            <button className="text-[#484848] text-sm font-bold font-montserrat">
              List A Event
            </button>
          </div>
        </div>

        {/* Container for "Discover More" Button */}
        <div className="relative w-full max-w-[220px] h-[60px] ">
          <div className="mt-12 w-full h-full bg-[#484848] rounded-[30px] flex items-center justify-center">
          <a
  href="/events"
  className="text-white text-[15px] font-bold font-montserrat flex items-center gap-2"
>
  Learn More <span className='mt-1'><FaArrowRightLong /></span>
</a>

          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="lg:w-[382px] flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
          alt="event Image"
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
  )
}

export default Discover