// function format(num) {
//     return num.toLocaleString();
// }

function format(num) {
  const numStr = num.toString();
  const [round, decimal] = numStr.split(".");
  const suffix = decimal ? `.${decimal}` : "";
  const len = round.length;
  if (len <= 3) return round;
  let prefix = "";
  let count = 0;

  for (let i = round.length - 1; i >= 0; i--) {
    prefix = round[i] + prefix;
    count++;
    if (count === 3 && i) {
      prefix = "," + prefix;
      count = 0;
    }
  }

  return prefix + suffix;
}

console.log(format(1234567890.12313));
