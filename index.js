function arrayOfNumbers(string) {
  return string.split('').reverse().map(Number);
}

function checkLength(arr) {
  return arr.length === 11;
}

function checkEqualDigits(arr) {
  return !arr.every(element => element === arr[0]);
}

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
  if (moduleFistDigit === array[1] &&
    moduleSecondDigit === array[0] &&
    checkLength(array) &&
    checkEqualDigits(array)) {
    return true;
  } else {
    return false;
  }
}

module.exports = cpfValidator;