import { palindromePermutation } from "./1.4-palindrome-permutation";

describe("palindromePermutation", () => {
  it.each([
    [palindromePermutation("Tact coa"), true],
    [palindromePermutation("Aad"), true],
    [palindromePermutation("Rare cac"), true],
  ])(
    "is true if the value is a permutation of a palindrome",
    (value, expected) => {
      expect(value).toBe(expected);
    }
  );

  it.each([
    [palindromePermutation("mountain of gold"), false],
    [palindromePermutation("Abc"), false],
    [palindromePermutation("fisher man"), false],
  ])(
    "is false if the value is not a permutation of a palindrome",
    (value, expected) => {
      expect(value).toBe(expected);
    }
  );
});
