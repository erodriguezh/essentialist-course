import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzbuzz).toBe("function");
  });
  it("should not take numbers under 1", () => {
    expect(() => fizzbuzz(0)).toThrow("You must provide a number between 1 and 100");
  });
  it("should not take numbers over 100", () => {
    expect(() => fizzbuzz(101)).toThrow("You must provide a number between 1 and 100");
  });
});
