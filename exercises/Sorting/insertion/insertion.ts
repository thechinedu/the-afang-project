export const sort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i += 1) {
    for (let j = i; j >= 0; j -= 1) {
      const currItem = arr[j];
      const prevItem = arr[j - 1];

      if (prevItem !== undefined && currItem < prevItem) {
        arr[j] = prevItem;
        arr[j - 1] = currItem;
      }
    }
  }

  return arr;
};
