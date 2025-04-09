export type ButtonType = 'messageSend' | 'formSubmit' | 'hide';

export interface CustomButtonProps {
  type: ButtonType;
  value?: string;
  showPassword?: boolean;
  onSubmit?: () => void;
  onToggle?: () => void;
  disabled?: boolean;
}