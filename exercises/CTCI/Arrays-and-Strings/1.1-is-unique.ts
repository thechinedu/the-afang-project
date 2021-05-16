/**
 * Runtime complexity:
 * O(n) Time
 * O(n) Space
 */

export const hasAllUniqueCharsV1 = (word: string) => {
  const map = Object.create(null);

  for (const char of word.toLowerCase()) {
    if (map[char]) return false;
    map[char] = char;
  }

  return true;
};

/**
 * Runtime complexity:
 * O(n^2) Time
 * O(1) Space
 */

export const hasAllUniqueCharsV2 = (word: string) => {
  for (let i = 0; i < word.length; i += 1) {
    for (let j = i + 1; j < word.length; j += 1) {
      if (word[i].toLowerCase() === word[j].toLowerCase()) return false;
    }
  }

  return true;
};
