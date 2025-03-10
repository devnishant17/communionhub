import React from "react"
import Link from "next/link";
import UserButton from "../UserButton";

const Navbar = () => {
  return (
    <nav className="z-50 absolute top-6 left-1/2 transform -translate-x-1/2 w-full max-w-screen-2xl bg-black/50 text-gray-400 px-4 sm:px-8 py-4 rounded-lg flex justify-between items-center">
      {/* Logo */}

      <Link href="/">
        <img className="h-auto w-[200px]" src="https://communionhub.org/static/media/Logocommunion2.3bc73e1360d301494b8b.png" alt="logo" />
      </Link>

      {/* pages */}

      <div className="relative flex items-center ms-4 justify-center gap-x-8">
      <Link href="/Events" className="hover:text-[#00AEEF] text-gray-100 font-bold">
        Event
        </Link>
        <Link href="/About" className="hover:text-[#00AEEF] text-gray-100 font-bold">
        About
        </Link>
        <button className="bg-gray-100 hover:bg-gray-400 text-[#00AEEF] font-semibold px-6 py-3 rounded-full">
          Login
        </button>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
