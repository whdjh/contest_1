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
    
    if (backendResponse.status === 204) {
      return NextResponse.json({ success: true }, { status: 200 });
    }
    
    try {
      const data = await backendResponse.json();
      return NextResponse.json(data, { status: backendResponse.status });
    } catch {
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
