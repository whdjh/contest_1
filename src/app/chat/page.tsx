'use client';

import { useState, useEffect } from 'react';
import Input from '@/components/common/Input';
import ChatBubble from '@/components/common/ChatBubble';
import { useForm } from 'react-hook-form';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

interface FormData {
  name: string;
  email: string;
}

const GREETINGS = `안녕하세요, 잡코디입니다! 직무 추천을 위해 아래 폼 데이터를 입력해주세요!`;

export default function Page() {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({ mode: 'onBlur' });

  useEffect(() => {
    if (messages.length === 0)  setMessages([{ text: GREETINGS, sender: 'bot' }]);
  }, []);

  const onSubmitForm = async (data: FormData) => {
    const userText = `1. ${data.name}\n2. ${data.email}`;
    setMessages((prev) => [...prev, { text: userText, sender: 'user' }]);

    try { 
      // 폼 데이터 보내는걸로 API로 교체
      console.log("제출");
    } catch(error) {
      console.log('서버 오류', error);
    } 
    // 다음 과정은 API 통신이 당장 안되서 추가한 항목임. API 완성후 지울것
    finally {
      setMessages((prev) => [
        ...prev,
        { text: '제출이 되었습니다.', sender: 'bot'},
      ]);
      setIsFormSubmitted(true);
    }
  };

  const handleChatSubmit = () => {
    if (chatInput.trim() === '') return;
    setMessages((prev) => [
      ...prev,
      { text: chatInput, sender: 'user' },
      { text: '봇 응답 준비 중입니다...', sender: 'bot' },
    ]);
    setChatInput('');
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
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className='bg-white border rounded-md p-4 shadow-sm mt-2 flex flex-col gap-3'
          >
            <h1>1. 이름</h1>
            <Input 
              type="text"
              value={watch('name')}
              onChange={(val) => setValue('name', val)}/>
            {errors.name && <span className='text-red-500 text-sm'>이름을 입력해주세요.</span>}

            <h1>2. 이메일</h1>
            <Input 
              type="text"
              value={watch('email')}
              onChange={(val) => setValue('email', val)}/>
            {errors.email && <span className='text-red-500 text-sm'>이메일을 입력해주세요.</span>}
            <button
              type='submit'
              className='bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition'
            >
              제출하기
            </button>
          </form>
        )}
      </div>

      {isFormSubmitted && (
        <div className='border-t'>
          <Input
            type='chat'
            value={chatInput}
            onChange={setChatInput}
            onSubmit={handleChatSubmit}
          />
        </div>
      )}
    </div>
  );
}