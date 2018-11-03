
function WaterBag(arr){
let sum = 0;
let i= arr.length -1, j=i-1;
// get rid of the back information that doesnt store anythings
while(i > 0){
  if(arr[i] <= arr[j]){
    arr.pop();
  }else break;
  i--;
  j--;
}

//OMG THANK YOU RECURSION
function Helper (subarray){
  let container = [];
  if(subarray.length === 0 ) return 0;
  i = 0
  j = i + 1;
  while(j < subarray.length){
    // 5  <=   1
    if(subarray[i] <= subarray[j]){
      while(container.length){
        sum = sum + subarray[i] - container.pop();
      }
      i = j;
      j=i+1;
    }else{
      container.push(subarray[j]);
      j++;
    }
  }
  //Logic
  let max = -1;
  if(container.length > 0){
    // Need to go back to even level
    container.forEach(elem => {
      max = Math.max(max , elem );
    });
    container.unshift(max);
    Helper(container);
  }
}
Helper (arr);




return sum;



// return arr;

}




console.log( WaterBag([1,2,1,2]) );
//[]
//[1,2]
//[1,2,1,2]
//[1,4,2,2,4,3,1,5,1,3,1,2,4]
// [1,4,2,2,4,3,1,5,1,3,1,2]
//1,4,2,2,4,3,1,5,1,4
//[1,4,2,2,4,3,1,5,1,3]
//1,4,2,2,4,3,1,5,1,3,2,2,2,1,1,1


//// Came up with an idea to solve one portion of the problem
//// did recursion to sovle the next part
// i = 0
// j = i + 1;
// i in this indecates the last big one
// while(j < arr.length){
//   console.log(arr[j] <= arr[j])
//   if(arr[i] <= arr[j]){
//     while(container.length)
//       sum = sum + arr[i] - container.pop();
//     i = j;
//     j=i+1;
//   }else{
//     container.push(arr[j]);
//     j++;
//   }
// }
