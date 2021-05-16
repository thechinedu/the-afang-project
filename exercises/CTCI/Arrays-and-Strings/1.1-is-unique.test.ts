import { hasAllUniqueCharsV1, hasAllUniqueCharsV2 } from "./1.1-is-unique";

describe("hasAllUniqueCharsV1", () => {
  it.each([
    [hasAllUniqueCharsV1("Sam"), true],
    [hasAllUniqueCharsV2("Sam"), true],

    [hasAllUniqueCharsV1("Giant"), true],
    [hasAllUniqueCharsV2("Giant"), true],

    [hasAllUniqueCharsV1("Wonderful"), true],
    [hasAllUniqueCharsV2("Wonderful"), true],
  ])(
    "returns true if the characters of a string are all unqiue",
    (value, expected) => {
      expect(value).toBe(expected);
    }
  );

  it.each([
    [hasAllUniqueCharsV1("Homosapien"), false],
    [hasAllUniqueCharsV2("Homosapien"), false],

    [hasAllUniqueCharsV1("Loctician"), false],
    [hasAllUniqueCharsV2("Loctician"), false],

    [hasAllUniqueCharsV1("Service"), false],
    [hasAllUniqueCharsV2("Service"), false],
  ])(
    "returns false if the characters of a string are not all unqiue",
    (value, expected) => {
      expect(value).toBe(expected);
    }
  );

  it("is case-insensitive", () => {
    expect(hasAllUniqueCharsV1("Ada")).toBe(false);
    expect(hasAllUniqueCharsV2("Ada")).toBe(false);

    expect(hasAllUniqueCharsV1("Barbell")).toBe(false);
    expect(hasAllUniqueCharsV2("Barbell")).toBe(false);
  });
});
