'use client';

import '@/styles/globals.css';
import SmoothScroll from '@/hooks/useSmoothScroll';
import { useState, useEffect } from 'react';
import Toggle from '@/components/common/Toggle';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
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
            <Toggle on={isDark} toggle={toggleTheme} />

          </main>
        </body>
      </html>
    </SmoothScroll>
  );
}
