'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type SectionWrapperProps = {
    children: ReactNode;
    direction?: 'left' | 'right' | 'up' | 'down';
  };

export default function SectionWrapper({ children, direction = 'left' }: SectionWrapperProps) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    direction === 'left'
      ? [0, 0, 0, 100, 300]
      : direction === 'right'
      ? [0, 0, 0, -100, -300]
      : [0, 0, 0, 0, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    direction === 'up'
      ? [0, 0, 0, -100, -300]
      : direction === 'down'
      ? [0, 0, 0, 100, 300]
      : [0, 0, 0, 0, 0]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.6, 0.8, 1], [1, 1, 1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1, 1, 1, 0.95, 0.9]);

  return (
    <motion.div
      ref={sectionRef}
      style={{ x, y, opacity, scale }}
      className="min-h-screen flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
}
