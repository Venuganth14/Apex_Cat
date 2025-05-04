'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer
      className="text-gray-300 px-6 lg:px-24 py-10 text-sm"
      style={{
        background: 'linear-gradient(135deg, #0b1c3f 0%, #071c3d 50%, #00172e 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">

        {/* LEFT: Logo + Contact Info */}
        <div className="flex-1 space-y-4">
          <Image src="/logo.png" alt="Apex Catalyst" width={160} height={50} className="object-contain" />
          <div className="space-y-1">
            <p className="text-white font-medium">T: 1300 472 849 | +94 711 737 175 | +61 401 561 481</p>
            <p className="text-white font-medium">E: info@apexcatalyst.com</p>
            <p>Level-5, Suite – 5.14, 365 Little Collins Street, Melbourne, VIC 3000</p>
            <p>376/A Kaduwela Rd, Battaramulla 10120, Battaramulla, Sri Lanka</p>
            <p className="italic">Open Hours: Monday to Friday - 9.00 to 5.00</p>
          </div>
          <div className="flex space-x-3 pt-2">
            <Link href="#"><Image src="/facebook.png" alt="Facebook" width={22} height={22} /></Link>
            <Link href="#"><Image src="/linkedin.png" alt="LinkedIn" width={22} height={22} /></Link>
            <Link href="#"><Image src="/instagram.png" alt="Instagram" width={22} height={22} /></Link>
          </div>
        </div>

        {/* RIGHT: Services + Navigation + Flags/Email */}
        <div className="flex-1 grid grid-cols-3 gap-8 w-full">

          {/* Our Services */}
          <div>
            <h4 className="text-white font-semibold mb-3">Our Services</h4>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Cloud Infrastructure</li>
              <li>CRM Solutions</li>
              <li>AI Automation</li>
              <li>Digital Strategy</li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Flags & Email */}
          <div className="space-y-4">
            <div className="flex space-x-5">
              <div className="flex flex-col items-center">
                <Image src="/SriLanka.JPG" alt="Sri Lanka" width={40} height={30} className="object-contain" />
                <p>Sri Lanka</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/Australia.JPG" alt="Australia" width={40} height={30} className="object-contain" />
                <p>Australia</p>
              </div>
            </div>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-gray-800 px-3 py-2 rounded-md text-white text-sm w-full"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <hr className="my-6 border-gray-700" />
      <div className="text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Apex Catalyst. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
