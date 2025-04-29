'use client';

import { CardProps } from '@/types/card';

export default function Card({
  frontClassName = '',
  backClassName = '',
  containerClassName = '',
  name = '앞면',
  description = '뒷면',
  url = '',
  additionaltype = '',
}: CardProps) {
  return (
    <div
      className={`cursor-pointer ${containerClassName}`}
      style={{ perspective: '1000px' }}
    >
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:rotate-y-180">
        <div
          className={`absolute flex gap-4 flex-col h-full w-full items-center justify-center rounded-xl p-4 shadow-lg backface-hidden ${frontClassName}`}
        >
          <div className="text-xs">{name}</div>
          <div className="text-xs">{additionaltype}</div>
          <div className="text-xs overflow-hidden text-ellipsis whitespace-nowrap w-full">
            <span className="block text-center truncate">{url}</span>
          </div>
        </div>
        <div
          className={`absolute flex h-full w-full items-center justify-center rounded-xl p-4 shadow-lg rotate-y-180 backface-hidden ${backClassName}`}
        >
          <div className="text-xs">{description}</div>
        </div>
      </div>
    </div>
  );
}
