export const findMultipleDuplicates = (numberArray) => {
  let sortedArray = numberArray.sort((a, b) => a - b);
  let results = [];
  for (let i = 0; i < sortedArray.length; i++) {
    sortedArray.lastIndexOf(sortedArray[i]) !== i
      ? results.push(sortedArray[i])
      : undefined;
  }
  return results;
};
