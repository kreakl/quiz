import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let id: ReturnType<typeof setInterval>;

    if (delay !== null) {
      id = setInterval(tick, delay);
    }

    return () => clearInterval(id);
  }, [delay]);
}
