'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LinkSection() {
  return (
    <>
      <motion.section className="min-h-screen flex items-center justify-center">
        <Link
          href="/chat"
          className="px-6 py-3 bg-orange-400 text-black rounded-lg font-semibold shadow-md hover:bg-orange-500 hover:scale-105 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-black"
        >
          채팅하러 가기
        </Link>
      </motion.section>
    </>
  );
}
