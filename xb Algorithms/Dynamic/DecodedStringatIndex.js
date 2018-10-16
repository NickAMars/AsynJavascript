// An encoded string S is given.  To find and write the decoded string to a tape,
// the encoded string is read one character at a time and the following steps are taken:
//
// If the character read is a letter, that letter is written onto the tape.
// If the character read is a digit (say d), the entire current tape is repeatedly written d-1 more times in total.
// Now for some encoded string S, and an index K, find and return the K-th letter (1 indexed) in the decoded string.
//
//


var decodeAtIndex = function(S, K) {
  //find a way to store the character in a string
  // then when we reach a number we repeatedly add by digit -1
  let string = ""
  for(let val of S){
    // console.log(string.length);
    if(K === string.length){
    return  string[K-1]
    }
    if(val.charCodeAt(0)>= 48 && val.charCodeAt(0)<= 57){

      string += string.repeat(Number(val)-1);

      // console.log(val);
    }else{
        string += val;
    }
  }
  return  false;

};

// console.log(decodeAtIndex("leet2code3",10));
 console.log(decodeAtIndex("a234567999999",1));
