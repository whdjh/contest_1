'use client';

import Nav from "@/components/common/Nav/Nav";
import Input from "@/components/common/Input";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState(''); // 입력 값 상태 관리
  const [userStatus, setUserStatus] = useState(true); // 사용자 상태 (true: 빨간색, false: 파란색)

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSubmit = () => {
    // TODO: 서버로 전송하는 로직 구현
    console.log('메시지 전송:', inputValue);
  };

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="flex flex-col gap-5">
        {/* 텍스트 입력 */}
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        {/* 비밀번호 입력 */}
        <Input
          type="password"
          value={inputValue}
          onChange={handleInputChange}
        />
        {/* 채팅 입력 */}
        <Input
          type="chat"
          value={inputValue}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
        {/* 읽기 전용 입력 */}
        <Input
          type="readonly"
          value={inputValue}
          userStatus={userStatus}
        />
        <button className="border-1" onClick={() => setUserStatus(!userStatus)}>
          사용자 상태 변경
        </button>
      </div>
      <hr />
    </div>
  );
}
