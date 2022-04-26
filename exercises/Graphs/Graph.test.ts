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

      expect(graph.toString()).toBe(`
          1 --> [2, 4]
          2 --> [3]
          3 --> [4]
          4 --> [5, 6]
          5 --> []
          6 --> []
        `);
    });

    // xit("can be represented as an array of linked lists", () => {});
  });
});
