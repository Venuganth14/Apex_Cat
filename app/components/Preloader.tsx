// components/Preloader.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#011c3a]">
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-32 h-32"
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={128}
          height={128}
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  );
};

export default Preloader;
