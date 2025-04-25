'use client';

import { motion } from 'framer-motion';
import { Preview } from '@/components/ui/demo';

export default function TextSection() {
  return (
    <motion.section className="relative z-10 h-70 md:min-h-screen flex items-center justify-center">
      <Preview />
    </motion.section>
  );
}
