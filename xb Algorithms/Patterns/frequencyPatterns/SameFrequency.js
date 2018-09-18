

const sameFrequency = (num1,num2)=> {
  const freqCount1 = {};
  const freqCount2 = {};
  const arr1 = num1.toString();
  const arr2 = num2.toString();
  Array.from(arr1).forEach(elem=>{
    freqCount1[elem] =(freqCount1[elem] || 0)+1;
  });
  Array.from(arr2).forEach(elem=>{
    freqCount2[elem] =(freqCount2[elem] || 0)+1;
  });
  for(let key in freqCount1){ // take all the keys
    if(!(key in freqCount1))return false; // if key doesnt exist in obj2
    if(freqCount2[key] !== freqCount1[key]) return false;
  }
  return true;
}

console.log(sameFrequency(112223,112223));
