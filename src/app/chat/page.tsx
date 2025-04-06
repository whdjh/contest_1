'use client';

import { useState } from 'react';
import Input from '@/components/common/Input';
import ChatBubble from '@/components/common/ChatBubble';

// API 도입 후 교체 예정
interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

export default function Page() {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSubmit = () => {
    if (chatInput.trim() === '') return;

    const userMessage: ChatMessage = {
      text: chatInput,
      sender: 'user',
    };

    // 사용자 메시지 추가
    setMessages((prev) => [...prev, userMessage]);
    setChatInput('');

    // TODO: 봇 응답 GET 요청 -> 현재는 더미 메시지로 대체
    // API 도입후 교체 예정
    const botMessage: ChatMessage = {
      text: '안녕하세요!',
      sender: 'bot',
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  return (
    <div className='flex flex-col h-screen p-4 bg-gray-100'>
      <div className='flex-1 overflow-y-auto border rounded-md p-4 bg-gray-300 flex flex-col gap-2'>
        {messages.length === 0 ? (
          <p className='text-gray-400'>메시지를 입력해보세요!</p>
        ) : (
          messages.map((msg, idx) => (
            <ChatBubble
              key={idx}
              type='chat'
              value={msg.text}
              userStatus={msg.sender === 'user'}
              alignRight={msg.sender === 'user'}
            />
          ))
        )}
      </div>

      <div className='mt-4'>
        <Input
          type='chat'
          value={chatInput}
          onChange={setChatInput}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
