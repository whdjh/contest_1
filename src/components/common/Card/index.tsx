'use client';

import { useState, useRef, useEffect } from 'react';
import { CardProps } from '@/types/card';
import Image from 'next/image';

export default function Card({
  frontClassName = '',
  backClassName = '',
  containerClassName = '',
  name = '앞면',
  description = '뒷면',
  url = '',
  additionaltype = '',
}: CardProps) {
  const [flipped, setFlipped] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCardClick = () => {
    setFlipped((prev) => !prev);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      if (scrollContainer.scrollHeight > scrollContainer.clientHeight) {
        scrollContainer.scrollTop += e.deltaY;
        e.preventDefault();
      }
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div
      className={`relative cursor-pointer ${containerClassName}`}
      style={{ perspective: '1000px' }}
      onClick={handleCardClick}
    >
      {flipped && (
        <div className="absolute top-2 right-2 z-20">
          <Image
            src="/icon/pick.webp"
            alt="고정됨"
            width={24}
            height={24}
            priority
          />
        </div>
      )}

      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] 
          ${flipped ? 'rotate-y-180 scale-105' : 'hover:rotate-y-180'}`}
      >
        <div
          className={`absolute flex gap-4 flex-col h-full w-full items-center justify-center rounded-xl p-4 shadow-lg backface-hidden ${frontClassName}`}
        >
          <div className="text-xs">{name}</div>
          <div className="text-xs">{additionaltype}</div>
          <div className="text-xs overflow-hidden text-ellipsis whitespace-nowrap w-full">
            <span className="block text-center truncate">{url}</span>
          </div>
          <div className="text-[10px] text-gray-400 mt-2">
            (카드 클릭 시 고정)
          </div>
        </div>

        <div
          className={`absolute flex h-full w-full items-center justify-center rounded-xl p-4 shadow-lg rotate-y-180 backface-hidden ${backClassName}`}
        >
          <div
            ref={scrollRef}
            className="text-xs w-full h-full overflow-y-auto p-2 bg-white rounded"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
