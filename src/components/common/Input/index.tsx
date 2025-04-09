'use client';

import React, { useRef } from 'react';
import { CustomInputProps } from '@/types/input';
import Button from '../Button';
import { useAutoResizeInput } from '@/hooks/useResizeInput';

export default function Input({
  type,
  value = '',
  onChange,
  onSubmit,
  onKeyDown,
  onCompositionStart,
  onCompositionEnd,
  showPassword,
  onTogglePassword,
  userStatus,
  alignRight,
  placeholder = '',
}: CustomInputProps & {
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onCompositionStart?: () => void;
  onCompositionEnd?: () => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useAutoResizeInput(textareaRef, value, type);

  const renderInput = () => {
    switch (type) {
      case 'text':
        return (
          <input
            type='text'
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            placeholder={placeholder}
            className='w-full border px-3 py-2 rounded-md'
          />
        );
      case 'password':
        return (
          <div className='flex items-center w-full border rounded-md px-2 py-2 gap-2'>
            <input
              type={showPassword ? 'text' : 'password'}
              value={value}
              onChange={(e) => onChange && onChange(e.target.value)}
              placeholder='비밀번호'
              className='flex-1 bg-transparent outline-none'
            />
            <Button 
              type='hide' 
              showPassword={showPassword}
              onToggle={onTogglePassword}
            />
          </div>
        );
      case 'chat':
        return (
          <div className='flex items-end w-full bg-sky-50 border px-3 py-2'>
            <textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              placeholder='메시지를 입력하세요...'
              className='flex-1 bg-transparent resize-none overflow-y-auto outline-none text-base leading-tight max-h-[5rem]'
              rows={1}
              onKeyDown={onKeyDown}
              onCompositionStart={onCompositionStart}
              onCompositionEnd={onCompositionEnd}
            />
            <div className='ml-2'>
              <Button 
                type='messageSend' 
                onSubmit={onSubmit} 
                disabled={value.trim() === ''} 
              />
            </div>
          </div>
        );
      case 'chatbubble': 
      return (
        <div className={`w-full flex ${alignRight ? 'justify-end' : 'justify-start'}`}>
          <div
            className={`
              whitespace-pre-wrap break-words px-3 py-1 rounded-lg text-black max-w-[70%]
              ${userStatus ? 'bg-amber-300' : 'bg-white'}
            `}
          >
            {value}
            <h3 className='flex justify-end text-[8px]'>01:30</h3>
          </div>
        </div>
      );
      default:
        return null;
    }
  };

  return <div className='w-full'>{renderInput()}</div>;
}
