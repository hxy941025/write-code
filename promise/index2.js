Promise.myAll = function (pArr) {
  return new Promise((resolve, reject) => {
    const len = pArr.length;

    if (!len) return resolve([]);

    const res = [];
    let count = 0;

    for (let i = 0; i < len; i++) {
      Promise.resolve(pArr[i]).then((data) => {
        res[i] = data;
        count++;
        if (count === len) {
          return resolve(res);
        }
      }, reject);
    }
  });
};

Promise.myRace = function (pArr) {
  return new Promise((resolve, reject) => {
    for (let item of pArr) {
      Promise.resolve(item).then(resolve, reject);
    }
  });
};

const pArr = [1, 2, 3, Promise.reject(4)];

Promise.myAll(pArr).then(
  (res) => {
    console.log("then", res);
  },
  (err) => {
    console.log("reject", err);
  }
);

Promise.myRace(pArr).then(
  (res) => {
    console.log("race then", res);
  },
  (err) => {
    console.log("reject", err);
  }
);
