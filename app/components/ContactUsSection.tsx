'use client';

import React from 'react'; // removed useEffect
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

const ContactUsSection = () => {
  return (
    <section
      id="contact"
      className="relative py-40 px-6 lg:px-24 overflow-hidden text-white font-poppins bg-gradient-to-br from-[#03045E] via-[#023E8A] to-[#03045E]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#03045E] via-[#023E8A] to-[#03045E] opacity-30 animate-gradient z-0" />
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Get Started with APEX CATALYST</h2>
        <Link href="#" className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition">
          <MessageSquare className="w-5 h-5" />
          <span>Contact Us</span>
        </Link>
      </div>
    </section>
  );
};

export default ContactUsSection;