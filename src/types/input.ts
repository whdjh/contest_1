export type InputType = 'text' | 'password' | 'chat' | 'readonly';

export interface CustomInputProps {
  type: InputType;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
  userStatus?: boolean;
}