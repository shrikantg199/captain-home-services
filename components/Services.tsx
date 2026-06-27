"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ChevronRight,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  ShieldCheck,
  CreditCard,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Dialog, DialogContent } from "./ui/dialog";
import { LocationBadge } from "./LocationBadge";

interface PricingTier {
  name: string;
  price: string;
}

interface Service {
  id: string;
  name: string;
  image: string;
  icon: string;
  rating: number;
  reviewCount?: number;
  category?: string;
  tag: string;
  description: string;
  features: string[];
  price: string;
  pricing?: PricingTier[];
  whatsappNumber?: string;
}

interface ServiceModalProps {
  selectedService: Service | null;
  close: () => void;
}

const TRUST_SIGNALS = [
  { icon: Clock, label: "Same-day\nbooking" },
  { icon: ShieldCheck, label: "30-day\nwarranty" },
  { icon: CreditCard, label: "Pay after\nservice" },
];

const services: Service[] = [
  {
    id: "ac",
    name: "AC Repair",
    price: "Starts at ₹299",
    rating: 4.9,
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
    pricing: [
      { name: "Less Cooling", price: "₹299" },
      { name: "Power Issue", price: "₹299" },
      { name: "Noise / Smell", price: "₹499" },
      { name: "Water Leakage", price: "₹499" },
      { name: "Gas Leak Check", price: "₹800" },
      { name: "Installation", price: "₹1200" },
      { name: "Uninstallation", price: "₹600" },
      { name: "Gas Refill + Servicing", price: "₹2500" },
    ],
  },
  {
    id: "geyser",
    name: "Geyser Repair",
    price: "Starts at ₹249",
    rating: 4.8,
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
    pricing: [
      { name: "Check-up", price: "₹249" },
      { name: "Service", price: "₹499" },
      { name: "Installation", price: "₹399" },
      { name: "Uninstallation", price: "₹299" },
    ],
  },
  {
    id: "fridge",
    name: "Fridge Repair",
    price: "Starts at ₹249",
    rating: 4.9,
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
    pricing: [{ name: "Service", price: "₹249" }],
  },
  {
    id: "washing",
    name: "Washing Machine Repair",
    price: "Starts at ₹249",
    rating: 4.8,
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
    pricing: [
      { name: "Check-up", price: "₹249" },
      { name: "Install + Uninstall", price: "₹299" },
    ],
  },
];

const BLUR_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9HQAI/wN0D5FqEQAAAABJRU5ErkJggg==";

