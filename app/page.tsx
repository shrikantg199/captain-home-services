import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Services />
      </main>
    </>
  );
};

export default page;
