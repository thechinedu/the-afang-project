export class Vector {
  #items: any[] = [];
  #capacity: number = 16;
  #size: number;

  constructor(...items: any[]) {
    if (items.length === 1 && items[0] > this.#capacity) {
      this.#setCapacity(items[0], this.#capacity);
    }

    if (items.length > this.#capacity) {
      this.#setCapacity(items.length, this.#capacity);
    }

    if (items.length > 1) this.#items = items;

    this.#size = this.#items.length;
  }

  get size() {
    return this.#size;
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

  insert(index: number, item: any) {
    if (index > this.#items.length) {
      throw new Error("Out of bounds");
    }

    let shiftValue = null;

    for (let i = index; i <= this.#items.length; i += 1) {
      if (i === index) {
        shiftValue = this.#items[i];
        this.#items[i] = item;
        continue;
      }

      if (shiftValue) {
        let temp = this.#items[i];
        this.#items[i] = shiftValue;

        shiftValue = temp;
      }
    }

    this.#size += 1;
  }

  push(item: any) {
    this.insert(this.#items.length, item);
    this.#increaseCapacity();
  }

  prepend(item: any) {
    this.insert(0, item);
    this.#increaseCapacity();
  }

  isEmpty() {
    return this.size === 0;
  }

  toString() {
    return JSON.stringify(this.#items);
  }

  #setCapacity(initializedCapacity: number, actualCapacity: number) {
    let res = actualCapacity;

    while (res < initializedCapacity) res *= 2;

    this.#capacity = res;
  }

  #increaseCapacity() {
    if (this.size > this.#capacity) {
      this.#setCapacity(this.size, this.#capacity);
    }
  }
}
