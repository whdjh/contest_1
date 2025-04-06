export type ChatBubbleType = 'chat';

export interface CustomChatBubbleProps {
  type: ChatBubbleType;
  value?: string;
  userStatus?: boolean;
  alignRight?: boolean;
}