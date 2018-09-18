/*
An Example

Given a sorted array of integers, write a function called search, that accepts a value
and returns the index where the calue passed to the function if located.
if the value is not found, return -1

*/

//LINEAR search
//O(N)
/*
function search(arr, val){
  for (let i = 0; i < arr.length; i++){
    if(arr[i] === val){
      return i;
    }
  }
  return -1;
}
*/

//BINARY  SEARCH
// O(LOG(n))
function search (arr , val){
  let min = 0 ;
  let max = arr.length - 1;

  while(min <= max){
    //pivot point
    let middle = Math.floor((min + max)/ 2);
    let currentElement = arr[middle];

    // look for value left and right split
    if(arr[middle] < val){
      min = middle + 1;
    }else if(arr[middle] > val){
      max = middle - 1;
    }else{
      // get index
       //return middle;
       // element
       return currentElement;
    }
  }
  return -1;
}

// The array must be sorted
console.log(search ([1,4,6,10,21,30,41,62] , 70));
