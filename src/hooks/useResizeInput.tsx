import { useEffect } from 'react';

export function useAutoResizeInput(
  ref: React.RefObject<HTMLTextAreaElement | null>,
  value: string,
  type: string
) {
  useEffect(() => {
    const textarea = ref.current;
    if (type === 'chat' && textarea instanceof HTMLTextAreaElement) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 80)}px`;
    }
  }, [value, type, ref]);
}
