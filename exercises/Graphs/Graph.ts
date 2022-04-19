/**
 * - Represent a graph as an adjacency list
 *   Use an array of arrays to represent the adjacency list
 *   Use an array of linked lists to represent the adjacency list
 *
 * - Represent a graph as an adjacency matrix
 * - Represent a graph as an edge list
 *
 * Implement DFS with adjacency list (recursive)
 * Implement DFS with adjacency list (iterative)
 *
 * Implement DFS with adjacency matrix (recursive)
 * Implement DFS with adjacency matrix (iterative)
 *
 * Implement BFS with adjacency list
 * Implement BFS with adjacency matrix
 *
 * Implement Dijkstra's algorithm (single-source shortest path)
 *
 * Implement minimum spanning tree
 *   check for cycle
 *   topological sort
 *   count connected components in a graph
 *   list strongly connected components
 *   check for bipartite graph
 *
 * CTCI Graph problems
 */

type GraphRepresentationOptions = {
  type: "adjacencyList" | "adjacencyMatrix" | "edgeList";
  structure?: "array" | "linkedlist"; // only valid for adjacency list representation
};

type GraphConfigOptions = {
  directed: boolean;
  weighted: boolean;
  representation: GraphRepresentationOptions;
};

export class Graph {
  config: GraphConfigOptions;

  constructor(config: GraphConfigOptions) {
    this.config = config;
    // this.graph = new Map()
  }

  // vertices can contain any value, I'll be sticking with numbers
  addEdge(vertex: number, vertex2: number, weight = 0) {
    const operations = {
      adjacencyList: () => {},
    };
  }

  private addAsAdjacencyListArr() {}

  private addAsAdjacencyLinkedList() {}
}
