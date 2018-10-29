class Graph {
  constructor(){
    this.adjacencyList = {}
  }
  // add vertex before add edge
  addVertex(vertex){
    if(!this.adjacencyList[vertex])
      this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2){
    // console.log(this.adjacencyList[vertex1]);
    if(this.adjacencyList[vertex1])
      if(this.adjacencyList[vertex2]){
        if(!this.adjacencyList[vertex1].includes(vertex2)){
          this.adjacencyList[vertex1].push(vertex2);
          this.adjacencyList[vertex2].push(vertex1);
          return "Connected";
        }
        return "Already have";
      }
      return "Can't find";
  }
  removeEdge(vertex1, vertex2){
    if(this.adjacencyList[vertex1])
       this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(elem=> elem !== vertex2 );
    if(this.adjacencyList[vertex2])
       this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(elem=> elem !== vertex1 );
  }
  removeVertex(vertex){
    if(this.adjacencyList[vertex]){
      this.adjacencyList[vertex].forEach( main_vertex => { // loop throw all the vertex it has
        // go to state and take out the other
        this.adjacencyList[main_vertex] = this.adjacencyList[main_vertex].filter(elem => elem !== vertex);
      });
      delete this.adjacencyList[vertex];
    }
  }

  DFSRecursive(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
      //helper IIFE
    (function dfs(vertex){
      if(!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor =>{
        if(!visited[neighbor]){
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
  //took advantage of the way it was ordered
    DFSIterative(start){
      const stack = [start];
      const result = [];
      const visited = {};
      let  currentVertex;
      visited[start] = true;
      while(stack.length){
        currentVertex = stack.pop();
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach(neighbor =>{
          if(!visited[neighbor]){
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        });
      }
      return result;
    }

    /*
        --- A  ---
      |          |
       B         C
       |         |
       D ------- E
       |         |
       ---- F ----

graph     result
A          A
A -> B     A , B
A -> C     A , B , C
B -> D     A , B , C , D
C -> E     A , B , C , D , E
D -> F     A , B , C , D , E , F

basically we go to each leaf node of the node.
    */
    BFS(start){
      console.log()
      const queue = [start];
      const result = [];
      const visited = {};
      let currentVertex;
      visited[start] = true;
      while(queue.length){
        currentVertex = queue.shift();
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach(neighbor => {
          if(!visited[neighbor]){
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
      return result;
    }



  // DFSIterative(vertex){
  //   let stack = [...this.adjacencyList[vertex]];
  //   const result = [];
  //   const visited = {};
  //   visited[vertex] = true;
  //   let curVertex;
  //   let flag = false;
  //   result.push(vertex);
  //   while(stack.length){
  //       // take off the first one
  //     curVertex = stack.shift();
  //     // sheck to see if the index is in the key
  //     if(!visited[curVertex]){
  //       visited[curVertex] = true;
  //       result.push(curVertex);
  //           // loop for all item of that list
  //       stack =  [...this.adjacencyList[curVertex]];
  //     }
  //   }
  //   // This part is really slow
  //   // this goes back looking for sections that we missed
  //   if(Object.keys(this.adjacencyList).length !==  result.length){
  //     let i = result.length - 2;
  //     while(i >= 0){
  //       console.log(this.adjacencyList[result[i]]);
  //       for(let remainding of this.adjacencyList[result[i]]){
  //         if(!visited[remainding]){
  //           visited[remainding] = true;
  //           result.push(remainding);
  //         }
  //       }
  //       i--;
  //     }
  //   }
  //   return result;
  // }



}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// console.log(g.adjacencyList);
// console.log(g.DFSRecursive("A"));
// console.log(g.DFSIterative("A"));
console.log(g.BFS("A"));
