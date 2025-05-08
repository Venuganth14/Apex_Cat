'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BlgVideo from '../components/blgvideo';

const blogPosts = [
  {
    title: 'Building Beyond Code: Insights into Modern Website Development',
    date: 'March 13, 2025',
    image: '/img 1.JPG',
    excerpt:
      'In the fast-paced digital landscape, website development has evolved into a multidimensional discipline. It’s no longer just about writing lines of code; it’s about crafting immersive digital experiences that captivate and engage users.',
    link: '/blog/building-beyond-code',
  },
  {
    title: 'Seamless Experiences: The Power of React Native Across Platforms',
    date: 'March 13, 2025',
    image: '/img 2.JPG',
    excerpt:
      'Achieving a seamless user experience across different platforms has always been a challenge. With React Native, this challenge is being met head-on, enabling developers to create experiences that transcend iOS and Android boundaries.',
    link: '/blog/react-native-power',
  },
  {
    title: 'From Idea to App Store: A Comprehensive Guide to Mobile Application Development',
    date: 'March 13, 2025',
    image: '/img 3.JPG',
    excerpt:
      'Transforming a brilliant idea into a successful app requires careful planning, innovative execution, and a deep understanding of the development process. This guide takes you through the journey from concept to App Store launch.',
    link: '/blog/idea-to-app-store',
  },
  {
    title: 'SEO Mastery: Positioning Your Website for Maximum Visibility',
    date: 'March 13, 2025',
    image: '/img 4.JPG',
    excerpt:
      'Achieving visibility for your website is paramount. Search Engine Optimization (SEO) serves as the key to unlocking this visibility, allowing your website to rise to the top of search engine results and attract the right audience.',
    link: '/blog/seo-mastery',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gradient-to-br from-[#00204a] via-[#003566] to-[#001d3d] text-white font-poppins">
         <div className="relative w-full h-screen overflow-hidden">
          <BlgVideo/>
          <div className="absolute inset-0 z-10 flex items-center justify-center px-8">
  <div className="flex flex-col max-w-3xl text-center">
    <h1 className="text-5xl font-bold mb-4 text-blue-600">Insights & Solutions Blog</h1>
    <p className="text-blue-400 text-lg">
      Explore our latest articles on technology, development, and digital innovation.
    </p>
  </div>
</div>


        </div>    
      {/* Blog Posts Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }}>
              <Card className="bg-[#003566] text-white">
                <CardContent className="p-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover rounded-t"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
                    <p className="text-blue-200 text-sm mb-2">{post.date}</p>
                    <p className="text-blue-100 text-sm mb-4">{post.excerpt}</p>
                    <a
                      href={post.link}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition"
                    >
                      Read More
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
