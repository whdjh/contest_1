export type ButtonType = 'chat' | 'send' | 'hide';

export interface CustomButtonProps {
  type: ButtonType;
  value?: string;
  onSubmit?: () => void;
}