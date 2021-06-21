export class ThreeInOneStack {
  private container: any[] = [];
  private activeStack: "first" | "second" | "third" = "first";
  private indices = {
    first: { start: 0, max: 8 },
    second: { start: 8, max: 16 },
    third: { start: 16, max: 24 },
  };

  get first() {
    this.activeStack = "first";
    return this;
  }

  get second() {
    this.activeStack = "second";
    return this;
  }

  get third() {
    this.activeStack = "third";
    return this;
  }

  get size() {
    return this.indices[this.activeStack].start % 8;
  }

  push(item: any) {
    const idx = this.indices[this.activeStack].start;
    const max = this.indices[this.activeStack].max;

    if (idx >= max) throw new Error("Stack is full, please pop some items off");

    this.container[idx] = item;
    this.indices[this.activeStack].start += 1;
  }

  pop() {
    if (this.isEmpty()) throw new Error("Stack is empty. Nothing to pop");

    const item = this.container[this.indices[this.activeStack].start];

    this.indices[this.activeStack].start -= 1;

    return item;
  }

  peek() {
    return this.container[this.indices[this.activeStack].start];
  }

  isEmpty() {
    return this.indices[this.activeStack].start % 8 === 0;
  }
}
