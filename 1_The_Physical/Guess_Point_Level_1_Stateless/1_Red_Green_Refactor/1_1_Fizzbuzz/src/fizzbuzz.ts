export function fizzbuzz(num: number): string {
  if (typeof num !== 'number' || num < 1 || num > 100) {
    throw new Error('You must provide a number between 1 and 100');
  }

  const isMultipleOfThree = num % 3 === 0;
  const isMultipleOfFive = num % 5 === 0;

  let result = num.toString();
  if (isMultipleOfThree && isMultipleOfFive) {
    result = 'FizzBuzz';
  } else if (isMultipleOfThree) {
    result = 'Fizz';
  } else if (isMultipleOfFive) {
    result = 'Buzz';
  }

  return result;
}
