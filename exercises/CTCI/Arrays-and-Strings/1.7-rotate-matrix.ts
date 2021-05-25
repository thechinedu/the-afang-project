type Matrix = number[][];

/**
 * Runtime complexity:
 * O(n^2) time
 * O(n^2) space
 */

export const rotateMatrix = (matrix: Matrix): Matrix => {
  const res: Matrix = [];

  for (let i = 0; i < matrix.length; i += 1) {
    const row = [];

    for (let j = matrix.length - 1; j >= 0; j -= 1) {
      row.push(matrix[j][i]);
    }

    res.push(row);
  }

  return res;
};
