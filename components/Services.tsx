"use client";

import { useState, useEffect } from "react";
import { ChevronRight, CheckCircle, Star, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LocationBadge } from "./LocationBadge";

const services = [
  {
    id: "ac",
    name: "AC Repair",
    price: "Starting at ₹299",
    rating: "4.9",
    tag: "TAG-0142",
    icon: "/assets/menus/AC.png",
    image: "/assets/AC-repair.png",
    description:
      "Keep your home cool and comfortable. Our expert technicians handle deep chemical washing, filter cleaning, gas recharging, compressor diagnostics, and high-quality parts replacement for all split and window AC brands.",
    features: [
      "Deep filter & coil cleaning",
      "Gas pressure inspection",
      "Compressor fault diagnosis",
      "30-day spare parts warranty",
    ],
  },
  {
    id: "geyser",
    name: "Geyser Repair",
    price: "Checkup ₹249 | Service ₹599",
    rating: "4.8",
    tag: "TAG-0298",
    icon: "/assets/menus/Geyser.png",
    image: "/assets/Geyser-repair.png",
    description:
      "Get hot water instantly without safety worries. We provide professional repair and maintenance for electric, instant, and storage geysers, focusing on heating element restoration, thermostat calibration, and pressure valve safety checks.",
    features: [
      "Thermostat replacement",
      "Heating element descaling",
      "Safety valve calibration",
      "Leakage resolution",
      "30-day spare parts warranty",
    ],
  },
  {
    id: "fridge",
    name: "Fridge Repair",
    price: "Starting at ₹199",
    rating: "4.9",
    tag: "TAG-0417",
    icon: "/assets/menus/fridge.png",
    image: "/assets/Fridge-repair.png",
    description:
      "Prevent food spoilage with immediate refrigerator support. Our certified specialists repair single-door, double-door, and side-by-side refrigerators, tackling compressor issues, cooling issues, gas leakage charging, and mainboard repairs.",
    features: [
      "Gas leakage & recharging",
      "Defrost timer regulation",
      "Compressor electrical check",
      "Door gasket replacement",
      "30-day spare parts warranty",
    ],
  },
  {
    id: "washing",
    name: "Washing Machine Repair",
    price: "Starting at ₹199",
    rating: "4.8",
    tag: "TAG-0563",
    icon: "/assets/menus/washing-machine.png",
    image: "/assets/Washing-Machine-repair.png",
    description:
      "Restore seamless laundry cycles. We repair top-load, front-load, and semi-automatic washing machines. Our service covers water intake and drain troubleshooting, drum suspension repair, gear box replacement, and control panel issues.",
    features: [
      "Drum bearing & motor fixing",
      "Drain pump clearing/change",
      "Solenoid valve diagnosis",
      "Vibration & noise reduction",
      "30-day spare parts warranty",
    ],
  },
];

const BLUR_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9HQAI/wN0D5FqEQAAAABJRU5ErkJggg==";

