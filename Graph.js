/*
  Definition:
    A Graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected Graph or a set of ordered pairs for a directed Graph. These pairs are known as edges, arcs, or lines for an undirected Graph and as arrows, directed edges, directed arcs, or directed lines for a directed Graph. The vertices may be part of the Graph structure, or may be external entities represented by integer indices or references.

  There are different ways of representing a graph, each of them with its own advantages and disadvantages. Here are the main 2:

    - Adjacency list: For every vertex a list of adjacent vertices is stored. This can be viewed as storing the list of edges. This data structure allows the storage of additional data on the vertices and edges.
    - Adjacency matrix: Data are stored in a two-dimensional matrix, in which the rows represent source vertices and columns represent destination vertices. The data on the edges and vertices must be stored externally.

  Complexity:

    Adjacency list       
    Storage   Add Vertex  Add Edge  Query
    O(|V|+|E|)   O(1)       O(1)    O(|V|)

    Adjacency matrix       
    storage   Add Vertex  Add Edge  Query
    O(|V|^2)   O(|V|^2)     O(1)     O(1)

*/

function Graph() {
  this.vertices = [];
  this.edges = [];
  this.numberOfEdges = 0;
}

Graph.prototype.addVertex = function(vertex) {
  this.vertices.push(vertex);
  this.edges[vertex] = [];
};

Graph.prototype.removeVertex = function(vertex) {
  var index = this.vertices.indexOf(vertex);

  if (~index) {
    this.vertices.splice(index, 1);
  }

  while (this.edges[vertex].length) {
    var adjacentVertex = this.edges[vertex].pop();
    
    this.removeEdge(adjacentVertex, vertex);
  }
};