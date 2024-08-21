import { useState, useEffect, useRef, useCallback } from "react";

function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function useDebounce(val, delay) {
  const [debounceVal, setDebounceVal] = useState(val);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(fn);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [val, delay]);

  return debounceVal;
}

function useDebounceFn(fn, delay) {
  const timeroutRef = useRef(null);

  const debounceFn = useCallback(
    (...args) => {
      if (timeroutRef.current) {
        clearTimeout(timeroutRef.current);
      }

      timeroutRef.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay]
  );

  const cancel = useCallback(() => {
    if (timeroutRef.current) {
      clearTimeout(timeroutRef.current);
      timeroutRef.current = null;
    }
  }, []);

  return [debounceFn, cancel];
}
