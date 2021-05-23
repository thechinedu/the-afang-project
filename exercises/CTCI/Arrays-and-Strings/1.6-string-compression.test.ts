import { compress } from "./1.6-string-compression";

describe("compress", () => {
  it.each([
    [compress("aabcccccaaa"), "a2b1c5a3"],
    [compress("iiiiiiiinnnuu"), "i8n3u2"],
    [compress("aaa"), "a3"],
    [compress("zzzaaazzaaa"), "z3a3z2a3"],
    [compress("AAAaabbbCC"), "A3a2b3C2"],
  ])(
    '"compresses" a string using the count of characters',
    (value, expected) => {
      expect(value).toBe(expected);
    }
  );

  it.each([
    [compress("a"), "a"],
    [compress("aa"), "aa"],
    [compress("zazazaza"), "zazazaza"],
    [compress("ABCDEFGH"), "ABCDEFGH"],
    [compress("aaabcdef"), "aaabcdef"],
  ])(
    'returns the original string if the length of the "compressed" string is not smaller',
    (value, expected) => {
      expect(value).toBe(expected);
    }
  );
});
