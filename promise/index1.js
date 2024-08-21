Promise.myAll = function (proms) {
  return new Promise((resolve, reject) => {
    const len = proms.length;
    if (!len) return resolve([]);

    let count = 0;
    let res = [];

    for (let i = 0; i < len; i++) {
      Promise.resolve(proms[i]).then((data) => {
        res[i] = data;
        count++;
        if (count === len) {
          return resolve(res);
        }
      }, reject);
    }
  });
};

Promise.myAll([1, 23, Promise.reject(999)]).then(
  (res) => console.log(res),
  (err) => console.log("err", err)
);

Promise.myRace = function (proms) {
  return new Promise((resolve, reject) => {
    for (let item of proms) {
      Promise.resolve(item).then(resolve, reject);
    }
  });
};

Promise.myRace([1, 2, Promise.reject(3)]).then(
  (res) => {
    console.log("成功", res);
  },
  (err) => console.log("失败", err)
);
