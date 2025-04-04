'use client';

import { useState } from 'react';
import Input from '@/components/common/Input';

export default function Page() {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [userStatus, setUserStatus] = useState(true);

  const handleSubmit = () => {
    if (chatInput.trim() === '') return;

    // 메시지 저장
    setMessages((prev) => [...prev, chatInput]);
    setChatInput('');

    // TODO: 채팅봇 응답 가져오기 (GET 요청)
  };

  return (
    <div className='flex flex-col h-screen p-4 bg-gray-50'>
      {/* 채팅 메시지 출력 (readonly Input으로 반복) */}
      <div className='flex-1 overflow-y-auto border rounded-md p-4 bg-white flex flex-col gap-2'>
        {messages.length === 0 ? (
          <p className='text-gray-400'>메시지를 입력해보세요!</p>
        ) : (
          messages.map((msg, idx) => (
            <Input
              key={idx}
              type='readonly'
              value={msg}
              userStatus={userStatus}
            />
          ))
        )}
      </div>

      {/* 입력창 */}
      <div className='mt-4'>
        <Input
          type='chat'
          value={chatInput}
          onChange={setChatInput}
          onSubmit={handleSubmit}
        />
      </div>

      {/* 색상 변경용 버튼 (테스트용) */}
      <button
        className='mt-2 text-sm text-blue-600 underline'
        onClick={() => setUserStatus((prev) => !prev)}
      >
        사용자 상태 색상 토글
      </button>
    </div>
  );
}
