/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size,
and the sign represents its direction (positive meaning right, negative meaning left)
. Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions.
 If two asteroids meet, the smaller one will explode.
  If both are the same size, both will explode.
   Two asteroids moving in the same direction will never meet.
*/

// assuming you cant have an asteroid size of zero
var asteroidCollision = function(asteroids) {

  if(asteroids.length === 1 )return asteroids;
//create new array
let newArray = [];
// check if something is negative
let i = asteroids.length -1;

// what i need to do is just check to see if there are possitive at the end
while(i >= 0){ // O(n)
  if(Math.sign(asteroids[i]) === 1){
    // pop that shit of and put it into my new array
     newArray.push(asteroids.pop());
  }else break;
  i--;
} // leave array

if(i === -1){
  swap(newArray);
  return newArray;
}
let j = i -1, negative = asteroids[i];
let store = [];
let flag = true;
store.push(asteroids.pop()); // store negative value in new array
// search for the next positive value that is greater than this one
// or the next val beside it that is greater than this one
while(j >= 0){
  // console.log(negative);
  // console.log(store);
  if(Math.abs(asteroids[j]) >= Math.abs(negative)){
    // console.log("greate val", asteroids[j]);
    // if element is positive then remove all element after it
    if(Math.sign(asteroids[j]) === 1){

      if(store.length === 0) {
        newArray.push(asteroids.pop());
      }else{
        // if the element is greater than all the element in the stack from top to bottom
        for(let i = store.length -1 ; i >= 0 ; i--){ // O(n^2)
          if(Math.abs(store[i]) === Math.abs(asteroids[j])){
            // remove the both of them
            asteroids.pop();
            store.pop();
            flag = false;
            // console.log(store)
            negative = store[store.length -1];
            // console.log("negative", negative)
            break;
          } else if(Math.abs(store[i]) < Math.abs(asteroids[j])){
              store.pop(); // O(1)
              flag = true;
            }else{
              flag = false;
              asteroids.pop();
              break;
            }  // value was not greater than all element
        }
        // if element has remove all the values from the store
        // we add it to the main array
        //if not we ignore it
        if(flag){
          newArray.push(asteroids.pop());
        }
      }

    }else{
      // console.log(asteroids[j]);
       // switch the negative with the greatest value
      negative = asteroids[j];
      // take it out of the array
      store.push(asteroids.pop());
      // console.log(store);
    }
  }else{
    // console.log("less val", asteroids[j]);
    // if my negative is greater than the next value
    // and it is positive
    if(Math.sign(asteroids[j]) === 1){
      // remove element from array
      if(store.length === 0 ){
        newArray.push(asteroids.pop());
      }else{
        asteroids.pop();
      }
    }else{ // its negative
      // switch the negative with the greatest value
      negative = asteroids[j];
      // take it out of the array
      store.push(asteroids.pop());
    }
  }
  // if(Math.sign(asteroids[i]) === 1)
  j--;
}
swap(newArray);
swap(store);

   newArray = store.concat(newArray);

return newArray
};
function swap(arr){
  i = 0;
  j = arr.length -1;
  let mid = Math.floor(j/2);
  // console.log(mid);
  let temp;
  while(i <= mid){
    temp = arr[j]
    arr[j] =  arr[i];
    arr[i] = temp;
    j--;
    i++;
  }
}

console.log(asteroidCollision([-4,-1,10,2,-1,8,-9,-6,5,2]));
