'use client';
import Nav from '@/components/common/Nav';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import React, { useState } from 'react';
import Modal from '@/components/common/Modal';

export default function Home() {
  const [inputValue, setInputValue] = useState(''); // 입력 값 상태 관리
  const [passwordValue, setPasswordValue] = useState(''); // 비밀번호 입력 값 상태 관리
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 보이기/안보이기 상태 추가

  const [isOpen, setIsOpen] = useState(false); // 모달 오픈 상태

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handlePasswordChange = (value: string) => {
    setPasswordValue(value);
  };

  const handleSubmit = () => {
    console.log('메시지 전송:', inputValue); // TODO: 서버로 전송하는 로직 구현
  };

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev); // 비밀번호 보이기/숨기기 상태 변경 함수
  };

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="flex flex-col gap-5">
        {/* 텍스트 입력 */}
        <Input type="text" value={inputValue} onChange={handleInputChange} />

        {/* 비밀번호 입력 */}
        <Input
          type={showPassword ? 'text' : 'password'}
          value={passwordValue}
          onChange={handlePasswordChange}
        />

        {/* 채팅 입력 */}
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>

      <hr />

      <div className="flex flex-col gap-5">
        {/* 채팅 보내기 버튼 */}
        <Button
          type="chat"
          onSubmit={handleSubmit}
          disabled={inputValue === ''}
        />

        {/* 비밀번호 보이기/안보이기 버튼 (showPassword와 toggle 함수 전달) */}
        <Button
          type="hide"
          showPassword={showPassword}
          onToggle={handlePasswordToggle}
        />

        {/* send 관련 버튼 */}
        <Button type="send" value="로그인" onSubmit={handleSubmit} />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          오픈
        </button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="text-lg font-bold">모달 제목</h2>
          <p className="mt-2">욕설 금지</p>
        </Modal>
      </div>
    </div>
  );
}
