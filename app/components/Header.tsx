'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50 bg-transparent px-4 py-3 font-poppins">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="block pt-1">
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-white font-semibold text-base ml-auto">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-[#001d3d] rounded-lg px-6 py-5 text-white font-medium shadow-md space-y-3">
          <Link href="/" className="block" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about-us" className="block" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/blog" className="block" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/careers" className="block" onClick={() => setIsOpen(false)}>Careers</Link>
          <Link href="/services" className="block" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/contact" className="block" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
