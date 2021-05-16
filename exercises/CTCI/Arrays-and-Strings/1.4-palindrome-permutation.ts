import { charFreq } from "./utils/character-frequency";

/**
 * Runtime complexity:
 * O(n) time
 * O(n) space
 */

export const palindromePermutation = (words: string) =>
  Object.values(charFreq(words.toLowerCase())).filter(
    (freqCount) => freqCount % 2 !== 0
  ).length <= 1;
