function flatten(arr){
let store = [];
let take;
  for (let val of arr){
    // divert from the stack and go back
    if(!Array.isArray(val)){
      // store value of non array
      store.push(val);
      // console.log(val);
    }else{
      // keep pushing the value in
    store = store.concat(flatten(val));
    }
  }
    // console.log(store);
  return store;
}

flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);
