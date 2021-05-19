/**
 * Runtime complexity:
 * O(n) time
 * O(1) space
 */

export const oneAway = (word: string, comparedWord: string) => {
  const [longWord, shortWord] =
    word.length > comparedWord.length
      ? [word, comparedWord]
      : [comparedWord, word];

  const lengthDiff = longWord.length - shortWord.length;

  if (lengthDiff > 1) return false;

  let longWordCount = 0;
  let shortWordCount = 0;
  let edits = 0;

  while (longWordCount < longWord.length) {
    if (edits > 1) return false;

    const longWordChar = longWord[longWordCount];
    const shortWordChar = shortWord[shortWordCount];

    if (longWordChar !== shortWordChar) {
      if (lengthDiff === 0) {
        edits += 1;
        longWordCount += 1;
        shortWordCount += 1;
      }

      if (lengthDiff === 1) {
        edits += 1;
        longWordCount += 1;
      }
    } else {
      longWordCount += 1;
      shortWordCount += 1;
    }
  }

  return edits <= 1;
};
