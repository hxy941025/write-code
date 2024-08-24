// function myFlat(arr) {
//   let res = [];

//   arr.forEach((element) => {
//     if (Array.isArray(element)) {
//       res = res.concat(myFlat(element));
//     } else {
//       res = res.concat(element);
//     }
//   });

//   return res;
// }

function myFlat(arr) {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? myFlat(cur) : cur);
  }, []);
}

const arr = [1, [2, [3, 4, 5]]];

console.log(myFlat(arr));
