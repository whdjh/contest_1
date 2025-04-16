'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LinkSection() {
  return (
    <>
    <motion.section className="min-h-screen flex items-center justify-center bg-black">
      <Link href="/chat" className="px-4 py-2 bg-orange-400 text-black rounded">
        채팅하러가기
      </Link>
    </motion.section>
    </>
  );
}
