function capitalizeFirst (arr) {

  const store = [];
 // base case
  if(arr.length === 0) return [];
  // need to go through these arrays
  const string = arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
  store.push(string);

  // console.log(arr.slice(1));
  return  store.concat(capitalizeFirst(arr.slice(1)));

}


console.log( capitalizeFirst (["gello", "work", "keepon"]));
