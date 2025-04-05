export type TextareaType = 'chat';

export interface CustomTextareaProps {
  type: TextareaType;
  value?: string;
  userStatus?: boolean;
}