class PriorityQueue{
  constructor(){
    this.values = [];
  }
  enqueue(val, priority){
    this.values.push({val , priority});
    this.sort();
  }
  dequeue(){
    return this.values.shift();
  }
  sort(){
    this.values.sort((a,b) => a.priority - b.priority);
  }
}

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
  Dijkstra(start, finish){
    const nodes = new PriorityQueue();
    // keeps track of the path distance
    const distances = {};
    // keeps track of the shortest path
    const previous = {};
    let smallest;
    // build up initial state
    for(let vertex in this.adjacencyList){
      previous[vertex] = null;
      if(vertex === start){
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      }
      else{
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
    }
    let nextNode,nextNeighbor, candidate;
      while(nodes.values.length){
      // taking off the first item
      smallest = nodes.dequeue().val;
      // console.log(smallest);
      if(smallest === finish){

      }
      if(smallest || distances[smallest] !== Infinity){
        // get index
        for(let neighbor in this.adjacencyList[smallest]){
          // find neighboring node
          nextNode = this.adjacencyList[smallest][neighbor];
          // console.log(nextNode);
          // Calculating new distance to neighboring node
          candidate = distances[smallest] + nextNode.weight;
          nextNeighbor = nextNode.node;
          if(candidate < distances[nextNeighbor]){
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    // console.log("distance", distances);
    // console.log("previous", previous);
    smallest = finish;
    let store = [];
    store.push(smallest);
    while(previous[smallest]){
      store.push(previous[smallest]);
      smallest = previous[smallest];
    }
 // instead of using the reverse method
    console.log(store.reverse());

    // while(previous[smallest]){}

  }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
g.Dijkstra("A", "D");

// console.log(g.adjacencyList);
