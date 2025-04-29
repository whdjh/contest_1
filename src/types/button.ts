export type ButtonType = 'messageSend' | 'formSubmit' | 'hide' | 'prev' | 'next';

export interface CustomButtonProps {
  type: ButtonType;
  value?: string;
  showPassword?: boolean;
  onSubmit?: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  onToggle?: () => void;
  disabled?: boolean;
}