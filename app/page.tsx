'use client';

import TechnologiesSection from './components/TechnologiesSection';
import ServicesSection from './components/ServicesSection';
import AboutUsSection from './components/AboutUsSection';
import TestimonialSection from './components/TestimonialSection';
import ContactUsSection from './components/ContactUsSection';
import LatestBlogSection from './components/LatestBlogSection';

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-screen overflow-hidden">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
  <source src="/sample.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

        {/* <div className="absolute inset-0 z-10 flex items-center px-8">
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
        </div> */}
      </div>
      <TechnologiesSection />
      <ServicesSection />
      <AboutUsSection />
      <LatestBlogSection />
      <TestimonialSection />
      <ContactUsSection />
    </div>
  );
}
