function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function radixSort(nums){
  // find the maximum digit
    let maxDigitCount = mostDigits(nums);
    // maximum digits
    for(let k = 0; k < maxDigitCount; k++){
      // create an array of arrays for each digit of the number
        let digitBuckets = Array.from({length: 10}, () => []);
        // length of array pass in
        for(let i = 0; i < nums.length; i++){
            // get the digit of the number  0,1,2,3,4,5,6,7,8,9
            let digit = getDigit(nums[i],k);
            // store in buckets base on digits
            digitBuckets[digit].push(nums[i]);
        }
        // combine all the arrays together
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852])
