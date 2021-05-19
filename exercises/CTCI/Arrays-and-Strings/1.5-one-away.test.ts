import { oneAway } from "./1.5-one-away";

describe("oneAway", () => {
  it.each([
    [oneAway("pale", "ple"), true],
    [oneAway("pales", "pale"), true],
    [oneAway("pale", "bale"), true],
    [oneAway("extreme", "extreme"), true],
    [oneAway("great", "greet"), true],
    [oneAway("apple", "aple"), true],
  ])(
    "is true if it takes one or zero edits to make two words the same",
    (value, expected) => {
      expect(value).toBe(expected);
    }
  );

  it.each([
    [oneAway("mention", "mentioned"), false],
    [oneAway("pale", "bake"), false],
    [oneAway("awesome", "great"), false],
    [oneAway("extreme", "salient"), false],
    [oneAway("airplane", "aeroplane"), false],
    [oneAway("apple", "plea"), false],
  ])("is false otherwise", (value, expected) => {
    expect(value).toBe(expected);
  });
});
