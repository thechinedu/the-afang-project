import { Vector } from "./Vector";

describe("Vector", () => {
  describe("#size", () => {
    it.each([
      [new Vector(), 0],
      [new Vector(1, 2), 2],
      [new Vector("Ade", "Ifeanyi", "Haruna"), 3],
    ])("%o returns %i items when size is queried", (vector, expected) => {
      expect(vector.size).toBe(expected);
    });
  });
});
