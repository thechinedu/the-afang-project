type CompareFunc = (a: number, b: number) => number;

const defaultCompareFunc: CompareFunc = (a, b) => a - b;

export const sort = (
  arr: number[],
  compareFn: CompareFunc = defaultCompareFunc
) => {
  for (let i = 1; i < arr.length; i += 1) {
    for (let j = i; j >= 0; j -= 1) {
      const currItem = arr[j];
      const prevItem = arr[j - 1];
      const comparisonResult = compareFn(currItem, prevItem);

      if (prevItem !== undefined && comparisonResult < 0) {
        arr[j] = prevItem;
        arr[j - 1] = currItem;
      }
    }
  }

  return arr;
};
