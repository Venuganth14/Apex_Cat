'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import BlgVideo from '../components/blgvideo';

const blogPosts = [
  {
    title: 'Building Beyond Code: Insights into Modern Website Development',
    date: 'March 13, 2025',
    image: '/img 1.JPG',
    fullContent:
      'In the fast-paced digital landscape, website development has evolved into a multidimensional discipline. It’s no longer just about writing lines of code; it’s about crafting immersive digital experiences that captivate and engage users. From UI/UX design to backend scalability, everything matters in delivering seamless, high-performance web applications. In this blog, we explore the tools, frameworks, and philosophies driving modern web development forward.',
  },
  {
    title: 'Seamless Experiences: The Power of React Native Across Platforms',
    date: 'March 13, 2025',
    image: '/img 2.JPG',
    fullContent:
      'Achieving a seamless user experience across different platforms has always been a challenge. With React Native, this challenge is being met head-on, enabling developers to create experiences that transcend iOS and Android boundaries. The framework’s component-based structure and hot reloading feature allow rapid development and consistent performance across devices.',
  },
  {
    title: 'From Idea to App Store: A Comprehensive Guide to Mobile Application Development',
    date: 'March 13, 2025',
    image: '/img 3.JPG',
    fullContent:
      'Transforming a brilliant idea into a successful app requires careful planning, innovative execution, and a deep understanding of the development process. This guide walks you through ideation, prototyping, UI/UX, development, testing, and launch — offering practical tips and best practices at every stage.',
  },
  {
    title: 'SEO Mastery: Positioning Your Website for Maximum Visibility',
    date: 'March 13, 2025',
    image: '/img 4.JPG',
    fullContent:
      'Achieving visibility for your website is paramount. Search Engine Optimization (SEO) serves as the key to unlocking this visibility. From on-page SEO tactics to link building, keyword research, and content strategy, this article unpacks how to boost rankings and bring the right audience to your digital doorstep.',
  },
];

export default function BlogPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-br from-[#00204a] via-[#003566] to-[#001d3d] text-white font-poppins">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <BlgVideo />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-8">
          <div className="flex flex-col max-w-3xl text-center">
            <h1 className="text-5xl font-bold mb-4 text-blue-600">Insights & Solutions Blog</h1>
            <p className="text-blue-400 text-lg">
              Explore our latest articles on technology, development, and digital innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Carousel */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex space-x-8 w-max">
            {blogPosts.map((post, idx) => {
              const isExpanded = expanded === idx;
              const preview = post.fullContent.slice(0, 200) + '...';

              return (
                <motion.div key={idx} whileHover={{ scale: 1.02 }} className="min-w-[320px] max-w-sm">
                  <Card className="bg-[#003566] text-white w-full h-[500px] flex flex-col justify-between">
                    <CardContent className="p-0 flex flex-col h-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover rounded-t"
                      />
                      <div className="p-6 flex flex-col justify-between grow">
                        <div>
                          <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
                          <p className="text-blue-200 text-sm mb-2">{post.date}</p>
                          <div
                            className="text-blue-100 text-sm mb-4 overflow-hidden"
                            style={{ maxHeight: isExpanded ? '160px' : '100px' }}
                          >
                            {isExpanded ? post.fullContent : preview}
                          </div>
                        </div>
                        <button
                          onClick={() => setExpanded(isExpanded ? null : idx)}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition mt-auto"
                        >
                          {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
