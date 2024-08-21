function myPromiseAll(pArr) {
  return new Promise(function (resolve, reject) {
    const len = pArr.length;
    const result = [];
    let count = 0;
    if (!len) return resolve(result);

    for (let i = 0; i < pArr.length; i++) {
      Promise.resolve(pArr[i]).then(
        function (data) {
          result[i] = data;
          count++;
          if (count === len) {
            resolve(result);
          }
        },
        function (reason) {
          reject(reason);
        }
      );
    }
  });
}

function myPromiseRace(pArr) {
  return new Promise(function (resolve, reject) {
    const len = pArr.length;
    const result = [];
    if (!len) return resolve(result);

    for (let i = 0; i < pArr.length; i++) {
      Promise.resolve(pArr[i]).then(
        function (val) {
          return resolve(val);
        },
        function (val) {
          return reject(val);
        }
      );
    }
  });
}

// test
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2);
  }, 2000);
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3);
  }, 3000);
});

myPromiseAll([p3, p1, p2]).then((res) => {
  console.log(res); // [3, 1, 2]
});

myPromiseRace([p3, p1, p2]).then((res) => {
  console.log(res);
});
