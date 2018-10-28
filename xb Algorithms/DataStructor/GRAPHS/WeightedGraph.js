class WeightedGraph {
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex])
      this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight){
    // console.log(this.adjacencyList[vertex1]);
    if(this.adjacencyList[vertex1])
      if(this.adjacencyList[vertex2]){
        // Check to see if one node already exist inside of the graph
        if(!this.adjacencyList[vertex1].some(elem => elem.node === vertex2)){
          this.adjacencyList[vertex1].push({node: vertex2 , weight});
          this.adjacencyList[vertex2].push({node: vertex1 , weight});
          return "Connected";
        }
        return "Already have";
      }
      return "Can't find";
  }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", "B", 100);
g.addEdge("A", "C", 120);
g.addEdge("A", "C", 120);
// g.addEdge("B", "C");

console.log(g.adjacencyList);
