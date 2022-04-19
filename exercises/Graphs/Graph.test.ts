import { Graph } from "./Graph";

describe("Graph", () => {
  describe("adjacency list representation", () => {
    describe("array of arrays structure", () => {
      it("directed and unweighted graph", () => {
        const graph = new Graph({
          directed: true,
          weighted: false,
          representation: {
            type: "adjacencyList",
            structure: "array",
          },
        });

        graph.addEdge(1, 2);
        graph.addEdge(1, 4);
        graph.addEdge(2, 3);
        graph.addEdge(3, 4);

        expect(graph.toString()).toBe(`
          1 --> [2, 4]
          2 --> [3]
          3 --> [4]
        `);
      });
    });

    xit("can be represented as an array of linked lists", () => {});
  });
});
