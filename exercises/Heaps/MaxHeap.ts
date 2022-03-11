export class MaxHeap {
  private heap: number[] = [];

  insert(item: number): void {
    this.heap.push(item);
    this.siftUp(this.heap.length);
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
}
