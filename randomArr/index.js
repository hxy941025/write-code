// function randomArr(arr) {
//   const res = [...arr];

//   for (let i = res.length - 1; i > 0; i--) {
//     // 反向遍历，确保产生的随机数对象是在当前元素之前
//     const randomIndex = Math.floor(Math.random() * (i - 1));
//     [res[i], res[randomIndex]] = [res[randomIndex], res[i]];
//   }

//   return res;
// }

// const arr = [1, 2, 3, 4, 5];
// const shuffled = randomArr(arr);
// console.log(shuffled);

function randomArr(arr) {
  return arr.sort(() => {
    return Math.random() - 0.5;
  });
}
