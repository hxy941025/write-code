function pLimit(len) {
  const queue = [];
  let activeCount = 0;

  const next = () => {
    if (!queue.length || activeCount >= len) {
      return;
    }

    activeCount++;

    const [fn, resolve, reject] = queue.shift();

    fn()
      .then(resolve)
      .catch(reject)
      .finally(() => {
        activeCount--;
        next();
      });
  };

  return (fn) => {
    return new Promise((resolve, reject) => {
      queue.push([fn, resolve, reject]);
      next();
    });
  };
}

const limit = pLimit(2);
const delay = (ms) => {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
};

const taskList = [
  () => delay(1000).then(() => console.log("111")),
  () => delay(500).then(() => console.log("222")),
  () => delay(600).then(() => console.log("333")),
  () => delay(100).then(() => console.log("444")),
];

(async () => {
  const promises = taskList.map((item) => limit(item));
  await Promise.all(promises);
  console.log("end");
})();
