// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  */
//  // i didnt get this
// var canPartitionKSubsets = function(nums, k) {
//   let sum  = 0, i = 0, arr = [], tracker = 0 ;
//   let obj = {};
//   sum_array = nums.reduce((a,b) => a+b);
//   if(sum_array % k !== 0)return false;
//   // find values who sum is equal to this
//   let div = sum_array/k;
//   // console.log("div is :",div)
//    nums.sort((a,b)=> b-a);
//   while( i <  nums.length){
//       sum += nums[i];
//
//       if(  sum <= div ){
//
//           arr.push(i); // take in 0
//           if(div === sum){
//             sum =0;
//             i=0;
//             // track_first=0;
//             while(arr.length ){nums[arr.pop()] =0;}
//             tracker = 1;
//           }
//             tracker = 0;
//       }else{
//         sum -= nums[i];
//         if(tracker === 0 && i === nums.length-1 && arr.length !== 0){
//           // console.log(nums[arr.pop()+1]);
//           // console.log(i);
//           // console.log(nums[arr.pop()]);
//           let newIndex = arr.pop()+1;
//           // console.log(sum);
//           sum -= nums[newIndex];
//           console.log(sum);
//           i = newIndex;
//           // tracker = 1;
//         }
//           // if()
//         // if( track_first !== 0){
//         //   track_first--;
//           // console.log(tracker);
//         // }
//         // if(track_first !== 0 ){
//         //   sum -= nums[ arr[i] ];
//         //   i = track_first+1;
//         //   track_first= 0;
//         //   // i = tracker;
//         // }
//       }
//       // console.log(i);
//       i++;
//     }
//  console.log(nums);
//   if(nums.filter((zero) =>  zero > 1 ).length === 0)return true;
//   return false;
// }
// // console.log(canPartitionKSubsets([1,2,3,4,5], 3));
//
//
// console.log(canPartitionKSubsets( [3522,181,521,515,304,123,2512,312,922,407,146,1932,4037,2646,3871,269], 5));
//
// // [3522,181,521,515,304,123,2512,312,922,407,146,1932,4037,2646,3871,269]




// look at java solution

// var canPartitionKSubsets = function(nums, k) {
// 	let sum = 0;
// 	for(let i=0; i<nums.length; i++) sum+=nums[i];
// 	if(sum%k!==0) return false;
//
// 	let used = Array.from({length:nums.length}, x=>false);
// 	let n = sum/k, left = nums.length;
//
// 	return (function search(start, target){
// 		if(left===0) return true;
// 		if(target===0) return search(0, n);
// 		for(let i=start; i<nums.length; i++){
// 			if(nums[i]>n) return false;
// 			if(!used[i] && nums[i]<=target){
// 				used[i]=true;
// 				left--;
// 				if(search(i+1, target-nums[i])) return true;
// 				used[i]=false;
// 				left++;
// 			}
// 		}
// 		return false;
// 	})(0, n);
// }
//
// function canPartition(nums, visited, start_index, k, cur_sum, cur_index, target){
//   if(k === 1)  return true;
//   if(cur_sum === target && cur_sum > 0)return canPartition(nums, visited, 0, k-1, 0, 0, target);
//     for(let i = start_index; i < nums.length; i++){
//       if(visited[i] === 0){
//         visited[i] = 1;
//         if(canPartition(nums, visited, i+1, k, cur_sum, cur_index++, target)) return true;
//         visited[i] = 0;
//       }
//     }
//   return false;
// }



const canPartitionKSubsets = (nums, k) => {
  // Step 1. If total sum cannot be divided by k or one of the number
  // is greater than sum/k, return false
  const sum = nums.reduce((total, num) => total + num);
  if (sum % k !== 0 || nums.some(num => num > sum / k)) {
    return false;
  }

  // Step 2. Use a hashset to track used numbers
  const used = new Set();
// console.log(used);
  // Step 3. Start the search
  return (function search(start, target) {
    // If all the numbers are used, we are done
    if (used.size === nums.length) {
      return true;
    }

    // The subset sum is too large, stop searching
    if (target < 0) {
      return false;
    }

    // If we have found one subset, continue the search till we use all the numbers
    if (target === 0) {
      return search(0, sum / k);
    }

    // Try every unused number
    for (let i = start; i < nums.length; i++) {
      if (!used.has(i)) {
        used.add(i);
        if (search(i + 1, target - nums[i])) {
          return true;
        }
        used.delete(i);
      }
    }

    return false;
  })(0, sum / k);
};
console.log(canPartitionKSubsets([1,2,3,4,5], 3));
