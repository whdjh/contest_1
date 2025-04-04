'use client';

import React from 'react';
import { ModalProps } from '@/types/modal';


export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/20 w-screen h-screen"
      onClick={onClose}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✖ 
        </button>
        {children}
      </div>
    </div>
  );
}
