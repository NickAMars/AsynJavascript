/*
SIMPLE PQ
I reverse the list so that the highest priotity is at the back
so i can pop it off the in faster time

*/

class PriorityQueue{
  constructor(){
    this.values = [];
  }
  enqueue(val, priority){
    this.values.push({val , priority}); // takes O(1)
    this.sort();
  }
  dequeue(){
    // return this.values.shift(); shift takes O(n)
    return this.values.pop(); // Takes O(1)
  }
  sort(){ // revers the list
    this.values.sort((a,b) => b.priority - a.priority); // O(n*logn)
  }
}

const q = new PriorityQueue();
q.enqueue("A", 5);
q.enqueue("B", 2);
q.enqueue("C", 1);
q.enqueue("D", 4);
console.log(q.values);

console.log(q.dequeue());
console.log(q.values);
