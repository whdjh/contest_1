export interface ChatFormProps {
  onSubmitComplete: (data: UserFormData) => void;
}

export interface UserFormData {
  education: string;
  major: string;
  interests: string;
  personality: string;
  workPreference: string;
  desiredSalary: string;
  [key: string]: string | undefined;
}

export interface StartChatRequest {
  education: string;
  major: string;
  interests: string;
  personality: string;
  workPreference: string;
  desiredSalary: string;
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