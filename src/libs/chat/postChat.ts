import { instance } from "../instance";
import { StartChatRequest, ChatRequest, ChatResponse } from "@/types/chatform";

export async function postFirstChat(body: StartChatRequest): Promise<ChatResponse> {
  const response = await instance.post(`/start`, body);
  console.log("첫번째 채팅임");
  console.log(response.data);
  return response.data;
}

export async function postChat(body: ChatRequest): Promise<ChatResponse> {
  const response = await instance.post(`/message`, body);
  console.log("이후 채팅임");
  console.log(response.data);
  return response.data;
}