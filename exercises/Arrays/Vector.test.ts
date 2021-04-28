import { Vector } from "./Vector";

describe("Vector", () => {
  describe("when only one argument is provided", () => {
    it("sets the capacity to a number greater than the specified argument if it is greater than 16", () => {
      expect(new Vector(18).capacity).toBe(32);
      expect(new Vector(33).capacity).toBe(64);
      expect(new Vector(65).capacity).toBe(128);
    });

    it("sets the capacity to 16 if the provided value is less than 16", () => {
      expect(new Vector().capacity).toBe(16);
      expect(new Vector(15).capacity).toBe(16);
    });
  });

  describe("when multiple arguments are provided", () => {
    it("adds the provided items to the vector", () => {
      expect(new Vector(1, 2).toString()).toBe("[1,2]");
    });
  });

  describe("#size", () => {
    it.each([
      [new Vector(), 0],
      [new Vector(1, 2), 2],
      [new Vector("Ade", "Ifeanyi", "Haruna"), 3],
    ])("%o returns %i items when size is queried", (vector, expected) => {
      expect(vector.size).toBe(expected);
    });
  });

  describe("#capacity", () => {
    it("is 16 by default", () => {
      expect(new Vector().capacity).toBe(16);
    });

    it("is updated by a power of two if the arguments at initialization are greater than 16", () => {
      expect(
        new Vector(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17)
          .capacity
      ).toBe(32);
    });
  });

  describe("#isEmpty", () => {
    it("returns true if the vector contains no items", () => {
      expect(new Vector().isEmpty()).toBe(true);
    });

    it("returns false if the vector contains items", () => {
      expect(new Vector(1, 2, 3).isEmpty()).toBe(false);
    });
  });

  describe("#at", () => {
    it("returns the item at a specific index", () => {
      const vec = new Vector(1, 2, 3, 4, 5);

      expect(vec.at(0)).toBe(1);
      expect(vec.at(1)).toBe(2);
      expect(vec.at(2)).toBe(3);
      expect(vec.at(3)).toBe(4);
      expect(vec.at(4)).toBe(5);
    });

    it("throws an out of bounds error if the specified index is greater than the size of the vector", () => {
      const vec = new Vector(1, 2, 3, 4, 5);

      expect(() => vec.at(5)).toThrow("Out of bounds");
    });
  });

  describe("#insert", () => {
    it("inserts an item at the given index and shifts other items to the right", () => {
      const vec = new Vector(1, 2, 3, 4, 5);

      expect(vec.at(2)).toBe(3);

      vec.insert(2, 2.5);

      expect(vec.size).toBe(6);
      expect(vec.at(2)).toBe(2.5);
      expect(vec.toString()).toBe("[1,2,2.5,3,4,5]");
    });

    it("inserts an item at the beginning of the vector", () => {
      const vec = new Vector(1, 2, 3, 4, 5);

      expect(vec.at(0)).toBe(1);

      vec.insert(0, 0);

      expect(vec.size).toBe(6);
      expect(vec.at(0)).toBe(0);
      expect(vec.toString()).toBe("[0,1,2,3,4,5]");
    });

    it("inserts an item at the end of the vector", () => {
      const vec = new Vector(1, 2, 3, 4, 5);

      expect(() => vec.at(5)).toThrow("Out of bounds");

      vec.insert(5, 6);

      expect(vec.size).toBe(6);
      expect(vec.at(5)).toBe(6);
      expect(vec.toString()).toBe("[1,2,3,4,5,6]");
    });
  });

  describe("#push", () => {
    it("adds a new item to the end of the vector", () => {
      const vec = new Vector(1, 2, 3, 4, 5);

      expect(vec.size).toBe(5);

      vec.push(6);

      expect(vec.size).toBe(6);
      expect(vec.at(5)).toBe(6);
    });

    it("increases the capacity of the vector when the vector has reached max capacity", () => {
      const vec = new Vector(
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16
      );

      vec.push(17);

      expect(vec.size).toBe(17);
      expect(vec.at(16)).toBe(17);
      expect(vec.capacity).toBe(32);
    });
  });

  describe("#prepend", () => {
    it("adds a new item to the beginning of the vector", () => {
      const vec = new Vector(1, 2, 3, 4, 5);

      expect(vec.size).toBe(5);

      vec.prepend(0);

      expect(vec.size).toBe(6);
      expect(vec.at(0)).toBe(0);
    });

    it("increases the capacity of the vector when the vector has reached max capacity", () => {
      const vec = new Vector(
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16
      );

      vec.prepend(0);

      expect(vec.size).toBe(17);
      expect(vec.at(0)).toBe(0);
      expect(vec.capacity).toBe(32);
    });
  });
});
