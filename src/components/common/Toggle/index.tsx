'use client';
import { toggleProps } from '@/types/toggle'; 

export default function Toggle({ on, toggle }: toggleProps ) {
  return (
    <div
      className="fixed bottom-16 right-6 z-50 w-[90px] h-[44px] flex items-center justify-center cursor-pointer"
      onClick={toggle}
    >
      <div className="absolute w-full h-full rounded-full bg-[#39315a] shadow-inner" />

      <div
        className={`absolute top-[7px] left-[7px] w-[30px] h-[30px] rounded-full transition-all duration-500
        ${
          on
            ? 'translate-x-[45px] bg-[#a7694a] shadow-[inset_0_0_1px_3px_#a56758,inset_0_0_6px_8px_#6b454f,0_0_15px_5px_rgba(253,184,67,0.2)]'
            : 'bg-[#4a426b]'
        } `}
      >
        <div
          className={`absolute top-[7px] left-[7px] w-[16px] h-[16px] rounded-full transition-opacity duration-300
          ${on ? 'opacity-100' : 'opacity-0'} bg-[#fdc63a]`}
        >
          <div className="absolute top-[4px] left-[4px] w-[8px] h-[8px] rounded-full bg-[#fef401] shadow-[0_0_2px_4px_#fdb843]" />
        </div>

        <div
          className={`absolute top-[-6px] left-[12px] w-[6px] h-[6px] bg-yellow-300 rounded-full ${
            on ? 'animate-spark1' : 'hidden'
          }`}
        />
        <div
          className={`absolute bottom-[-6px] right-[12px] w-[6px] h-[6px] bg-yellow-300 rounded-full ${
            on ? 'animate-spark2' : 'hidden'
          }`}
        />
        <div
          className={`absolute bottom-[-2px] left-[6px] w-[5px] h-[5px] bg-yellow-200 rounded-full ${
            on ? 'animate-spark3' : 'hidden'
          }`}
        />
        <div
          className={`absolute top-[-2px] right-[6px] w-[5px] h-[5px] bg-yellow-200 rounded-full ${
            on ? 'animate-spark4' : 'hidden'
          }`}
        />
      </div>
    </div>
  );
}
