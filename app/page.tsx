"use client";

import TechnologiesSection from "./components/TechnologiesSection";
import ServicesSection from "./components/ServicesSection";
import AboutUsSection from "./components/AboutUsSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactUsSection from "./components/ContactUsSection";
import LatestBlogSection from "./components/LatestBlogSection";
import BackgroundVideo from "./components/bgvideo";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Hero Section with Video */}
      <div className="relative w-full h-screen overflow-hidden">
        <BackgroundVideo />

        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-8 text-center">
  <div className="text-white max-w-xs sm:max-w-md md:max-w-xl w-full">
  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-snug sm:leading-tight">
    <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 bg-clip-text text-transparent animate-text">
      Innovate <br />
      Automate <br />
      Elevate
    </span>
  </h1>
  <p className="text-sm sm:text-lg md:text-2xl font-medium leading-relaxed animate-pulse text-blue-300">
    Empowering your business with intelligent design,
    <br className="hidden sm:block" />
    smart automation, and digital excellence.
  </p>
</div>

</div>

      </div>

      {/* Page Sections */}
      <TechnologiesSection />
      <ServicesSection />
      <AboutUsSection />
      <LatestBlogSection />
      <TestimonialSection />
      <ContactUsSection />
    </div>
  );
}
