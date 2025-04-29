'use client';

import { useState } from 'react';
import { ComponentType } from 'react';
import { CardProps } from '@/types/card';
import Button from '@/components/common/Button';

interface PaginationProps {
  data: CardProps[];
  CardComponent: ComponentType<CardProps>;
  pageSize?: number;
}

export default function Pagination({
  data,
  CardComponent,
  pageSize = 3,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = data.slice(startIndex, startIndex + pageSize);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex justify-center items-center gap-10">
        {currentData.map((cardProps, index) => (
          <CardComponent
            key={index}
            {...cardProps}
            containerClassName="h-80 w-48"
            frontClassName="bg-blue-200 text-black"
            backClassName="bg-blue-400 text-black"
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4">
        <Button
          type="prev"
          onPrev={handlePrev}
          disabled={currentPage === 1}
        />
        <span>
          {currentPage} / {totalPages}
        </span>
        <Button
          type="next"
          onNext={handleNext}
          disabled={currentPage === totalPages}
        />
      </div>
    </div>
  );
}
