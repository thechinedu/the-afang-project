/**
 * Runtime complexity:
 * O(n) Time
 * O(n) Space
 */

export const checkPermutation = (value: string, comparedValue: string) => {
  if (value.length !== comparedValue.length) return false;
  const valueMap = charFreq(value);
  const comparedValueMap = charFreq(comparedValue);

  for (const char in valueMap) {
    if (valueMap[char] !== comparedValueMap[char]) return false;
  }

  return true;
};

const charFreq = (str: string) => {
  const res = Object.create(null);

  for (const char of str) {
    if (res[char]) res[char] += 1;
    else res[char] = 1;
  }

  return res;
};
