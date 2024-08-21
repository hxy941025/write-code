// 浅拷贝
// Object.assign(target, {});
// {...obj}

// for (let key in object) {
//   if (object.hasOwnProperty(key)) {
//     newObject[key] = object[key];
//   }
// }

// 深拷贝
function deepClone(obj) {
  if (!obj || typeof obj !== "object") return obj;

  let newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }

  return newObj;
}

const original = {
  name: "John",
  age: 30,
  date: new Date(),
  regex: /test/i,
  arr: [1, 2, { nested: "object" }],
  map: new Map([["key", "value"]]),
  set: new Set([1, 2, 3]),
};

console.log(deepClone(original));
