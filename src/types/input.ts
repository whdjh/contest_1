export type InputType = 'text' | 'password' | 'chat';

export interface CustomInputProps {
  type: InputType;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
  showPassword?: boolean;
  onTogglePassword?: () => void;
}