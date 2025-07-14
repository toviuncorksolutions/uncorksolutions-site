import { useState } from 'react';
export function useToggle(init = false) {
  const [state, set] = useState(init);
  const open = () => set(true);
  const close = () => set(false);
  return { state, open, close };
}
