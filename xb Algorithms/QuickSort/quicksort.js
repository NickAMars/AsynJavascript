

function qSort(arr){
  // Base case
  if(arr.length === 0) return [];
  // pointers in the array space O(n^3)
  // collectors
  let left= [];
  let right= [];
  //compare first value of array
  let pivot = arr[0];

// goes through all the arr except the first on
  for(let i = 1; i < arr.length; i++){
    // less than pivot value
    if(arr[i] < pivot ){
      left.push(arr[i]);
    }else if( arr[i] > pivot ){
      right.push(arr[i]);
    }
  }
// console.log("left", left);
// console.log("right", right);
  return qSort(left).concat(pivot, qSort(right));
}


console.log(qSort([44,64,12,43,55,23,33,75,77]));

/*
first itteration
left = [12,43,23,33]
right = [44 ,64,55,75,77]

*/
