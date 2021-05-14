import { checkPermutation } from "./checkPermutation";

describe("checkPermutation", () => {
  it.each([
    [checkPermutation("link", "inkl"), true],
    [checkPermutation("tom", "omt"), true],
    [checkPermutation("checkPermutation", "Peeriattonmucchk"), true],
  ])("is true if a string is a permutation of another", (value, expected) => {
    expect(value).toBe(expected);
  });

  it.each([
    [checkPermutation("link", "king"), false],
    [checkPermutation("tom", "tmi"), false],
    [checkPermutation("checkPermutation", "Peariattonmucchk"), false],
  ])(
    "is false if a string is not a permutation of another",
    (value, expected) => {
      expect(value).toBe(expected);
    }
  );
});
