import { urlify } from "./1.3-urlify";

describe("urlify", () => {
  it("replaces spaces between characters with the value: %20", () => {
    const result = urlify("Agent Smith");

    expect(result).toBe("Agent%20Smith");
  });

  it("truncates extra space at the beginning and end of a given string", () => {
    const result = urlify("   My name is Neo   ");

    expect(result).toBe("My%20name%20is%20Neo");
  });
});
