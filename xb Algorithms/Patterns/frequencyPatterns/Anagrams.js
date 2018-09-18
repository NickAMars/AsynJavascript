

// frequency pattern use  run time is O(n)
// function anagrams(string1, string2){
//   const obj1 ={};
//   const obj2 ={};
//   for(let val of string1){
//     obj1[val] = (obj1[val] || 0 ) +  1;
//
//   }
//   for(let val of string2){
//     obj2[val] = (obj2[val] || 0 ) +  1;
//   }
//
//   for(let key in obj1){
//
//     if(!(key  in obj2)){
//       return false;
//     }
//
//     if(obj1[key] !== obj2[key]){
//       return false;
//     }
//   }
//
//   return true;
//
// }
//
// console.log(anagrams('noman','manno'));




function validAnagram(first, second){
  if(first.length !== second.length){
    return false;
  }
  const lookup = {}

  // store in obj
  for(let i = 0; i< first.length; i++){
    let letter = first[i];
    lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1;
  }
  //
  for(let i = 0; i < second.length; i++){
    // temperary store second letter
    let letter = second[i];
    // checks the number of element
      if(!lookup[letter]){
        return false;
      } else {
        lookup[letter] -=1;
      }
  }
  return true;
}

console.log(validAnagram('aaazzz111', 'aazzza111'));
