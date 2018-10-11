class SingleLinkList{
  constructor(){
    this.head =  null; // NODE
    this.tail = null; // NODE
    this.size = 0;
  }

  /*
    add all list items to the end of the list
  */
  endAddNode(value){
    const node = new Node(value);
    // if doesnt exist
    if(!this.head){
      this.head =  node;
      this.tail = node;
    }else{
      // last value added
      this.tail.next = node;
      // move the tail as a pointer to the last element
      this.tail = this.tail.next;
    }

    //after successfully adding
      this.size++;
  }
  /*
    adds all list item to the start of the list
  */
  startAddNode(value){
    const node = new Node(value);
    // instance is passed
    // if head is not null
    if(this.head){
      node.next = this.head;
      this.head = node;
    }else{ //false
      this.tail = node;
      this.head = node;
    }
    this.size++;
  }
  /*
    changing the values of head
  */
  updateNode(index,value){
    let head = this.head, i = -1;
    while(head && i != index){
      head = head.next;
      i++;
    }
    // console.log(head);
    //Now we are at the head value
    head.val = value;
  }
  /*
  Insert Link list
   */
  /*
    prints all list item to the console
  */
  insertNode(index,value){
    let prev = this.head;
    let curr = this.head;
    let i = 0;
    // check if index is in the range
    if( index >= 0 && index < this.getSize() -1) return console.log("Error: index was wrong");
    while(curr && i != index){
      prev = curr;
      curr = curr.next;
      i++;
    }
    console.log(curr);
    // current is at the place of insertion now
    if(curr === null) return console.log("Error: insertNode data");
    if(curr.val === this.head.val){
        this.startAddNode(value);
    }else if(curr.val === this.tail.val){
        this.endAddNode(value);
    }else{
        const node = new Node(value);
      // add current to the next of node
      node.next = curr;
      // add node to the previous next
      prev.next = node;
    }
    this.size++;
  }
  PrintList(node){
    // referents to different address
    // let head = new Node('');
     let head = this.head;
    // when head is not null
    while(head){
      console.log(head.val);
      head = head.next;
    }
  }
  /*
  returns the node with the write index
   */
  PrintItem(index){
    // console.log("array size",this.size);
    let head = this.head;
    // hey the index value
    let i = -1;
    // stop when reach index or head is undefined
    while( i != index-1 && head){
      head = head.next;
      i++;
    }
    if(head === null) return "No such index";
    return head;
  }
  /*
    delete the node by passing in a alue
  */
  Delete(val){
     let prev = this.head;
     let curr = this.head;
     // while current isnt null curr.val != node.val
    while(curr && curr.val != val){
      // the last node
      prev = curr;
      // the current node
      curr = curr.next;
    }
    if(curr === null){
      return console.log("You have nothing in your list");
    }
    // // first element
    if(curr.val === this.head.val){
      // if current next exist
      if(curr.next){
        this.head = curr.next;
      }else {
        this.head = null;
        this.tail = null;
      }
        // last element
    }else if(curr.val === this.tail.val){ // last item
      // gets rid of the tail
      prev.next = null;
      // move tail to the prev value
      this.tail = prev
    }else {// in between
      //   1-> 2 -> 3  -----   1->3
      prev.next = curr.next;
    }
      //after successfully delete
      this.size--;
  }
  Reverse(){
    // store the head value
    let node = this.head;
    // swap the head and the tail
    // head is now last item
    this.head = this.tail;
      // tail is now first item
    this.tail = node;

    let next;
    let prev = null;

    // for(let i = 0; i < this.size; i++){
    while(node){
      // stores the next item on the list
      next = node.next;
      // adds previous item to the back of the list
      node.next = prev;
      // storing the value and next operation
      prev = node;
      // then continue to the next value
      node = next;
    }
    // connects to the head address at the end
  }
  getSize(){
    console.log(`Link List size : ${this.size}`)
  }

}
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}


// const item = new Node("Nooooode");
// const item1 = new Node("hello");
// const item2 = new Node("Nick");
// const item3 = new Node("Mars");
const list = new SingleLinkList();
list.startAddNode("Nooooode");
list.startAddNode("hello");
list.startAddNode("Nick");
list.startAddNode("Mars");
list.PrintList();
list.getSize();
// console.log(list.PrintItem(5));
// list.insertNode(1,"Im Here");
// list.PrintList();
list.Reverse();
list.PrintList();

// list.PrintList();
