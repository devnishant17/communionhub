import React from 'react'

function Testimonial() {
  
const clientLogos = [
  "/static/Clients/01.png",
  "/static/Clients/02.png",
  "/static/Clients/03.png",
  "/static/Clients/04.png",
  "/static/Clients/05.png",
  "/static/Clients/06.png",
  "/static/Clients/07.png",
  "/static/Clients/08.png",
  "/static/Clients/09.png",
];

  return (
    <section>
    <div className="bg-gradient-to-r from-gray-100 to-yellow-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">
          <span className="text-transparent stroke-gray-700 stroke-[1px]">OUR</span>{" "}
          <span className="text-black">CLIENTS</span>
        </h2>
        <p className="text-lg text-gray-700 mt-2">Trusted by 1000K plus customers</p>

        {/* Logo Grid */}
        <div className="grid grid-cols-5 gap-6 mt-6">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img src={logo} alt="Client Logo" className="w-32 grayscale hover:grayscale-0 transition" />
            </div>
          ))}
        </div>
      </div>
    </div>

    </section>
  )
}

export default Testimonial