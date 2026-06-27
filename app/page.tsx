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
        <section id="contact" className="scroll-mt-24 bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-sm md:p-10">
              <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                    Quick booking
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
                    Book a trusted technician in minutes
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg text-gray-600">
                    Share your appliance issue and we&apos;ll help you schedule
                    a visit, confirm pricing, and get fast support.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/919709707478?text=Hi!%20I%20need%20repair%20service%20for%20my%20AC,%20refrigerator,%20washing%20machine,%20geyser,%20or%20another%20appliance.%20Please%20assist%20with%20booking."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-orange-500 px-5 py-3 text-center font-semibold text-white shadow-lg transition hover:bg-orange-600"
                  >
                    Book on WhatsApp
                  </a>
                  <a
                    href="tel:9707074578"
                    className="rounded-2xl border border-orange-200 bg-white px-5 py-3 text-center font-semibold text-orange-600 transition hover:border-orange-400 hover:text-orange-700"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppWidget />
      <ScrollButton />
    </>
  );
};

export default page;
