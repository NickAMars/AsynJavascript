
//STORAGE IS O(N) and TAKES O(N)

// counting the step
const step1= (n)=>{
    if(n < 1 )return 0 ;
    // taking one step every time
    return 1 + step1(n-1);
};
const step2= (n)=>{
    if(n < 2 )return 0 ;
    // taking two step every time
    return 1 + step2(n-2);
};
const step3= (n)=>{
  if( n < 3 ) return 0 ;
  // taking two step every time
  return 1 + step3(n-3);
};
function TripleStep(n){
  const memo = {};
  memo[1] = step1(n);
    memo[2] = Math.floor(memo[1]/2);
      memo[3] = Math.floor(memo[1]/3);

  return memo;
}


console.log(TripleStep(10));
