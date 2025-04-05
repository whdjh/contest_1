'use client';

import React, { useState } from 'react';
import { CustomInputProps } from '@/types/input';
import Button from '../Button';

export default function Input({
  type,
  value = '',
  onChange,
  onSubmit,
  userStatus = true,
  alignRight,
}: CustomInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => setShowPassword((prev) => !prev);

  const renderInput = () => {
    switch (type) {
      case 'text':
        return (
          <input
            type='text'
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            placeholder='아이디'
            className='border-1'
          />
        );
      case 'password':
        return (
          <div className='flex items-center gap-1 border-1 w-45'>
            <input
              type={showPassword ? 'text' : 'password'}
              value={value}
              onChange={(e) => onChange && onChange(e.target.value)}
              placeholder='비밀번호'
              className='border-r-1'
            />
            <Button 
              type='hide' 
              showPassword={showPassword} 
              onToggle={handlePasswordToggle} 
            />
          </div>
        );
      case 'chat':
        return (
          <div className='flex items-center gap-1 border-1 w-45'>
            <input
              type='text'
              value={value}
              onChange={(e) => onChange && onChange(e.target.value)}
              placeholder='메시지'
              className='border-r-1'
            />
            <Button 
              type='chat' 
              onSubmit={onSubmit} 
              disabled={value === ''} 
            />
          </div>
        );
      case 'readonly':
        return (
          <div className={`w-full flex ${alignRight ? 'justify-end' : 'justify-start'}`}>
            <input
              type='text'
              value={value}
              readOnly
              style={{
                backgroundColor: userStatus ? 'red' : 'blue',
              }}
              className={`border-1 px-3 py-1 rounded-md text-white max-w-[70%] 
                ${userStatus ? 'bg-red-500' : 'bg-blue-500'}`}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderInput()}</div>;
}
