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
  it("should return number as string on accepted argument", () => {
    expect(typeof fizzbuzz(1)).toBe("string");
  });
  it("should return Fizz on multiples of 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });
});
