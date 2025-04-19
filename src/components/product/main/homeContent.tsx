'use client';

import { useState } from 'react';
import FloatingButton from '@/components/common/FloatingButton';

export default function HomeContent() {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  #todo  다음 이슈에서 기능 구현 및 디자인 해야 할 듯
  return (
    <FloatingButton
      openSubMenu={openSubMenu}
      handleMenuClick={() => setOpenSubMenu(prev => !prev)}
      handleLanguageClick={() => console.log('언어 변경')}
      handledarkClick={() => console.log('다크모드')}
    />  
  );   
}
