export class MaxHeap {
  private heap: number[] = [];

  insert(item: number): void {
    this.heap.push(item);
    this.siftUp(this.heap.length);
  }

  extractMax(): number {
    const max = this.max;
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = max;

    this.heap.pop();
    this.siftDown(1);

    return max;
  }

  remove(): void {}

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  get max(): number {
    return this.heap[0];
  }

  get size(): number {
    return this.heap.length;
  }

  get values() {
    return this.heap;
  }

  private siftUp(nodePos: number): void {
    let parentNodePos = Math.floor(nodePos / 2);
    let node = this.heap[nodePos - 1];
    let parentNode = this.heap[parentNodePos - 1];

    while (node > parentNode) {
      this.heap[nodePos - 1] = parentNode;
      this.heap[parentNodePos - 1] = node;

      nodePos = parentNodePos;
      parentNodePos = Math.floor(parentNodePos / 2);

      parentNode = this.heap[parentNodePos - 1];
      node = this.heap[nodePos - 1];
    }
  }

  private siftDown(nodePos: number): void {
    let node = this.heap[nodePos - 1];
    let leftIdx = nodePos * 2;
    let rightIdx = nodePos * 2 + 1;
    let leftChild = this.heap[leftIdx - 1];
    let rightChild = this.heap[rightIdx - 1];

    let [successorIdx, successorNode] =
      leftChild > rightChild ? [leftIdx, leftChild] : [rightIdx, rightChild];

    while (node < successorNode) {
      this.heap[nodePos - 1] = successorNode;
      this.heap[successorIdx - 1] = node;

      nodePos = successorIdx;

      leftIdx = nodePos * 2;
      rightIdx = nodePos * 2 + 1;
      leftChild = this.heap[leftIdx - 1];
      rightChild = this.heap[rightIdx - 1];

      [successorIdx, successorNode] =
        leftChild > rightChild ? [leftIdx, leftChild] : [rightIdx, rightChild];
    }
  }
}
