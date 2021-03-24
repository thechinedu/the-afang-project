export class Vector {
  #items: any[];
  #capacity: number = 16;

  constructor(...items: any[]) {
    this.#items = items;
  }

  size() {}
}
