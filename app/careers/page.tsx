'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CareersPage() {
  return (
    <div className="relative w-full bg-gradient-to-br from-[#00204a] via-[#003566] to-[#001d3d] text-white font-poppins">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none" autoPlay loop muted playsInline>
          <source src="/Careers.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 flex items-center justify-center px-8">
          <h1 className="text-5xl lg:text-4xl font-bold text-blue-600 text-center">
            Join a team where innovation meets impact.<br />
            Collaborate with brilliant minds on global projects.<br />
            Grow your skills in a culture of innovation.<br />
            Shape the digital future with purpose.
          </h1>
        </div>
      </div>

      {/* Company Overview Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <Image src="/CC.jpeg" alt="Team" width={500} height={500} className="rounded-lg" />
        <div>
          <h2 className="text-4xl font-bold mb-4">Choose The Best IT Service Provider</h2>
          <p className="text-blue-200 text-lg mb-6">
            We are a team of experienced designers, developers, and digital strategists. Through our bespoke result-driven solutions, we deliver measurable outcomes that empower our clients. We&apos;ve worked with thousands of clients and established ourselves as one of the most trusted online solution providers globally.
          </p>
          <div className="space-x-4 mb-6">
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Our Mission</button>
            <button className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded">Our Vision</button>
          </div>
          <p className="text-blue-100 text-md">
            Our mission is to revolutionize our clients&apos; enterprises, enabling them to harness cutting-edge technologies and enhance their operations. We aspire to consistently deliver top-notch products and services.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Where IT Meets Passion</h2>
        <p className="text-blue-200 text-lg">
          At Apex Catalyst, we believe in empowering our team to drive change and deliver exceptional digital solutions. Our collaborative environment fosters growth, creativity, and innovation.
        </p>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Current Openings</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[{ title: 'Frontend Developer', location: 'Melbourne, Australia', description: 'Seeking a skilled React developer to build intuitive user interfaces.' }, { title: 'Backend Developer', location: 'Battaramulla, Sri Lanka', description: 'Looking for an experienced Node.js developer to manage server-side logic.' }, { title: 'UI/UX Designer', location: 'Remote', description: 'Creative designer needed to craft engaging user experiences.' }, { title: 'Digital Marketing Specialist', location: 'Melbourne, Australia', description: 'Expert in SEO and SEM strategies to enhance our online presence.' }].map((job, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }}>
              <Card className="bg-[#003566] text-white">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{job.title}</h4>
                  <p className="text-blue-200 text-sm mb-2">{job.location}</p>
                  <p className="text-blue-100 text-sm mb-4">{job.description}</p>
                  <a href="/job-apply" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition">
                    Apply Now
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-20 px-6">
        <h3 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h3>
        <p className="text-blue-200 mb-6">
          If you&apos;re passionate about technology and innovation, we&apos;d love to hear from you.
        </p>
        <a href="/job-apply" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition">
          Join Our Team
        </a>
      </section>
    </div>
  );
}