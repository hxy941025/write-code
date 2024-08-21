function debounce(fn, delay) {
  let timerId = null;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function throttle(fn, delay) {
  let currentTime = Date.now();

  return function (...args) {
    let now = Date.now();
    if (now - currentTime >= delay) {
      fn.apply(this, args);
      currentTime = now;
    }
  };
}
