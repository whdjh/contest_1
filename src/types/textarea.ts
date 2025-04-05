export type InputType = 'chat';

export interface CustomTextareaProps {
  type: InputType;
  value?: string;
  userStatus?: boolean;
  alignRight?: boolean;
}