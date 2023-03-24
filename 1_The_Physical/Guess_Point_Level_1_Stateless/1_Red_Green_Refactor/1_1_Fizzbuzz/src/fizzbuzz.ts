export function fizzbuzz(iterationNumber: number): string {
  if (typeof iterationNumber !== 'number' || iterationNumber < 1 || iterationNumber > 100) {
    throw new Error('You must provide a number between 1 and 100');
  }

  if (iterationNumber % 3 === 0) {
    return 'Fizz';
  }
  if (iterationNumber % 5 === 0) {
    return 'Buzz';
  }
  return iterationNumber.toString();
}
