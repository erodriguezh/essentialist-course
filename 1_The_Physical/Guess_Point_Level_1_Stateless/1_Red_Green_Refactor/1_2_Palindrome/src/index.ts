export function palindromeChecker(input: string) {
  const lowCaseInput = input.toLowerCase();
  return lowCaseInput === lowCaseInput.split('').reverse().join('');
}