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
}: CustomButtonProps) {
  const renderButton = () => {
    switch(type) {
      case 'chat':
        return (
          <button
            type='button'
            onClick={onSubmit} 
            className='border-1'
          >
            <Send />
          </button>
        );
      case 'send':
        return (
          <button
            type='button'
            value=''
            onClick={onSubmit}
            className='border-1 bg-white'
          >
            {value}
          </button>
        );
      case 'hide':
        return (
          <button 
            type='button'
            onClick={onToggle}
            className='border-1'
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