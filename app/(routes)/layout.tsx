import Footer from "@/components/global/Navigation/Footer";
import Navbar from "@/components/global/Navigation/Navbar";
import React from "react";

const RoutesLayoutFile = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="pt-[110px] px-4 sm:px-8">{children}</main>
      <Footer/>
    </>
  );
};

export default RoutesLayoutFile;
