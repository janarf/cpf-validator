const arrayOfNumbers = (string) => string.split('').reverse().map(Number);
const checkEqualDigits = (arr) => !arr.every(element => element === arr[0]);
const checkLength = (arr) => arr.length === 11;

function sumAndMultiply(arr, secondDigit) {
  let digitsCut = 2;
  if (secondDigit === true) {
    digitsCut = 1;
  }
  return arr.slice(digitsCut, 11).reduce((acc, element, index) => {
    return acc + element * (index + 2);
  }, 0);
}

function cpfValidator(cpfString) {
  const array = arrayOfNumbers(cpfString);
  const moduleFistDigit = sumAndMultiply(array, false) * 10 % 11 % 10;
  const moduleSecondDigit = sumAndMultiply(array, true) * 10 % 11 % 10;

  return (moduleFistDigit === array[1] &&
    moduleSecondDigit === array[0] &&
    checkLength(array) &&
    checkEqualDigits(array));
}

module.exports = cpfValidator;