'use client';

import { CardProps } from '@/types/card';

export default function Card({
  frontClassName = '',
  backClassName = '',
  containerClassName = '',
  frontText = '앞면',
  backText = '뒷면',
}: CardProps) {
  return (
    <div
      className={`cursor-pointer ${containerClassName}`}
      style={{ perspective: '1000px' }}
    >
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:rotate-y-180">
        <div
          className={`absolute flex h-full w-full items-center justify-center rounded-xl p-4 shadow-lg backface-hidden ${frontClassName}`}
        >
          <div>{frontText}</div>
        </div>
        <div
          className={`absolute flex h-full w-full items-center justify-center rounded-xl p-4 shadow-lg rotate-y-180 backface-hidden ${backClassName}`}
        >
          <div>{backText}</div>
        </div>
      </div>
    </div>
  );
}
