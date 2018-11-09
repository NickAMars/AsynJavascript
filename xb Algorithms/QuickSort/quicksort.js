
function quickSort(arr, left, right){
   let partitionIndex;
  if(left < right){
    partitionIndex = partition(arr, left, right);

   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}


function partition(arr, left, right){
  // last element is my pivot,
   let pivotValue = arr[right], partitionIndex = left;

   for(let i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(A ,i, j){
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

let arr = [1,2,3,4];
quickSort(arr, 0, 3);

/*
Now the space complexity is O(logn)
*/
