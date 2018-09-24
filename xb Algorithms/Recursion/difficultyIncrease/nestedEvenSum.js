function nestedEvenSum (obj) {
// !isNaN(2)
let sum = 0;
  for(let val in obj){
    if(typeof(obj[val]) === "object"){
      // place the object in the fuction and repeat
      sum += nestedEvenSum (obj[val]);
    }else{
      // find out if the value is a number
      if(!isNaN(obj[val]) && typeof(obj[val]) !== "boolean"){
        if(obj[val]%2 === 0) // if even
          // console.log(obj[val]);
          sum +=  obj[val];
      }
    }
  }
// return sum;
  return sum;
// console.log()
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};


console.log(nestedEvenSum(obj1)); // 6
console.log( nestedEvenSum(obj2)); // 10
