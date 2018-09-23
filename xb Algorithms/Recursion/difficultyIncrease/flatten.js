function flatten(arr){

let take;
  for (let val of arr){
    // divert from the stack and go back
    if(Array.isArray(val)){
      // go back and flatten
      flatten(val);
    }else{
      // store all the values
      take
      console.log(val);
    }
  }
}

flatten([1,2,3,4,[9,13,5], [5,6]]);
