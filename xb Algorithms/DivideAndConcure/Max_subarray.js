

const find_max_crossing_subarray = (arr, low, mid, high)=>{
  let left_sum = - Infinity;
  let sum = 0;
  let max_left;
  for (let i = mid; i > low;  i--){
    sum= sum + arr[i];
    if(sum > left_sum){
      left_sum = sum;
      max_left = i;
      // console.log(left_sum);
    }
  }
  let right_sum = - Infinity;
  sum = 0;
  let max_right;
  for (let j = mid + 1; j < high;  j++){
    sum = sum + arr[j];
    if(sum > right_sum){
      right_sum = sum;
      max_right = j;
      // console.log(right_sum);
    }
  }
  return {left:max_left, right:max_right, sum:left_sum+ right_sum};
}

// console.log(find_max_crossing_subarray([-2,10,8,-21,4,15,4,-10,-2,9], 0, 4, 9));

const find_maximum_subarray = (arr, low, high) =>{
  if(low !== undefined && high !== undefined){
    let mid;
    if(high === low){
          // console.log(low, high);
          // console.log(arr[low]);
      return {low, high, sum: arr[low]};
    }else {
        mid = Math.floor((low + high)/2);
        // console.log(low, high , mid);
      try{
        let {low: left_low , high: left_high, sum:left_sum} = find_maximum_subarray(arr, low, mid);
          // console.log("LEFT",[left_low, left_high, left_sum]);
        let {low: right_low , high: right_high, sum: right_sum} = find_maximum_subarray(arr, mid+1, high);
          // console.log("RIGHT",[right_low, right_high, right_sum]);
        let { left: cross_low, right: cross_high, sum: cross_sum } = find_max_crossing_subarray(arr,low,mid,high);
          // console.log("CROSSS",[cross_low, cross_high, cross_sum]);
        if(left_sum>= right_sum && left_sum>= cross_sum) return [left_low, left_high, left_sum];
        else if(right_sum>= left_sum && right_sum>= cross_sum) return [right_low, right_high, right_sum];
        else return [cross_low, cross_high, cross_sum];

      }catch(err){}
    }
  }
}

console.log(find_maximum_subarray([13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7],0,16));
