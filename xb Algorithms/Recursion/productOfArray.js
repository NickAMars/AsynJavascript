function productOfArray(arr){
  if(arr.length === 0){
    return 1;
  }
  // console.log(arr.pop());
  const value = arr.pop();
  return value * productOfArray(arr);
}

console.log(productOfArray([2,4,5]));
// pop off the last element
