/**
 * An automatically resizing vector
 * it uses an array internally but with minimal usage of array features.
 * Challenge from: https://github.com/jwasham/coding-interview-university#arrays
 */

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
    this.#checkValidIndex(index);

    let shiftValue = null;

    for (let i = index; i <= this.#size; i += 1) {
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
    this.#increaseCapacity();
  }

  push(item: any) {
    this.insert(this.#size, item);
  }

  prepend(item: any) {
    this.insert(0, item);
  }

  delete(index: number) {
    if (index < 0 || index >= this.#size) {
      throw new Error("Out of bounds");
    }

    for (let i = index; i < this.#size; i += 1) {
      if (i === index) this.#items[i] = null;

      if (this.#items[i + 1]) {
        this.#items[i] = this.#items[i + 1];
        this.#items[i + 1] = null;
      }
    }

    this.#size -= 1;
    this.#reduceCapacity();
  }

  remove(item: any) {}

  pop() {
    const removedItem = this.at(this.#size - 1);

    this.delete(this.#size - 1);

    return removedItem;
  }

  find(item: any) {
    for (let i = 0; i < this.#size; i += 1) {
      if (this.#items[i] === item) return i;
    }

    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  toString() {
    return JSON.stringify(this.#items);
  }

  #setCapacity(
    size: number,
    capacity: number,
    action: "increase" | "decrease" = "increase"
  ) {
    let res = capacity;
    let actions = {
      increase: () => {
        while (res < size) res *= 2;
      },

      decrease: () => {
        while (Math.round(0.25 * res) >= size) res /= 2;
      },
    };

    actions[action]();

    this.#capacity = res;
  }

  #increaseCapacity() {
    if (this.#size > this.#capacity) {
      this.#setCapacity(this.#size, this.#capacity);
    }
  }

  #reduceCapacity() {
    // If the size is less than or equal to one-fourth of the capacity
    if (
      this.#size <= Math.round(0.25 * this.#capacity) &&
      this.#capacity > 16
    ) {
      this.#setCapacity(this.#size, this.#capacity, "decrease");
    }
  }

  #checkValidIndex(index: number) {
    if (index < 0 || index > this.#size) {
      throw new Error("Out of bounds");
    }
  }
}
