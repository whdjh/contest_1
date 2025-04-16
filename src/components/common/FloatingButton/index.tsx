'use client';

import { FloatingButtonProps } from "@/types/floatingbutton";

export default function FloatingButton({
  openSubMenu,
  handleMenuClick,
  handleLanguageClick,
  handledarkClick,
}: FloatingButtonProps) {
  return (
    <div className='fixed bottom-8 right-8 flex flex-col item-end'>
      {openSubMenu && (
        <ul className='mb-3 list-none p-0'>
          <li className='mt-2'>
            <button
              className='w-14 h-14 rounded-full bg-amber-300 text-white text-xs flex items-center justify-center'
              onClick={handleLanguageClick}
            >
              언어변환
            </button>
          </li>
          <li className='mt-2'>
            <button
              className='w-14 h-14 rounded-full bg-amber-300 text-white text-xs flex items-center justify-center'
              onClick={handledarkClick}
            >
              다크모드
            </button>
          </li>
        </ul>
      )}
      <button
        className='w-14 h-14 rounded-full bg-amber-300 text-white text-lg flex items-center justify-center'
        onClick={handleMenuClick}
      >
        +
      </button>
    </div>
  );
}