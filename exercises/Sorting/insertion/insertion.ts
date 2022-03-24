export const sort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i += 1) {
    for (let j = i - 1; j >= 0; j -= 1) {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};

// [9,8,3,4,1,2]
// [8, 3, 9], [4,1,2]
