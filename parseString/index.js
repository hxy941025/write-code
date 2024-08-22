// function replace(str) {
//   str = str.replace(/\${(.*?)}/g, (_, expression) => {
//     return eval(expression);
//   });

//   return str;
// }

let year = 3,
  title = "front-End",
  gender = 1;

const msg = replace(
  "I am a ${gender === 0 ?'female':'male'} with ${year} years of experience in ${title} development."
);
console.log(msg);

function replace(str) {
  return str.replace(/\${.*?}/g, (_, expression) => {
    return eval(expression);
  });
}
