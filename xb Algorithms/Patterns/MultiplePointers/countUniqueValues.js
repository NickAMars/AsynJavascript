/*

Implement a function called countUniqueValues,
which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will alwats be sorted.

only works with a sorted array
*/

// function countUnique(arr){
//
// const obj = {};
// let count= 0 ;
//     for(let elem of arr){
//       if(!obj[elem]){
//         obj[elem] =  1 ;
//         ++count;
//       }
//     }
//     console.log(count);
//     console.log(obj);
// }
//
//
// countUnique([1,2,1,2,3,4,3,4]);


// function countUnique(arr){
// let j = 0;
// let i = 0;
// if(!arr.length){
//     return i;
// }
//   while(j < arr.length){
//     if(arr[i] !== arr[j]){
//     ++i;
//     // console.log(arr[j]);
//     arr[i] = arr[j];
//     }
//     j++;
//   }
//   return i+1;
// }

// console.log(countUnique([1,2,2,2,3,4,4,4,5,5,5,5,5]));

function countUnique(arr){
    let i = 0;
  if(!arr.length){
      return i;
  }
  for(let j = 1; j < arr.lenght; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j]
    }
  }
  return i+1;
}
console.log(countUnique([1,2,2,2,3,4,4,4,5,5,5,5,5]));
