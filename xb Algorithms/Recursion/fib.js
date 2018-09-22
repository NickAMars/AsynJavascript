function fib(num){
  // add whatever parameters you
  // deem necessary - good luck!

//1  === 1
//2  === 1
//3 === 2
//4 === 3
// console.log(num);
if(num === 1) return 1;
if(num === 2) return 1;

return  fib(num-2) + fib(num-1);
}

console.log(fib(10));
