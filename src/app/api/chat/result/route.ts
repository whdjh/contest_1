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
      return NextResponse.json({ success: true }, { status: 200 });
    }
  } catch (error) {
    console.error('프록시 에러:', error);
    return NextResponse.json(
      { error: '서버 내부 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const uuid = searchParams.get('uuid');

    if (!uuid) {
      return NextResponse.json({ error: 'uuid 파라미터 필요' }, { status: 400 });
    }

    const backendResponse = await fetch(`${BASE_URL}/result?uuid=${uuid}`);

    const contentType = backendResponse.headers.get('content-type');
    console.log('백엔드 응답 content-type:', contentType);

    if (!backendResponse.ok) {
      const errorText = await backendResponse.text();
      console.error('백엔드 응답 오류:', errorText);
      return NextResponse.json({ error: '백엔드 에러' }, { status: backendResponse.status });
    }

    if (contentType?.includes('application/json')) {
      const data = await backendResponse.json();
      return NextResponse.json(data, { status: 200 });
    } else {
      const text = await backendResponse.text();
      console.warn('JSON 아님, 텍스트 응답:', text);
      return NextResponse.json({ raw: text }, { status: 200 });
    }
  } catch (error) {
    console.error('GET 핸들러 서버 에러:', error);
    return NextResponse.json({ error: '서버 내부 오류' }, { status: 500 });
  }
}


