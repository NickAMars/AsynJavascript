function capitalizeWords (arr) {


//base case
if(arr.length === 0 )return[];
// store starts at 0
const store = [];

// const string = arrslice(0, 1);
// console.log(arr.slice(0, 1)[0]);
store.push(arr.slice(0, 1)[0].toUpperCase());
// console.log(store);
// take off the first on and return the
return store.concat(capitalizeWords (arr.slice(1)));
}

console.log(capitalizeWords (["i", "am", "learn", "recursion"]));
