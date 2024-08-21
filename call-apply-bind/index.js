function myCall(context, ...args) {
  if (typeof this !== "function") {
    return console.error("type error");
  }

  const context = context || window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

function myApply(context, argsArr) {
  if (typeof this !== "function") {
    return console.error("type error");
  }

  const context = context || window;
  context.fn = this;
  const result = context.fn(...argsArr);
  delete result.fn;
  return result;
}

function myBind(context, args) {
  if (typeof this !== "function") {
    return console.error("type error");
  }

  const context = context || window;
  context.fn = this;

  return function Fn(...innerArgs) {
    return context.fn.apply(
      this instanceof Fn ? this : context,
      args.concat(innerArgs)
    );
  };
}
