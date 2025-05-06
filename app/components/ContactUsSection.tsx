'use client';

import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

const BUBBLE_COUNT = 20;

const generateBubbles = () => {
  const seed = 12345;
  const random = (function (seed) {
    return function () {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
  })(seed);

  return Array.from({ length: BUBBLE_COUNT }, (_, i) => ({
    width: random() * 30 + 20,
    height: random() * 30 + 20,
    top: random() * 100,
    side: i % 2 === 0 ? 'left' : 'right',
    duration: random() * 40 + 20,
    delay: random() * 20,
  }));
};

const ContactUsSection = () => {
  const [bubbles] = useState(generateBubbles);

  return (
    <section
      id="contact"
      className="relative py-40 px-6 lg:px-24 overflow-hidden text-white font-poppins bg-gradient-to-br from-[#03045E] via-[#023E8A] to-[#03045E]"
    >
      {/* Bubble Animation */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            className="absolute bg-blue-400 opacity-20 rounded-full animate-bubble-side"
            style={{
              width: `${bubble.width}px`,
              height: `${bubble.height}px`,
              top: `${bubble.top}%`,
              [bubble.side]: '-50px',
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03045E] via-[#023E8A] to-[#03045E] opacity-30 animate-gradient z-0" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Get Started with APEX CATALYST</h2>
        <Link
          href="#"
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Contact Us</span>
        </Link>
      </div>
    </section>
  );
};

export default ContactUsSection;
