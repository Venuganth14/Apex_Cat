'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer
      className="bg-[#011c3a] text-gray-300 py-12 px-6 lg:px-20 text-sm relative"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* 1. Branding & Contact */}
        <div className="space-y-5">
          <Image src="/logo.png" alt="Apex Catalyst" width={160} height={50} className="object-contain" />
          <div className="text-white text-sm space-y-1 leading-6">
            <p><span className="font-semibold">T:</span> 1300 472 849 | +94 711 737 175 | +61 401 561 481</p>
            <p><span className="font-semibold">E:</span> info@apexcatalyst.com</p>
            <p>Level-5, Suite – 5.14, 365 Little Collins St, Melbourne, VIC 3000</p>
            <p>376/A Kaduwela Rd, Battaramulla 10120, Sri Lanka</p>
            <p className="italic text-blue-300">Open: Mon – Fri, 9.00am – 5.00pm</p>
          </div>
          <div className="flex space-x-4 pt-2">
            <Link href="#"><Image src="/facebook.png" alt="Facebook" width={20} height={20} /></Link>
            <Link href="#"><Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} /></Link>
            <Link href="#"><Image src="/instagram.png" alt="Instagram" width={20} height={20} /></Link>
          </div>
        </div>

        {/* 2. Services + Navigation */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Cloud Infrastructure</li>
              <li>CRM Solutions</li>
              <li>AI Automation</li>
              <li>Digital Strategy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* 3. Locations + Subscribe */}
        <div className="space-y-6">
          <div className="flex space-x-6 justify-start">
            <div className="text-center">
              <Image src="/SriLanka.JPG" alt="Sri Lanka" width={40} height={30} className="mx-auto" />
              <p className="text-xs pt-1 text-blue-200">Sri Lanka</p>
            </div>
            <div className="text-center">
              <Image src="/Australia.JPG" alt="Australia" width={40} height={30} className="mx-auto" />
              <p className="text-xs pt-1 text-blue-200">Australia</p>
            </div>
          </div>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-white text-black placeholder:text-gray-500 text-sm"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm transition">
              Stay Connected
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-blue-900" />

      {/* Bottom Row */}
      <div className="text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
        <span>© {new Date().getFullYear()} Apex Catalyst. All Rights Reserved.</span>
        <Link href="/privacy-policy" className="text-white mt-2 md:mt-0">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
