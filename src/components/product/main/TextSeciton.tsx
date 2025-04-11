'use client';

import { motion } from 'framer-motion';
import { Preview } from '@/components/ui/demo';

export default function TextSection() {
  return (
    <motion.section className="min-h-screen flex items-center justify-center bg-black">
      <Preview />
    </motion.section>
  );
}
