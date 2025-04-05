export type InputType = 'text' | 'password' | 'chat';

export interface CustomInputProps {
  type: InputType;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
}