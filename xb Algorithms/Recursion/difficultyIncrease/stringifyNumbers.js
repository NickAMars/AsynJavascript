function stringifyNumbers(obj1){

  for(let key in obj1){
    // clear seperation between object and array
    if(typeof(obj1[key]) === "object" && !Array.isArray(obj1[key])){
      // turn all objects to elements
        stringifyNumbers(obj1[key])
      // console.log(obj1[key]);
    } else {
      if(!isNaN(obj1[key]) && !Array.isArray(obj1[key]) && typeof(obj1[key]) !== "boolean"){

        obj1[key] = obj1[key].toString();
      }
    }
  }
  return obj1;

}



let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));

// stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/



///  other solution to this problem
// function collectStrings(obj) {
//     var stringsArr = [];
//
//     function gatherStrings(o) {
//         for(var key in o) {
//             if(typeof o[key] === 'string') {
//                 stringsArr.push(o[key]);
//             }
//             else if(typeof o[key] === 'object') {
//                 return gatherStrings(o[key]);
//             }
//         }
//     }
//
//     gatherStrings(obj);
//
//     return stringsArr;
// }
