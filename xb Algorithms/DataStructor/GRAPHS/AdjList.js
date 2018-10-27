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
    if(this.adjacencyList[vertex1]) // doesn the vertex1 exist
       this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(elem=> elem !== vertex2 );
    if(this.adjacencyList[vertex2]) // doesn the vertex1 exist
       this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(elem=> elem !== vertex1 );
  }
  removeVertex(vertex){
    if(this.adjacencyList[vertex]){
    // calling the forEach O(n) calling filter once so O(n) combind O(n^2)
      this.adjacencyList[vertex].forEach( main_vertex => { // loop throw all the vertex it has
        // remove every one that relates to this vertex
        this.adjacencyList[main_vertex] = this.adjacencyList[main_vertex].filter(elem => elem !== vertex);
      });
      delete this.adjacencyList[vertex]

      // im calling filter twice here (2n) calling it in a while loop O(4n^2)
      // while(this.adjacencyList[vertex].length){
      //   // keep poppin off the list
      //     removeEdge(vertex, this.adjacencyList[vertex].pop());
      // }
      // // last thing to do is make this undefined
      //   delete this.adjacencyList[vertex]
    }

  }
}

let g = new Graph();
g.addVertex("Seattle");
g.addVertex("California");
g.addVertex("New York");
g.addVertex("Jamaica");


g.addEdge("Seattle", "California");
g.addEdge("Seattle", "New York");

// g.removeVertex("Seattle");
// g.removeEdge("Seattle", "New York")
console.log(g.adjacencyList);
