function countDown(num){
  // Base Case
  if(num <= 0 ){
    console.log("All done!");
    return;
  }
  // iteration 
  console.log(num);
  num--;
  countDown(num);
}
