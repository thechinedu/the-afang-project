import { MaxHeap } from "./MaxHeap";

describe("MaxHeap", () => {
  describe("insert", () => {
    it("adds the given item to its appropriate position in the max-heap", () => {
      const heap = new MaxHeap();

      heap.insert(42);
      expect(heap.values).toStrictEqual([42]);

      heap.insert(7);
      expect(heap.values).toStrictEqual([42, 7]);

      heap.insert(18);
      expect(heap.values).toStrictEqual([42, 7, 18]);

      heap.insert(29);
      expect(heap.values).toStrictEqual([42, 29, 18, 7]);

      heap.insert(11);
      expect(heap.values).toStrictEqual([42, 29, 18, 7, 11]);

      heap.insert(32);
      expect(heap.values).toStrictEqual([42, 29, 32, 7, 11, 18]);

      heap.insert(45);
      expect(heap.values).toStrictEqual([45, 29, 42, 7, 11, 18, 32]);

      heap.insert(14);
      expect(heap.values).toStrictEqual([45, 29, 42, 14, 11, 18, 32, 7]);

      heap.insert(7);
      expect(heap.values).toStrictEqual([45, 29, 42, 14, 11, 18, 32, 7, 7]);

      heap.insert(18);
      expect(heap.values).toStrictEqual([45, 29, 42, 14, 18, 18, 32, 7, 7, 11]);

      heap.insert(12);
      expect(heap.values).toStrictEqual([
        45, 29, 42, 14, 18, 18, 32, 7, 7, 11, 12,
      ]);
    });
  });
});
