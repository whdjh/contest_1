'use client';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ChatFormProps, UserFormData } from '@/types/chatform';

export default function ChatForm({ onSubmitComplete }: ChatFormProps) {
  const {
    handleSubmit,
    formState: {},
    setValue,
    watch,
    trigger,
  } = useForm<UserFormData>({ mode: 'onBlur' });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const username = watch('username') || '';
  const email = watch('email') || '';
  

  const onSubmitForm = async (data: UserFormData) => {

    try {
      setIsSubmitting(true);
      console.log('서버에 제출 중');
    } catch (error) {
      console.error('제출 오류:', error);
    } finally {
      onSubmitComplete(data);
      setIsSubmitting(false);
    }
  };

  const handleSubmitClick = async () => {
    const isValid = await trigger(['username', 'email']);
    if (!isValid) return;

    handleSubmit(onSubmitForm)();
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="dark:bg-amber-400 border rounded-md p-4 shadow-sm mt-2 flex flex-col gap-3 bg-sky-200"
    >
      <h1>1. 이름</h1>

      <Input
        type="text"
        value={name}
        placeholder="이름"
        onChange={(val) => setValue('name', val, { shouldValidate: true })}
      />

      <h1>2. 이름</h1>
      <Input
        type="text"
        value={email}
        placeholder="이메일"
        onChange={(val) => setValue('email', val, { shouldValidate: true })}
      />

      <div className="flex justify-end">
        <Button
          type="formSubmit"
          value={isSubmitting ? '제출 중...' : '제출하기'}
          onSubmit={handleSubmitClick}
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
}
