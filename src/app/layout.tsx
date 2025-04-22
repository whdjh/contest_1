'use client';  

import '@/styles/globals.css';
import SmoothScroll from '@/hooks/useSmoothScroll';
import FloatingButton from '@/components/common/FloatingButton';
import { useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <SmoothScroll>
      <html lang="ko">
        <body className="bg-red">
          <main className="bg-red">
            {children}
            <FloatingButton
              openSubMenu={openSubMenu}
              handleMenuClick={() => setOpenSubMenu((prev) => !prev)}
              handleLanguageClick={() => console.log('언어 변경')}
              handledarkClick={() => console.log('다크모드')}
            />
          </main>
        </body>
      </html>
    </SmoothScroll>
  );
}
