"use client";

import Image from "next/image";
import Header from "./components/Header";
import TechnologiesSection from "./components/TechnologiesSection";
import ServicesSection from "./components/ServicesSection"; // Check spelling, should be ServicesSection.tsx
import AboutUsSection from "./components/AboutUsSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";
import LatestBlogSection from "./components/LatestBlogSection";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Normal, SemiBold, Bold
});

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Video Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/sample.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Header */}
        {/* <div className="relative z-50 pointer-events-auto">
          <Header />
        </div> */}

        {/* Hero Text */}
        <div className="absolute inset-0 z-10 flex items-center px-8">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Innovate. <br />
              Automate. <br />
              Elevate.
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-xl">
              Empowering your business with intelligent design, <br />
              smart automation, and digital excellence
            </p>
          </div>
        </div>
      </div>
      <TechnologiesSection />
      {/* Services Section BELOW Video */}
      <ServicesSection />

      <AboutUsSection />
      <LatestBlogSection />

      <TestimonialSection />
      <ContactUsSection />
      {/* <Footer /> */}
    </div>
  );
}
