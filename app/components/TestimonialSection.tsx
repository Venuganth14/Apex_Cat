'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO, Tech Innovations',
    feedback:
      'Working with Apex Catalyst was a game-changer for our business. They delivered exceptional results with cutting-edge solutions!',
    avatar: '/avatar1.png',
  },
  {
    name: 'Sarah Johnson',
    title: 'Founder, Creative Studios',
    feedback:
      'Their team is incredibly talented and professional. Highly recommend for digital transformation projects!',
    avatar: '/avatar2.png',
  },
  {
    name: 'Michael Brown',
    title: 'CTO, FutureWorks',
    feedback:
      'Amazing experience. Great support, brilliant ideas, and flawless execution. Will definitely work with them again!',
    avatar: '/avatar3.png',
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [bubbles, setBubbles] = useState<
    { width: number; height: number; top: number; left: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const generatedBubbles = Array.from({ length: 20 }, () => ({
      width: Math.random() * 30 + 20,
      height: Math.random() * 30 + 20,
      top: Math.random() * 100,
      left: -50,
      duration: Math.random() * 40 + 20,
      delay: Math.random() * 20,
    }));
    setBubbles(generatedBubbles);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 lg:px-24 overflow-hidden text-white bg-gradient-to-br from-[#00204a] via-[#003566] to-[#001d3d] font-poppins"
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03045E] via-[#023E8A] to-[#03045E] opacity-30 animate-gradient z-0" />

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
              left: `${bubble.left}px`,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-blue-300 text-lg mb-2">
          We are <span className="text-white font-semibold">Happy</span>, for our client’s reviews.
        </p>
        <h2 className="text-4xl font-bold text-white mb-10">Trusted by 100+ Clients!</h2>

        <div className="bg-[#101a3a] border border-blue-500 rounded-xl p-10 relative flex flex-col items-center shadow-md">
          <Image
            src={testimonials[current].avatar}
            alt={testimonials[current].name}
            width={80}
            height={80}
            className="rounded-full mb-4"
          />
          <h4 className="text-blue-200 font-bold text-lg mb-1">{testimonials[current].name}</h4>
          <p className="text-blue-400 text-sm mb-4">{testimonials[current].title}</p>
          <p className="text-blue-200 italic max-w-xl">
            &quot;{testimonials[current].feedback}&quot;
          </p>

          {/* Stars */}
          <div className="flex justify-center mt-4 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          {/* Controls */}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
