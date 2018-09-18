  let result = [];
function collectOddValues(arr){
  helper(arr);
  return result;
}

function helper(helperInput){
  if(helperInput.length === 0){
    return;
  }
  // add prime numbers to the result array
  if(helperInput[0] % 2 !== 0){
    result.push(helperInput[0])
  }
  // take off the last element
  helper(helperInput.slice(1));
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));
