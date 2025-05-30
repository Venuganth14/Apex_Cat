'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#011c3a] text-gray-300 px-6 lg:px-24 py-12 text-sm overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Apex Catalyst Logo"
              width={70}
              height={70}
              className="rounded-full"
            />
            <span className="text-xl font-semibold">
              Apex Catalyst
            </span>
          </div>

          <p className="text-xl font-semibold">Innovate, Automate, Elevate.</p>
          <div className="space-y-1">
            <p className="flex items-center"><span className="text-yellow-500 mr-2">📍</span> Level-5, Suite – 5.14, 365 Little Collins St, Melbourne, VIC 3000</p>
            <p className="flex items-center"><span className="text-yellow-500 mr-2">📍</span> 376/A Kaduwela Rd, Battaramulla 10120, Sri Lanka</p>
            <p className="flex items-center"><span className="text-yellow-500 mr-2">📞</span> 1300 472 849 | +94 711 737 175 | +61 401 561 481</p>
            <p className="flex items-center"><span className="text-yellow-500 mr-2">✉️</span> support@apexcatalyst.com.au</p>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h4 className="text-white font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </motion.div>

        {/* Quick Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          <h4 className="text-white font-semibold mb-3">Quick Link</h4>
          <ul className="space-y-2">
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
          </ul>
        </motion.div>

        {/* Services + Sri Lanka Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="relative"
        >
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2">
            <li><Link href="/services/web-development">Web Development</Link></li>
            <li><Link href="/services/mobile-application-development">Mobile App Development</Link></li>
            <li><Link href="/services/digital-marketing">Digital Marketing</Link></li>
            <li><Link href="/services/catalyst-cloud-service">Catalyst Cloud Service</Link></li>
            <li><Link href="/services/catalyst-digital-innovation">Digital Innovation</Link></li>
            <li><Link href="/services/apex-ai-assist">AI Assist</Link></li>
          </ul>

          <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-8 opacity-70">
            <Image
              src="/SriLanka (2).JPG"
              alt="Sri Lanka"
              width={220}
              height={200}
              className="animate-fade-in"
            />
          </div>
        </motion.div>
      </div>

      {/* Social Icons & Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="mt-12 border-t border-gray-700 pt-6 text-center space-y-4"
      >
        <div className="flex justify-center space-x-4 text-yellow-500 text-lg animate-pulse">
          <a href="https://www.facebook.com/profile.php?id=61554572919137" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://www.instagram.com/apex_catalyst_sl?igsh=N3F0OW96NXNsbWM0" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://www.linkedin.com/company/apex-catalyst/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className="hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
        <p className="text-xs text-gray-400">www.apexcatalyst.com.au</p>
        <p className="text-xs text-gray-400">© 2025 Apex Catalyst. All Rights Reserved</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
