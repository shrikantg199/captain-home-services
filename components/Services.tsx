"use client";

import { useState, useEffect } from "react";
import { ChevronRight, CheckCircle, Star, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: "ac",
    name: "AC Repair",
    price: "₹299",
    rating: "4.9",
    tag: "TAG-0142",
    icon: "/assets/menus/AC.png",
    image: "/assets/AC.png",
    description:
      "Keep your home cool and comfortable. Our expert technicians handle deep chemical washing, filter cleaning, gas recharging, compressor diagnostics, and high-quality parts replacement for all split and window AC brands.",
    features: [
      "Deep filter & coil cleaning",
      "Gas pressure inspection",
      "Compressor fault diagnosis",
      "90-day spare parts warranty",
    ],
  },
  {
    id: "geyser",
    name: "Geyser Repair",
    price: "₹249",
    rating: "4.8",
    tag: "TAG-0298",
    icon: "/assets/menus/geyser.png",
    image: "/assets/Geyser.png",
    description:
      "Get hot water instantly without safety worries. We provide professional repair and maintenance for electric, instant, and storage geysers, focusing on heating element restoration, thermostat calibration, and pressure valve safety checks.",
    features: [
      "Thermostat replacement",
      "Heating element descaling",
      "Safety valve calibration",
      "Leakage resolution",
    ],
  },
  {
    id: "fridge",
    name: "Fridge Repair",
    price: "₹349",
    rating: "4.9",
    tag: "TAG-0417",
    icon: "/assets/menus/fridge.png",
    image: "/assets/Fridge.png",
    description:
      "Prevent food spoilage with immediate refrigerator support. Our certified specialists repair single-door, double-door, and side-by-side refrigerators, tackling compressor issues, cooling issues, gas leakage charging, and mainboard repairs.",
    features: [
      "Gas leakage & recharging",
      "Defrost timer regulation",
      "Compressor electrical check",
      "Door gasket replacement",
    ],
  },
  {
    id: "washing",
    name: "Washing Machine Repair",
    price: "₹329",
    rating: "4.8",
    tag: "TAG-0563",
    icon: "/assets/menus/washing-machine.png",
    image: "/assets/Washing-Machine.png",
    description:
      "Restore seamless laundry cycles. We repair top-load, front-load, and semi-automatic washing machines. Our service covers water intake and drain troubleshooting, drum suspension repair, gear box replacement, and control panel issues.",
    features: [
      "Drum bearing & motor fixing",
      "Drain pump clearing/change",
      "Solenoid valve diagnosis",
      "Vibration & noise reduction",
    ],
  },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Services() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedService ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden py-24 bg-gradient-to-b from-[#FBF8F1] via-white to-[#FBF8F1]"
    >
      {/* Background Glow — subtle pulse */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A227]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2F6F62]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* ── Header ── */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1F2421]/15 bg-white text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2421]/70 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]" />
            Interactive Solutions
          </motion.span>

          <motion.h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#1F2421] leading-[1.05]">
            Select An Appliance
            <span className="block text-[#FF7A1A]">For Immediate Repair</span>
          </motion.h2>

          <motion.p className="mt-5 text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
            Click any of our 4 major appliance repair icons below to view
            instant pricing, direct benefits, and book your service.
          </motion.p>
        </motion.div>

        {/* ── Service Cards Grid ── */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={gridVariants}
        >
          {services.map((service) => (
            <motion.button
              key={service.id}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 20 },
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedService(service)}
              className="
                group relative flex flex-col items-center justify-center text-center p-8
                rounded-[28px] border border-gray-200/80 bg-white shadow-sm cursor-pointer
                hover:border-orange-300 hover:shadow-[0_20px_50px_rgba(255,122,26,0.12)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-10 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300 transition-opacity duration-500" />

              {/* Icon — scale on hover */}
              <motion.div
                className="flex items-center justify-center mb-5 overflow-hidden"
                whileHover={{ scale: 1.1, rotate: [0, -4, 4, 0] }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={service.icon}
                  alt={`${service.name} icon`}
                  width={100}
                  height={100}
                  className="object-contain w-28 h-28"
                />
              </motion.div>

              {/* Service Name */}
              <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                {service.name}
              </h3>

              {/* CTA Pill */}
              <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-orange-500 bg-orange-50 px-3.5 py-1.5 rounded-full opacity-90 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <span>View Details</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedService(null)}
            />

            {/* Modal Box */}
            <motion.div
              className="relative bg-white w-full max-w-md rounded-[32px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.3)] z-10 max-h-[90vh] flex flex-col"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/90 border border-gray-100 flex items-center justify-center text-gray-700 hover:text-black hover:bg-white shadow-md focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.93 }}
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto modal-scroll flex-1">
                {/* Modal Header Image */}
                <div className="relative h-60 md:h-72 w-full bg-gray-100">
                  <Image
                    fill
                    src={selectedService.image}
                    alt={selectedService.name}
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/45 to-transparent" />

                  {/* Verified Badge — slide in from left */}
                  <motion.div
                    className="absolute top-5 left-5 bg-[#5FA897]/95 text-white backdrop-blur-sm border border-[#5FA897]/50 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider shadow-md"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                  >
                    <CheckCircle className="w-3.5 h-3.5 fill-white text-[#5FA897]" />
                    Verified Technician
                  </motion.div>

                  {/* Name + Rating — slide in from bottom */}
                  <motion.div
                    className="absolute bottom-5 left-6 right-6 flex flex-wrap items-end justify-between gap-4"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
                  >
                    <h2 className="text-2xl font-bold uppercase text-white tracking-tight leading-none">
                      {selectedService.name}
                    </h2>
                    <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-xl font-bold text-xs shadow-md">
                      <Star className="w-4 h-4 fill-[#fded09] text-[#fded09]" />
                      <span>{selectedService.rating} / 5</span>
                    </div>
                  </motion.div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Service Description
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {selectedService.description}
                    </p>
                  </motion.div>

                  {/* Tear Line */}
                  <div className="relative border-t border-dashed border-gray-200 my-2">
                    <span className="absolute -left-[30px] -top-2 w-4 h-4 rounded-full bg-white border border-gray-100 shadow-inner" />
                    <span className="absolute -right-[30px] -top-2 w-4 h-4 rounded-full bg-white border border-gray-100 shadow-inner" />
                  </div>

                  {/* Features + Pricing Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Features — staggered list */}
                    <motion.ul
                      className="space-y-2.5"
                      initial="hidden"
                      animate="visible"
                    >
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3.5">
                        Included in Service
                      </h4>
                      {selectedService.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-[#5FA897] mt-0.5 shrink-0" />
                          <span className="font-semibold">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* Pricing — scale in */}
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      className="bg-orange-50/50 border border-orange-100/70 p-5 rounded-2xl flex flex-col justify-center gap-2"
                    >
                      <span className="text-[10px] font-mono uppercase tracking-widest text-orange-600/70 block">
                        Direct Pricing
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-3xl font-black text-gray-900 font-mono">
                          {selectedService.price}
                        </span>
                        <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                          Starting Price
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-500 mt-1">
                        No surprise fees. Upfront pricing always.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <motion.div
                initial="hidden"
                animate="visible"
                className="p-6 border-t border-gray-100 bg-gray-50/75 flex flex-col sm:flex-row items-center gap-4 justify-between"
              >
                <div className="hidden sm:block">
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                    Payment Guarantee
                  </p>
                  <p className="text-[11px] text-[#5FA897] font-bold uppercase tracking-wider mt-0.5">
                    Pay only after the job&apos;s done
                  </p>
                </div>

                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href={`https://wa.me/919709707478?text=${encodeURIComponent(
                      `Hi! I'd like to book *${selectedService.name}* service.\n\nStarting Price: ${selectedService.price}\n\nPlease confirm my booking.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 h-14 rounded-2xl font-bold uppercase tracking-wide text-sm transition-colors duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 flex items-center justify-center gap-2"
                  >
                    Book Service Now
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
