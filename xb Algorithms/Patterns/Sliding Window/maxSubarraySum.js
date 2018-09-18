function maxSubarraySum(arr, index){
  let maxsum = 0;
  // i need it to go untill the index
  if(arr.length< index){
      return null;
  }
  for (let i = 0; i<index; i++){
    maxsum += arr[i];
  }
  let sum = maxsum ;
  for(let i = index; i < arr.length; i++){

    sum +=  arr[i] - arr[i - index] ;
    maxsum = Math.max(maxsum, sum);
  }
  return maxsum;
}

console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2));
