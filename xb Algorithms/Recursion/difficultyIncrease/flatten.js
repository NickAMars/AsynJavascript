function flatten(arr){
let store = [];
let take;
  for (let val of arr){
    // divert from the stack and go back
    if(!Array.isArray(val)){
      // store value of non array
      store.push(val);
    }else{
      // concatinate value with other function values
    store = store.concat(flatten(val));
    }
  }
  return store;
}

console.log(flatten([1,2,3,4,[9,13,5], [4,3,6]]));
