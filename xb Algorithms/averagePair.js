
/*
@param  arr, average
*/
function averagePair(arr, average){
  let sum = 0, left = 0, right = arr.length - 1;
  for(let i = 0; i < arr.length; i++){
    sum = arr[left] + arr[right];
    if(sum/2 === average ) return true;
    else if (sum/2 < average)
      left++;
    else right--;
    sum = 0;
  }
return false;
}

console.log(averagePair([1,2,3], 2.5));


function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}
