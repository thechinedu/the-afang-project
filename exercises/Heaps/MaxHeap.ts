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

  remove(nodePos: number): void {
    this.changePriority(nodePos, Infinity);
    this.siftUp(nodePos);
    this.extractMax();
  }

  heapify(elements: number[]): MaxHeap {
    const ret = new MaxHeap();

    for (const element of elements) {
      ret.insert(element);
    }

    return ret;
  }

  sort(elements: number[], dir = "asc"): number[] {
    const heap = this.heapify(elements);
    elements.length = 0;

    while (!heap.isEmpty()) {
      const max = heap.extractMax();
      elements.push(max);
    }

    return dir === "asc" ? elements.reverse() : elements;
  }

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
    let node,
      successorIdx,
      successorNode,
      leftIdx,
      rightIdx,
      leftChild,
      rightChild;
    do {
      node = this.heap[nodePos - 1];
      leftIdx = nodePos * 2;
      rightIdx = leftIdx + 1;

      leftChild = this.heap[leftIdx - 1];
      rightChild = this.heap[rightIdx - 1];

      if (leftChild && rightChild) {
        [successorIdx, successorNode] =
          leftChild > rightChild
            ? [leftIdx, leftChild]
            : [rightIdx, rightChild];
      } else if (leftChild) {
        [successorIdx, successorNode] = [leftIdx, leftChild];
      } else {
        [successorIdx, successorNode] = [null, null];
      }

      if (successorIdx && successorNode && successorNode > node) {
        this.heap[nodePos - 1] = successorNode;
        this.heap[successorIdx - 1] = node;

        nodePos = successorIdx;
      } else {
        break;
      }
    } while (node < successorNode);
  }

  private changePriority(nodePos: number, newPriority: number): void {
    this.heap[nodePos - 1] = newPriority;
  }
}
