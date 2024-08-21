dateFormat(new Date("2020-12-01"), "yyyy/MM/dd"); // 2020/12/01
dateFormat(new Date("2020-04-01"), "yyyy/MM/dd"); // 2020/04/01
dateFormat(new Date("2020-04-01"), "yyyy年MM月dd日"); // 2020年04月01日

function dateFormat(date, format) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  let res = format.replace(/yyyy/, year);
  res = res.replace(/MM/, month);
  res = res.replace(/dd/, day);

  console.log(res);
  return res;
}
