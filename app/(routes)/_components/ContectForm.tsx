import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const ContactForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-40  bg-gray-100">
      <div className="bg-white shadow-md rounded-lg  flex flex-col md:flex-row relative border-4">
        {/* Left Section */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-4xl font-extrabold text-gray-700">
            <span className=" stroke-gray-700 stroke-[1px]">
              LET’S DISCUSS
            </span>
          </h2>
          <h3 className="text-xl font-bold text-gray-700 mt-2">YOUR NEXT PROJECT</h3>
          <p className="mt-3 font-semibold text-gray-600">
            <span className="font-bold">Ready to turn your vision into reality?</span> Whether you need branding, web design, packaging, or digital marketing, we’re here to help. Let’s brainstorm, create, and bring your ideas to life.
          </p>
          <button className="mt-5 bg-gray-700 text-white px-6 py-3 rounded-md font-bold hover:bg-gray-800">
            BOOK AN APPOINTMENT
          </button>
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-1/2 p-6">
          <form className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-700">Full Name:</label>
              <input type="text" className="w-full border rounded-md p-2 text-gray-700" />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">Email:</label>
              <input type="email" className="w-full border rounded-md p-2 text-gray-700" />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">Contact Number:</label>
              <input type="tel" className="w-full border rounded-md p-2 text-gray-700" />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">Message:</label>
              <textarea className="w-full border rounded-md p-2 h-20 text-gray-700"></textarea>
            </div>
            <button type="submit" className="bg-gray-700 text-white px-6 py-2 rounded-md font-bold w-full hover:bg-gray-800">
              Submit
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="bg-gray-700 text-white p-2 rounded-full">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-gray-700 text-white p-2 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-700 text-white p-2 rounded-full">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Diagonal "Book Now" Banner */}
        <div className="absolute bottom-0 right-0 rotate-[-15deg] bg-gray-700 text-white px-6 py-2 font-bold text-sm shadow-md">
          Book Now
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
