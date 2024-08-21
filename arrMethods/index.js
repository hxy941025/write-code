function myFlat(arr) {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(myFlat(item));
    } else {
      res.push(item);
    }
  }

  return res;
}

let arr = [[1, 2, 3, 4], [[6, 7, 8, 9]], 10];
console.log(myFlat(arr));

// reduce
function myReduce(fn, initVal) {
  // 获取数组
  const arr = this;
  // 设置初始值
  let res = initVal;
  // 索引
  let start = 0;

  if (initVal === undefined) {
    if (!arr.length) return;

    res = arr[0];
    start = 1;
  }

  for (let i = start; i < arr.length; i++) {
    res = fn(initVal, arr[i], i, arr);
  }
  return res;
}

function reduceMiddlewares(middlewares) {
  return middlewares.reduce(
    (composed, middlewares) => {
      return (req, res, next) => {
        middlewares(req, res, (err) => {
          if (err) {
            return next(err);
          }
        });
        composed(req, res, next);
      };
    },
    (req, res, next) => {
      next();
    }
  );
}
