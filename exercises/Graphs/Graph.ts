/**
 * - Represent a graph as an adjacency list
 *   Use a map of arrays to represent the adjacency list
 *   Use a map of linked lists to represent the adjacency list
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
 * convert between representations ->
 *   adjacency list to adjacency matrix and vice versa
 *   adjacency matrix to edge list and vice versa
 *   adjacency list to edge list and vice versa
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

export enum GraphType {
  ADJACENCY_LIST = "adjacencyList",
  ADJACENCY_MATRIX = "adjacencyMatrix",
  EDGE_LIST = "edgeList",
}

type GraphConfigOptions = {
  directed: boolean;
  weighted: boolean;
  type: GraphType;
};

const foo = () => {
  return 123;
};

export class Graph<T> {
  config: GraphConfigOptions;
  graph!: unknown;

  constructor(config: GraphConfigOptions) {
    this.config = config;
    // this.graph = this.generateGraphStructure(config.type);
  }

  addEdge(sourceVertex: T, neighborVertex: T, weight?: unknown) {
    if (this.config.type === GraphType.ADJACENCY_MATRIX) {
      throw new Error("GraphType must be adjacencyList or edgeList");
    }

    if (this.config.type === GraphType.ADJACENCY_LIST) {
      this.addAsAdjacencyList(sourceVertex, neighborVertex, weight);
    }
  }

  private addAsAdjacencyList(
    sourceVertex: T,
    neighborVertex: T,
    weight?: unknown
  ): void {
    if (!this.graph) this.graph = new Map();
    const graph = this.graph as Map<T, T[]>;

    if (graph.has(sourceVertex)) {
      const source = graph.get(sourceVertex);
      source?.push(neighborVertex);
      return;
    }

    graph.set(sourceVertex, [neighborVertex]);

    return;
  }
}