function ServiceModal({ selectedService, close }: ServiceModalProps) {
  if (!selectedService) return null;

  const whatsappNumber = selectedService.whatsappNumber ?? "919709707478";

  const whatsappMessage = encodeURIComponent(
    `Hi! I'd like to book *${selectedService.name}* service.\n\nPrice: ${selectedService.price}\n\nPlease confirm my booking.`,
  );

  return (
    <Dialog open={!!selectedService} onOpenChange={(open) => !open && close()}>
      <DialogContent className="max-w-lg p-0 overflow-hidden rounded-t-[28px] sm:rounded-[28px] max-h-[94dvh] flex flex-col gap-0">
        <div className="relative h-52 sm:h-60 w-full bg-gray-900 shrink-0 overflow-hidden">
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

          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/30 to-transparent" />

          <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-emerald-800/90 border border-emerald-500/40 text-emerald-200 px-3 py-1.5 rounded-full text-[10px] font-medium uppercase tracking-widest">
            <CheckCircle className="w-3 h-3 fill-emerald-400 text-emerald-800 shrink-0" />
            Verified Technician
          </div>

          {selectedService.category && (
            <div className="absolute top-4 right-4 bg-black/40 border border-white/15 text-white/70 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest">
              {selectedService.category}
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 flex items-end justify-between gap-3">
            <div>
              <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">
                Home Service
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                {selectedService.name}
              </h2>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl px-3 py-2 text-center shrink-0">
              <div className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300" />
                <span className="text-white font-semibold text-base leading-none">
                  {selectedService.rating}
                </span>
              </div>
              {selectedService.reviewCount && (
                <p className="text-white/50 text-[10px] mt-1 whitespace-nowrap">
                  {selectedService.reviewCount} reviews
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="overflow-y-auto flex-1 p-7 max-w-4xl space-y-5">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-2">
              About this service
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {selectedService.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="-ml-7 w-5 h-5 rounded-full bg-gray-100 border border-gray-200 shrink-0" />
            <Separator
              className="border-dashed border-gray-200 flex-1"
              decorative
            />
            <div className="-mr-7 w-5 h-5 rounded-full bg-gray-100 border border-gray-200 shrink-0" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-3">
                Included
              </p>
              <ul className="space-y-2.5">
                {selectedService.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-700 leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200/60 rounded-2xl p-4 flex flex-col gap-3">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-widest text-orange-600/70 mb-1">
                  Starting from
                </p>
                <p
                  className={`font-semibold text-gray-900 leading-none ${
                    selectedService.price.length > 14 ? "text-base" : "text-3xl"
                  }`}
                >
                  {selectedService.price}
                </p>
                <p className="text-[10px] text-orange-500/80 mt-1">
                  No hidden charges
                </p>
              </div>

              {selectedService.pricing && (
                <div className="bg-white border border-orange-200/50 rounded-xl p-3 flex flex-col gap-2">
                  <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400">
                    Pricing tiers
                  </p>
                  {selectedService.pricing.map((tier, i) => (
                    <div key={i}>
                      {i > 0 && (
                        <div className="border-t border-orange-100 my-2" />
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {tier.name}
                        </span>
                        <span className="text-xs font-semibold text-gray-900">
                          {tier.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {TRUST_SIGNALS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex flex-col items-center gap-1.5 text-center"
              >
                <Icon className="w-4.5 h-4.5 text-gray-400" strokeWidth={1.5} />
                <p className="text-[10px] text-gray-500 leading-tight whitespace-pre-line">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="shrink-0 border-t border-gray-100 bg-white px-4 py-3.5 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-green-50 border border-green-200/60 flex items-center justify-center shrink-0">
            <Image
              src="/assets/social-icons/whatsapp.png"
              alt="WhatsApp"
              width={24}
              height={24}
              className="h-10 w-10 object-contain"
            />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-900">
              Book via WhatsApp
            </p>
            <p className="text-[11px] text-gray-400 mt-0.5">
              Instant reply · Pay after service
            </p>
          </div>

          <Link
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 active:scale-[0.97] text-white px-5 h-11 rounded-[14px] text-sm font-semibold transition-all duration-150 shadow-md shadow-orange-500/20 shrink-0"
          >
            Book now
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Services() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("service");

  const selectedService = serviceId
    ? services.find((s) => s.id === serviceId) || null
    : null;

  const openService = (service: (typeof services)[0]) => {
    router.push(`?service=${service.id}`, { scroll: false });
  };

  const close = () => {
    router.push("/", { scroll: false });
  };

  const LOCATION_ADDRESS =
    "Address street no 2 opp Vinayaka skin clinic Ashok nagar kamareddy 503111";

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
          <Badge className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 text-[#FF7A1A] mb-6 px-4 py-2 font-semibold uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Trusted Home Appliance Experts
          </Badge>

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
            <Card
              key={service.id}
              onClick={() => openService(service)}
              className="group relative cursor-pointer overflow-hidden active:scale-95 md:hover:-translate-y-2 md:transition-transform md:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 relative flex flex-col items-center justify-center text-center p-4 md:p-5 rounded-[28px] border border-gray-200/80 bg-white shadow-sm hover:border-orange-300 hover:shadow-[0_20px_50px_rgba(255,122,26,0.12)]"
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
                  className="object-contain w-20 h-20 md:w-28 md:h-28"
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

              {/* Warranty Badge */}
              <Badge className="mt-3 inline-flex items-center justify-center rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]">
                30-Day Warranty
              </Badge>

              {/* CTA Pill */}
              <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-orange-500 bg-orange-50 px-3 py-1.5 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <span>View Details</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ServiceModal selectedService={selectedService} close={close} />
    </section>
  );
}
