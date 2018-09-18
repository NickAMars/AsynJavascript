// areThereDuplicates(1,2,3);
function areThereDuplicates (){
  let left = 0;
  let right = arguments.length - 1;
  let flag = true;
  while(left < right){
    if(arguments[left] === arguments[right]){
      return true;
    }else if(flag){
      flag=false;
      left++;
    }else{
      flag=true;
      right--;
    }
  }
  return false;
}


console.log(areThereDuplicates("a","b","a","z"));


function areThereDuplicates2(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}
