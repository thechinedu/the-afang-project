export class Vector {
  #items: any[] = [];
  #capacity: number = 16;

  #setCapacity = (initializedCapacity: number, actualCapacity: number) => {
    let res = actualCapacity;

    while (res < initializedCapacity) res *= 2;

    this.#capacity = res;
  };

  constructor(...items: any[]) {
    if (items.length === 1 && items[0] > this.#capacity) {
      this.#setCapacity(items[0], this.#capacity);
    }

    if (items.length > this.#capacity) {
      this.#setCapacity(items.length, this.#capacity);
    }

    if (items.length > 1) this.#items = items;
  }

  get size() {
    return this.#items.length;
  }

  get items() {
    return this.#items;
  }

  get capacity() {
    return this.#capacity;
  }

  at(index: number) {
    for (const [idx, item] of Object.entries(this.#items)) {
      if (index === +idx) return item;
    }

    throw new Error("Out of bounds");
  }

  push(item: any) {
    this.#items[this.#items.length] = item;
  }

  isEmpty() {
    return !this.size;
  }

  toString() {
    return JSON.stringify(this.#items);
  }
}
