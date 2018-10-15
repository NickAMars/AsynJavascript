class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  Inserting(value){
      // console.log(this.root);
    let node =  new Node(value);
    if(!this.root){
      this.root = node;
    }else{
      let root  = this.root;

      while(root){
        if( value > root.value && !root.right){
          root.right = node;
          // console.log(root.right);
          return root.right;
        }else if(  value < root.value && !root.left){
          root.left = node;
          // console.log(root.left);
          return root.left;
        }

        if(root.value < value){
          root= root.right;
        }else{
          root= root.left;
        }
      }// end of while loop
    }
  }
  printTree(){
    this.printLeftRight(this.root);
  }
  printLeftRight(root){
    if(!root) return;
    this.printLeftRight(root.left);// prints the lowest one first
    console.log(root.value);
    this.printLeftRight(root.right);// then goest to the highest
  }
  SearchTree(value){
    let root = this.root;
    while(root){
       if(value === root.value){
         return root;
       }
       // move throw tree
       if(root.value < value){
         root= root.right;
       }else{
         root= root.left;
       }
    }
    return "Cant find value";
  }
//Breath first search
/*
 gets everything horizontally from left to right
*/
  BFS(){
    let node = null,
    data = [],
    queue = [];
    // add node
    queue.push(this.root);
    while(queue.length){
      // remove from the first
      node = queue.shift();
      // place value in data
      data.push(node.value);
      //add node from left and right
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }// continue process untill there is nothing in tree
    // return array with values
    return data;
  }
  // Depth first search
  /*
    goes from left half then goes to the right side
  */
  DFS(){
    var data = [];
    function traverse(){
      data.push(node);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}



const tree = new BinarySearchTree();
tree.Inserting(100);
tree.Inserting(60);
tree.Inserting(180);
tree.Inserting(80);
tree.Inserting(20);
tree.Inserting(90);
tree.Inserting(10);
tree.printTree();
console.log(tree.SearchTree(90));
