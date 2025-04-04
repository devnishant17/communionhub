import React from "react"
import Link from "next/link";
import Menu from "../UserButton";

const Navbar = () => {
  return (
    <nav className="z-50 absolute  left-1/2 transform -translate-x-1/2 w-full max-w-screen-2xl bg-white/50 text-gray-400 px-4 sm:px-8 py-4  flex justify-between items-center">
      {/* Logo */}

      <Link href="/">
        <img className="h-auto w-[200px]" src="./static/logo.png" alt="logo" />
      </Link>

      {/* pages */}
      <div className="flex justify-between items-center gap-6">
      <Link href="/" className="hide-head hover:text-[#fcb600] text-black font-bold">
        Home
        </Link>
        <Link href="/Servies" className="hide-head hover:text-[#fcb600] text-black font-bold">
        Services
        </Link>
        <Link href="/Servies" className="hide-head hover:text-[#fcb600] text-black font-bold">
        Our Story
        </Link>
      </div>

      <div className="relative flex items-center ms-4 justify-center gap-x-8">

        {/* <button className="bg-gray-100 hide-head hover:bg-gray-400 text-[#00AEEF] font-semibold px-6 py-3 rounded-full">
          Our story
        </button> */}
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
