'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

const ContactUsSection = () => {
  return (
    <section
      id="contact"
      className="relative py-40 px-6 lg:px-24 overflow-hidden text-white font-poppins bg-gradient-to-br from-[#03045E] via-[#023E8A] to-[#03045E]"
    >
      {/* Gradient Animation Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03045E] via-[#023E8A] to-[#03045E] opacity-30 animate-gradient z-0" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Get Started with APEX CATALYST
        </h2>
        
        {/* Modern Contact Button */}
        <Link
          href="#"
          className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105"
        >
          <span className="flex items-center gap-3 justify-center">
            <MessageSquare className="w-5 h-5" />
            <span>Let’s Connect</span>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ContactUsSection;
