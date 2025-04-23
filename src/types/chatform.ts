export interface ChatFormProps {
  onSubmitComplete: (data: UserFormData) => void;
}

export interface UserFormData {
  username: string;
  email: string;
}

export interface StartChatRequest {
  username: string;
  email: string;
}

export interface ChatRequest {
  uuid: string;
  content: string;
}

export interface ChatResponse {
  uuid: string;
  content: string;
  createdAt: string;
  chatId: number;
}