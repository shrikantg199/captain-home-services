import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Captain Home Services - Expert Appliance Repairs at Your Doorstep",
  description:
    "Expert appliance repairs at your doorstep. Book reliable technicians for AC, refrigerator, washing machine, Geysers and other home appliance repairs with upfront pricing and same-day support.",
  keywords: [
    "appliance repair",
    "AC repair",
    "refrigerator repair",
    "washing machine repair",
    "geyser repair",
    "home appliance repair",
    "doorstep service",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
