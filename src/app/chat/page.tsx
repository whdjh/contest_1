'use client';

import { useState, useEffect } from 'react';
import Input from '@/components/common/Input';
import ChatBubble from '@/components/common/ChatBubble';
import ChatForm from '@/components/product/chat/chatform';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

const GREETINGS = `안녕하세요, 잡코디입니다! 직무 추천을 위해 아래 폼 데이터를 입력해주세요!`;

export default function Page() {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isComposing, setIsComposing] = useState(false); // 한글 입력 여부

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ text: GREETINGS, sender: 'bot' }]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChatSubmit = () => {
    if (chatInput.trim() === '') return;
    setMessages((prev) => [
      ...prev,
      { text: chatInput, sender: 'user' },
      { text: '봇 응답 준비 중입니다...', sender: 'bot' },
    ]);
    setChatInput('');
  };

  const handleFormSubmit = (userMessage: string) => {
    setMessages((prev) => [
      ...prev,
      { text: userMessage, sender: 'user' },
      { text: '제출이 되었습니다.', sender: 'bot' },
    ]);
    setIsFormSubmitted(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (isComposing) return;
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // 마지막 한글 입력 방지
      handleChatSubmit();
    }
  };

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex-1 overflow-y-auto p-4 bg-sky-100 flex flex-col gap-2'>
        {messages.map((msg, idx) => (
          <ChatBubble
            key={idx}
            type='chat'
            value={msg.text}
            userStatus={msg.sender === 'user'}
            alignRight={msg.sender === 'user'}
          />
        ))}

        {!isFormSubmitted && (
          <ChatForm onSubmitComplete={handleFormSubmit} />
        )}
      </div>

      {isFormSubmitted && (
        <div className='border-t'>
          <Input
            type='chat'
            value={chatInput}
            onChange={setChatInput}
            onSubmit={handleChatSubmit}
            onKeyDown={handleKeyDown}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
          />
        </div>
      )}
    </div>
  );
}
