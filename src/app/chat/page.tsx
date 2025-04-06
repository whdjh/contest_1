'use client';

import { useState, useEffect } from 'react';
import Input from '@/components/common/Input';
import ChatBubble from '@/components/common/ChatBubble';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

export default function Page() {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const initialBotMessage: ChatMessage = {
      text: '안녕하세요! 무엇을 도와드릴까요?',
      sender: 'bot',
    };
    setMessages([initialBotMessage]);
  }, []);

  const handleSubmit = () => {
    if (chatInput.trim() === '') return;

    const userMessage: ChatMessage = {
      text: chatInput,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setChatInput('');

    const botMessage: ChatMessage = {
      text: '안녕하세요!',
      sender: 'bot',
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-col flex-1 overflow-y-auto p-4 border bg-sky-200 gap-2'>
        {messages.map((msg, idx) => (
          <ChatBubble
            key={idx}
            type='chat'
            value={msg.text}
            userStatus={msg.sender === 'user'}
            alignRight={msg.sender === 'user'}
          />
        ))}
      </div>
      <Input
        type='chat'
        value={chatInput}
        onChange={setChatInput}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
