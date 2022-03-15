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

  describe("max", () => {
    it("returns the node with the maximum value in the heap", () => {
      const heap = new MaxHeap();
      heap.insert(1);
      heap.insert(10);
      expect(heap.max).toBe(10);

      heap.insert(8);
      heap.insert(20);
      heap.insert(15);

      expect(heap.max).toBe(20);
    });
  });

  describe("size", () => {
    it("returns the size of the heap", () => {
      const heap = new MaxHeap();
      heap.insert(1);
      heap.insert(10);
      expect(heap.size).toBe(2);

      heap.insert(8);
      heap.insert(20);
      heap.insert(15);

      expect(heap.size).toBe(5);
    });
  });

  describe("extractMax", () => {
    it("removes and returns the node with the maximum value in the heap", () => {
      const heap = new MaxHeap();
      heap.insert(8);
      heap.insert(10);
      expect(heap.max).toBe(10);
      expect(heap.size).toBe(2);

      expect(heap.extractMax()).toBe(10);

      expect(heap.max).toBe(8);
      expect(heap.size).toBe(1);

      heap.insert(8);
      heap.insert(20);
      heap.insert(15);

      expect(heap.max).toBe(20);
      expect(heap.size).toBe(4);

      expect(heap.extractMax()).toBe(20);

      expect(heap.max).toBe(15);
      expect(heap.size).toBe(3);
    });
  });

  describe("remove", () => {
    it("removes the specified node at a given index (one-indexed)", () => {
      const heap = new MaxHeap();
      heap.insert(8);
      heap.insert(10);
      heap.insert(16);
      heap.insert(20);
      heap.insert(15);
      expect(heap.values).toStrictEqual([20, 16, 10, 8, 15]);

      heap.remove(3);
      expect(heap.values).toStrictEqual([20, 16, 15, 8]);

      heap.remove(2);
      expect(heap.values).toStrictEqual([20, 8, 15]);

      heap.remove(3);
      expect(heap.values).toStrictEqual([20, 8]);

      heap.remove(2);
      expect(heap.values).toStrictEqual([20]);

      heap.remove(1);
      expect(heap.values).toStrictEqual([]);
    });
  });

  describe("isEmpty", () => {
    it("returns a boolean indicating if the heap contains elements or not", () => {
      const heap = new MaxHeap();
      expect(heap.isEmpty()).toBe(true);

      heap.insert(1);
      heap.insert(10);
      heap.insert(8);
      heap.insert(20);
      heap.insert(15);

      expect(heap.isEmpty()).toBe(false);
    });
  });
});
