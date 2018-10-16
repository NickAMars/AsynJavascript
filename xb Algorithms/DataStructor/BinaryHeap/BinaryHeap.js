
class MaxBinaryHeap{
  constructor(){
    this.values = [41,39,33,18,27,12];
  }
  insert(element){
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp(){
    // get last element in array
    let index = this.values.length - 1;
    const element  = this.values[index];
    while(index > 0 ){
      // looking for parent index
      let parentIndex = Math.floor((index-1)/2);
      // parent
      let parent = this.values[parentIndex];
      if(element <= parent ) break;
        // parent is equal to child
        this.values[parentIndex] = element;
        // child is equal to parent
        this.values[index] = parent;
        //swap the parent and the child
        index = parentIndex;
    }
    console.log(this.values);
  }
}
let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(25);
heap.insert(30);
heap.insert(100);


// child index is 2n + 1 or 2n + 2
