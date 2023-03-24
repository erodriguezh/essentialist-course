export function isPalindrome(input: string): boolean {
  const preparedInput = input.toLowerCase().replace(/\s/g,'');
  return preparedInput === preparedInput.split('').reverse().join('');
}