// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var arrayPairSum = function(nums) {
  nums.sort((x, y) => x - y); // O(n)

  let i= 0,sum=0;

  while( i < nums.length -1){

  sum += nums[i]
    i+=2;
  }
  return  sum;
};


// slower method of sorting run time O(n^2)
// function sort(arr) {
//   for (let i = 1; i < arr.length; i++){
//        let j = i;
//        let pivot = arr[i];
//        while ((j > 0) && (arr[j-1] > pivot)){
//          arr[j] = arr[j-1];
//          j--;
//        }
//        arr[j] = pivot;
//      }
//      return arr;
//  }
  console.log( sort([2, -3, -1, 5 ]) );
