function collectStrings(obj1){
// console.log(obj1);
let store = [];
  for (let key in obj1){
    // loop through all the objects
    if(obj1[key] instanceof Object ){
      // merge store with uper stack functions
       store = store.concat(collectStrings(obj1[key]));
    }else{
      if(typeof(obj1[key]) === "string"){// add value to store
        store.push(obj1[key]);
      }
    }
  }
  return store;
}





const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
