function Graph(v){
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for(var i=0; i<this.vertices; i++){
        this.adj[i] =[];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs= dfs;
    this.marked  = [];
    for(var i=0; i<this.vertices; i++){
        this.marked[i] = false;
    }
}

function addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph(){
    for(var i=0; i<this.vertices; i++){
        console.log(i + " -> ");
        for(var j=0; j<this.vertices; j++){
            if(this.adj[i][j]!=undefined)
            console.log(this.adj[i][j]+ '');
        }
        console.log();
    }
}

    function dfs(v){



        //console.log(this.marked);  // uncomment to look at the progression of all markers


        if(this.marked[v] !== true){ // check to see if the existing marker has already been seen
              this.marked.splice(v,1, true);
              // you could use  : this.marked[v] = true; insted
              // splice(add at index, number of elements to be remove from that index, elem inserted);
              if(this.adj[v] !== undefined){// look to see if they are undefined values
                console.log("Visited Vertex: " +v); // prints
                this.adj[v].forEach(function(elem, index){// loops throw all the edges of the
                  //console.log(index +"  : index"); // found out that index 0 had no element to it
                  if(index !== 0){
                    console.log(v + " has " + elem); // print all element
                  }
                });
                //You where trying to use recusion for your iteration so this is it
                if(v <this.vertices - 1){ // use the vertices size   or the this.adj.lenght
                  this.dfs(++v); //loops through
                }else {
                  this.dfs(0);// incase you didnt start from 0
                }
            }

    }



}

g= new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(4);
/*g.dfs(1);
g.dfs(2);
g.dfs(3);
g.dfs(4);
*/
