'use client';

import '@/styles/globals.css';
import SmoothScroll from '@/hooks/useSmoothScroll';
import { useState, useEffect } from 'react';
import FloatingButton from '@/components/common/FloatingButton';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isDark, setIsDark] = useState(false);

  const onTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  return (
    <SmoothScroll>
      <html lang="ko">
        <body>
          <main>
            {children}
            <FloatingButton type="darkmode" on={isDark} toggle={onTheme} />
          </main>
        </body>
      </html>
    </SmoothScroll>
  );
}
