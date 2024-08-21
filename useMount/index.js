import { useEffect } from "react";

function useMount(fn) {
  useEffect(() => {
    fn();
  }, []);
}

function useUnMount(fn) {
  useEffect(() => {
    return () => {
      fn();
    };
  }, []);
}
