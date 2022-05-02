import { Graph, GraphType } from "./Graph";

describe("Graph", () => {
  describe("adjacency list representation", () => {
    it("directed and unweighted graph", () => {
      const graph = new Graph<number>({
        directed: true,
        weighted: false,
        type: GraphType.ADJACENCY_LIST,
      });

      graph.addEdge(1, 2);
      graph.addEdge(1, 4);
      graph.addEdge(2, 3);
      graph.addEdge(3, 4);
      graph.addEdge(4, 5);
      graph.addEdge(4, 6);

      const graphAsString = graph.print();

      expect(graphAsString).toContain("1 --> [2, 4]");
      expect(graphAsString).toContain("2 --> [3]");
      expect(graphAsString).toContain("3 --> [4]");
      expect(graphAsString).toContain("4 --> [5, 6]");
      expect(graphAsString).toContain("5 --> []");
      expect(graphAsString).toContain("6 --> []");
    });

    it("directed and weighted graph", () => {
      const graph = new Graph<number, number>({
        directed: true,
        weighted: true,
        type: GraphType.ADJACENCY_LIST,
      });

      graph.addEdge(1, 2, 4);
      graph.addEdge(1, 4, 6);
      graph.addEdge(2, 3, 5);
      graph.addEdge(3, 4, 10);
      graph.addEdge(4, 5, 9);
      graph.addEdge(4, 6, 12);

      const graphAsString = graph.print();

      expect(graphAsString).toContain("1 --> [[2, 4], [4, 6]]");
      expect(graphAsString).toContain("2 --> [[3, 5]]");
      expect(graphAsString).toContain("3 --> [[4, 10]]");
      expect(graphAsString).toContain("4 --> [[5, 9], [6, 12]]");
      expect(graphAsString).toContain("5 --> []");
      expect(graphAsString).toContain("6 --> []");

      expect(graph.getEdgeWeight(1, 2)).toBe(4);
      expect(graph.getEdgeWeight(1, 4)).toBe(6);
      expect(graph.getEdgeWeight(2, 3)).toBe(5);
      expect(graph.getEdgeWeight(3, 4)).toBe(10);
      expect(graph.getEdgeWeight(4, 5)).toBe(9);
      expect(graph.getEdgeWeight(4, 6)).toBe(12);

      expect(graph.getEdgeWeight(1, 5)).toBe(null);
    });

    it("undirected and unweighted graph", () => {
      const graph = new Graph<number>({
        directed: false,
        weighted: false,
        type: GraphType.ADJACENCY_LIST,
      });

      graph.addEdge(1, 2);
      graph.addEdge(1, 4);
      graph.addEdge(2, 3);
      graph.addEdge(3, 4);
      graph.addEdge(4, 5);
      graph.addEdge(4, 6);

      const graphAsString = graph.print();

      expect(graphAsString).toContain("1 --> [2, 4]");
      expect(graphAsString).toContain("2 --> [1, 3]");
      expect(graphAsString).toContain("3 --> [2, 4]");
      expect(graphAsString).toContain("4 --> [1, 3, 5, 6]");
      expect(graphAsString).toContain("5 --> [4]");
      expect(graphAsString).toContain("6 --> [4]");
    });

    it("undirected and weighted graph", () => {
      const graph = new Graph<number>({
        directed: false,
        weighted: true,
        type: GraphType.ADJACENCY_LIST,
      });

      graph.addEdge(1, 2, 4);
      graph.addEdge(1, 4, 6);
      graph.addEdge(2, 3, 5);
      graph.addEdge(3, 4, 10);
      graph.addEdge(4, 5, 9);
      graph.addEdge(4, 6, 12);

      const graphAsString = graph.print();

      expect(graphAsString).toContain("1 --> [[2, 4], [4, 6]]");
      expect(graphAsString).toContain("2 --> [[1, 4], [3, 5]]");
      expect(graphAsString).toContain("3 --> [[2, 5], [4, 10]]");
      expect(graphAsString).toContain(
        "4 --> [[1, 6], [3, 10], [5, 9], [6, 12]]"
      );
      expect(graphAsString).toContain("5 --> [[4, 9]]");
      expect(graphAsString).toContain("6 --> [[4, 12]]");

      expect(graph.getEdgeWeight(1, 2)).toBe(4);
      expect(graph.getEdgeWeight(1, 4)).toBe(6);
      expect(graph.getEdgeWeight(2, 3)).toBe(5);
      expect(graph.getEdgeWeight(3, 4)).toBe(10);
      expect(graph.getEdgeWeight(4, 5)).toBe(9);
      expect(graph.getEdgeWeight(4, 6)).toBe(12);

      expect(graph.getEdgeWeight(1, 5)).toBe(null);
    });
  });
});
