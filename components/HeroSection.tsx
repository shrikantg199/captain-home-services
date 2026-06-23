import {
  Phone,
  Calendar,
  Star,
  Shield,
  Clock,
  Award,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-linear-to-br from-orange-50 via-white to-amber-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/80 border border-orange-200 rounded-full px-4 py-2 mb-2 shadow-sm shadow-orange-100">
              <Star size={14} className="text-orange-500 fill-orange-500" />
              <span className="text-orange-600 text-xs font-bold tracking-wide uppercase">
                Fast, trusted &amp; doorstep repairs
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-2 text-gray-900">
              Expert appliance repairs,
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                right at your door.
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-5 leading-relaxed max-w-lg">
              Book reliable technicians for AC, refrigerator, washing machine,
              Geysers and other home appliance repairs with upfront pricing and
              same-day support.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                { icon: Clock, label: "Same-day visit" },
                { icon: Shield, label: "Verified pros" },
                { icon: Award, label: "Fair pricing" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-2xl border border-orange-100 bg-white/75 px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm"
                >
                  <Icon size={16} className="text-orange-500" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
              >
                <Calendar size={16} />
                Book Service
              </a>
              <a
                href="tel:9707074578"
                className="flex items-center gap-2 border-2 border-gray-200 hover:border-orange-400 text-gray-700 hover:text-orange-500 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 bg-white"
              >
                <Phone size={16} />
                Call Now
              </a>
              <p className="text-sm font-medium text-gray-500">
                Available 7 days a week
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
              {[
                "No hidden charges",
                "Genuine spare parts",
                "Service warranty",
              ].map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-orange-500" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Single Hero Image */}
          <div className="relative hidden md:flex justify-center">
            {/* Background decoration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-137.5 h-113 bg-orange-100 rounded-full blur-3xl opacity-60" />
            </div>

            <div className="relative z-10">
              <Image
                width={700}
                height={380}
                src="/assets/t3.png"
                alt="Expert Appliance Repair Technician"
                className=" max-w-2xl h-110 object-cover rounded-3xl "
              />

              {/* Floating Card 2 */}
              <div className="absolute bottom-10 -right-10 bg-white rounded-2xl shadow-xl p-4 border border-orange-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Star
                      size={18}
                      className="text-orange-500 fill-orange-500"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Customer Rating</p>
                    <p className="font-bold text-gray-900">4.9/5 Rated</p>
                  </div>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-3 rounded-2xl shadow-xl">
                <p className="text-sm font-semibold">10,000+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
