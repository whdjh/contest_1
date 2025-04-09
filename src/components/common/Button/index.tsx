'use client';

import React from 'react';
import { CustomButtonProps } from '@/types/button';
import Invisible from '@public/icon/ic_invisibility.svg';
import Visible from '@public/icon/ic_visibility.svg';
import Send from '@public/icon/ic_send.svg';

export default function Button({
  type,
  value,
  onSubmit,
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
            className='flex items-center justify-center border bg-amber-300 text-black p-2 rounded-md'
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
      default:
        return null;
    }
  };

  return <div>{renderButton()}</div>;
}
