const format = (input) => {
  let num = input + "";
  const integer = num.split(".")[0];
  const decimals = num.split(".")[1] ? "." + num.split(".")[1] : "";
  let len = num.length;
  if (len <= 3) return num;

  let remaind = len % 3;
  if (remaind) {
    return (
      num.slice(0, remaind) +
      "," +
      num.slice(remaind, len).match(/\d{3}/g).join(",") +
      decimals
    );
  }
  return num.slice(remaind, len).match(/\d{3}/g).join(",") + decimals;
};

console.log(format(12323))