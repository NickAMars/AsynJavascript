/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
 class SingleLinkList{
   constructor(){
     this.head =  null; // NODE
     this.tail = null; // NODE
     this.size = 0;
   }
   endAddNode(value){
     const node = new Node(value);
     if(!this.head){
       this.head =  node;
       this.tail = node;
     }else{
       this.tail.next = node;
       this.tail = this.tail.next;
     }
   }
   PrintList(){
      let head = this.head;
     while(head){
       console.log(head.val);
       head = head.next;
     }
   }
 }

 const list = new SingleLinkList();
list.endAddNode(1);
list.endAddNode(2);
list.endAddNode(3);
list.endAddNode(2);
list.endAddNode(1);

// list.PrintList();
var isPalindrome = function(head) {
    // determine how many items are in this list  (even or odd)
    let node = head, i = 0;
    while(node){
      i++;
      node = node.next;
    }
    // returns the size of the list
    let next;
    let endReverse = reverse(head, i);

    //compare the first section with the endPart
    while(endReverse){
      if(head.val  !== endReverse.val)
        return false;
      endReverse = endReverse.next;
      head = head.next;
    }

    return true;


};

function reverse(head, size){
  // let prev = head;
  let mid = Math.floor(size/2);
  // not tamper with the real value
let curr = head, j = 0;
// if there exist a current
  if(curr){
      //gets the elements after the list end
      if(size % 2 === 0){
        while(j < mid){
          curr = curr.next;
          j++;
        }
      }else{
        while(j < mid + 1){
          curr = curr.next;
          j++;
        }
      }
      // reverse the link list

      let next;
      let prev= null;

      while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      return prev;
  }else return null;
}


console.log(isPalindrome(list.head));
