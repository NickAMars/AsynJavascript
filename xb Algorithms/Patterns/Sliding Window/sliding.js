// run time complexity O(n)
function slider(arr, num){
  let maxSum= 0;
  let tempSum= 0;
  for(let i= 0; i <num; i++){
    maxSum += arr[i];
  }
  tempSum =maxSum;
  for( let i = num ; i < arr.length; i++){
  console.log(`${tempSum}-${arr[i-num]}+${arr[i]} `);
    tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  //  console.log(maxSum);
  return maxSum;
}

console.log(slider([8,7,3,4,5,3,4,5], 2));
