'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-50 bg-transparent px-4 py-2 pointer-events-auto">


      <div className="flex items-center justify-between">
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

        <nav className="hidden md:flex space-x-10 text-white font-semibold text-base ml-auto">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
