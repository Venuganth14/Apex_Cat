'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedBubbles from './AnimatedBubbles';

const services = [
  { title: 'Catalyst Digital Innovation', image: '/CatalystDigitalInnovation.JPG' },
  { title: 'Apex AI Assist for Smart Automation', image: '/ApexAiAssist.JPG' },
  { title: 'Scalable Cloud Service & Security Layer', image: '/Cloud Service.JPG' },
  { title: 'ApexTech CRM & Enterprise Solutions', image: '/CRM Solutions.JPG' },
  { title: 'Mobile App Engineering', image: '/MobileApplication.JPG' },
  { title: 'Web Development & Experience Design', image: '/WebDevelopement.JPG' },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-24 px-6 lg:px-24 overflow-hidden text-white bg-gradient-to-br from-[#03045E] via-[#023E8A] to-[#03045E] font-poppins"
    >
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center bg-[#101a3a] hover:shadow-2xl transition duration-500 group"
              style={{ animation: `slideIn 0.6s ease ${index * 0.2}s forwards`, opacity: 0 }}
            >
              <div className="w-20 h-20 mb-4 transition-transform duration-700 group-hover:rotate-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain rounded-full"
                />
              </div>
              <span className="text-md text-white font-semibold text-center group-hover:text-blue-300 transition leading-tight">
                {service.title}
              </span>
            </div>
          ))}
        </div>

        {/* Right Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Explore a Full Spectrum of <span className="text-blue-400">Digital Services</span> - Engineered to Elevate Your Business.
          </h2>
          <p className="text-blue-300 text-lg mb-6">
            From intelligent automation to secure cloud systems, mobile innovation to tailored CRM platforms, our services are built to drive efficiency, scalability, and digital success - all under one roof.
          </p>
          <Link href="/services">
            <button className="mt-2 w-fit px-6 py-3 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition font-semibold">
              Know More
            </button>
          </Link>
        </div>
      </div>

      {/* Bubble animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <AnimatedBubbles count={20} direction="both" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03045E] via-[#023E8A] to-[#03045E] opacity-30 animate-gradient z-0"></div>

      {/* Animation keyframe */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
