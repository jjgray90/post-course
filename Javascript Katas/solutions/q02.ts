export const findDuplicate = (numberArray) => {
  let result;
  for (let i = 0; i < numberArray.length; i++) {
    numberArray.lastIndexOf(numberArray[i]) !== i
      ? (result = numberArray[i])
      : undefined;
  }
  return result;
};
