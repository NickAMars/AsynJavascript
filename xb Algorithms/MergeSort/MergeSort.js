
function merge(arr1, arr2){
  let results =[];
  let i = 0, j =0;
  // going one element at a time in the two arrays
  while(i< arr1.length && j < arr2.length){
    // sort by which one is smaller
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++;
    }else{
      results.push(arr2[j]);
      j++;
    }
  }
  // if this didnt finish adding remainding array
  while(i<arr1.length){
    results.push(arr1[i]);
    i++;
  }
  while(j<arr2.length){
    results.push(arr2[j]);
    j++;
  }
  return results;
}
function mergeSort(arr){
  // base case when we only have one value in the array.
  if (arr.length <= 1)
    return arr;
  //cut the array in half
  let mid = Math.floor(arr.length/2);
  // look at the left case first
  let left = mergeSort(arr.slice(0,mid));
  // looking at the right case after left stack finish
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([3,4,1,5,2]));
