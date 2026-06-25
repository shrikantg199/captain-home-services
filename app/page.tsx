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
        <React.Suspense
          fallback={
            <div className="min-h-[40vh] flex items-center justify-center text-sm text-gray-500">
              Loading services…
            </div>
          }
        >
          <Services />
        </React.Suspense>
        <HeroSection />
      </main>
      <WhatsAppWidget />
      <ScrollButton />
    </>
  );
};

export default page;
