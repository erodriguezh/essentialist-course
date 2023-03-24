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
    const numberList = [1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19, 22, 23, 26, 28, 29, 31, 32, 34, 37, 38, 41, 43, 44, 46, 47, 49, 52, 53, 56, 58, 59, 61, 62, 64, 67, 68, 71, 73, 74, 76, 77, 79, 82, 83, 86, 88, 89, 91, 92, 94, 97, 98];
    numberList.forEach(number => {
      expect(typeof fizzbuzz(number)).toBe("string");
    });
  });
  it("should return Fizz on multiples of 3", () => {
    const multiplesOfThree = [3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48, 51, 54, 57, 63, 66, 69, 72, 78, 81, 84, 87, 93, 96, 99];
    multiplesOfThree.forEach(multiple => {
      expect(fizzbuzz(multiple)).toBe("Fizz");
    });
  });
  it("should return Buzz on multiples of 5", () => {
    const multiplesOfFive = [5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100];
    multiplesOfFive.forEach(multiple => {
      expect(fizzbuzz(multiple)).toBe("Buzz");
    });
  });
  it("should return FizzBuzz on multiples of 3 and 5", () => {
    const multiplesOfThreeAndFive = [15, 30, 45, 60, 75, 90];
    multiplesOfThreeAndFive.forEach(multiple => {
      expect(fizzbuzz(multiple)).toBe("FizzBuzz");
    });
  });
});
