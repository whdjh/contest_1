'use client';

import React from 'react';
import { CustomInputProps } from '@/types/input';
import Button from '../Button';

export default function Input({
  type,
  value = '',
  onChange,
  onSubmit,
  userStatus = true,
  showPassword = false,
  onTogglePassword,
}: CustomInputProps) {
  const renderInput = () => {
    switch (type) {
      case 'text':
        return (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            placeholder="아이디"
            className="border-1"
          />
        );
      case 'password':
        return (
          <div className="flex items-center gap-1 border-1 w-45">
            <input
              type={showPassword ? 'text' : 'password'}
              value={value}
              onChange={(e) => onChange && onChange(e.target.value)}
              placeholder="비밀번호"
              className="border-r-1"
            />
            <Button 
              type="hide" 
              showPassword={showPassword} 
              onToggle={onTogglePassword} 
            />
          </div>
        );
      case 'chat':
        return (
          <div className="flex items-center gap-1 border-1 w-45">
            <input
              type="text"
              value={value}
              onChange={(e) => onChange && onChange(e.target.value)}
              placeholder="메시지"
              className="border-r-1"
            />
            <Button 
              type="chat" 
              onSubmit={onSubmit} 
              disabled={value === ''} 
            />
          </div>
        );
      case 'readonly':
        return (
          <input
            type="text"
            value={value}
            readOnly
            style={{
              backgroundColor: userStatus ? 'red' : 'blue',
            }}
            className="border-1"
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderInput()}</div>;
}
