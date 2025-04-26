import { instance } from "../instance";
import { StartChatRequest, ChatRequest, ChatResponse } from "@/types/chatform";

// 첫 번째 채팅 보내기
export async function postFirstChat(body: StartChatRequest): Promise<ChatResponse> {
  const response = await instance.post(`/start`, body);
  console.log("첫번째 채팅 응답:", response.data);
  return response.data;
}

// 이후 채팅 보내기
export async function postChat(body: ChatRequest): Promise<ChatResponse> {
  const response = await instance.post(`/message`, body);
  console.log("이후 채팅 응답:", response.data);
  return response.data;
}
