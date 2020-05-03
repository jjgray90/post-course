export const findLargestAndSmallest = (numberArray) => {
  let sortedArray = numberArray.sort((a, b) => a - b);

  return {
    smallest: sortedArray[0],
    largest: sortedArray[sortedArray.length - 1],
  };
};
