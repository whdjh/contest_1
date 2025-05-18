'use client';  

import { useEffect, useState } from 'react';
import Card from '@/components/common/Card';
import { cardData } from '@/mock/resultCard';
import Pagination from '@/components/common/Pagination';
import { useRouter } from 'next/navigation'; 

export default function Page() {
  const [resultData, setResultData] = useState({
    job: '',
    reason: '',
    category: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('resultData');
    
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setResultData(parsedData);
        setIsLoading(false);
      } catch (error) {
        console.error('결과 데이터 파싱 오류:', error);
        router.push('/');
      } 
    } else {
      router.push('/');
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mx-auto"></div>
          <p className="mt-4 text-amber-600">결과 불러오는 중...</p>
        </div>
      </div>
    );
  }

  const job = resultData.job || '추천 직업 정보 없음';
  const reason = resultData.reason || '이유 정보 없음';
  const category = resultData.category || 0;

  return (
    <div className="min-h-screen bg-amber-50 py-10 px-4 dark:bg-black">
      {/* Section 1: 추천 결과 요약 */}
      <section className="max-w-5xl mx-auto mb-10 bg-white rounded-2xl shadow-md p-6 border-l-4 border-amber-400">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-amber-600">추천 결과</h2>
          <button
            onClick={() => {
              localStorage.removeItem('resultData');
              router.push('/');
            }}
            className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition"
          >
            초기화
          </button>
        </div>
        <p className="text-lg mb-4 dark:text-black">
          <strong className="text-amber-500">당신의 추천 직업은</strong>{' '}
          <span className="font-semibold">{job}</span>입니다.
        </p>
        <p className="text-lg dark:text-black">
          <strong className="text-amber-500">추천 이유:</strong> {reason}
        </p>
        <p className="text-sm text-gray-500 mt-4">
          카테고리 코드: {category}
        </p>
      </section>


      {/* Section 2: 추천 직무 카드 목록 */}
      <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6 border-l-4 border-amber-400">
        <h3 className="text-xl font-semibold text-amber-600 mb-4">관련 직무 훈련 과정(추가예정)</h3>
        <Pagination
          data={cardData}
          CardComponent={Card}
          pageSize={4}
        />
      </section>
    </div>
  );
}
