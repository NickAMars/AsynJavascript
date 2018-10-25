// object to store
class Node{
  constructor(value, priority, time = new Date().getTime()){
    this.value = value;
    this.priority= priority;
    this.time = time;
  }
}

class PriorityQueue{
  constructor(){
    this.values = [];
  }
  enqueue(value, priority){
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp(){
    let index = this.values.length - 1;
    const element  = this.values[index];
    while(index > 0 ){
      let parentIndex = Math.floor((index-1)/2);
      let parent = this.values[parentIndex];
      if( element.priority <= parent.priority ) break;
      // SWAP
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
    }
    // console.log(this.values);
  }

  dequeue(){
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.bubbleDown();
    }
  }
  bubbleDown(){
    let index = 0;
    let element = this.values[index];
    let first_child = 0,second_child = 0; // each parent has two children
    while(this.values[2 * index + 1]){// check if first_child exist
      first_child =  this.values[2 * index + 1];
      second_child =  this.values[2 * index + 2];

      if(second_child && first_child){ // if both exist
        if(first_child.priority > second_child.priority){
          if(first_child.priority < element.priority) break;
          //SWAP
          this.values[2 * index + 1] = element;
          this.values[index] = first_child;
          index = 2 * index + 1;
        }else{
          if(second_child.priority < element.priority) break; // no need to swapbreak;
            this.values[2 * index + 2] = element;
            this.values[index] = second_child;
            index = 2 * index + 2;
          }
      }else if(first_child){
        if(first_child.priority< element.priority) break;
        this.values[2 * index + 1] = element;
        this.values[index] = first_child;
        index = 2 * index + 1;
      }
    }
  }
}

let INTEREST = new PriorityQueue();
INTEREST.enqueue("code", 100);
setTimeout(()=>{},1000); // 1 second
INTEREST.enqueue("girls", 90);
setTimeout(()=>{},1000); // 1 second
INTEREST.enqueue("friends", 85);
setTimeout(()=>{},1000); // 1 second
INTEREST.enqueue("snowboarding", 90);
setTimeout(()=>{},1000); // 1 second
INTEREST.enqueue("family", 85);
setTimeout(()=>{},1000); // 1 second
INTEREST.enqueue("working out", 80);
setTimeout(()=>{},1000); // 1 second
INTEREST.enqueue("having fun", 120);
console.log(INTEREST.values);
INTEREST.dequeue();
INTEREST.dequeue();
