'use client';

import { useState, useEffect } from 'react';
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
  const [responsivePageSize, setResponsivePageSize] = useState<number>(pageSize);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setResponsivePageSize(1);
      } 
      else if (width < 800) {
        setResponsivePageSize(2);
      } 
      else if (width < 1024) {
        setResponsivePageSize(3);
      } 
      else {
        setResponsivePageSize(pageSize);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pageSize]);

  const totalPages = Math.ceil(data.length / responsivePageSize);
  const startIndex = (currentPage - 1) * responsivePageSize;
  const currentData = data.slice(startIndex, startIndex + responsivePageSize);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap justify-center items-center gap-6">
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
