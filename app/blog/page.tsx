'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'Building Beyond Code: Insights into Modern Website Development',
    date: 'March 13, 2025',
    image: '/img 1.JPG',
    fullContent:
      'In the fast-paced digital landscape, website development has transformed from a simple act of coding to a holistic process of engineering seamless digital experiences. Today, developers are not only expected to write clean, efficient code but also to collaborate with designers, strategists, and marketers to build sites that engage users and drive business outcomes. From frontend tools like React and Tailwind CSS to backend technologies like Node.js and scalable cloud infrastructure, the modern web development ecosystem requires a synergy of skills. This article uncovers the essential frameworks, workflows, and best practices shaping the future of the web.',
  },
  {
    title: 'Seamless Experiences: The Power of React Native Across Platforms',
    date: 'March 13, 2025',
    image: '/img 2.JPG',
    fullContent:
      'Creating a consistent and high-performance mobile app experience across both iOS and Android devices has historically been a major challenge. React Native bridges this gap by enabling developers to write code once and deploy it across platforms without compromising on performance or native feel. With its strong developer community, third-party libraries, and hot reloading capability, React Native is revolutionizing cross-platform mobile development. This post delves into its advantages, challenges, and the reasons it’s become the go-to solution for startups and enterprises alike.',
  },
  {
    title: 'From Idea to App Store: A Comprehensive Guide to Mobile Application Development',
    date: 'March 13, 2025',
    image: '/img 3.JPG',
    fullContent:
      'Turning a creative app idea into a polished, functional product involves numerous steps and strategic decisions. This comprehensive guide explores the journey from ideation and market research to wireframing, UI/UX design, coding, and post-launch support. We outline methodologies like Agile, key design principles, app monetization strategies, and tools that streamline development. Whether you’re a solo developer or a business team, understanding each phase of mobile app creation is essential for delivering impactful apps that users love and retain.',
  },
  {
    title: 'SEO Mastery: Positioning Your Website for Maximum Visibility',
    date: 'March 13, 2025',
    image: '/img 4.JPG',
    fullContent:
      'In a world where competition for online attention is fierce, mastering Search Engine Optimization (SEO) can make or break your website’s success. Effective SEO goes beyond keywords — it encompasses site architecture, loading speed, mobile responsiveness, metadata optimization, backlink strategies, and high-quality content. This blog post breaks down modern SEO tactics and tools that help your website rise through the search engine ranks. Learn how to attract the right audience organically and convert traffic into measurable results.',
  },
];

export default function BlogPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-br from-[#00204a] via-[#003566] to-[#001d3d] text-white font-poppins">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden bg-[#001d3d]">
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
          <motion.div
            className="flex w-[400%] h-full"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
          >
            {['/hi1.jpg', '/hi2.jpg', '/hi3.jpg', '/hi4.jpg'].map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`Hero Image ${idx + 1}`}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
            ))}
          </motion.div>
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center px-8">
          <div className="flex flex-col max-w-3xl text-center text-white bg-black/50 p-6 rounded-xl">
            <h1 className="text-5xl font-bold mb-4 text-blue-400">Insights & Solutions Blog</h1>
            <p className="text-blue-200 text-lg">
              Explore in-depth articles on modern tech trends, development practices, and digital transformation strategies that shape the future.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto overflow-hidden relative">
        <div className="animate-scroll inline-flex space-x-8 w-max">
          {blogPosts.map((post, idx) => {
            const isExpanded = expanded === idx;
            const preview = post.fullContent.slice(0, 200) + '...';

            return (
              <motion.div key={idx} whileHover={{ scale: 1.02 }} className="min-w-[320px] max-w-sm">
                <Card className="bg-[#003566] text-white w-full h-[540px] flex flex-col justify-between">
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
      </section>
    </div>
  );
}
