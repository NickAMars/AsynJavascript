/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
//  * @param {ListNode} head
//  * @param {number} x
//  * @return {ListNode}
//  */
 function ListNode(val) {
    this.val = val;
    this.next = null;
 }
 var partition = function(head, x) {
     let store = [];
     // get values and store in array
     while(head){
         store.push(head.val);
         head = head.next;
     }
     if(store.length === 0 ){
        let newList = new ListNode(0);
        return newList.next;
     }
     else if (store.length === 1){
          // console.log(store);
       let newList = new ListNode(0);
        newList.next = new ListNode(store[0]);
       return newList.next;
     }

     // store.sort((a,b)=> b-a );
let  i = 0;
const left = [] ,right= [];
     while(store.length > i){
       if(store[i] < x){
         left.push(store[i]);
       }else if(store[i] >= x){
         right.push(store[i]);
       }
       i++;
     }
     store = left.concat(right);
     // console.log("store for array",  store);


   let newList = new ListNode(0);
   newList.next =new ListNode(store.shift());
   // return the List of item sorted
   StoreList(newList.next,store);
   return newList.next;
 };

function StoreList(List,array){
  if(array.length == 0 || array.length == undefined)  return List;
       List.next = new ListNode( array.shift());
       StoreList(List.next,array);

}
//
//
let newList = new ListNode(2);

newList.next = new ListNode(1);
newList.next.next =new ListNode(3);
// newList.next.next.val = 3;
newList.next.next.next = new ListNode(4);
newList.next.next.next.next = new ListNode(5);
newList.next.next.next.next.next = new ListNode(2);

// console.log(newList);
console.log(partition(newList, 3));



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
// faster solution thats not min
// var partition = function(head, x) {
//     if(head === null) return head;
//
//     const leftDummy = new ListNode(0);
//     const rightDummy = new ListNode(0);
//     // create two link list
//     let left = leftDummy;
//     let right = rightDummy;
//
//     while(head){
//     	if(head.val < x) {
//     		left.next = head;
//     		left = head;
//     	} else {
//     		right.next = head;
//     		right = head;
//     	}
//     	head = head.next;
//     }
//     right.next = null;
//     left.next = rightDummy.next;
//     return leftDummy.next;
// };
