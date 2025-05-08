'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import TestimonialSection from '../components/TestimonialSection';
import AbVideo from '../components/abvideo';

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

  return (
    <div className="relative w-full bg-gradient-to-br from-[#00204a] via-[#003566] to-[#001d3d] text-white font-poppins">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <AbVideo />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-blue-600 text-center">About Us</h1>
        </div>
      </div>

      {/* Company Overview Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <Image src="/SS.jpeg" alt="Team" width={500} height={500} className="rounded-lg" />
        <div>
          <h2 className="text-4xl font-bold mb-4">Choose The Best IT Service Provider</h2>
          <p className="text-blue-200 text-lg mb-6">
            We are a team of experienced designers, developers, and digital strategists. Through our bespoke result-driven solutions, we deliver measurable outcomes that empower our clients. We’ve worked with thousands of clients and established ourselves as one of the most trusted online solution providers globally.
          </p>
          <div className="space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-4 py-2 rounded ${activeTab === 'mission' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}
            >
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-4 py-2 rounded ${activeTab === 'vision' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}
            >
              Our Vision
            </button>
          </div>
          <p className="text-blue-100 text-md">
            {activeTab === 'mission' ? (
              <>
                Our mission is to revolutionize our clients’ enterprises, enabling them to harness cutting-edge technologies and enhance their operations. We aspire to consistently deliver top-notch products and services.
              </>
            ) : (
              <>
                We aim to become the foremost leader globally, driving sustainable growth and prosperity for both our local and global clients. Our ongoing evolution is geared towards establishing our dominance in the dynamic realm of web and app technologies.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-gradient-to-r from-[#0a2e5c] to-[#02142c] py-20 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Best Achievement!</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { value: '100+', label: 'Satisfied Customers' },
            { value: '20+', label: 'Experience Team' },
            { value: '120+', label: 'Project Completed' },
            { value: '5+', label: 'Awards & Recognition' },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#003566] p-6 rounded-lg">
              <p className="text-3xl font-bold text-white mb-2">{item.value}</p>
              <p className="text-blue-200">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">We Combine Strategy with Marketing</h2>
        <p className="text-blue-200 text-lg mb-10">
          Apex Catalyst stands as a distinguished software development firm with a primary focus on web development, mobile applications, digital marketing, and cloud services.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            'Software Development', 'Web Development', 'Mobile Application',
            'Digital Marketing', 'Catalyst Cloud Service', 'Catalyst Digital Innovation'
          ].map((service, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }}>
              <Card className="bg-[#003566] text-white">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{service}</h4>
                  <p className="text-blue-200 text-sm">High-impact solutions tailored to business goals</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section with Uniform Cards */}
      <section className="bg-[#0a1128] py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Awesome Team Members</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { name: 'Bhanuka', role: 'CEO', img: '/BB.jpeg' },
            { name: 'Dushan', role: 'Director', img: '/DD.jpeg' },
            { name: 'Omar Nafiz', role: 'Director', img: '/OO.jpeg' },
          ].map((member, idx) => (
            <Card key={idx} className="bg-[#003566] text-white h-[320px] flex flex-col items-center justify-center p-6">
              <CardContent className="flex flex-col items-center justify-center">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={140}
                  height={140}
                  className="rounded-full mb-4 object-cover"
                />
                <p className="font-semibold text-white text-lg">{member.name}</p>
                <p className="text-blue-200 text-sm">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Core Divisions Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Core Divisions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Marketing Department',
              desc: 'Drives brand awareness and engagement through data-driven strategies.'
            },
            {
              title: 'Analytics Department',
              desc: 'Transforms complex data into actionable insights for strategic growth.'
            },
            {
              title: 'Product Development Department',
              desc: 'Focuses on designing and enhancing innovative technology-driven solutions.'
            },
            {
              title: 'Technical Department',
              desc: 'Develops and implements cutting-edge scalable technology solutions.'
            },
          ].map((dept, idx) => (
            <motion.div key={idx} whileHover={{ y: -5 }}>
              <Card className="bg-[#003566] text-white">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{dept.title}</h4>
                  <p className="text-blue-200 text-sm">{dept.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />
    </div>
  );
}
