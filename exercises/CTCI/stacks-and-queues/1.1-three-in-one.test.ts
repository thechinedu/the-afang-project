import { ThreeInOneStack } from "./1.1-three-in-one";

describe("ThreeInOneStack", () => {
  describe("First stack", () => {
    it("allows pushing to / popping from and peeking at the top of the stack", () => {
      const threeInOne = new ThreeInOneStack();

      threeInOne.first.push(1);
      threeInOne.first.push(2);
      threeInOne.first.push(3);

      expect(threeInOne.first.size).toBe(3);

      const lastItem = threeInOne.first.pop();

      expect(lastItem).toBe(3);

      expect(threeInOne.first.peek()).toBe(2);
    });
  });

  describe("Second stack", () => {
    it("allows pushing to / popping from and peeking at the top of the stack", () => {
      const threeInOne = new ThreeInOneStack();

      threeInOne.second.push(1);
      threeInOne.second.push(2);
      threeInOne.second.push(3);

      expect(threeInOne.second.size).toBe(3);

      const lastItem = threeInOne.second.pop();

      expect(lastItem).toBe(3);

      expect(threeInOne.second.peek()).toBe(2);
    });
  });

  describe("Third stack", () => {
    it("allows pushing to / popping from and peeking at the top of the stack", () => {
      const threeInOne = new ThreeInOneStack();

      threeInOne.third.push(1);
      threeInOne.third.push(2);
      threeInOne.third.push(3);

      expect(threeInOne.third.size).toBe(3);

      const lastItem = threeInOne.third.pop();

      expect(lastItem).toBe(3);

      expect(threeInOne.third.peek()).toBe(2);
    });
  });
});
