export const missingNumberInSequence = (numberArray) => {
  let missingNumbersArray = [];
  let sortedArray = numberArray.sort((a, b) => a - b);
  let arrayStart = sortedArray[0];
  let arrayEnd = sortedArray[sortedArray.length - 1];

  for (let i = arrayStart; i < arrayEnd; i++) {
    sortedArray.indexOf(i) === -1 ? missingNumbersArray.push(i) : null;
  }
  return missingNumbersArray;
};
