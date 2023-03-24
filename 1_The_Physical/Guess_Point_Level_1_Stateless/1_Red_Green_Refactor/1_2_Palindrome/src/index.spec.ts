import { palindromeChecker } from "./index";


describe('palindrome checker', () => {
  it("should be a function", () => {
    expect(typeof palindromeChecker).toBe("function");
  });
  it("should detect that a word is a palindrome", () => {
    expect(palindromeChecker('wow')).toBeTruthy();
  });
  it("should detect that a word is not a palindrome", () => {
    expect(palindromeChecker('bill')).toBeFalsy();
  });
})