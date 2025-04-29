'use client';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { ChatFormProps, UserFormData } from '@/types/chatform';

export default function ChatForm({ onSubmitComplete }: ChatFormProps) {
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
    setError,
    clearErrors,
    register,
  } = useForm<UserFormData>({ 
    mode: 'onBlur',
    defaultValues: {
      education: '',
      major: '',
      interests: '',
      personality: '',
      workPreference: '',
      desiredSalary: ''
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const fields = watch();

  useEffect(() => {
    register('education', { required: '최종학력을 선택해주세요.' });
    register('major', { required: '전공을 입력해주세요.' });
    register('interests', { required: '관심분야를 입력해주세요.' });
    register('personality', { required: '성격을 선택해주세요.' });
    register('workPreference', { required: '희망근무형태를 선택해주세요.' });
    register('desiredSalary', { required: '원하는 연봉을 선택해주세요.' });
  }, [register]);

  useEffect(() => {
    const requiredFields = [
      'education',
      'major',
      'interests',
      'personality',
      'workPreference',
      'desiredSalary'
    ];
    
    const allFieldsFilled = requiredFields.every(field => 
      fields[field] && fields[field].trim() !== ''
    );
    
    setIsFormComplete(allFieldsFilled);
  }, [fields]);

  const onSubmitForm = async (data: UserFormData) => {
    try {
      setIsSubmitting(true);
      console.log('서버에 제출 중', data);
      onSubmitComplete(data);
    } catch (error) {
      console.error('제출 오류:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitClick = async () => {
    const isValid = await trigger();
    if (!isValid) {
      console.log('Form validation failed', errors);
      return;
    }
    
    handleSubmit(onSubmitForm)();
  };

  const validateInput = (value: string, fieldName: keyof UserFormData) => {
    const invalidCharRegex = /[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣\s]/;
    
    if (invalidCharRegex.test(value)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setError(fieldName as any, {
        type: 'manual',
        message: '영어, 한글, 공백만 입력 가능합니다.',
      });
      return false;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      clearErrors(fieldName as any);
      return true;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="dark:bg-amber-400 border rounded-md p-4 shadow-sm mt-2 flex flex-col gap-4 bg-sky-200"
    >
      <h1>1. 최종학력</h1>
      <div className="flex flex-row gap-x-4 flex-wrap">
        {['중학교', '고등학교', '전문대학교', '대학교', '대학원'].map((edu) => (
          <label key={edu} className="flex items-center gap-1">
            <input
              type="radio"
              name="education"
              value={edu}
              checked={fields.education === edu}
              onChange={() => setValue('education', edu, { shouldValidate: true })}
            />
            {edu}
          </label>
        ))}
      </div>
      {errors.education && <p className="text-red-500 text-sm">{errors.education.message}</p>}

      <h1>2. 전공</h1>
      <Input
        type="text"
        value={fields.major || ''}
        placeholder="전공"
        onChange={(val) => {
          const isValid = validateInput(val, 'major');
          if (isValid) {
            setValue('major', val, { shouldValidate: true });
          }
        }}
      />
      {errors.major && <p className="text-red-500 text-sm">{errors.major.message}</p>}

      <h1>3. 관심분야</h1>
      <Input
        type="text"
        value={fields.interests || ''}
        placeholder="관심분야"
        onChange={(val) => {
          const isValid = validateInput(val, 'interests');
          if (isValid) {
            setValue('interests', val, { shouldValidate: true });
          }
        }}
      />
      {errors.interests && <p className="text-red-500 text-sm">{errors.interests.message}</p>}

      <h1>4. 성격</h1>
      <div className="flex flex-row gap-x-4 flex-wrap">
        {['외향적', '내향적', '논리적', '감성적', '계획적', '즉흥적'].map((trait) => (
          <label key={trait} className="flex items-center gap-1">
            <input
              type="radio"
              name="personality"
              value={trait}
              checked={fields.personality === trait}
              onChange={() => setValue('personality', trait, { shouldValidate: true })}
            />
            {trait}
          </label>
        ))}
      </div>
      {errors.personality && <p className="text-red-500 text-sm">{errors.personality.message}</p>}

      <h1>5. 희망근무형태</h1>
      <div className="flex flex-row gap-x-4 flex-wrap">
        {['주택', '회사', '원격', '하이브리드'].map((type) => (
          <label key={type} className="flex items-center gap-1">
            <input
              type="radio"
              name="workPreference"
              value={type}
              checked={fields.workPreference === type}
              onChange={() => setValue('workPreference', type, { shouldValidate: true })}
            />
            {type}
          </label>
        ))}
      </div>
      {errors.workPreference && <p className="text-red-500 text-sm">{errors.workPreference.message}</p>}

      <h1>6. 원하는 연봉</h1>
      <div className="flex flex-row gap-x-4 flex-wrap">
        {['2000~2500', '2500~3000', '3000~3500', '3500~4000', '4000이상'].map((range) => (
          <label key={range} className="flex items-center gap-1">
            <input
              type="radio"
              name="desiredSalary"
              value={range}
              checked={fields.desiredSalary === range}
              onChange={() => setValue('desiredSalary', range, { shouldValidate: true })}
            />
            {range}
          </label>
        ))}
      </div>
      {errors.desiredSalary && <p className="text-red-500 text-sm">{errors.desiredSalary.message}</p>}

      <div className="flex justify-end">
        <Button
          type="formSubmit"
          value={isSubmitting ? '제출 중...' : '제출하기'}
          onSubmit={handleSubmitClick}
          disabled={isSubmitting || !isFormComplete}
        />
      </div>
    </form>
  );
}