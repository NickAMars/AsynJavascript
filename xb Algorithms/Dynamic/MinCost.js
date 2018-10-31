// // /**
// //  * @param {number[]} cost
// //  * @return {number}
// // //  */
// // // var minCostClimbingStairs = function(cost) {
// // // let min = 0;
// // // [10, 15, 20]
// // // // [1, 100, 1, 1 , 1, 100, 1]
// // // // let total = 0;
// // // if(cost.length === 0 ) return min;
// // // else if(cost.length === 1) return cost[0];
// // //
// // // let i= 0, j = 1, total = 0;
// // // while(i < cost.length){
// // //   // if left is less than right
// // //     if(cost[i] < cost[j] ){
// // //       total += cost[i];
// // //     }else{
// // //       // if cost[j] exist
// // //       if(cost[j])
// // //       total += cost[j];
// // //     }
// // //     // take two step and compare the next two
// // //     i+=2;
// // //     j+=2;
// // //   }
// // // min = total;
// // //
// // // return min;
// // // };
// //
// // /**
// //  * @param {number[]} cost
// //  * @return {number}
// //  */
// // var minCostClimbingStairs = function(cost) {
// //
// //
// //
// //   let  i = -1, total = 0,out_4 = 0, out_3 = 0;
// //
// //   if(cost.length === 0) return 0;
// //   else if(cost.length === 1) return cost[0];
// //   else if(cost.length === 2) return Math.min(cost[0], cost[1]);
// //
// //
// //   while(i+2 < cost.length){
// //     //1   2
// //     if(cost[i+1] < cost[i+2]) {
// //       // AT THE END OF an array
// //       i++;
// //       out_3 = cost[i+2];
// //       if(!out_3) out_3 = 0;
// //       out_4 = cost[i+3];
// //       if(!out_4) out_4 = 0;
// //
// //       if(cost.length -1  === i+2){
// //         if(cost[i+1] <= cost[i+2])i++;
// //       // 1 + 2  >  1 + 2
// //     }
// //   //   else if(cost[i] + cost[i+1] > cost[i+1] + out_4  ||  cost[i] + cost[i+1] > cost[i+1] + out_3) {
// //   //     console.log( "here")
// //   //   i++;
// //   // }
// //     }
// //     // take two steps
// //     else i+=2;
// //     console.log("index , cost",i ,cost[i])
// //     // add the step
// //     total += cost[i];
// //   }
// //   return total;
// // }
//
//
// // console.log(minCostClimbingStairs([0 ,0 ,1 ,2 ]));
// // [10, 15, 20]
// /*
// 1, 100, 1, 1 , 1, 100, 1
// [0 ,1 ,2 ,2 ,0 ]
//        |     |
//     |     |
//     if( cost[i] + (cost[i+2] || 0) > cost[j] + (cost[j+2]) || 0 )
// */
//
//
//
//
//
// var minCostClimbingStairs = function(cost) {
//   cost.push(0);
//   const minCostAtStep = (n, memo = {}) => {
//     if (n < 0) return 0;
//     // last
//     if (memo[n]) return memo[n];
//     // second to last
//     if (!memo[n-1]) memo[n-1] = minCostAtStep(n-1, memo);
//     // 3:
//     // 2:
//     // 1:0
//     // third to last
//     if (!memo[n-2]) memo[n-2] = minCostAtStep(n-2, memo);
//     //compare which is smaller ,   then add it
//     console.log("n cost[n]",n,cost[n]);
//     memo[n] = Math.min(memo[n-1], memo[n-2]) + cost[n];
//     return memo[n];
//   };
//   return minCostAtStep(cost.length - 1)
// };


var minCostClimbingStairs = function(cost) {
  let store=[];
  // place the zero on the last index
   cost.push(0);

  store.push(cost[0]);
  store.push(cost[1]);

  for(let i = 2 ; i < cost.length  ; i++){

      // console.log(store)
      // console.log("cost[i], min( store[i-1], store[i-2])",cost[i], store[i-1], store[i-2])
      store.push( cost[i] + Math.min( store[i-1], store[i-2]) );

  }
  return store[store.length-1];
}




console.log(minCostClimbingStairs([0,1,0,0]));
