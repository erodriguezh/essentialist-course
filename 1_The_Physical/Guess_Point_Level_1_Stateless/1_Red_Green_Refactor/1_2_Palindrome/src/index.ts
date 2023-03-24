export function palindromeChecker(input: string) {
  return input === input.split('').reverse().join('');
}