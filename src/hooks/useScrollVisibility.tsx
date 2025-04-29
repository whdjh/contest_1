import { useEffect, useState } from 'react';

export default function useScrollVisibility(scrollRef?: React.RefObject<HTMLElement | null>, threshold = 200) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = scrollRef?.current || window;

    const handleScroll = () => {
      const scrollTop = scrollRef?.current?.scrollTop ?? window.scrollY;
      setIsVisible(scrollTop > threshold);
    };

    target.addEventListener('scroll', handleScroll);
    return () => {
      target.removeEventListener('scroll', handleScroll);
    };
  }, [scrollRef, threshold]);

  return isVisible;
}