export default function Services() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);

  const close = () => setSelectedService(null);
  const LOCATION_ADDRESS =
    "88GJ+JM3, Sri Ram Nagar Colony, Ashok Nagar, Kamareddy, Telangana 503111, India";
  useEffect(() => {
    document.body.style.overflow = selectedService ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  useEffect(() => {
    if (!selectedService) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedService]);

  return (
    <section
      id="services"
      className="relative overflow-hidden py-12 bg-gradient-to-b from-[#FBF8F1] via-white to-[#FBF8F1]"
    >
      <LocationBadge address={LOCATION_ADDRESS} />
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2F6F62]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Hero Section */}

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-10 md:mb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-xs md:text-sm font-semibold text-[#FF7A1A] uppercase tracking-wider">
              Trusted Home Appliance Experts
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-none text-[#1F2421]">
            Expert Repairs
            <span className="block text-[#FF7A1A] mt-1">
              Right At Your Door
            </span>
          </h1>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="
                  group relative flex flex-col items-center justify-center text-center p-4 md:p-5
                  rounded-[28px] border border-gray-200/80 bg-white shadow-sm cursor-pointer
                  hover:border-orange-300 hover:shadow-[0_20px_50px_rgba(255,122,26,0.12)]
                  active:scale-95
                  md:hover:-translate-y-2 md:transition-transform md:duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50
                "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-10 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300 transition-opacity duration-500" />

              {/* Icon */}
              <div className="flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src={service.icon}
                  alt={`${service.name} icon`}
                  width={100}
                  height={100}
                  priority={index < 2}
                  sizes="96px"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                  className="object-contain w-20 h-20 md:w-28  md:h-28 "
                />
              </div>

              {/* Service Name */}
              <h3 className="text-sm md:text-base font-bold text-gray-800 uppercase tracking-tight group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                {service.name}
              </h3>

              {/* Price */}
              <p className="mt-1.5 text-xs font-bold text-orange-500 font-mono">
                {service.price}
              </p>

              {/* CTA Pill */}
              <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-orange-500 bg-orange-50 px-3 py-1.5 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <span>View Details</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
            onClick={close}
          />

          {/* Modal Box */}
          <div className="relative bg-white w-full sm:max-w-md rounded-t-[32px] sm:rounded-[32px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.3)] z-10 max-h-[92dvh] flex flex-col">
            {/* Close Button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 border border-gray-100 flex items-center justify-center text-gray-700 hover:text-black hover:bg-white shadow-md focus:outline-none"
              aria-label="Close details"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Drag Handle (mobile only) */}
            <div className="sm:hidden flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-gray-300" />
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1">
              {/* Header Image */}
              <div className="relative h-52 sm:h-64 w-full bg-gray-100 shrink-0">
                <Image
                  fill
                  src={selectedService.image}
                  alt={selectedService.name}
                  sizes="(max-width: 640px) 100vw, 448px"
                  priority
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/45 to-transparent" />

                {/* Verified Badge */}
                <div className="absolute top-4 left-4 bg-[#5FA897]/95 text-white backdrop-blur-sm border border-[#5FA897]/50 px-3 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider shadow-md">
                  <CheckCircle className="w-3 h-3 fill-white text-[#5FA897]" />
                  Verified Technician
                </div>

                {/* Name + Rating */}
                <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-end justify-between gap-3">
                  <h2 className="text-xl sm:text-2xl font-bold uppercase text-white tracking-tight leading-none">
                    {selectedService.name}
                  </h2>
                  <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-xl font-bold text-xs shadow-md">
                    <Star className="w-3.5 h-3.5 fill-[#fded09] text-[#fded09]" />
                    <span>{selectedService.rating} / 5</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 md:p-8 space-y-5">
                {/* Description */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Service Description
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                {/* Tear Line */}
                <div className="relative border-t border-dashed border-gray-200 mx-0">
                  <span className="absolute -left-5 -top-2 w-4 h-4 rounded-full bg-white border border-gray-200 shadow-inner" />
                  <span className="absolute -right-5 -top-2 w-4 h-4 rounded-full bg-white border border-gray-200 shadow-inner" />
                </div>

                {/* Features + Pricing */}
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                      Included in Service
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-[#5FA897] mt-0.5 shrink-0" />
                          <span className="font-semibold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-orange-50/50 border border-orange-100/70 p-4 rounded-2xl flex flex-col justify-center gap-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-orange-600/70">
                      Direct Pricing
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span
                        className={`font-black text-gray-900 font-mono ${
                          selectedService.price.length > 14
                            ? "text-base"
                            : "text-3xl"
                        }`}
                      >
                        {selectedService.price}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-500">
                      No surprise fees. Upfront pricing always.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="p-4 md:p-6 border-t border-gray-100 bg-gray-50/75 flex flex-col sm:flex-row items-center gap-3 justify-between shrink-0">
              <div className="hidden sm:block">
                <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                  Payment Guarantee
                </p>
                <p className="text-[11px] text-[#5FA897] font-bold uppercase tracking-wider mt-0.5">
                  Pay only after the job&apos;s done
                </p>
              </div>

              <Link
                href={`https://wa.me/919709707478?text=${encodeURIComponent(
                  `Hi! I'd like to book *${selectedService.name}* service.\n\nPrice: ${selectedService.price}\n\nPlease confirm my booking.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white px-8 h-12 rounded-2xl font-bold uppercase tracking-wide text-sm transition-colors duration-200 shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
              >
                Book Service Now
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
