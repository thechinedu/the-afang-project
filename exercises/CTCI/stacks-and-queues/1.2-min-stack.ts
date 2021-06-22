export class MinStack {
  readonly container: number[] = [];
  private minItems: number[] = [];

  push(item: number) {
    const min = this.minItems[this.minItems.length - 1] ?? Infinity;

    if (item <= min) this.minItems.push(item);

    this.container.push(item);
  }

  pop() {
    const lastItem = this.container.pop();

    if (lastItem === this.min()) this.minItems.pop();

    return lastItem;
  }

  peek() {
    return this.container[this.container.length - 1];
  }

  min() {
    return this.minItems[this.minItems.length - 1];
  }
}
