"use client";

import { useEffect, useState } from "react";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="sticky top-4 z-40 mx-5">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-full border border-white shadow-lg">
            <div className="px-6">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/assets/logo.png"
                    alt="Captain Home Services"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                  <div>
                    <p className="text-[11px] text-orange-500 font-bold tracking-[0.2em] uppercase leading-none">
                      Captain
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      Home Services
                    </p>
                  </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-gray-700 hover:text-orange-500 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                  <a
                    href="tel:9707074578"
                    className="flex items-center gap-2 text-gray-700 font-medium hover:text-orange-500 transition-colors"
                  >
                    <Phone size={16} />
                    97070 74578
                  </a>
                  <a
                    href="#contact"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-md"
                  >
                    Book Service
                  </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open menu"
                  className="md:hidden h-10 w-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500"
                >
                  <Menu size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={closeMobile}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[320px] max-w-[85vw] bg-white z-50 shadow-[0_0_50px_rgba(0,0,0,0.15)] transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="relative border-b border-gray-100 p-5 bg-gradient-to-r from-orange-50 via-orange-50 to-amber-50">
            <button
              onClick={closeMobile}
              aria-label="Close menu"
              className="absolute right-4 top-4 h-9 w-9 rounded-full bg-white shadow-sm flex items-center justify-center"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-2xl flex items-center justify-center">
                <Image
                  src="/assets/logo.png"
                  alt="Captain Home Services"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <p className="text-[11px] text-orange-500 font-bold uppercase tracking-[0.2em]">
                  Captain
                </p>
                <h3 className="font-bold text-gray-900 text-lg">
                  Home Services
                </h3>
                <p className="text-xs text-gray-500">
                  Fast • Trusted • Professional
                </p>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 p-5 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMobile}
                className="group flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-500 transition-all"
              >
                <span>{item.label}</span>
                <ChevronRight
                  size={18}
                  className="text-orange-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                />
              </a>
            ))}
            {/* Contact Card */}
            <div className="mt-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 p-5 text-white shadow-lg">
              <p className="text-sm opacity-90">Need urgent repair?</p>
              <a
                href="tel:9707074578"
                className="flex items-center gap-2 mt-2 font-bold text-lg"
              >
                <Phone size={18} />
                97070 74578
              </a>
              <p className="text-xs mt-1 opacity-80">
                Available 24×7 Service Support
              </p>
            </div>
            {/* CTA */}
            <a
              href="#contact"
              onClick={closeMobile}
              className="block mt-4 bg-gray-900 hover:bg-black text-white py-3.5
              rounded-xl text-center font-semibold shadow-lg transition-all"
            >
              <a>Book Service Now</a>
            </a>
          </nav>

          {/* Footer Trust */}
          <div className="p-5 pt-0">
            <div className="rounded-xl border border-orange-100 bg-orange-50 p-3 text-center">
              <p className="text-xs font-medium text-orange-600">
                ⭐ 4.9 Rating • 10,000+ Services Delivered
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
