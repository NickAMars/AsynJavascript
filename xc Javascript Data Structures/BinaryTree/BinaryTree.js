


var BST = (function(){
			// PRIVATE
			var root = null;
			
			// NODE OBJECT
			var Node = function (data,left,right){
			this.data 	= data;
			this.left 	= left;
			this.right	= right;
			}
			
			/*function currentToNull(current, data){
				if(current === null){ // repeated operation
					current = data;
				}
			}*/


	// PUBLIC
	return {
		
		insert: function(data){
				const node = new Node(data,null, null);
			
				if(root === null){			
					root = node; 
				}else{
					
					let current  = root;
					while(true){
					if(current.data > data){
								if(current.left === null){
									current.left = node;
								console.log(root+ "  1");
								break;
								}
								current = current.left;
							}else{
								if(current.right === null){
									current.right = node;
								console.log(root+ "  2");
								break;
								}
								current = current.right;
							}
					}
				}			
		},
		Delete: function(data){
				if(root === null){
					return console.log("Nothings in Tree");
				}
				// condition		
				let current = root, right_leaf, left_leaf;
					while(true){
					
					right_leaf = current.right; // keep track of left
					left_leaf =current.left;    // keep track of right
						
						
						//CHECK If a value exist to the left or right
						if(current.data > data){
								if(left_leaf === null){
									return console.log("Could not find value");
								}
						}else if(current.data < data){
								if(right_leaf === null){
									return console.log("Could not find value");
								}
						} else if(current.data === data){
							current = null;
							return console.log("data found");
						}
						
						
						
						if(left_leaf !== null){// L Leaf Data exist
									if(left_leaf.data === data){ // if found data
										console.log(`${data} has been remove from the node`);
										current.left = null;
										break;
									}else if(left_leaf.data > data){ //MOVE to the left======================
											console.log(" Move Left of left");					
											current = current.left;// moves to the left
									} else if(left_leaf.data < data ){
											console.log(" Move Right of left"); 
											current = left_leaf;
									} 							
						}
						
						if (right_leaf !== null){
									if(right_leaf.data === data){ 
										console.log(`${data} has been remove from the node`);
										right_leaf = null;	
										break;					
									}else if(right_leaf.data < data){	//MOVE to the right=======================			
												console.log(" Move Right of right"); 
												current = right_leaf;
										} else if(right_leaf.data > data ){
												console.log(" Move Left of right");
												current = right_leaf;
											
										}	
						}						
					}
		}
		
		,
		inOrder: function(node){
				   if (!(node == null)) {
						inOrder(node.left);
						console.log(node.show() + " ");
						inOrder(node.right);
					}
		}
		,
		show: function(){
			console.log(root);
		},
		test: function (){
			console.log("test is working");
		}
	}

})();

//show();