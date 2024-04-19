
// simple
// function bubbleSort(arr){
//     for(let i = 0 ; i < arr.length; i++){
//         for(let j = 0 ; j < arr.length; j++){
//             if(arr[j] > arr[i]){
//                 swap(arr, j, i);
//             }
//         }
//     }
//     return arr;
// }

//without double comparison
function bubbleSort(arr){
    let noSwap = true;
    for(let i = arr.length ; i > 0; i--){
        for(let j = 0 ; j < i-1; j++) {
            if(arr[j] > arr[j+1]){
                noSwap = false;
                swap(arr, j, j+1);
            }
        }
        if(noSwap){
            break;
        }
    }
    return arr;
}

function swap(arr, first, second){
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

console.log(bubbleSort([3,1,4,2,5]));
console.log(bubbleSort([1,4,3,2,5]));
console.log(bubbleSort([1,2,3,4,5]));