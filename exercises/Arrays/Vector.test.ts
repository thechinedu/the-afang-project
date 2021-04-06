import { Vector } from "./Vector";

describe("Vector", () => {
  describe("when only one argument is provided", () => {
    it("sets the capacity to the specified argument if it is greater than 16", () => {
      expect(new Vector(18).capacity).toBe(18);
    });

    it("ignores the provided capacity if it is less than 16", () => {
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

    it("is updated by a multiple of two if the arguments at initialization are greater than 16", () => {
      expect(
        new Vector(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17)
          .capacity
      ).toBe(34);
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
  });
});
