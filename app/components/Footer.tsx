'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#011c3a] text-gray-300 py-8 px-4 lg:px-16 text-xs">
      <div className="max-w-[1440px] mx-auto space-y-8">

        {/* Main Footer Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">

          {/* 1. Logo + Contact */}
          <div className="space-y-2">
            <Image src="/logo.png" alt="Apex Catalyst" width={120} height={40} className="object-contain" />
            <div className="text-white leading-5">
              <p><strong>T:</strong> 1300 472 849 | +94 711 737 175 | +61 401 561 481</p>
              <p><strong>E:</strong> support@apexcatalyst.com.au</p>
              <p>Level-5, Suite – 5.14, 365 Little Collins St, Melbourne, VIC 3000</p>
              <p>376/A Kaduwela Rd, Battaramulla 10120, Sri Lanka</p>
              <p className="italic text-blue-300">Mon – Fri, 9.00am – 5.00pm</p>
            </div>
          </div>

          {/* 2. Our Services */}
          <div className="space-y-2">
            <h4 className="text-white font-semibold">Our Services</h4>
            <ul className="space-y-1 text-blue-200">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Cloud Infrastructure</li>
              <li>CRM Solutions</li>
              <li>AI Automation</li>
              <li>Digital Strategy</li>
            </ul>
          </div>

          {/* 3. Quick Links */}
          <div className="space-y-2">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-1 text-blue-200">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* 4. Flags + Email Form */}
          <div className="space-y-3 text-center">
            <Image src="/SriLanka (2).JPG" alt="Sri Lanka & Australia" width={90} height={60} className="mx-auto" />
            <p className="text-blue-200">Sri Lanka & Australia</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-1.5 rounded-md bg-white text-black placeholder:text-gray-500 text-xs"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 rounded-md text-xs transition">
                Stay Connected
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Row */}
        <div className="flex justify-center space-x-3 pt-2">
          <Link href="https://www.facebook.com/profile.php?id=61554572919137">
            <Image src="/facebook.png" alt="Facebook" width={20} height={20} />
          </Link>
          <Link href="https://www.linkedin.com/company/apex-catalyst/?viewAsMember=true">
            <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} />
          </Link>
          <Link href="https://www.instagram.com/apex_catalyst_sl?igsh=N3F0OW96NXNsbWM0">
            <Image src="/instagram.png" alt="Instagram" width={20} height={20} />
          </Link>
        </div>

        {/* Divider */}
        <hr className="my-6 border-blue-900" />

        {/* Footer Bottom */}
        <div className="text-center text-[11px] text-gray-400 flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto px-4">
          <span>© {new Date().getFullYear()} Apex Catalyst. All Rights Reserved.</span>
          <Link href="/privacy-policy" className="text-white mt-2 md:mt-0">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
