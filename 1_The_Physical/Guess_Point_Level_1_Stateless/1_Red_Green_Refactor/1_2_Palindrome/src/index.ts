export function palindromeChecker(input: string) {
  const preparedInput = input.toLowerCase().replace(/\s/g,'');
  return preparedInput === preparedInput.split('').reverse().join('');
}