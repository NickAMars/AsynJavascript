
class MaxBinaryHeap{
  constructor(){
    this.values = [41,39,33,18,27,12];
  }
  insert(element){
    this.values.push(element);
    this.bubbleUp();
  }
  // take the leaf node and compare it to its parent
  /*
  for the bubbling method all we need is the last inserted element
  and the index.
  so that we can find the parent index and and compare the values
  between them and decide
  if we should continue with the swap of leave the loop.
  */
  bubbleUp(){
    // get last element in array
    let index = this.values.length - 1;
    const element  = this.values[index];
    // if index is zero its the highest one
    while(index > 0 ){
      // floor(x-1)/2 or floor(x -2)/2
      // get and store parent index
      let parentIndex = Math.floor((index-1)/2);
      // store parent value
      let parent = this.values[parentIndex];
      // if my parent is greater dont do anything get out
      if(element <= parent ) break;
      // SWAP VALUES
        // parent is equal to child
        this.values[parentIndex] = element;
        // child is equal to parent
        this.values[index] = parent;

        // CNANGE  THE ELEMENT INDEX
        index = parentIndex;
    }
    console.log(this.values);
  }


// assume we are storing from left to right
  bubbleDown(){
    //element and and place the item at the bottom of the array to the top.
    // then compare the element to the two children looping for the largest one
    // children nodes are 2n + 1 , 2n + 2
    // then swap the largest one with its value


    //Start do one case of this
    // remove the first element shift()
    //remove the last and place on the root node pop()

    //THIS CODE SWITCH THE VALUES OF THE FIRST AND LAST INDEX
    // starting index
    let index = 0;
    // access O(1)     pop method O(1)
    let element  = this.values.pop();
    this.values[index] = element;
    let first_child = 0,second_child = 0;
    // compare children nodes are 2n + 1 , 2n + 2


    // time complexity is  O(logn)
    // while first child does not equal to zero
    while(this.values[2 * index + 1]){
      first_child =  this.values[2 * index + 1];
      second_child =  this.values[2 * index + 2];
      // check if it exist
      if(second_child && first_child){
        // What if one of them is null?
        if(first_child > second_child){
          //SWAP the element with the first child
          this.values[2 * index + 1] = element;
          this.values[index] = first_child;
          index = 2 * index + 1;
        }else{
          //SWAP the element with the second child
          this.values[2 * index + 2] = element;
          this.values[index] = second_child;
          index = 2 * index + 2;
        }
      }else if(first_child){
        //SWAP the element with the first child
        this.values[2 * index + 1] = element;
        this.values[index] = first_child;
        index = 2 * index + 1;
      }
    }  // if there is no left or right just stop there
    console.log(this.values);
  }

}
let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(25);
heap.insert(30);
heap.insert(100);
heap.bubbleDown();


// child index is 2n + 1 or 2n + 2
