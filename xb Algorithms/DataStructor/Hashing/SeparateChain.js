





// slitely better.
class HashTable {
  constructor(size = 31){
    //TABLE SIZE
    this.TABLE_PRIME = size;
    this.keyMap = new Array(size);
  }
  _hash(key){
    let total = 0, value = 0 ,char = '';
    for (let i = 0; i < Math.min(key.length, 100); i++){
      char = key[i].toLowerCase();
      value = char.charCodeAt(0) - 96;
      total = (total * this.TABLE_PRIME + value)% this.keyMap.length;
    }
    return total;
  }
  set(key,value){
    let index = this._hash(key);
    if(!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key,value]);
    return index;
  }
  get(key){
    let index = this._hash(key);
    // console.log(index);
    if(this.keyMap[index]){
      for(let [key_temp, value] of this.keyMap[index]){
        if(key === key_temp){
            console.log(`${key} , ${value}`);
         // return value;
        }
        // console.log(key);
      }
    }
    return undefined;
  }
  keys(){

  }
  values(){
    
  }
}
let hashtag = new HashTable();
// console.log(hashtag.set("hello"));
hashtag.set("help me", "get this");
hashtag.set("im going to", "get this");
hashtag.set("google", "trust the process");
hashtag.set("google", " i will work for you");
hashtag.set("grandpa", "I will make you happy");
hashtag.set("change", "is coming");

// console.log(hashtag.keyMap);


console.log(hashtag.get("google"));















// Simple HASH
/*
// return the index in the hash table
//Not constant time. Scales along with the size of the input
function hash(key, arrayLen){
  let total = 0;
  for(let char of key.toLowerCase()){
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}
*/
