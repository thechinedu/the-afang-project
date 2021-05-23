/**
 * Runtime complexity:
 * O(n) time
 * O(n) space
 */

export const compress = (word: string) => {
  let freqCount = 1;
  let compressedStr = "";

  for (let i = 0; i < word.length; i += 1) {
    let char = word[i];
    let nextChar = word[i + 1];

    if (char === nextChar) {
      freqCount += 1;
    } else {
      compressedStr += `${char}${freqCount}`;
      freqCount = 1;
    }
  }

  return compressedStr.length < word.length ? compressedStr : word;
};
