/*
  This algorithm is use
   to find the sum.

   O(n)
*/


function Sumfinder(arr, sum){
  let obj= {};
  for(let i = 0; i < arr.length ; i++){
    let need = sum - arr[i];
    // console.log(need);
    obj[need] = arr[i];
  }
  for(let val of arr){
    if(obj[val]) return obj[val];
  }
  return false;
}

console.log(Sumfinder([10,3,2,14,4,19,11,1],10));
