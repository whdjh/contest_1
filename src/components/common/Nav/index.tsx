'use client';

import Link from 'next/link';
import Navlogo from '@public/image/img_logo.svg';
import Language from '@public/icon/ic_language.svg';

export default function Nav() {
  return (
    <header className="bg-[#f89b00] border-b-1">
      <div className="sticky flex justify-between h-15 mx-4">
        <div className="flex items-center">
          <Link href="/">
            <Navlogo width={100} height={40} />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Language width={40} height={40} />
          </div>
          <div>
            <Link href="signin">로그인</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
