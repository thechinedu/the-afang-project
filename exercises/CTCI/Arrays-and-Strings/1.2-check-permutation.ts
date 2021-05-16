import { charFreq } from "./utils/character-frequency";

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
