export function fizzbuzz(iterationNumber: number) {
  if (typeof iterationNumber !== 'number' || iterationNumber < 1 || iterationNumber > 100) {
    throw new Error('You must provide a number between 1 and 100');
  }
}
