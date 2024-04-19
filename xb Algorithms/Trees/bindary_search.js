class Node {
    data= null;
    left= null;
    right= null;
    constructor(data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class BinarySearchTree{
    root = null;
    constructor(){}
    insertNode(data){
        const node = new Node(data, null, null);
        if(!this.root){
            this.root = node;
        }else{
            let current = this.root;
            // do while current exist
            while(current){
                if(current.data < data){
                    // insert if right does not exist 
                    if(!current.right) current.right = node;
                    // shirt right
                    current = current.right;
                }else if(current.data > data){
                    // insert if left does not exist
                    if(!current.left) current.left = node;
                    // shift left
                    current = current.left;
                }else{
                    break;
                }
            }
        }
        
    }
    deleteNode(data){
        // remove the root node
        if(!this.root.left && !this.root.right && this.root.data === data){
            this.root = null;
        }
        let current = this.root;
        let previous = null;
        let direction = '';
        while(true){
            if(current.data < data){
                //right direction
                previous = current;
                current = current.right;
                direction = 'right';
            }else if (current.data > data){
                //left direction
                previous = current;
                current = current.left;
                direction = 'left';
            }else if(current.data === data){
                // Swap 
                let leftNode = current.left;
                let rightNode = current.right;
                while(rightNode){
                    if(!rightNode.left){
                        // add left to the end of the right
                        rightNode.left = leftNode;
                        break;
                    }
                    rightNode = rightNode.left;
                }
                if(this.root.data === data){
                    this.root = current.right;
                }else{
                    // how would i know to remove left or right from previous
                    previous[direction] = current.right;
                }
                break;
            }
        }

    }
    findNode(data){
        let current = this.root;
        while(current){
            if(current.data === data) return true;
            if(current.data < data) current = current.right;
            else current = current.left;
        }
        return false;
    }
    printNode(node){
        if (node !== null) {
            this.printNode(node.left);
            console.log(node.data);
            this.printNode(node.right);
        }
    }

}
const  BS = new BinarySearchTree();
BS.insertNode(10);
BS.insertNode(5);
BS.insertNode(17);
BS.insertNode(14);
BS.insertNode(22);
BS.insertNode(12);
BS.insertNode(16);
// no doubles 
BS.insertNode(19);


// console.log(BS.findNode(19));
// console.log(BS.findNode(15));


BS.deleteNode(5);
BS.deleteNode(14);
BS.deleteNode(10);
BS.deleteNode(12);

BS.printNode(BS.root);

console.log("finished");

