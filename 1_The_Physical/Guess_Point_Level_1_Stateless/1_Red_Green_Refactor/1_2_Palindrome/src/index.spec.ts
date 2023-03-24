import { isPalindrome } from "./index";


describe('palindrome checker', () => {
  it("should be a function", () => {
    expect(typeof isPalindrome).toBe("function");
  });
  it("should detect that a word is a palindrome", () => {
    expect(isPalindrome('wow')).toBeTruthy();
  });
  it("should detect that a word is not a palindrome", () => {
    expect(isPalindrome('bill')).toBeFalsy();
  });
  it("should detect that a word with casing is a palindrome", () => {
    expect(isPalindrome('Mom')).toBeTruthy();
  });
  it("should detect that a sentence is a palindrome", () => {
    expect(isPalindrome('Was It A Rat I Saw')).toBeTruthy();
    expect(isPalindrome('Never Odd or Even')).toBeTruthy();
  });
})