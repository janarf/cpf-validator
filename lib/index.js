function checkLength(arr) {
  return arr.length === 11;
}

function checkEqualDigits(arr) {
  return !arr.every(v => v === arr[0]);
}

function sumAndMultiply(arr, secondDigit = false) {
  let j = 0;
  if (secondDigit === true) {
    j = 1;
  }
  let multiplyArray = arr.map((element, i) => {
    return element * (i + j);
  });
  return multiplyArray.slice(2 - j, 11).reduce((acc, element) => {
    return acc + element;
  });
}

function arrayOfNumbers(string) {
  return string.split('').reverse().map(Number);
}

function cpfValidator(cpfString) {
  let array = arrayOfNumbers(cpfString);
  let moduleFistDigit = sumAndMultiply(array, false) * 10 % 11 % 10;
  let moduleSecondDigit = sumAndMultiply(array, true) * 10 % 11 % 10;
  if (moduleFistDigit === array[1] && moduleSecondDigit === array[0] && checkLength(array) && checkEqualDigits(array)) {
    return true;
  } else {
    return false;
  }
}
module.exports.cpfValidator = cpfValidator;