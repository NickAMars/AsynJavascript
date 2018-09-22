function power(base, exponent){
    // Base Case
    if( exponent === 0) return 1;

    return  base* power(base, exponent - 1 );
  }

console.log(power(2, 4));

// 1. (base  2.) (base  3.) base
