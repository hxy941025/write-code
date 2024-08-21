import { useCallback, useRef, useState } from "react";

function useLastest(fn) {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  return fnRef;
}

function useRequset(requsetFn, options) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fnRef = useLastest(requsetFn);

  const run = useCallback(
    async (...args) => {
      setLoading(true);
      setError(null);

      try {
        const fn = fnRef.current;
        const data = await fn(args);
        setData(data);
        if (options.onSuccess) {
          options.onSuccess(data);
        }
      } catch (error) {
        setError(error);
        if (options.onError) {
          options.onError(error);
        }
      } finally {
        setLoading(false);
      }
    },
    [options]
  );

  return { data, loading, error, run };
}
