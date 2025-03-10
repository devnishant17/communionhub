import React from 'react'

function ListProperty() {
  return (
    <div className="w-full relative mx-auto mt-12 px-4 sm:px-6 lg:px-8">
    <div className="relative bg-[#1bd0d4] rounded-xl">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-between h-full p-6 md:p-12">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-[410px] space-y-4">
          <h2 className="text-[#484848] text-2xl sm:text-3xl font-bold font-montserrat leading-tight">
            List Your Communion
          </h2>
          <p className="text-[#292929] text-sm sm:text-base font-medium font-montserrat">
            Experience hassle-free hosting. Get started today!
          </p>
          <div className="mt-6">
            <a
              href="/host"
              className="inline-block px-6 py-3 bg-[#484848] text-[#1bd0d4] text-sm sm:text-base font-bold font-montserrat rounded-full"
            >
              Become A Host
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 max-w-md md:max-w-lg">
          <img
            src="/static/cloudmountain2 1.png"
            alt="Hosting illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
    )
}

export default ListProperty