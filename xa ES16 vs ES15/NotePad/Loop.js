let i = 0;
while (i < 10 ){ i++;}
for(let i = 0 ; arr.length > i ;  i++){}
continue; -- goes to next itteration;
break; -- gets out of the for or while loop
O(n)
ARRAY.slice(START, END) -- takes off starting index of array to the end but leaves the end
ARRAY.slice(1) -- removes first element of arr
ARRAY.slice(-1) -- remove last element

(ARRAY).forEach( (elem, index, arr)=>{}, ThisArg );
(ARRAY).map( (elem, index, arr)=>{}, ThisArg ); -- loops throw array and returns values
(ARRAY).filter( (elem, index, arr)=>{}, ThisArg ); -- filters the array that pass the method
(ARRAY).sort( (a,b) => a - b); -- sorts element (ascending order) with negative number
(ARRAY).sort( (a,b) => b - a); -- sorts element (descending order) with negative number
(ARRAY).sort(); -- doesnt sort elements with negative numbers
(ARRAY).reduce(callback, INITIAL_VALUE);
/*
// returns the greatest value in the array FOR REDUCE METHOD
callback(accumilator, currentValue, currentValue, array){
  if(accumilator > currentValue ){
    return accumilator;
  }else{
    return currentValue;
  }
}
*/
