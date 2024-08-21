var maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    console.log("first.", profit, min);
    profit = Math.max(profit, prices[i] - min);
    min = Math.min(min, prices[i]);
  }

  return profit;
};

const res = maxProfit([7, 1, 5, 3, 6, 4]);

console.log(res);
