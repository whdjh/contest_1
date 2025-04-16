'use client';

import { useState } from 'react';
import FloatingButton from '@/components/common/FloatingButton';

export default function HomeContent() {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <FloatingButton
      openSubMenu={openSubMenu}
      handleMenuClick={() => setOpenSubMenu(prev => !prev)}
      handleLanguageClick={() => console.log('언어 변경')}
      handledarkClick={() => console.log('다크모드')}
    />
  );
}
