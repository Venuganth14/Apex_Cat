'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedBubbles from './AnimatedBubbles';

const blogPosts = [
  {
    title: '01. Innovation in Digital Platforms',
    date: 'May 1, 2025',
    summary: 'Explore how modern platforms empower brands with automation, reach, and insights.',
    image: '/img 1.JPG',
    link: '#',
  },
  {
    title: '02. AI and the Future of Customer Experience',
    date: 'May 2, 2025',
    summary: 'Dive into how AI is transforming business processes and client engagement.',
    image: '/img 2.JPG',
    link: '#',
  },
  {
    title: '03. Powering Business with Cloud Solutions',
    date: 'May 3, 2025',
    summary: 'Learn how cloud infrastructure drives reliability, performance, and scale.',
    image: '/img 3.JPG',
    link: '#',
  },
  {
    title: '04. The Evolution of Mobile Strategy',
    date: 'May 4, 2025',
    summary: 'How apps have become central to user journeys and product ecosystems.',
    image: '/img 4.JPG',
    link: '#',
  },
  {
    title: '05. Security First: Cyber Essentials in 2025',
    date: 'May 5, 2025',
    summary: 'Strategies to safeguard digital assets in an increasingly connected world.',
    image: '/img 5.JPG',
    link: '#',
  },
  {
    title: '06. The Rise of UI/UX-Driven Success',
    date: 'May 6, 2025',
    summary: 'Design isn’t just aesthetics—it’s business. Discover its growing importance.',
    image: '/img 6.JPG',
    link: '#',
  },
];

const generateBubbles = () => {
  const seed = 12345;
  const random = (function (seed) {
    return function () {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
  })(seed);

  return Array.from({ length: 20 }, (_, i) => ({
    width: random() * 30 + 20,
    height: random() * 30 + 20,
    top: random() * 100,
    side: i % 2 === 0 ? 'left' : 'right',
    duration: random() * 40 + 20,
    delay: random() * 20,
  }));
};

const LatestBlogSection = () => {
  const [bubbles] = useState(generateBubbles);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: { perView: 3, spacing: 16 },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(max-width: 768px)': {
        slides: { perView: 1, spacing: 12 },
      },
    },
    created: () => {
      timer.current = setInterval(() => slider.current?.next(), 3000);
    },
  });

  useEffect(() => {
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <section
      id="blog"
      className="relative py-20 px-6 lg:px-24 text-white font-poppins bg-gradient-to-br from-[#03045E] via-[#023E8A] to-[#03045E] overflow-hidden"
    >
      {/* Bubble Layer */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {/* {bubbles.map((bubble, i) => (
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
        ))} */}
        <AnimatedBubbles count={20} direction="both" />
      </div>

      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03045E] via-[#023E8A] to-[#03045E] opacity-30 animate-gradient z-0" />

      <div className="relative z-10 text-center mb-16">
        <h2 className="uppercase text-blue-400 tracking-widest text-sm mb-2">Latest Blog</h2>
        <p className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Insights & Innovations</p>
      </div>

      <div ref={sliderRef} className="keen-slider relative z-10">
        {blogPosts.map((post, index) => (
          <div key={index} className="keen-slider__slide">
            <div className="bg-[#101a3a] rounded-xl shadow-md overflow-hidden border border-blue-500 mx-2">
              <div className="relative h-48 w-full">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
                <p className="text-blue-300 text-sm mb-2">{post.date}</p>
                <p className="text-blue-300 text-sm mb-4">{post.summary}</p>
                <Link href={post.link} className="text-blue-400 hover:text-white transition">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogSection;