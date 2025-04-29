'use client';

import React from 'react';
import { CustomButtonProps } from '@/types/button';
import Invisible from '@public/icon/ic_invisibility.svg';
import Visible from '@public/icon/ic_visibility.svg';
import Send from '@public/icon/ic_send.svg';
import ActiveLeft from '@public/icon/ic_arrow_activeleft.svg';
import InActiveLeft from '@public/icon/ic_arrow_inactiveleft.svg';
import Activeright from '@public/icon/ic_arrow_activeright.svg';
import InActiveRight from '@public/icon/ic_arrow_inactiveright.svg'

export default function Button({
  type,
  value,
  onSubmit,
  onPrev,
  onNext,
  showPassword,
  onToggle,
  disabled,
}: CustomButtonProps) {
  const renderButton = () => {
    switch(type) {
      case 'messageSend':
        return (
          <button
            type='button'
            className='flex items-center'
            onClick={onSubmit}
            disabled={disabled}
          >
            <Send width={30} height={30} />
          </button>
        );
      case 'formSubmit':
        return (
          <button
            type='button'
            onClick={onSubmit}
            className='flex items-center justify-center border bg-amber-300 text-black p-2 rounded-md hover:bg-blue-600'
            disabled={disabled}
          >
            {value}
          </button>
        );
      case 'hide':
        return (
          <button 
            type='button'
            onClick={onToggle}
            className='flex items-center'
          >
           {showPassword ? <Invisible /> : <Visible />}
          </button>
        );
      case 'prev':
        return (
          <button
            type='button'
            onClick={onPrev}
            disabled={disabled}
            className="px-4 py-2 rounded disabled:opacity-50"
          >
            {disabled ? <InActiveLeft /> : <ActiveLeft />}
          </button>
        );
      case 'next':
        return (
          <button
            type='button'
            onClick={onNext}
            disabled={disabled}
            className="px-4 py-2 rounded disabled:opacity-50"
          >
            {disabled ? <InActiveRight /> : <Activeright />}
          </button>
        );
      default:
        return null;
    }
  };

  return <div>{renderButton()}</div>;
}
