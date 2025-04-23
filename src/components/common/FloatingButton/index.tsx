'use client';

import { useEffect, useState } from 'react';
import { FloatingButtonProps } from '@/types/floatingbutton';

export default function FloatingButton({ scrollRef }: FloatingButtonProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = scrollRef?.current || window;

    const handleScroll = () => {
      const scrollTop = scrollRef?.current?.scrollTop ?? window.scrollY;
      setShow(scrollTop > 200);
    };

    target.addEventListener('scroll', handleScroll);
    return () => {
      target.removeEventListener('scroll', handleScroll);
    };
  }, [scrollRef]);

  const scrollToTop = () => {
    const target = scrollRef?.current || window;
    target.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    show && (
      <button
        className="fixed bottom-30 right-10 w-14 h-14 rounded-full bg-orange-400 text-white text-2xl flex items-center justify-center shadow-lg hover:bg-amber-400 transition-all duration-500 animate-bounce z-50"
        onClick={scrollToTop}
      >
        ↑
      </button>
    )
  );
}