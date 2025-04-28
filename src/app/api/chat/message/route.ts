import { NextRequest, NextResponse } from 'next/server';
 
const BASE_URL = process.env.BACKEND_CHAT_API!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const backendResponse = await fetch(`${BASE_URL}/message`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: backendResponse.status });
  } catch (error) {
    console.error('message 프록시 에러:', error);
    return NextResponse.json({ error: 'message 프록시 에러 발생' }, { status: 500 });
  }
}
