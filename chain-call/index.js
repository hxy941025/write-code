function add(x) {
  return x + 1;
}

function descrease(x) {
  return x - 1;
}

function double(x) {
  return x * 2;
}

const window = {
  add,
  descrease,
  double,
};

function chain(val) {
  const handler = {
    get: function (obj, key) {
      if (key === "end") {
        return obj.val;
      }
      if (typeof window[key] === "function") {
        obj.val = window[key](obj.val);
        return proxy;
      }
    },
  };

  const proxy = new Proxy({ val }, handler);
  return proxy;
}

console.log(chain(3).add.double.descrease.end);
// console.log(add);
