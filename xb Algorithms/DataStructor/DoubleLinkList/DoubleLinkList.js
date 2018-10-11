class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class DoubleLinkList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addRight(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head=newNode;
      this.tail = newNode;
    }else{
      // console.log(newNode);
      // give all the address for the first item
      this.tail.right = newNode;
      // right item store left in left address
      newNode.left = this.tail;
      //move item to second node
      this.tail = newNode;
    }
    this.size++;
  }
  addLeft(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head=newNode;
      this.tail = newNode;
    }else{
      newNode.right = this.head;
      this.head.left = newNode;
      this.head = newNode;
    }
    this.size++;

  }
  addAtIndex(value,index){
    if(index === 0){
      this.addLeft(value);
    }else if(index === this.size){
      this.addRight(value);
    }else if(index >= 0 && index < this.size){
      let node = new Node(value);
      // gets the node at the current index
      let curr = this.searchList(index);
      let prev = curr.left;
      // update the node
      node.right = curr;
      node.left = prev;
      // // update  prev and curr item
      prev.right = node;
      curr.left = node;
      this.size++;
    }
    return null;
  }
  removeTail(){
    if(!this.head) return undefined;
    let removeNode = this.tail;
    if(this.size === 1){
      this.head = null;
      this.tail = null;
    }else{
      // takes off the previous arguement
      this.tail             = removeNode.left;
      // remove link between them
      this.tail.right       = null;
      removeNode.left       = null;

    }
    this.size--;
  }
  removeHead(){
    if(!this.head) return undefined;
    let removeNode = this.head;
    if(this.size === 1){
      this.head = null;
      this.tail = null;
    }else{
      // remove the head
      // the head has a right
      // the head doesnt have a left
      this.head = null;
      // move over to the next item
      this.head = removeNode.right
      // remove the previous item from left
      this.head.left = null;


    }
    this.size--;
  }
  removeIndex(index){
    // if(index < 0 || index > this.size-1){
    //   return null;
    // }

    if(index === 0){
      this.removeHead();
    }else if(index === this.size-1){
      this.removeTail();
    }else if(index >= 0 && index < this.size){
      // gets the node at the current index to remove
      let curr = this.searchList(index);
      // take out the current
      let prev = curr.left;
      let next = curr.right;

      // take out the middle man
      prev.right = next;
      next.left = prev;

    }
      this.size--;
  }
  updateNode(value, index){
    let found = this.searchList(index);
    if(found){
        found.value = value;
        console.log("found has been updated");
    }else{
      console.log("ERROR: YOU WENT TOO HIGH OR  TOO LOW PAN YAH INDEX MON");
    }
  }
  searchList(index){
    if(index < 0 || index > this.size-1){
      return null;
    }
      // get the middle index point and compare to the index
    let middle = Math.floor(this.size/2) -1;
    if(index <= middle){
      // console.log(list);
      //from the head to the middle
      let list = this.head;
      let i = 0;
      while(list && i != index){
        // console.log(list);
        list = list.right;
        i++;
      }
      // when this loop is finish will have or  value
      return list;
      // console.log(list);

    }else{
      //from the tail to the middle
      let list = this.tail;
      let i = this.size-1;
      while(list && i != index){
        // console.log(list);
        list = list.left;
        i--;
      }
      // when this loop is finish will have or  value
      // console.log(list);
      return list;
    }
  }
  printRightList(){
    // prints the list
    let list = this.head;
    while(list){
      console.log(list);
      console.log("\n\n");
      list = list.right;
    }
  }
  printLeftList(){
    let list = this.tail;
    while(list){
      console.log(list);
      console.log("\n\n");
      list = list.left;
    }
  }
  getSize(){
    return console.log(`The size is ${this.size}`);
  }
}
let list = new DoubleLinkList();
let item1 = new Node("SECOND");
let item2 = new Node("THIRD");
let item3 = new Node("LAST");
let item4 = new Node("FIRST");

list.addRight(item1);
list.addRight(item2);
list.addRight(item3);
list.addLeft(item4);
// list.updateNode("UPDATE", -1);
// list.addAtIndex("im coming",0);
// list.removeIndex(3);
// list.getSize();
// list.printRightList();
list.printLeftList();
// list.searchList(0);
// console.log(list.searchList(0));

// list.removeHead();
// list.removeHead();

// list.printRightList();
