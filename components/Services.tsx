import {
  Wind,
  RotateCcw,
  Refrigerator,
  WashingMachine,
  ChevronRight,
  CheckCircle,
  Star,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Wind,
    name: "AC Repair",
    price: "₹299",
    rating: "4.9",
    tag: "TAG-0142",
    eta: "Today, 4 PM",
    image: "/assets/AC.png",
  },
  {
    icon: RotateCcw,
    name: "Geyser Repair",
    price: "₹249",
    rating: "4.8",

    tag: "TAG-0298",
    eta: "Today, 2 PM",
    image: "/assets/Geyser.png",
  },
  {
    icon: Refrigerator,
    name: "Fridge Repair",
    price: "₹349",
    rating: "4.9",
    tag: "TAG-0417",
    eta: "Tomorrow, 10 AM",
    image: "/assets/Fridge.png",
  },
  {
    icon: WashingMachine,
    name: "Washing Machine Repair",
    price: "₹329",
    rating: "4.8",
    tag: "TAG-0563",
    eta: "Today, 6 PM",
    image: "/assets/Washing-Machine.png",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#FBF8F1] via-white to-[#FBF8F1]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A227]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2F6F62]/10 rounded-full blur-3xl" />

      <div className="relative max-w-370 mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1F2421]/15 bg-white text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F2421]/70 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]" />
            Our Services
          </span>

          <h2 className="text-xl md:text-5xl font-bold uppercase tracking-tight text-[#1F2421] leading-[1.05]">
            Expert Appliance Repairs
            <span className="block text-[#FF7A1A]">At Your Doorstep</span>
          </h2>

          <p className="mt-5 text-[10px] text-[#1F2421]/60 leading-relaxed max-w-xl mx-auto">
            Fast, affordable, and reliable appliance repair services by
            certified technicians using genuine spare parts.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div key={service.name} className="group relative pt-3">
                <div
                  className="
                    relative rounded-[20px] overflow-hidden bg-[#FBF8F1]
                    border border-[#1F2421]/10
                    shadow-[0_10px_40px_rgba(31,36,33,0.08)]
                    transition-all duration-500
                    group-hover:-translate-y-2 group-hover:rotate-[-1deg]
                    group-hover:shadow-[0_24px_55px_rgba(31,36,33,0.16)]
                    motion-reduce:transition-none motion-reduce:transform-none
                  "
                >
                  {/* Image header */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      width={400}
                      height={208}
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F2421] via-[#1F2421]/25 to-transparent" />

                    {/* Icon badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#FF7A1A]  border-2 border-[#FF7A1A] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Ink stamp - verified technician */}
                    <div
                      className="
                        absolute top-4 right-4 w-16 h-16 rounded-full
                        border-2 border-[#5FA897] text-[#5FA897]
                        flex items-center justify-center rotate-[-10deg]
                        transition-transform duration-500
                        group-hover:rotate-0 group-hover:scale-105
                        motion-reduce:transition-none
                      "
                    >
                      <div className="w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full border border-[#5FA897] flex flex-col items-center justify-center text-center px-1">
                        <span className="text-[8px] font-black uppercase tracking-wider leading-tight">
                          Verified
                        </span>
                        <span className="text-[6px] font-mono uppercase tracking-wider leading-tight">
                          Technician
                        </span>
                      </div>
                    </div>

                    {/* Price flag */}
                    <div
                      className="absolute bottom-0 left-0 bg-[#FF7A1A] pl-5 pr-5 py-2.5"
                      style={{
                        clipPath:
                          "polygon(0% 0%, 100% 0%, 100% 100%, 12% 100%)",
                      }}
                    >
                      <p className="text-[9px] font-mono uppercase tracking-widest text-white leading-none">
                        Starting
                      </p>
                      <p className="text-lg font-black font-mono text-white leading-tight">
                        {service.price}
                      </p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="px-5 pt-4 pb-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#1F2421]/35">
                        {service.tag}
                      </span>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-[#1F2421]/70">
                        <Star className="w-3.5 h-3.5 fill-[#C9A227] text-[#C9A227]" />
                        <span className="font-bold text-[#1F2421]">
                          {service.rating}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-black uppercase tracking-tight text-[#1F2421] mb-4 leading-snug">
                      {service.name}
                    </h3>

                    {/* Tear line */}
                    <div className="relative border-t border-dashed border-[#1F2421]/20 my-4">
                      <span className="absolute -left-5 -top-[7px] w-3.5 h-3.5 rounded-full bg-[#FBF8F1] border border-[#1F2421]/15" />
                      <span className="absolute -right-5 -top-[7px] w-3.5 h-3.5 rounded-full bg-[#FBF8F1] border border-[#1F2421]/15" />
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-5 font-mono text-[11px] uppercase tracking-wide text-[#1F2421]/70">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#5FA897]" />
                        Same-day service
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#5FA897]" />
                        Genuine spare parts
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#5FA897]" />
                        90-day warranty
                      </li>
                    </ul>

                    <p className="text-[11px] font-mono text-[#1F2421]/50 mb-3">
                      Next slot:{" "}
                      <span className="text-[#1F2421] font-bold">
                        {service.eta}
                      </span>
                    </p>

                    {/* CTA */}
                    <button
                      className="
                        relative w-full h-12 rounded-lg
                        font-bold uppercase tracking-wide text-sm
                        hover:bg-[#1F2421] hover:text-[#FF7A1A]
                        transition-colors duration-300
                        bg-[#FF7A1A] text-white
                        focus-visible:outline-none focus-visible:ring-2
                        focus-visible:ring-[#FF7A1A] focus-visible:ring-offset-2
                        group/button
                      "
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2 h-12">
                        Book Service
                        <ChevronRight className="w-4 h-4 transition-transform group-hover/button:translate-x-1 motion-reduce:transition-none" />
                      </span>
                    </button>
                    <p className="text-center text-[10px] text-[#1F2421]/40 mt-2 font-mono uppercase tracking-wide">
                      Pay only after the job's done
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
