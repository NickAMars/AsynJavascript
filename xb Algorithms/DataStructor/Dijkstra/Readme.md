Dijkstra


Finding the shortest path between two vertices on a graph.
What's the fastest way to get from point A to point B?

Edsger Dijkstra

Why is It useful?
GPS - finding fastest route
Network Routing -finds open shortest path for data
Biology - used to model the spread of viruses among humans
Airline tickets - finding cheapest route to your destination


The Approach
1. Every time we look to visit a new node, we pick the node with the smallest known
  distance to visit first.
2. Once we've moved to the node we're going to visit, we look at each of its neighbors
3. for each neighboring node, we calculate the distance by summing the total edges
    that lead to the node we're checking from the starting node.
4. If the new total distance to a node is less than the previous total, we store the
    new shorter distance for that node.

initialize the shortest distance from A to infinity.
at A we start at 0
