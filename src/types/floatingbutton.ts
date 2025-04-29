import { RefObject } from 'react';

export type FloatingButtonType = 'upscroll' | 'darkmode' | 'end';

export interface FloatingButtonProps {
  type: FloatingButtonType;
  scrollRef?: RefObject<HTMLElement | null>;
  on?: boolean;
  toggle?: () => void;
  onClick?: () => void;
}