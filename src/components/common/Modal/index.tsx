'use client';

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

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
          ✖ {/* 이미지로 교체해도 좋나, 그대로 써도 무방하긴 할듯? */}
        </button>
        {children}{' '}
        {/* 자식으로 받아서 뭘 띄울지, 경고창이 됐든, 금지언어가 포함됐다고 띄우든.. */}
      </div>
    </div>
  );
}
