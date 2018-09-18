function minSubarraySum(arr, index){
// return the minimum  of array of which the sum is greater than index
// if there is non return 0
let minindex= arr.length+1; // keep track of the minimim index
let amountindex=0; // keep track of the amount index
let amount= 0; // amount change to find if suit condition
let i =0;
  while(i < arr.length ){
    amount+= arr[i];
    amountindex++;

    // console.log(amount);
    if(amount >=  index){
      minindex = Math.min(minindex, amountindex);
      amount = 0;
      amountindex=0;
    }
    i++;
  }
  if(minindex === arr.length+1 )return 0;
  // console.log(minindex);
  return minindex;
}

console.log(minSubarraySum([1,2,16,22,5,7,8,9,10], 55));

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}


function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
