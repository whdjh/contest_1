'use client';

import { useState, useEffect, useRef } from 'react';
import Input from '@/components/common/Input';
import ChatForm from '@/components/product/chat/chatform';
import { postFirstChat, postChat } from '@/libs/chat/postChat';
import { AxiosError } from 'axios';
import { UserFormData } from '@/types/chatform';
import FloatingButton from '@/components/common/FloatingButton';
import { useRouter } from 'next/navigation';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

const GREETINGS = `안녕하세요, 잡코디입니다! 직무 추천을 위해 아래 폼 데이터를 입력해주세요!`;

export default function Page() {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isComposing, setIsComposing] = useState(false); 
  const [uuid, setUuid] = useState<string | null>(null);
  const [showEndButton, setShowEndButton] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ text: GREETINGS, sender: 'bot' }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleFormSubmit = async (formData: UserFormData) => {
    const userMessage = `${formData.email}\n${formData.username}`;
    setMessages((prev) => [
      ...prev,
      { text: userMessage, sender: 'user' },
      { text: '제출 중입니다...', sender: 'bot' },
    ]);
    setIsFormSubmitted(true);

    try {
      const response = await postFirstChat(formData);
      setUuid(response.uuid);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { text: response?.content || '응답을 가져오지 못했습니다.', sender: 'bot' },
      ]);
      setShowEndButton(true);
    } catch (error: unknown) {
      let errMsg = '오류가 발생했습니다. 다시 시도해주세요.';
      if (error instanceof AxiosError && error.response?.data?.message) {
        errMsg = error.response.data.message;
      }
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { text: errMsg, sender: 'bot' },
      ]);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        scrollContainer.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  const handleChatSubmit = async () => {
    if (chatInput.trim() === '') return;
    if (!uuid) {
      alert('먼저 폼을 제출해주세요.');
      return;
    }

    const userText = chatInput;
    setMessages((prev) => [
      ...prev,
      { text: userText, sender: 'user' },
      { text: '봇 응답 준비 중입니다...', sender: 'bot' },
    ]);
    setChatInput('');

    try {
      const response = await postChat({
        uuid,
        content: userText.trim(),
      });
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { text: response?.content || '응답을 가져오지 못했습니다.', sender: 'bot' },
      ]);
    } catch (error: unknown) {
      let errMsg = '오류가 발생했습니다. 다시 시도해주세요.';
      if (error instanceof AxiosError && error.response?.data?.message) {
        const apiMsg = error.response.data.message;
        if (
          apiMsg === '내용을 입력해주세요.' ||
          apiMsg === '해당 사용자가 없습니다. 폼데이터를 제출해주세요.'
        ) {
          errMsg = apiMsg;
        }
      }
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { text: errMsg, sender: 'bot' },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (isComposing) return;
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleChatSubmit();
    }
  };

  // TODO: API 연동하기
  const handleEndButtonClick = () => {
    router.push('/result');
  };

  return (
    <div className="flex flex-col h-screen">
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 bg-sky-100 flex flex-col gap-2 dark:bg-black"
      >
        {messages.map((msg, idx) => (
          <Input
            key={idx}
            type="chatbubble"
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
        <div className="border-t">
          <Input
            type="chat"
            value={chatInput}
            onChange={setChatInput}
            onSubmit={handleChatSubmit}
            onKeyDown={handleKeyDown}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
          />
        </div>
      )}

      {showEndButton && (
        <FloatingButton type="end" onClick={handleEndButtonClick} />
      )}
      <FloatingButton type="upscroll" scrollRef={scrollRef} />
    </div>
  );
}
