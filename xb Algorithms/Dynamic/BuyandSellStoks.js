/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//
// let  j = 0;
// let arr = [];
// let result = 0;
// let max = 0;
//
//   for (let i = 0 ; i < prices.length ; i++){
//     j=i+1;
//     while(j < prices.length){
//       if(prices[i] < prices[j]){
//         result =   prices[j] - prices[i];
//         max = Math.max(max, result);
//       }
//       j++;
//     }
//   }
//
// return max;
// };



  var maxProfit = function(prices) {
  if (prices.length < 2) return 0;

// buy at the start
  let bestBuy = prices[0];
  // maximum price
  let maxProfit = 0;

// loop
  prices.forEach((sell) => {
    // each price minus by the first price
      const profit = sell - bestBuy;
      // check if there is something thats greater than 0
      maxProfit = Math.max(maxProfit, profit);
      // look for the minium sell
      bestBuy = Math.min(bestBuy, sell);
      //-- go again with new maxProfit and new bestBuy
  });

  return maxProfit;
};

console.log(maxProfit([7,6,4,3,1]));
