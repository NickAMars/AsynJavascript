function isPalindrome(str1){
// console.log(str1);
  // when is this true,
  //container return a string lenght of 0 or 1
  if(str1.length === 0)return true;
  else if(str1.length === 1)return true;

// console.log(str1);
//if string length is above this do the following operations
  const left = str1.charAt(0);
  const right = str1.charAt( str1.length -1 );
  //What to compare
  if(left !== right)    return false;
  // remove first
  let container = str1.slice(1);
  // take off last
  container = container.slice(0, -1);
  // go back
  // isPalindrome(container);

    return isPalindrome(container);
}

console.log(isPalindrome('asa'));
