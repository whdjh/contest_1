import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.BACKEND_CHAT_API;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const backendResponse = await fetch(`${BASE_URL}/result`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    
    // 204 No Content 처리
    if (backendResponse.status === 204) {
      return NextResponse.json({ success: true }, { status: 200 });
    }
    
    // 다른 상태코드인 경우 JSON 응답 파싱 시도
    try {
      const data = await backendResponse.json();
      return NextResponse.json(data, { status: backendResponse.status });
    } catch {
      // JSON 파싱 실패시 - 변수를 사용하지 않으므로 생략
      return NextResponse.json(
        { success: true },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('프록시 에러:', error);
    return NextResponse.json(
      { error: '서버 내부 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
