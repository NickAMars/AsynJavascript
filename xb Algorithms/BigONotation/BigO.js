// Suppose we want to write a function that calculates the sum of all
//numbers from 1 up to  (and including some number n)
//1.
function addUpTo1(n){
  let total = 0;
  for(let i = 1; i <= n; i++){
    total +=i;
  }
  return total;
}

console.log(addUpTo1());

// 2.
function addUpTo2(n){
  return n*(n+1)/2;
}


// TIMERS FUNCTION

let t1 = performance.now();
addUpTo1(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1)/1000} seconds.`);
