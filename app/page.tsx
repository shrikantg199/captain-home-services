import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ScrollButton from "@/components/ScrollButton";
import Services from "@/components/Services";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Services />
      </main>
      <WhatsAppWidget />
      <ScrollButton />
    </>
  );
};

export default page;
