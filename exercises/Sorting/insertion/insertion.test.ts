import { sort } from "./insertion";

describe("Insertion Sort", () => {
  it.each([
    [
      [3, 10, 9, 8, 9, 20, 15, 11, 14],
      [3, 8, 9, 9, 10, 11, 14, 15, 20],
    ],

    [
      [4, 3, 1, 4, 5, 9, 10, 11],
      [1, 3, 4, 4, 5, 9, 10, 11],
    ],

    [
      [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ],
  ])("sorts a given array in ascending order", (given, expected) => {
    sort(given);

    expect(given).toStrictEqual(expected);
  });

  it.each([
    [
      [3, 10, 9, 8, 9, 20, 15, 11, 14],
      [20, 15, 14, 11, 10, 9, 9, 8, 3],
    ],

    [
      [4, 3, 1, 4, 5, 9, 10, 11],
      [11, 10, 9, 5, 4, 4, 3, 1],
    ],

    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    ],
  ])(
    "sorts a given array in descending order using a compare function",
    (given, expected) => {
      sort(given, (a, b) => b - a);

      expect(given).toStrictEqual(expected);
    }
  );

  it("sorts an array in-place", () => {
    const arr = [3, 10, 9, 8, 9, 20, 15, 11, 14];
    const sorted = sort(arr);

    expect(arr).toStrictEqual([3, 8, 9, 9, 10, 11, 14, 15, 20]);
    expect(arr).toBe(sorted); // it does not return a new array but it instead returns the same array
  });
});
