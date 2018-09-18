//   let result = [];
// function collectOddValues(arr){
//   // base case
//   if(arr.length === 0){
//     return;
//   }
//   // add prime numbers to the result array
//   if(arr[0] % 2 !== 0){
//     result.push(arr[0]);
//   }
//   // take off the last element
//   collectOddValues(arr.slice(1));
//   // when all stack finish pass result
//   return result;
// }

/*
*/
function collectOdd(arr){
  let newArr = [];
  // if array is empty
  if (arr.length === 0) return newArr;
  // if prime push in
  if(arr[0] % 2 !== 0) newArr.push(arr[0]);
  // console.log(newArr);
  newArr = newArr.concat(collectOdd(arr.slice(1)));
  return newArr;
}

console.log(collectOdd([1,2,3,4,5,6,7,8,9]));
