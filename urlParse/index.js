let url =
  "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";

/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

function urlParse(url) {
  const [path, paramStr] = url.split("?");
  const paramArr = paramStr.split("&");

  const params = {};

  paramArr.forEach((element) => {
    let [key, val] = element.split("=");

    if (!val) {
      params[key] = true;
    } else {
      val = decodeURIComponent(val);
      val = isNaN(val) ? val : +val;

      if (params[key]) {
        params[key] = [].concat(params[key], val);
      } else {
        params[key] = val;
      }
    }
  });

  return params;
}

console.log(urlParse(url));
