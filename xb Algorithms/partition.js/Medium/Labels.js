/**
 * @param {string} S
 * @return {number[]}
 */
// var partitionLabels = function(S) {
// return at most once
// i could store it in a hashmap counting the elements
//then when i reach the arr

// };



class PriorityHeap{
  constructor(){
    this.values = [];
  }
  insert(element){
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp(){
    let index = this.values.length - 1;
    const element  = this.values[index];
    while(index > 0 ){
      let parentIndex = Math.floor((index-1)/2);
      let parent = this.values[parentIndex];
      if(element.min >= parent.min ) break;
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
    }
  }
  remove(){
    let element = this.values[0];
    if(!this.values.length){
      return null;
    }else if(this.values.length === 1){
      return this.values.pop();
    }
    this.values[0] = this.values.pop();
    this.bubbleDown();
    return element;
  }
  bubbleDown(){
    let index = 0;
    let element = this.values[index];
    let first_child = 0,second_child = 0;
    while(this.values[2 * index + 1]){
      first_child =  this.values[2 * index + 1];
      second_child =  this.values[2 * index + 2];
      if(second_child && first_child){
        if(first_child.min < second_child.min){ // >
          if(first_child.min > element.min) break; // >
          this.values[2 * index + 1] = element;
          this.values[index] = first_child;
          index = 2 * index + 1;
        }else{
          if(second_child.min > element.min) break;// <

          this.values[2 * index + 2] = element;
          this.values[index] = second_child;
          index = 2 * index + 2;
        }
      }else if(first_child.min){
        if(first_child.min > element.min) break; // <
        this.values[2 * index + 1] = element;
        this.values[index] = first_child;
        index = 2 * index + 1;
      }
    }
  }
}
var partitionLabels = function(S) {
  // create a hashmap
    const intervals = {};
	let results = [];
// get the interval  of all the letter in a map
    Array.from(S).forEach( (char, idx)=>{
      if(!intervals[ char ]) {
        intervals[ char ] = {min: idx, max: idx};
      }else{
        intervals[ char ].max = idx;
      }
    });
// new a binary heap to store the value in intervals
//O(nlogn)
let nodes = new PriorityHeap();
Object.values(intervals).forEach(elem => nodes.insert(elem));
// go through each key
  let interval = nodes.remove();
while(interval){
  // if result doesnt exist or  interval min > prev result max
    if(!results.length || interval.min > results[results.length - 1].max) {
      results.push(interval);
      // else if     interval min < prev result max            and   interval max >  prev result max
    } else if(interval.min < results[results.length - 1].max && interval.max > results[results.length - 1].max) {
      // update max distance
       results[results.length - 1].max = interval.max
    }

  interval = nodes.remove();
}
	return results.map(result => {
		return result.max - result.min + 1;
	});
};


console.log(partitionLabels("ababcbacadefegdehijhklij"));
