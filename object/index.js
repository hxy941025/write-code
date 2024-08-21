// new
function myNew(fn, ...args) {
  const instance = Object.create(fn.prototype);
  const obj = fn.apply(instance, args);
  return typeof obj === "object" ? obj : instance;
}

// create
function myCreate(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}
