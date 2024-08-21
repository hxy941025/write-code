function throttle(fn, delay, immediate) {
  let timer = null;
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();

    if (immediate && !lastTime) {
      // 如果传入immediate 且第一次调用 立即执行
      fn.apply(this, args);
      lastTime = now;
    }

    if (!timer) {
      const remainTime = delay - (now - lastTime);

      // 时间到了直接执行，没到就延迟执行
      if (remainTime <= 0) {
        lastTime = now;
        fn.apply(this, args);
      } else {
        timer = setTimeout(() => {
          // 更新最后执行时间
          lastTime = Date.now();
          timer = null;
          fn.apply(this, args);
        }, remainTime);
      }
    }
  };
}
