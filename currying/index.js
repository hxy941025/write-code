function sum(...args) {
  let total = args.reduce((acc, cur) => acc + cur, 0);

  function currySum(...newArgs) {
    total += newArgs.reduce((acc, cur) => acc + cur, 0);
    return currySum;
  }

  currySum.valueOf = function () {
    return total;
  };

  return currySum;
}

console.log(sum(1)(2)(3).valueOf()); // 6
console.log(sum(1, 2, 3)(4).valueOf()); // 10
console.log(sum(5)(-1, 2)(3, 4, 5).valueOf()); // 18
