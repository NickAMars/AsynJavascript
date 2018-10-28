GRAPHS
Use Social Network, Traveling sales man, Recommendations Network

Essential Graph Terms

vertex - a node
Edge - connection between nodes
Weighted Unweighted - values assigned to distances between vertices
Directed/Undirected - directions assigned to distanced between vertices.


Directed Graph
Undirected Graph



Differences & Big O
| V | - number of  vertices
| E | - number of edges

OPERATION          ADJACENCY LIST     ADJACENCY MATRIX
Add Vertex           O(1)               O( | V^2 |)
Add Edge             O(1)               O(1)
Remove Vertex        O(| V |+ | E |)    O(| V^2 |)
Remove Edge          O(| E |)           O(1)
Query                O(| V |+ | E |)    O(1)
Storage              O(| V | + | E |)   O( | V^2 | )


ADJACENCY LIST
Can take up less space
Faster to iterate over all edges
Can be slower to lookup specific edge.

ADJACENCY Matrix
Takes up more space
Slower to iterate over all edges
Faster to lookup specific edge
