export class Vector {
  #items: any[] = [];
  #capacity: number = 16;

  constructor(...items: any[]) {
    if (items.length === 1 && items[0] > this.#capacity) {
      this.#capacity = items[0];
    }

    if (items.length > this.#capacity) this.#capacity = items.length * 2;

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
  }

  isEmpty() {
    return !this.size;
  }

  toString() {
    return JSON.stringify(this.#items);
  }
}
