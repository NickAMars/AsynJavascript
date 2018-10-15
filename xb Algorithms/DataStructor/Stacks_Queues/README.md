
// abstract data structure
//STACK
// LIFO

// using an array it would be using push and pop

// make a link list that adds and removes from the begin
// to the start and removes the start

class Stack{
  constructor(){
    this.head = null;
    this.tail =  null;
    this.size = 0;
  }
}

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}
const node = new Node(val);

ADD FIRST to STACK when there is other stacks
node.next = this.head;
this.head = node;
// REMOVE FIRST to from the stack
this.head = this.head.next;





// QUEUE
//FIFO
// enqueue
// dequeue


class Queue{
  constructor(){
    this.head = null;
    this.tail =  null;
    this.size = 0;
  }
}

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}

//ADD BEGINING of the queue
this.tail.next = node;
this.tail = this.tail.next;
// REMOVE FIRST to from the queue
this.head = this.head.next;
