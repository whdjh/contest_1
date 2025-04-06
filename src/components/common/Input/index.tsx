'use client';

import React, { useEffect, useRef } from 'react';
import { CustomInputProps } from '@/types/input';
import Button from '../Button';

export default function Input({
  type,
  value = '',
  onChange,
  onSubmit,
  showPassword,
  onTogglePassword,
}: CustomInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Hook으로 교체 예정
  useEffect(() => {
    if (type === 'chat' && textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 80)}px`; 
    }
  }, [value, type]);

  const renderInput = () => {
    switch (type) {
      // 아이디
      case 'text':
        return (
          <input
            type='text'
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            placeholder='아이디'
            className='w-full border px-3 py-2 rounded-md'
          />
        );
      // 비밀번호
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
      // 채팅방 입력
      case 'chat':
        return (
          <div className='flex items-end w-full bg-sky-50 border px-3 py-2'>
            <textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              placeholder='메시지를 입력하세요...'
              className='flex-1 bg-transparent resize-none overflow-y-auto outline-none text-base leading-tight max-h-[5rem] pd-1'
              rows={1}
            />
            <div className='ml-2'>
              <Button 
                type='chat' 
                onSubmit={onSubmit} 
                disabled={value.trim() === ''} 
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="w-full">{renderInput()}</div>;
}
