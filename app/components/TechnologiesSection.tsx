'use client';

import React, { useRef, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import AnimatedBubbles from './AnimatedBubbles';

const technologies = [
  { image: '/Angular.png' },
  { image: '/Java.png' },
  { image: '/Next.png' },
  { image: '/Wordpress.png' },
  { image: '/Python.png' },
  { image: '/Node.png' },
  { image: '/Jax.png' },
  { image: '/Deep.png' },
  { image: '/TensorFlow.png' },
  { image: '/PyTorch.png' },
];

const TechnologiesSection = () => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    drag: true,
    slides: {
      perView: 5,
      spacing: 8,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 3, spacing: 6 },
      },
      '(max-width: 768px)': {
        slides: { perView: 2, spacing: 4 },
      },
    },
    created: () => {
      if (timer.current) clearInterval(timer.current);
      timer.current = setInterval(() => {
        slider.current?.next();
      }, 2500);
    },
  });

  useEffect(() => {
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <section
      id="technologies"
      className="relative py-8 px-4 lg:px-10 text-white bg-gradient-to-br from-[#00204a] via-[#003566] to-[#001d3d] overflow-hidden font-poppins"
    >
      <div className="relative z-10 text-center mb-6 animate-fade-in-up">
        <h2 className="uppercase text-blue-400 tracking-widest text-[10px] mb-1">Our Core Technology Stack</h2>
        <p className="text-2xl lg:text-3xl font-semibold text-white">Trusted by Leading Brands</p>
      </div>

      <div ref={sliderRef} className="keen-slider relative z-10">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="keen-slider__slide flex items-center justify-center px-2 py-4 transition-transform duration-500 hover:scale-105 animate-slide-in-up"
          >
            <Image
              src={tech.image}
              alt={`Technology ${index + 1}`}
              width={100}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <AnimatedBubbles count={20} direction="both" />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default TechnologiesSection;
