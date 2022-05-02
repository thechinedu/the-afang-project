/**
 * - Represent a graph as an adjacency list
 *   Use a map of arrays to represent the adjacency list
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

type AdjacencyListGraph<T> = Map<T, { vertex: T; weight: unknown }[]>;

type GraphConfigOptions = {
  directed: boolean;
  weighted: boolean;
  type: GraphType;
};

export class Graph<T, W = unknown> {
  config: GraphConfigOptions;
  graph!: unknown;

  constructor(config: GraphConfigOptions) {
    this.config = config;
  }

  addEdge(sourceVertex: T, neighborVertex: T, weight?: W) {
    if (this.config.type === GraphType.ADJACENCY_MATRIX) {
      throw new Error("GraphType must be adjacencyList or edgeList");
    }

    const graphTypes = {
      adjacencyList: () =>
        this.addAsAdjacencyList(sourceVertex, neighborVertex, weight),
      edgeList: () => null,
    };

    graphTypes[this.config.type]();
  }

  getEdgeWeight(sourceVertex: T, comparisonVertex: T): T {
    if (this.config.type !== GraphType.ADJACENCY_LIST) {
      throw new Error("GraphType must be adjacencyList");
    }

    if (!this.config.weighted) {
      throw new Error("Graph must be weighted");
    }

    const graph = this.graph as AdjacencyListGraph<T>;
    const vertexList = graph.get(sourceVertex) || [];

    for (const { vertex, weight } of vertexList) {
      if (vertex === comparisonVertex) return weight as T;
    }

    return null as unknown as T;
  }

  print(): string {
    const graphTypes = {
      adjacencyList: () => this.printAdjacencyList(),
      edgeList: () => "",
      adjacencyMatrix: () => "",
    };

    return graphTypes[this.config.type]();
  }

  private addAsAdjacencyList(
    sourceVertex: T,
    neighborVertex: T,
    weight?: W
  ): void {
    if (this.config.weighted && !weight) {
      throw new Error("A weight must be specified for a weighted graph");
    }

    if (!this.graph) this.graph = new Map();
    const graph = this.graph as AdjacencyListGraph<T>;

    if (graph.has(sourceVertex)) {
      this.addVertexNeighbor(sourceVertex, neighborVertex, weight);

      if (graph.has(neighborVertex) && !this.config.directed) {
        this.addVertexNeighbor(neighborVertex, sourceVertex, weight);
      } else {
        this.config.directed
          ? graph.set(neighborVertex, [])
          : graph.set(neighborVertex, [{ vertex: sourceVertex, weight }]);
      }

      return;
    }

    graph.set(sourceVertex, [{ vertex: neighborVertex, weight }]);

    this.config.directed
      ? graph.set(neighborVertex, [])
      : graph.set(neighborVertex, [{ vertex: sourceVertex, weight }]);

    return;
  }

  private printAdjacencyList(): string {
    let strRepresentation = "";
    const graph = this.graph as AdjacencyListGraph<T>;

    for (const [vertex, neighborNodes] of graph.entries()) {
      let node = `${vertex} -->`;
      let neighbors = "";

      for (const { vertex: neighborVertex, weight } of neighborNodes) {
        neighbors += `${
          weight ? `[${neighborVertex}, ${weight}]` : neighborVertex
        }, `;
      }
      node += ` [${neighbors.replace(/,\s$/, "")}]\n`;
      strRepresentation += node;
    }

    return strRepresentation;
  }

  private addVertexNeighbor(vertex: T, neighbor: T, weight?: W) {
    const graph = this.graph as AdjacencyListGraph<T>;
    const source = graph.get(vertex);
    source?.push({ vertex: neighbor, weight });
  }
}
