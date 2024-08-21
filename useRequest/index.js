import { useCallback, useRef, useState } from "react";

function useLastest(val) {
  let ref = useRef(val);
  ref.current = val;
  return ref;
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
        const result = await fn(...args);
        setData(result);
        if (options.onSuccess) {
          options.onSuccess(result);
        }
      } catch (err) {
        setError(err);
        if (options.onError) {
          options.onError(err);
        }
      } finally {
        setLoading(false);
      }
    },
    [options]
  );

  return { data, loading, error, run };
}
