"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram,FaLinkedinIn} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [isCounsellingPopup, setIsCounsellingPopup] = useState(false);

  const toggleCounsellingPopup = () => {
    setIsCounsellingPopup(!isCounsellingPopup);
  };

  const closeCounsellingPopup = () => {
    setIsCounsellingPopup(false);
  };

  return (
    <div className="flex flex-col overflow-hidden px-4 mt-40 pb-8 bg-gray-200 border-t-2 border-gray-300">
      <div className="flex flex-col py-8 w-full bg-gray-200 md:px-10 lg:px-16">
        <div className="w-full">
                      {/* Logo Section */}
        <div className="flex-1 min-w-[200px] h-20">
              <img
                loading="lazy"
                src="https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png"
                className="object-contain w-45"
                alt="Company Logo"
              />
            </div>

          <div className="flex flex-wrap gap-8">
            {/* Company Links */}
            <div className="flex-1 min-w-[150px]">
              <h3 className="text-lg font-bold mb-4 text-zinc-800">COMPANY</h3>
              <ul className="space-y-3 text-sm text-zinc-600">
              <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/aboutUs" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/scholarship" className="hover:underline">
                    Explore Events
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help Center */}
            <div className="flex-1 min-w-[150px]">
              <h3 className="text-lg font-bold mb-4 text-zinc-800">HELP CENTER</h3>
              <ul className="space-y-3 text-sm text-zinc-600">
                <li>
                  <Link href="/findEvents" className="hover:underline">
                    Find a Event
                  </Link>
                </li>
                <li>
                  <button onClick={toggleCounsellingPopup} className="hover:underline">
                    Need Help?
                  </button>
                </li>
                <li>
                  <Link href="/Support" className="hover:underline">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/Profile" className="hover:underline">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/FAQ" className="hover:underline">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex-1 min-w-[250px]">
              <h3 className="text-lg font-bold mb-4 text-zinc-800">CONTACT INFO</h3>
              <ul className="space-y-3 text-sm text-zinc-600">
                <li>Phone: 8083381159</li>
                <li>Email: kumarnishant760@gmail.com</li>
                <li>Location: Patna, Bihar, India</li>
              </ul>
               
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-7 text-blue-800 hover:text-blue-600">
                <FaFacebookSquare className="text-2xl"/>
                </a>
            
                <a href="https://x.com/devbabu1723" className="w-7 text-gray-600 hover:text-gray-400">
                <FaXTwitter className="text-2xl"/>
                </a>
                
                <a href="https://www.instagram.com/dev_nishant1723/?next=%2F&hl=en" className="w-7 text-pink-800 hover:text-pink-500">
                <FaInstagram className="text-2xl"/>
                </a>

                <a href="https://www.linkedin.com/in/nishant-kumar-2a64a5166/" className="w-7 text-blue-800 hover:text-blue-600">
                <FaLinkedinIn className="text-2xl" />                
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-wrap justify-between mt-10 text-sm text-zinc-700">
          <div><span className="font-bold text-blue-700">©</span> 2025 <span className="font-bold text-red-700">DEV NISH</span> | All rights reserved</div>
          <div>Created with love by <span className="text-red-700 font-bold"><a href="linkedin.com/in/nishant-kumar-2a64a5166/" target="_blank" rel="noopener noreferrer">NISHANT</a>
          </span></div>
        </div>
      </div>

      {isCounsellingPopup && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={closeCounsellingPopup}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg flex flex-col lg:flex-row max-w-4xl max-h-[90vh] w-full my-10 overflow-auto relative">

              {/* Left Section */}
              <div className="w-full lg:w-1/2 p-6 flex flex-col items-center justify-center bg-white">
                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Map Illustration" className="rounded-full w-1/2 mb-4" />
                <h2 className="text-2xl font-bold text-center mb-2 text-black">
                  Start Your Events Commuion
                </h2>
                <p className="text-gray-700 text-center mb-6 px-4">
                Discover the power of connection with Communion. Uniting diverse communities through spirituality and innovation, we foster inclusivity, collaboration, and social cohesion for a better world.
                </p>
                <span className="text-gray-600 text-sm">📄 Brochure Details</span>
              </div>

              {/* Right Section */}
              <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between bg-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-center">
                  Register Now To Consult A Communion
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Get details and latest updates
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <div className="flex">
                    <span className="p-2 border border-gray-300 bg-gray-100 rounded-l">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full p-2 border border-gray-300 rounded-r"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="City You Live In"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Course Interested In"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <textarea
                    placeholder="Write A Message"
                    maxLength={300}
                    className="w-full p-2 border border-gray-300 rounded resize-none"
                  ></textarea>
                  <p className="text-sm text-gray-500 text-right">0/300</p>
                  <p className="text-xs text-center text-gray-500">
                    By Submitting this form you accept and agree to our{" "}
                    <a href="#" className="text-blue-500 underline">
                      Terms Of Use.
                    </a>
                  </p>
                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
              <button
                onClick={closeCounsellingPopup}
                className="absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;