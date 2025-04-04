import React from 'react'

export default function Hero() {
  return (
    <section>
    <div className="bg-[#FFF5F0] text-black flex justify-between items-center  max-md:block max-md:p-0">
      {/* Left Content */}
      <div className="w-1/2 p-10 max-lg:w-full max-lg:p-6">
        <h1 className="text-5xl max-md:text-[23px] font-bold leading-tight mb-4 max-md:flex max-md:gap-x-2">
          Buid Your
          <div className="text-[#fcb600]">Awesome Platform</div>
        </h1>
        <p className="text-2xl max-md:text-lg">
            Corcus Studio LLP Are the one-step solution for businesses searching for digital services.
        </p>
        <div className="mt-8 flex gap-x-4 max-md:block">
          <button

            className="bg-[#fcb600] text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-800 max-md:w-full"
          >
            GET STARTED
          </button>
          <button

            className="border-2 border-[#fcb600] text-[#fcb600] px-6 py-3 rounded-full shadow-md hover:bg-yellow-100 max-md:w-full max-md:mt-4"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-1/2 max-md:w-full max-md:p-0 p-10">
        <img
          src="https://plus.unsplash.com/premium_photo-1682284548131-58cb47f6ab2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjaG9sYXJzaGlwfGVufDB8fDB8fHww"
          alt="Student"
          className="z-10 w-full h-full object-cover rounded-lg "
        />
      </div>
    </div>
  </section>
  )
}
