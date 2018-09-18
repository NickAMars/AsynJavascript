/*
An Example
Write a function called same. which accepts two arrays.
The function should return true if every value in the array
has it's corresponding value squared in the second array.
The frequency of values must be the same.
*/
/*
//Worst case O(n^2)
function same(arr1, arr2){
if(arr1.length !== arr2.length){
  return false;
}
for(let i = 0; i < arr1.length; i++){
  // square each value of arr1
  let correctIndex = arr2.indexOf(arr1[i] ** 2);
  if(correctIndex === -1){
    return false;
  }
  arr2.splice(correctIndex,1);
}
// const arg =arr1.map((elem)=> elem*2).filter(n=> n>3);
// console.log(arg);
return true
}

console.log(same([1,2,3], [1,4,9]));
*/

//REFACTORED
// time complexity - O(n)
function same (arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  // Empty of object
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  //
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0)+1;
  }
  for(let val of arr2 ){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0 ) + 1;
  }
  //in itterates over the keys  in the object
  for(let key in frequencyCounter1){
    // square key ans seach inside second obj
    if(!(key ** 2 in frequencyCounter2)){
      return false;
    }
    // check how many of one elem there is
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false;
    }
  }
  return true;
}

console.log(same([1,2,3], [1,4,9]));
