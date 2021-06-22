import { MinStack } from "./1.2-min-stack";

describe("MinStack", () => {
  let stack: MinStack;

  beforeEach(() => {
    stack = new MinStack();
  });

  it("supports pushing to the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.container).toEqual([1, 2, 3]);
  });

  it("supports popping from the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    stack.pop();

    expect(stack.container).toEqual([1]);
  });

  it("supports peeking at the top of the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);
  });

  it("supports retrieving the minimum element in the stack", () => {
    stack.push(3);
    stack.push(2);
    stack.push(1);
    stack.push(0);
    stack.push(-1);
    stack.push(-2);

    expect(stack.min()).toBe(-2);

    stack.pop();

    expect(stack.min()).toBe(-1);

    stack.pop();

    expect(stack.min()).toBe(0);
  });
});
