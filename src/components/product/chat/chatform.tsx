'use client';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface ChatFormProps {
  onSubmitComplete: (message: string) => void;
}

interface FormData {
  name: string;
  email: string;
}

export default function ChatForm({ onSubmitComplete }: ChatFormProps) {
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm<FormData>({ mode: 'onBlur' });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const name = watch('name') || '';
  const email = watch('email') || '';

  const onSubmitForm = async (data: FormData) => {
    const userText = `1. ${data.name}\n2. ${data.email}`;

    try {
      setIsSubmitting(true);
      console.log('서버에 제출 중...');
      // 서버 요청 로직 추가 가능
    } catch (error) {
      console.error('제출 오류:', error);
    } finally {
      onSubmitComplete(userText);
      setIsSubmitting(false);
    }
  };

  const handleSubmitClick = async () => {
    const isValid = await trigger(['name', 'email']);
    if (!isValid) return;

    handleSubmit(onSubmitForm)();
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='bg-white border rounded-md p-4 shadow-sm mt-2 flex flex-col gap-3'
    >
      <h1>1. 이름</h1>
      <Input
        type='text'
        value={name}
        onChange={(val) => setValue('name', val, { shouldValidate: true })}
      />
      {errors.name && (
        <span className='text-red-500 text-sm'>이름을 입력해주세요.</span>
      )}

      <h1>2. 이메일</h1>
      <Input
        type='text'
        value={email}
        onChange={(val) => setValue('email', val, { shouldValidate: true })}
      />
      {errors.email && (
        <span className='text-red-500 text-sm'>이메일을 입력해주세요.</span>
      )}

      <div className='flex justify-end'>
        <Button
          type='send'
          value={isSubmitting ? '제출 중...' : '제출하기'}
          onSubmit={handleSubmitClick}
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
}
