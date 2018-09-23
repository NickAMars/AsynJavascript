function someRecursive(arr, isOdd ){

for( let val of arr){
 if( isOdd(val))return true;
  console.log(val);
}
return false;
}


const callback = val => val % 2 !== 0;

console.log(someRecursive([6,2,4,6,9] , callback ));
// console.log([1,2,4], callback);
