
// IRON ROD SOLD AT THE BEST PRICE FOR THE PRODUCER

function CutRod(p,n){
  let memo = {};
  return (function CutRec(p,n){
    if(n <= 0 )return 0;
    if(memo[n]) return memo[n];
    q = Number.NEGATIVE_INFINITY;
    for(let i = 1 ; i <= n ; i++){
      q = Math.max(q, p[i-1] + CutRec(p, n-i));
    }
    memo[n] = q;
    console.log(memo);
    return q;
  })(p,n);
}

console.log(CutRod([2,3,4,5], 4));
