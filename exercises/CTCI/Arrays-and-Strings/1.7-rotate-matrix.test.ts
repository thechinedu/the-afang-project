import { rotateMatrix } from "./1.7-rotate-matrix";

describe("rotateMatrix", () => {
  it.each([
    [
      rotateMatrix([
        [1, 2, 3, 4],
        [0, 1, 2, 3],
        [0, 0, 1, 2],
        [1, 0, 0, 1],
      ]),

      [
        [1, 0, 0, 1],
        [0, 0, 1, 2],
        [0, 1, 2, 3],
        [1, 2, 3, 4],
      ],
    ],

    [
      rotateMatrix([
        [1, 3, 4, 5, 2],
        [2, 1, 9, 8, 7],
        [3, 7, 2, 6, 9],
        [10, 12, 19, 15, 20],
        [0, 3, 5, 7, 11],
      ]),

      [
        [0, 10, 3, 2, 1],
        [3, 12, 7, 1, 3],
        [5, 19, 2, 9, 4],
        [7, 15, 6, 8, 5],
        [11, 20, 9, 7, 2],
      ],
    ],
  ])("rotates an N*N matrix by 90 degrees ", (value, expected) => {
    expect(value).toStrictEqual(expected);
  });
});
