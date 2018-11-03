// THIS TAKES O(3^n)
// Counting how much possible ways someone can go up a step
function TripleStep(n){
  if(n < 0 )return 0;
  else if (n === 0)return 1;
  else return  TripleStep(n-1) + TripleStep(n-2) +TripleStep(n-3);
}
// console.log(TripleStep(3));
// using memorization with a helper function
// function TripleStep(n){
  let memo = {};
  function  countWays(n){
    if(n < 0 )return 0;
    else if (n === 0)return 1;

    else if(memo[n])return memo[n];
    else {
      memo[n] = countWays(n-1) + countWays(n-2) +countWays(n-3);
      return memo[n];
    }
  }
  return countWays(n);
}

console.log(TripleStep(10));
