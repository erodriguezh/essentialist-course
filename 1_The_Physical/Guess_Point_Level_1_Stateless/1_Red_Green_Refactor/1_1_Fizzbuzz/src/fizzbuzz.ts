export function fizzbuzz(iterationNumber: number): string {
  if (typeof iterationNumber !== 'number' || iterationNumber < 1 || iterationNumber > 100) {
    throw new Error('You must provide a number between 1 and 100');
  }

  const isMultipleOfThree = iterationNumber % 3 === 0;
  const isMultipleOfFive = iterationNumber % 5 === 0;

  let result = iterationNumber.toString();
  if (isMultipleOfThree && isMultipleOfFive) {
    result = 'FizzBuzz';
  } else if (isMultipleOfThree) {
    result = 'Fizz';
  } else if (isMultipleOfFive) {
    result = 'Buzz';
  }
  
  return result;
}
